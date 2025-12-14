import { useState, useEffect } from 'react';
import { Home, CheckCircle2, Sparkles } from 'lucide-react';

export default function CallEnded() {
  const [showContent, setShowContent] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 100);
    const timer2 = setTimeout(() => setShowStats(true), 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl px-6">
        {/* Success icon with animated ring */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-6 shadow-2xl">
              <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={2.5} />
            </div>
            {/* Expanding rings */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-ping" 
                 style={{ animationDuration: '2s' }} />
            <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 animate-ping" 
                 style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Main heading */}
        <div className={`text-center mb-6 transition-all duration-700 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse" 
              style={{ animationDuration: '3s' }}>
            Call Ended
          </h1>
          <p className="text-slate-300 text-xl font-light">
            Thanks for connecting with us today
          </p>
        </div>



        {/* Summary notice */}
        <div className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8 transition-all duration-700 delay-500 ${showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
              <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">AI Summary Generating</h3>
              <p className="text-slate-400 text-sm">
                We're creating a detailed summary of your call with key highlights, action items, and transcripts. 
                This will be ready in a few minutes.
              </p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" 
                 style={{ width: '60%', animation: 'pulse 2s ease-in-out infinite' }} />
          </div>
        </div>

        {/* Action button */}
        <div className={`flex justify-center transition-all duration-700 delay-700 ${showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={() => window.location.href = '/meetings'}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 group"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Back to Meetings
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>
    </div>
  );
}