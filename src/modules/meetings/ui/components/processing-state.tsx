// "use client"

// import { Loader2, Sparkles } from "lucide-react"

// export const ProcessingState = () => {
//     return (
//         <>
//             <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12 flex flex-col gap-y-8 items-center justify-center min-h-[400px] relative overflow-hidden">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                     <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-blob"></div>
//                     <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
//                     <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
//                 </div>
                
//                 {/* Main content */}
//                 <div className="relative z-10 flex flex-col items-center gap-y-6 text-center max-w-md">
//                     {/* Animated icon container with sparkles */}
//                     <div className="relative">
//                         {/* Rotating sparkles */}
//                         <div className="absolute inset-0 animate-spin-slow">
//                             <Sparkles className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 text-purple-400" />
//                             <Sparkles className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 text-blue-400" />
//                             <Sparkles className="absolute top-1/2 -left-4 -translate-y-1/2 w-6 h-6 text-indigo-400" />
//                             <Sparkles className="absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6 text-purple-400" />
//                         </div>
                        
//                         {/* Pulsing glow rings */}
//                         <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
//                         <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
                        
//                         {/* Main icon */}
//                         <div className="relative bg-white rounded-full p-6 shadow-2xl">
//                             <Loader2 className="w-20 h-20 text-blue-600 animate-spin" strokeWidth={2} />
//                         </div>
//                     </div>
                    
//                     {/* Text content */}
//                     <div className="space-y-3">
//                         <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//                             Processing Meeting
//                         </h2>
//                         <p className="text-lg text-gray-600 leading-relaxed">
//                             We're analyzing your meeting and generating insights...
//                         </p>
//                     </div>
                    
//                     {/* Animated progress dots */}
//                     <div className="flex gap-2">
//                         <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-0"></div>
//                         <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
//                         <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce animation-delay-400"></div>
//                     </div>
                    
//                     {/* Decorative line */}
//                     <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full animate-shimmer"></div>
//                 </div>
//             </div>
            
//             <style jsx global>{`
//                 @keyframes blob {
//                     0%, 100% {
//                         transform: translate(0, 0) scale(1);
//                     }
//                     33% {
//                         transform: translate(30px, -50px) scale(1.1);
//                     }
//                     66% {
//                         transform: translate(-20px, 20px) scale(0.9);
//                     }
//                 }
                
//                 @keyframes pulse-slow {
//                     0%, 100% {
//                         opacity: 0.3;
//                         transform: scale(1);
//                     }
//                     50% {
//                         opacity: 0.5;
//                         transform: scale(1.1);
//                     }
//                 }
                
//                 @keyframes spin-slow {
//                     from {
//                         transform: rotate(0deg);
//                     }
//                     to {
//                         transform: rotate(360deg);
//                     }
//                 }
                
//                 @keyframes shimmer {
//                     0%, 100% {
//                         opacity: 0.5;
//                     }
//                     50% {
//                         opacity: 1;
//                     }
//                 }
                
//                 .animate-blob {
//                     animation: blob 7s ease-in-out infinite;
//                 }
                
//                 .animate-spin-slow {
//                     animation: spin-slow 8s linear infinite;
//                 }
                
//                 .animation-delay-0 {
//                     animation-delay: 0ms;
//                 }
                
//                 .animation-delay-200 {
//                     animation-delay: 200ms;
//                 }
                
//                 .animation-delay-400 {
//                     animation-delay: 400ms;
//                 }
                
//                 .animation-delay-1000 {
//                     animation-delay: 1s;
//                 }
                
//                 .animation-delay-2000 {
//                     animation-delay: 2s;
//                 }
                
//                 .animation-delay-4000 {
//                     animation-delay: 4s;
//                 }
                
//                 .animate-pulse-slow {
//                     animation: pulse-slow 3s ease-in-out infinite;
//                 }
                
//                 .animate-shimmer {
//                     animation: shimmer 2s ease-in-out infinite;
//                 }
//             `}</style>
//         </>
//     )
// }
"use client"

import { Sparkles, Zap, Brain } from "lucide-react"

