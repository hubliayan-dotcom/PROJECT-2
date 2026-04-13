import ReactMarkdown from 'react-markdown';
import { Book, Code, Layers, Terminal, BarChart3, Image as ImageIcon, Activity, ShieldCheck } from 'lucide-react';

const guideContent = `
# Implementation Blueprint

## 1. Modular Architecture (Industry Style)
The system is built using a modular Python structure, separating concerns for data loading, model definition, and training.

\`\`\`python
# src/model.py
def build_model():
    base = MobileNetV2(weights='imagenet', include_top=False)
    # ... custom head ...
    return model
\`\`\`

## 2. Virtual Simulation Workflow
This project simulates a **Clinical AI Assistant**:
- **PACS Integration**: Simulates loading images from a hospital database.
- **Triage Logic**: Prioritizes "PNEUMONIA" cases for immediate radiologist review.
- **Explainability**: Uses Grad-CAM to justify AI findings to doctors.

## 3. Placement Strategy
- **GitHub Proof**: Commit phase-by-phase (Phase 1 to 10).
- **Interview Tip**: Explain how you handled "False Negatives" in a medical context.
`;

const phases = [
  { id: 1, title: "Setup", desc: "Environment & Libraries" },
  { id: 2, title: "Dataset", desc: "Kaggle/NIH Acquisition" },
  { id: 3, title: "Preprocessing", desc: "Augmentation & Tensors" },
  { id: 4, title: "Model Build", desc: "MobileNetV2 Architecture" },
  { id: 5, title: "Training", desc: "EarlyStopping & Checkpoints" },
  { id: 6, title: "Evaluation", desc: "Metrics & Confusion Matrix" },
  { id: 7, title: "Prediction", desc: "Inference Pipeline" },
  { id: 8, title: "Visualization", desc: "Grad-CAM Heatmaps" },
  { id: 9, title: "GitHub", desc: "Documentation & Tags" },
  { id: 10, title: "Final Output", desc: "Portfolio Ready" },
];

export default function StudentGuide() {
  return (
    <section id="guide" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Student Implementation Blueprint</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive 10-phase plan to build an industry-grade medical AI portfolio project.
          </p>
        </div>

        {/* Virtual Simulation Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/20">
            <Layers className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Hospital Simulation</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Dataset acts as a hospital PACS system. Every image processed simulates a real patient visit in a clinical environment.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-indigo-600/5 border border-indigo-500/20">
            <ShieldCheck className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Virtual Radiologist</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              The AI model simulates a first-line diagnostic assistant, performing triage and highlighting anomalies for human review.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-emerald-600/5 border border-emerald-500/20">
            <Activity className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Clinical Support</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Output provides structured findings and confidence scores, simulating the decision support tools used in modern radiology.
            </p>
          </div>
        </div>

        {/* 10 Phases Grid */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-500" />
            10-Phase Implementation Plan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {phases.map((phase) => (
              <div key={phase.id} className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-all">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Phase {phase.id}</span>
                <h4 className="text-white font-bold text-sm mt-1">{phase.title}</h4>
                <p className="text-zinc-500 text-[10px] mt-1">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-indigo-500" />
                Proof Artifacts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group cursor-help">
                  <div className="text-center p-2">
                    <Activity className="w-6 h-6 text-zinc-700 mx-auto mb-1 group-hover:text-blue-500 transition-colors" />
                    <span className="text-[8px] text-zinc-600 uppercase font-bold">Accuracy Curve</span>
                  </div>
                </div>
                <div className="aspect-square rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group cursor-help">
                  <div className="text-center p-2">
                    <BarChart3 className="w-6 h-6 text-zinc-700 mx-auto mb-1 group-hover:text-indigo-500 transition-colors" />
                    <span className="text-[8px] text-zinc-600 uppercase font-bold">Confusion Matrix</span>
                  </div>
                </div>
                <div className="aspect-square rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group cursor-help">
                  <div className="text-center p-2">
                    <ImageIcon className="w-6 h-6 text-zinc-700 mx-auto mb-1 group-hover:text-emerald-500 transition-colors" />
                    <span className="text-[8px] text-zinc-600 uppercase font-bold">Grad-CAM</span>
                  </div>
                </div>
                <div className="aspect-square rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group cursor-help">
                  <div className="text-center p-2">
                    <Code className="w-6 h-6 text-zinc-700 mx-auto mb-1 group-hover:text-orange-500 transition-colors" />
                    <span className="text-[8px] text-zinc-600 uppercase font-bold">Model Summary</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h4 className="text-white font-bold text-sm mb-4">How to Run (Reference)</h4>
              <div className="space-y-3 font-mono text-[10px]">
                <div className="p-2 bg-black rounded border border-zinc-800 text-zinc-400">
                  python src/train.py
                </div>
                <div className="p-2 bg-black rounded border border-zinc-800 text-zinc-400">
                  python src/evaluate.py
                </div>
                <div className="p-2 bg-black rounded border border-zinc-800 text-zinc-400">
                  python src/predict.py --img test.jpg
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="prose prose-invert prose-blue max-w-none bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-12">
              <ReactMarkdown>{guideContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
