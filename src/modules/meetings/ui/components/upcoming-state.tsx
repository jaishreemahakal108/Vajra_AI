"use client"

import { Button } from "@/components/ui/button"
import { VideoIcon, BanIcon, Clock, Calendar } from "lucide-react"
import Link from "next/link"

interface Props {
    meetingId: string;
    onCancleMeeting: () => void;
    isCancelling: boolean;
}

export const UpcomingState = ({
    meetingId,
    onCancleMeeting,
    isCancelling,
}: Props) => {
    return (
        <>
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 flex flex-col gap-y-10 items-center justify-center min-h-[500px] relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl animate-float animation-delay-3000"></div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="floating-particle particle-1"></div>
                    <div className="floating-particle particle-2"></div>
                    <div className="floating-particle particle-3"></div>
                    <div className="floating-particle particle-4"></div>
                </div>
                
                {/* Main content */}
                <div className="relative z-10 flex flex-col items-center gap-y-8 text-center max-w-2xl w-full">
                    {/* Icon display */}
                    <div className="relative">
                        {/* Pulsing rings */}
                        <div className="absolute inset-0 -m-8">
                            <div className="absolute inset-0 border-4 border-blue-300/30 rounded-full animate-ping-slow"></div>
                            <div className="absolute inset-0 border-4 border-purple-300/30 rounded-full animate-ping-slow animation-delay-1000"></div>
                        </div>
                        
                        {/* Clock icon container */}
                        <div className="relative bg-white rounded-full p-8 shadow-2xl animate-float-gentle">
                            <div className="relative">
                                <Clock className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
                                <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg animate-pulse">
                                    <Calendar className="w-6 h-6 text-white" strokeWidth={2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 drop-shadow-sm">
                            Meeting Scheduled
                        </h2>
                        <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                            Your meeting is ready to start
                        </p>
                        <p className="text-base text-gray-700 font-medium">
                            Start the meeting when you're ready, or cancel if plans have changed
                        </p>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-6 w-full mt-4">
                        <div className="w-full lg:w-auto bounce-button">
                            <Button
                                variant="secondary"
                                className="w-full lg:w-auto relative overflow-visible bg-white hover:bg-red-50 text-red-600 border-2 border-red-200 hover:border-red-300 font-semibold text-base px-8 py-6 rounded-xl shadow-lg
                                           before:absolute before:inset-0 before:rounded-xl before:bg-red-500 
                                           before:opacity-30 before:blur-lg before:animate-pulse-glow
                                           hover:before:opacity-50 hover:before:blur-xl hover:before:scale-110
                                           hover:scale-105 transition-all duration-300"
                                onClick={onCancleMeeting}
                                disabled={isCancelling}
                            >
                                <BanIcon className="w-5 h-5" />
                                Cancel Meeting
                            </Button>
                        </div>
                        <div className="w-full lg:w-auto bounce-button animation-delay-500">
                            <Button 
                                disabled={isCancelling}
                                asChild 
                                className="w-full lg:w-auto relative overflow-visible bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-base px-10 py-6 rounded-xl shadow-2xl
                                           before:absolute before:inset-0 before:rounded-xl before:bg-green-400 
                                           before:opacity-40 before:blur-xl before:animate-pulse-glow
                                           hover:before:opacity-70 hover:before:blur-2xl hover:before:scale-110
                                           hover:scale-105 transition-all duration-300"
                            >
                                <Link href={`/call/${meetingId}`}>
                                    <VideoIcon className="w-6 h-6" />
                                    Start Meeting
                                </Link>
                            </Button>
                        </div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Ready to Start</span>
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
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 30px) scale(0.95);
                    }
                }
                
                @keyframes float-gentle {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-12px) rotate(3deg);
                    }
                }
                
                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.08);
                    }
                }
                
                @keyframes bounce-subtle {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                @keyframes ping-slow {
                    75%, 100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
                
                @keyframes float-particle {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(20px, -30px);
                    }
                    50% {
                        transform: translate(-15px, -60px);
                    }
                    75% {
                        transform: translate(-30px, -30px);
                    }
                }
                
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                
                .animate-float-gentle {
                    animation: float-gentle 4s ease-in-out infinite;
                }
                
                .animate-pulse-glow {
                    animation: pulse-glow 2.5s ease-in-out infinite;
                }
                
                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                
                .bounce-button {
                    animation: bounce-subtle 2.5s ease-in-out infinite;
                }
                
                .floating-particle {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: linear-gradient(135deg, #60a5fa, #a78bfa);
                    border-radius: 50%;
                    opacity: 0.4;
                    animation: float-particle 12s ease-in-out infinite;
                }
                
                .particle-1 {
                    top: 15%;
                    left: 20%;
                    animation-delay: 0s;
                }
                
                .particle-2 {
                    top: 70%;
                    left: 80%;
                    animation-delay: 3s;
                }
                
                .particle-3 {
                    top: 40%;
                    left: 10%;
                    animation-delay: 6s;
                }
                
                .particle-4 {
                    top: 80%;
                    left: 60%;
                    animation-delay: 9s;
                }
                
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                
                .animation-delay-3000 {
                    animation-delay: 3s;
                }
            `}</style>
        </>
    )
}