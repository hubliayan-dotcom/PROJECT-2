import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function analyzeMedicalImage(file: File): Promise<AnalysisResult> {
  const base64Data = await fileToBase64(file);
  
  const prompt = `
    You are an expert Radiologist AI Assistant. Analyze this chest X-ray image for signs of Pneumonia.
    Provide a structured analysis including:
    1. Prediction: Either 'NORMAL' or 'PNEUMONIA'.
    2. Confidence: A value between 0 and 1.
    3. Explanation: A brief clinical explanation of the findings.
    4. Findings: A list of specific observations (e.g., opacity, consolidation, pleural effusion).
    5. Recommendations: Next steps for the clinician.

    Be objective and professional. If the image is not a chest X-ray, set prediction to 'INCONCLUSIVE'.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: file.type,
              data: base64Data.split(',')[1],
            },
          },
        ],
      },
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          prediction: { type: Type.STRING, enum: ['NORMAL', 'PNEUMONIA', 'INCONCLUSIVE'] },
          confidence: { type: Type.NUMBER },
          explanation: { type: Type.STRING },
          findings: { type: Type.ARRAY, items: { type: Type.STRING } },
          recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
        },
        required: ['prediction', 'confidence', 'explanation', 'findings', 'recommendations'],
      },
    },
  });

  const result = JSON.parse(response.text || '{}');
  return result as AnalysisResult;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
