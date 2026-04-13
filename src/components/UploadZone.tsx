import React, { useCallback, useState } from 'react';
import { Upload, X, FileImage, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface UploadZoneProps {
  onImageSelect: (file: File) => void;
  isAnalyzing: boolean;
}

export default function UploadZone({ onImageSelect, isAnalyzing }: UploadZoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file));
        onImageSelect(file);
      }
    }
  }, [onImageSelect]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreview(URL.createObjectURL(file));
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const clearImage = () => {
    setPreview(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!preview ? (
        <label
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={cn(
            "relative flex flex-col items-center justify-center w-full h-80 border-2 border-dashed rounded-3xl transition-all cursor-pointer overflow-hidden",
            dragActive 
              ? "border-blue-500 bg-blue-500/5" 
              : "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700"
          )}
        >
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
            disabled={isAnalyzing}
          />
          
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="p-4 bg-zinc-800 rounded-2xl mb-4">
              <Upload className="w-8 h-8 text-zinc-400" />
            </div>
            <p className="mb-2 text-lg font-bold text-white">
              Drop medical image here
            </p>
            <p className="text-sm text-zinc-500">
              Supports JPG, PNG, DICOM (simulated)
            </p>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 p-3 bg-zinc-950/80 rounded-xl border border-zinc-800">
            <AlertCircle className="w-4 h-4 text-blue-400" />
            <p className="text-xs text-zinc-400">
              Images are processed locally for privacy. No data is stored.
            </p>
          </div>
        </label>
      ) : (
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/30">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-80 object-contain bg-black"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={clearImage}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/50 rounded-lg backdrop-blur-md border border-white/10">
            <FileImage className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-white">X-Ray Scan Loaded</span>
          </div>
        </div>
      )}
    </div>
  );
}
