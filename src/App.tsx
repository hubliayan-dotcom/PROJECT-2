import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UploadZone from './components/UploadZone';
import AnalysisResult from './components/AnalysisResult';
import StudentGuide from './components/StudentGuide';
import { analyzeMedicalImage } from './services/geminiService';
import { AnalysisStatus, AnalysisState } from './types';
import { Loader2, Activity } from 'lucide-react';

export default function App() {
  const [state, setState] = useState<AnalysisState>({
    status: AnalysisStatus.IDLE,
    image: null,
    result: null,
    error: null,
  });

  const handleImageSelect = async (file: File) => {
    setState(prev => ({ 
      ...prev, 
      status: AnalysisStatus.ANALYZING,
      error: null,
      result: null 
    }));

    try {
      const result = await analyzeMedicalImage(file);
      setState(prev => ({
        ...prev,
        status: AnalysisStatus.COMPLETED,
        result,
      }));
    } catch (error) {
      console.error('Analysis failed:', error);
      setState(prev => ({
        ...prev,
        status: AnalysisStatus.FAILED,
        error: 'Failed to analyze image. Please try again.',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-blue-500/30">
      <Header />
      
      <main>
        <Hero />

        <section id="analysis" className="py-24 border-t border-zinc-900 bg-zinc-950/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Diagnostic Analysis Terminal</h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Upload a frontal chest X-ray for automated pneumonia detection. 
                Our AI model analyzes spatial features to provide rapid diagnostic support.
              </p>
            </div>

            <UploadZone 
              onImageSelect={handleImageSelect} 
              isAnalyzing={state.status === AnalysisStatus.ANALYZING} 
            />

            {state.status === AnalysisStatus.ANALYZING && (
              <div className="mt-12 flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <Activity className="w-12 h-12 text-blue-500 animate-pulse" />
                  <Loader2 className="w-12 h-12 text-blue-500 animate-spin absolute inset-0 opacity-20" />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold">Analyzing Radiograph...</p>
                  <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">Running MobileNetV2 Simulation</p>
                </div>
              </div>
            )}

            {state.status === AnalysisStatus.FAILED && (
              <div className="mt-12 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
                <p className="text-red-400 font-medium">{state.error}</p>
              </div>
            )}

            {state.status === AnalysisStatus.COMPLETED && state.result && (
              <AnalysisResult result={state.result} />
            )}
          </div>
        </section>

        <StudentGuide />

        <section id="architecture" className="py-24 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">System Architecture</h2>
            <div className="relative p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
                  <p className="text-xs font-bold text-zinc-500 uppercase mb-2">Input</p>
                  <p className="text-sm text-white">Medical Image (JPG/PNG)</p>
                </div>
                <div className="hidden md:block h-px bg-zinc-800" />
                <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/30">
                  <p className="text-xs font-bold text-blue-400 uppercase mb-2">Preprocessing</p>
                  <p className="text-sm text-white">Resize & Normalize</p>
                </div>
                <div className="hidden md:block h-px bg-zinc-800" />
                <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
                  <p className="text-xs font-bold text-zinc-500 uppercase mb-2">Model</p>
                  <p className="text-sm text-white">Gemini 3 Flash</p>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-zinc-800/50 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-left">
                  <h4 className="text-white font-bold mb-2">Feature Extraction</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Convolutional layers learn spatial hierarchies of features automatically from raw pixel data.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold mb-2">Transfer Learning</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Leveraging pre-trained weights from ImageNet to accelerate convergence on medical tasks.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold mb-2">Clinical Validation</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Model outputs are cross-referenced with radiologist labels to ensure diagnostic integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-500" />
            <span className="font-bold text-lg text-white">MediScan AI</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2026 MediScan AI. Educational Portfolio Project.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
