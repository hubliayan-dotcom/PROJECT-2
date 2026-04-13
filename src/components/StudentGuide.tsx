import ReactMarkdown from 'react-markdown';
import { Book, Code, Layers, Terminal } from 'lucide-react';

const guideContent = `
# Implementation Blueprint

## 1. Project Architecture
The system uses a **MobileNetV2** backbone for feature extraction, followed by a custom classification head. This "Transfer Learning" approach allows high accuracy even with limited medical datasets.

\`\`\`python
# model.py snippet
base = MobileNetV2(input_shape=(224, 224, 3), include_top=False, weights='imagenet')
base.trainable = False
model = models.Sequential([
    base,
    layers.GlobalAveragePooling2D(),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(1, activation='sigmoid')
])
\`\`\`

## 2. Full Workflow
1. **Data Collection**: NIH Chest X-ray14 or Kaggle Pneumonia dataset.
2. **Preprocessing**: Resize to 224x224, normalization [0, 1], and augmentation.
3. **Training**: Binary cross-entropy loss with Adam optimizer.
4. **Evaluation**: AUC-ROC, F1-score, and Confusion Matrix.
5. **Visualization**: Grad-CAM heatmaps to explain AI decisions.

## 3. Industry Relevance
- **Hospitals**: Faster triage for emergency cases.
- **Diagnostic Labs**: Automated cell classification.
- **Radiology Centers**: Reducing workload by ~40%.
`;

export default function StudentGuide() {
  return (
    <section id="guide" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block">Education</span>
              <h2 className="text-4xl font-bold text-white mb-6">Complete Student Implementation Guide</h2>
              <p className="text-zinc-400 mb-8">
                This project serves as a comprehensive blueprint for building industry-grade medical AI applications. 
                Follow the 10-phase plan to build your portfolio.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Book, title: "Project Architecture", desc: "System block diagrams and data flow." },
                  { icon: Code, title: "Full Source Code", desc: "Modular Python/TensorFlow implementation." },
                  { icon: Layers, title: "Virtual Simulation", desc: "How to simulate clinical environments." },
                  { icon: Terminal, title: "Placement Prep", desc: "GitHub strategy and interview tips." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold text-sm">{item.title}</h4>
                      <p className="text-zinc-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="prose prose-invert prose-blue max-w-none bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-12">
              <ReactMarkdown>{guideContent}</ReactMarkdown>
              
              <div className="mt-12 p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <h4 className="text-blue-400 font-bold mb-2">Pro Tip for GitHub</h4>
                <p className="text-sm text-zinc-400">
                  Recruiters look for "Grad-CAM" visualizations. It proves you understand how the model makes decisions, 
                  which is critical for high-stakes medical AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