export const ProcessingState = () => {
    return (
        <>
            <div className="bg-gradient-to-br from-violet-50 via-fuchsia-50 to-purple-50 rounded-3xl p-8 lg:p-12 flex flex-col gap-y-8 items-center justify-center min-h-[500px] relative overflow-hidden">
                {/* Animated mesh gradient background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-fuchsia-400 to-pink-600 rounded-full blur-3xl animate-float animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-3xl animate-float animation-delay-4000"></div>
                </div>
                
                {/* Orbiting particles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                    <div className="particle particle-5"></div>
                    <div className="particle particle-6"></div>
                </div>
                
                {/* Main content */}
                <div className="relative z-10 flex flex-col items-center gap-y-8 text-center max-w-lg">
                    {/* Animated icon container with multiple layers */}
                    <div className="relative">
                        {/* Outer rotating ring */}
                        <div className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <div className="absolute inset-0 border-4 border-dashed border-violet-300 rounded-full animate-spin-slow"></div>
                        </div>
                        
                        {/* Middle rotating ring - opposite direction */}
                        <div className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <div className="absolute inset-0 border-4 border-dotted border-fuchsia-300 rounded-full animate-spin-reverse"></div>
                        </div>
                        
                        {/* Orbiting icons */}
                        <div className="absolute inset-0 w-36 h-36 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-spin-slow">
                            <Sparkles className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 text-yellow-400 animate-pulse" />
                            <Zap className="absolute top-1/2 -right-2 -translate-y-1/2 w-8 h-8 text-violet-400 animate-pulse animation-delay-300" />
                            <Brain className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 text-fuchsia-400 animate-pulse animation-delay-600" />
                        </div>
                        
                        {/* Pulsing glow layers */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse-glow animation-delay-1000"></div>
                        
                        {/* Center orb */}
                        <div className="relative bg-white rounded-full p-8 shadow-2xl animate-float-slow">
                            <div className="relative">
                                {/* Animated gradient spinner */}
                                <div className="w-24 h-24 relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 rounded-full animate-spin-fast opacity-80"></div>
                                    <div className="absolute inset-2 bg-white rounded-full"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sparkles className="w-12 h-12 text-violet-600 animate-pulse" strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Text content with gradient */}
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 drop-shadow-lg">
                            AI Processing
                        </h2>
                        <p className="text-xl text-gray-800 leading-relaxed font-semibold drop-shadow-sm">
                            Analyzing your meeting with advanced AI
                        </p>
                        <p className="text-base text-gray-700 font-medium">
                            Generating insights, summaries, and action items...
                        </p>
                    </div>
                    
                    {/* Animated progress bar */}
                    <div className="w-full max-w-xs">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 rounded-full animate-progress"></div>
                        </div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="flex gap-3">
                        <div className="status-dot"></div>
                        <div className="status-dot animation-delay-300"></div>
                        <div className="status-dot animation-delay-600"></div>
                        <div className="status-dot animation-delay-900"></div>
                    </div>
                </div>
            </div>
            
            <style jsx global>{`
                * {
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(40px, -60px) scale(1.15);
                    }
                    66% {
                        transform: translate(-30px, 30px) scale(0.95);
                    }
                }
                
                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                    }
                    50% {
                        transform: translateY(-15px) scale(1.05);
                    }
                }
                
                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.4;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.2);
                    }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                @keyframes spin-fast {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes shimmer {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes orbit {
                    0% {
                        transform: rotate(0deg) translateX(200px) rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg) translateX(200px) rotate(-360deg);
                    }
                }
                
                @keyframes status-pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.5);
                        opacity: 0.5;
                    }
                }
                
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
                
                .animate-spin-reverse {
                    animation: spin-reverse 10s linear infinite;
                }
                
                .animate-spin-fast {
                    animation: spin-fast 2s linear infinite;
                }
                
                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
                
                .animate-shimmer {
                    background-size: 200% auto;
                    animation: shimmer 3s linear infinite;
                }
                
                .bg-size-200 {
                    background-size: 200% auto;
                }
                
                .animate-progress {
                    animation: progress 2s ease-in-out infinite;
                }
                
                .particle {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: linear-gradient(45deg, #a78bfa, #ec4899);
                    border-radius: 50%;
                    opacity: 0.6;
                    animation: orbit 15s linear infinite;
                }
                
                .particle-1 {
                    top: 20%;
                    left: 30%;
                    animation-delay: 0s;
                }
                
                .particle-2 {
                    top: 60%;
                    left: 70%;
                    animation-delay: 2.5s;
                }
                
                .particle-3 {
                    top: 40%;
                    left: 20%;
                    animation-delay: 5s;
                }
                
                .particle-4 {
                    top: 80%;
                    left: 50%;
                    animation-delay: 7.5s;
                }
                
                .particle-5 {
                    top: 10%;
                    left: 80%;
                    animation-delay: 10s;
                }
                
                .particle-6 {
                    top: 50%;
                    left: 60%;
                    animation-delay: 12.5s;
                }
                
                .status-dot {
                    width: 12px;
                    height: 12px;
                    background: linear-gradient(135deg, #8b5cf6, #ec4899);
                    border-radius: 50%;
                    animation: status-pulse 1.5s ease-in-out infinite;
                }
                
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                
                .animation-delay-600 {
                    animation-delay: 0.6s;
                }
                
                .animation-delay-900 {
                    animation-delay: 0.9s;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </>
    )
}