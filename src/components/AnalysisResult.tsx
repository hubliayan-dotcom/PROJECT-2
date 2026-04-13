import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Info, Download, Share2 } from 'lucide-react';
import { AnalysisResult as AnalysisResultType } from '../types';
import { cn } from '../lib/utils';

interface AnalysisResultProps {
  result: AnalysisResultType;
}

export default function AnalysisResult({ result }: AnalysisResultProps) {
  const isPneumonia = result.prediction === 'PNEUMONIA';
  const confidence = Math.round(result.confidence * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto mt-12 space-y-6"
    >
      <div className={cn(
        "p-8 rounded-3xl border flex flex-col md:flex-row items-center gap-8",
        isPneumonia 
          ? "bg-red-500/5 border-red-500/20" 
          : "bg-emerald-500/5 border-emerald-500/20"
      )}>
        <div className="relative w-32 h-32 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-zinc-800"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="50"
              cy="50"
            />
            <motion.circle
              initial={{ strokeDashoffset: 264 }}
              animate={{ strokeDashoffset: 264 - (264 * result.confidence) }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={isPneumonia ? "text-red-500" : "text-emerald-500"}
              strokeWidth="8"
              strokeDasharray="264"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">{confidence}%</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500">Confidence</span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            {isPneumonia ? (
              <AlertTriangle className="w-6 h-6 text-red-500" />
            ) : (
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            )}
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {result.prediction}
            </h2>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            {result.explanation}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-blue-400" />
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Key Findings</h3>
          </div>
          <ul className="space-y-3">
            {result.findings.map((finding, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                {finding}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Recommendations</h3>
          </div>
          <ul className="space-y-3">
            {result.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-all">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-all">
            <Share2 className="w-4 h-4" />
            Share with Clinician
          </button>
        </div>
        <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
          Report ID: MS-{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </span>
      </div>
    </motion.div>
  );
}
