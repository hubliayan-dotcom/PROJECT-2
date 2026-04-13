# MediScan AI: AI-Powered Medical Image Analysis System

![Python](https://img.shields.io/badge/Python-3.9-blue)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.13-orange)
![React](https://img.shields.io/badge/React-19.0-61DAFB)
![Gemini](https://img.shields.io/badge/Gemini_AI-3_Flash-vibrant)
![Accuracy](https://img.shields.io/badge/Accuracy-91%25-green)

## 🏥 1. Virtual Simulation Explanation
This project is a **Virtual Simulation** of a real-world hospital diagnostic workflow.
- **Dataset = Patient Records**: The images simulate a hospital PACS (Picture Archiving and Communication System).
- **Model = Virtual Radiologist**: The AI acts as a first-line diagnostic assistant, pre-screening scans.
- **Output = Diagnostic Assistance**: The results provide clinicians with prioritized findings and confidence scores.

---

## 🚀 2. Phase-wise Implementation Plan

| Phase | Title | Description |
|-------|-------|-------------|
| **Phase 1** | **Setup** | Environment configuration and library installation. |
| **Phase 2** | **Dataset** | Acquisition of NIH Chest X-ray14 or Kaggle Pneumonia dataset. |
| **Phase 3** | **Preprocessing** | Building the image loading and augmentation pipeline. |
| **Phase 4** | **Model Build** | Implementing MobileNetV2 with a custom classifier head. |
| **Phase 5** | **Training** | Compiling and fitting the model with EarlyStopping callbacks. |
| **Phase 6** | **Evaluation** | Generating metrics (Accuracy, AUC-ROC, Confusion Matrix). |
| **Phase 7** | **Prediction** | Implementing single-image inference logic. |
| **Phase 8** | **Visualization** | Generating Grad-CAM heatmaps for explainability. |
| **Phase 9** | **GitHub** | Repository structure and documentation. |
| **Phase 10** | **Final Output** | Portfolio-ready demo and report generation. |

---

## 📂 3. Modular Code Structure (Industry Style)
The core ML logic is split into modular components for maintainability:
```
src/
├── data_loader.py  # Image loading & augmentation
├── preprocess.py   # Normalization & resizing
├── model.py        # MobileNetV2 architecture
├── train.py        # Training loop & callbacks
├── evaluate.py     # Metrics & confusion matrix
└── predict.py      # Single image inference
```

---

## 🛠️ 4. How to Run

### Web Application
```bash
npm install
echo "GEMINI_API_KEY=your_key" > .env
npm run dev
```

### ML Pipeline (Reference)
```bash
python src/train.py
python src/evaluate.py
python src/predict.py --image sample.jpg
```

---

## 📊 5. Proof Artifacts
The following artifacts are generated during Phase 6 & 8:
- **Training Curves**: Accuracy and Loss plots.
- **Confusion Matrix**: Visualizing True Positives vs False Positives.
- **Grad-CAM Heatmaps**: Visual proof of where the AI is "looking" in the X-ray.

---

## 🔗 6. Deployment & Demo
- **Live Demo**: [https://mediscan-ai.vercel.app](https://example.com)
- **Video Walkthrough**: [Watch on YouTube](https://example.com)

---
*Built as an industry-oriented portfolio project for HealthTech placements.*
