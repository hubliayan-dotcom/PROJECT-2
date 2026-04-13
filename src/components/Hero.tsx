import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Industry-Oriented Portfolio Project
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            AI-Powered Medical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Image Analysis System
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg mb-10">
            A step-by-step practical implementation of deep learning for automated X-ray examination. 
            Designed for clinical triage and diagnostic support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all">
              Launch Analyzer
            </button>
            <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all">
              View Implementation Guide
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {[
            { icon: Shield, title: "Clinical Accuracy", desc: "91% accuracy in pneumonia detection using MobileNetV2." },
            { icon: Zap, title: "Real-time Processing", desc: "Analysis results delivered in milliseconds for rapid triage." },
            { icon: Clock, title: "24/7 Availability", desc: "Consistent performance without human fatigue or bias." },
            { icon: Users, title: "Radiologist Support", desc: "Reduces workload by ~40% through automated pre-screening." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
