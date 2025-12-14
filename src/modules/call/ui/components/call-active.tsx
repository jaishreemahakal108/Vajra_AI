import Link from "next/link";
import { 
    SpeakerLayout,
    useCallStateHooks,
    CallControls,
} from "@stream-io/video-react-sdk";
import { 
    Users, 
    Maximize, 
    Clock,
    Wifi,
    LogOut
} from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
    onLeave: () => void;
    meetingName: string;
}

export const CallActive = ({ onLeave, meetingName }: Props) => {
    const { useParticipantCount } = useCallStateHooks();
    const participantCount = useParticipantCount();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [callDuration, setCallDuration] = useState(0);

    // Update current time every minute
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    // Update call duration every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCallDuration(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDuration = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hrs > 0) {
            return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    };

    return (
        <div className="relative flex flex-col h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            {/* Top Header Bar */}
            <div className="relative z-10 px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left Section - Meeting Info */}
                    <div className="flex items-center gap-4">
                        <Link 
                            href="/meetings" 
                            className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-200 hover:scale-105"
                        >
                            <LogOut className="w-5 h-5" />
                        </Link>
                        
                        <div className="flex flex-col">
                            <h1 className="text-lg font-semibold tracking-tight">
                                {meetingName}
                            </h1>
                            <div className="flex items-center gap-3 text-sm text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{formatDuration(callDuration)}</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-slate-600" />
                                <div className="flex items-center gap-1.5">
                                    <Users className="w-3.5 h-3.5" />
                                    <span>{participantCount} participant{participantCount !== 1 ? 's' : ''}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Actions & Status */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                            <div className="relative">
                                <Wifi className="w-4 h-4 text-green-400" />
                                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            </div>
                            <span className="text-xs font-medium text-slate-300">Connected</span>
                        </div>
                        
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span className="text-xs font-medium text-slate-300">{formatTime(currentTime)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Video Area */}
            <div className="relative flex-1 px-6 pb-32">
                <div className="h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950/50 backdrop-blur-sm shadow-2xl">
                    <SpeakerLayout />
                </div>
            </div>

            {/* Bottom Control Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="px-6 pb-6">
                    <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                        <div className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                {/* Left Side - Secondary Actions */}
                                <div className="flex items-center gap-2">
                                    <button className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:scale-105">
                                        <Users className="w-5 h-5" />
                                        <span className="text-sm font-medium">People</span>
                                        <div className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 text-xs font-semibold">
                                            {participantCount}
                                        </div>
                                    </button>

                                    <button className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:scale-105">
                                        <Maximize className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Center - Main Call Controls */}
                                <div className="flex items-center gap-3">
                                    <CallControls onLeave={onLeave} />
                                </div>

                                {/* Right Side - More Options */}
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:scale-105">
                                        <span className="text-2xl">•••</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles for Stream Components */}
            <style jsx global>{`
                .str-video__speaker-layout {
                    width: 100%;
                    height: 100%;
                }
                
                .str-video__participant-view {
                    border-radius: 16px;
                }

                .str-video__call-controls {
                    background: transparent !important;
                    padding: 0 !important;
                    gap: 12px !important;
                }

                .str-video__call-controls button {
                    width: 56px !important;
                    height: 56px !important;
                    border-radius: 50% !important;
                    background: rgba(30, 41, 59, 0.9) !important;
                    border: 2px solid rgba(148, 163, 184, 0.2) !important;
                    backdrop-filter: blur(12px) !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    position: relative !important;
                    overflow: hidden !important;
                }

                .str-video__call-controls button::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    padding: 2px;
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .str-video__call-controls button:hover {
                    background: rgba(51, 65, 85, 0.95) !important;
                    border-color: rgba(148, 163, 184, 0.4) !important;
                    transform: translateY(-2px) scale(1.05);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4) !important;
                }

                .str-video__call-controls button:hover::before {
                    opacity: 1;
                }

                .str-video__call-controls button:active {
                    transform: translateY(0) scale(0.98);
                }

                .str-video__call-controls button svg {
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
                }

                /* Active/Muted state styling */
                .str-video__call-controls button[data-active="true"],
                .str-video__call-controls button.str-video__call-controls__button--active {
                    background: linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(220, 38, 38, 0.9)) !important;
                    border-color: rgba(239, 68, 68, 0.4) !important;
                }

                .str-video__call-controls button[data-active="true"]:hover,
                .str-video__call-controls button.str-video__call-controls__button--active:hover {
                    background: linear-gradient(135deg, rgba(220, 38, 38, 0.95), rgba(185, 28, 28, 0.95)) !important;
                    box-shadow: 0 8px 24px rgba(239, 68, 68, 0.5) !important;
                }

                /* Leave call button special styling */
                .str-video__call-controls button[data-testid="leave-call-button"],
                .str-video__call-controls button.str-video__call-controls__leave-call-button {
                    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
                    border: 2px solid rgba(239, 68, 68, 0.5) !important;
                    box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3) !important;
                }

                .str-video__call-controls button[data-testid="leave-call-button"]:hover,
                .str-video__call-controls button.str-video__call-controls__leave-call-button:hover {
                    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%) !important;
                    box-shadow: 0 8px 28px rgba(239, 68, 68, 0.5) !important;
                    transform: translateY(-3px) scale(1.08);
                }

                .str-video__call-controls button[data-testid="leave-call-button"]::before,
                .str-video__call-controls button.str-video__call-controls__leave-call-button::before {
                    background: linear-gradient(135deg, rgba(254, 202, 202, 0.6), rgba(252, 165, 165, 0.6));
                }
            `}</style>
        </div>
    );
};