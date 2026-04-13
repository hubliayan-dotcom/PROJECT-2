import { Activity, Github, BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">MediScan <span className="text-blue-500">AI</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#analysis" className="hover:text-white transition-colors">Analysis</a>
          <a href="#guide" className="hover:text-white transition-colors">Student Guide</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-900/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
