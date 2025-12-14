import { LogIn, Mic, MicOff, Video, VideoOff, Sparkles, User } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { generateAvatarUri } from "@/lib/avatar";
import "@stream-io/video-react-sdk";
import {
  StreamVideoParticipant,
  useCallStateHooks,
  VideoPreview,
} from "@stream-io/video-react-sdk";

interface Props {
    onJoin: () => void;
}

const DisabledVideoPreview = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Animated rings */}
            <div className="relative">
                <div className="absolute inset-0 animate-ping-slow">
                    <div className="w-48 h-48 rounded-full border-4 border-purple-500/30" />
                </div>
                <div className="absolute inset-0 animate-ping-slower">
                    <div className="w-48 h-48 rounded-full border-4 border-blue-500/20" />
                </div>
                
                <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl animate-pulse-slow">
                    <div className="w-44 h-44 rounded-full bg-slate-950 flex items-center justify-center">
                        <Video className="w-20 h-20 text-purple-400" />
                    </div>
                </div>
            </div>
            
            <div className="text-center space-y-4 max-w-md px-6">
                <h3 className="text-2xl font-bold text-white">Grant Permissions</h3>
                <p className="text-slate-300 leading-relaxed">
                    We need access to your camera and microphone to start the video call
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-purple-400">
                    <Sparkles className="w-4 h-4" />
                    <span>Click "Allow" when prompted</span>
                </div>
            </div>
        </div>
    )
}

export const CallLobby = ({ onJoin }: Props) => {
    const { data } = authClient.useSession();
    const { useCameraState, useMicrophoneState } = useCallStateHooks();
    const { hasBrowserPermission: hasMicPermission, microphone, isMute: isMicMuted } = useMicrophoneState();
    const { hasBrowserPermission: hasCameraPermission, camera, isMute: isCameraMuted } = useCameraState();
    const hasBrowserMediaPermission = hasCameraPermission && hasMicPermission;

    const avatarUrl = data?.user.image ?? generateAvatarUri({
        seed: data?.user.name ?? "",
        variant: "initials"
    });

    const toggleMic = async () => {
        if (microphone) {
            await microphone.toggle();
        }
    };

    const toggleCamera = async () => {
        if (camera) {
            await camera.toggle();
        }
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-white/80">Ready to connect</span>
                    </div>
                    
                    <h1 className="text-7xl font-black mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                            Join the Call
                        </span>
                    </h1>
                    <p className="text-xl text-white/60 font-light">
                        Check your setup before entering
                    </p>
                </div>

                {/* Two Cards Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                    {/* User Profile Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                        
                        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl h-full">
                            <div className="relative p-6 flex flex-col items-center justify-end h-full min-h-[380px]">
                                {/* Full card background image */}
                                <div className="absolute inset-0">
                                    <img 
                                        src={avatarUrl}
                                        alt={data?.user.name ?? "User"}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Dark gradient overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                                    {/* Animated gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-fuchsia-600/20 to-purple-700/30 animate-gradient" />
                                </div>

                                {/* Profile Label */}
                                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 z-10">
                                    <User className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm text-white/90 font-medium">Your Profile</span>
                                </div>

                                {/* Status indicator - top right */}
                                <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg z-10">
                                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                                </div>
                                
                                {/* User info at bottom */}
                                <div className="relative z-10 text-center space-y-2 pb-2">
                                    <h3 className="text-3xl font-bold text-white drop-shadow-2xl">
                                        {data?.user.name ?? "Guest"}
                                    </h3>
                                    <p className="text-white/80 text-sm font-medium backdrop-blur-sm">Ready to join</p>
                                </div>

                                {/* Corner decorations */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg z-10" />
                                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg z-10" />
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg z-10" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg z-10" />
                            </div>
                        </div>
                    </div>

                    {/* Camera Preview Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                        
                        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl h-full">
                            <div className="p-5 h-full min-h-[380px] flex flex-col">
                                {/* Camera Label */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                                        <Video className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm text-white/80 font-medium">Camera Preview</span>
                                    </div>
                                    
                                    {/* Status badges */}
                                    <div className="flex gap-2">
                                        {isMicMuted && (
                                            <div className="px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/50 flex items-center gap-2 text-red-400 text-xs font-medium">
                                                <MicOff className="w-3 h-3" />
                                                <span>Muted</span>
                                            </div>
                                        )}
                                        {isCameraMuted && (
                                            <div className="px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/50 flex items-center gap-2 text-red-400 text-xs font-medium">
                                                <VideoOff className="w-3 h-3" />
                                                <span>Off</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Video Preview */}
                                <div className="relative flex-1 rounded-2xl overflow-hidden bg-slate-950">
                                    {/* Scan line effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan pointer-events-none z-20" />
                                    
                                    {hasBrowserMediaPermission && !isCameraMuted ? (
                                        <div className="w-full h-full relative">
                                            <VideoPreview />
                                        </div>
                                    ) : isCameraMuted && hasBrowserMediaPermission ? (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
                                            <div className="text-center space-y-4">
                                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500/50 flex items-center justify-center mx-auto">
                                                    <VideoOff className="w-12 h-12 text-red-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-semibold text-lg">Camera is Off</p>
                                                    <p className="text-white/60 text-sm mt-1">Enable camera to see preview</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <DisabledVideoPreview />
                                    )}

                                    {/* Corner decorations */}
                                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-500/50 rounded-tl-lg" />
                                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-500/50 rounded-tr-lg" />
                                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-500/50 rounded-bl-lg" />
                                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-500/50 rounded-br-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-40 blur-xl" />
                    
                    <div className="relative flex items-center justify-between p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
                        <div className="flex gap-3">
                            <button
                                onClick={toggleMic}
                                className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    isMicMuted 
                                    ? 'bg-red-500/20 border-2 border-red-500 text-red-400 hover:bg-red-500/30' 
                                    : 'bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40'
                                } hover:scale-110 active:scale-95`}
                            >
                                {isMicMuted ? (
                                    <>
                                        <MicOff className="w-5 h-5 relative z-10" />
                                        <div className="absolute inset-0 bg-red-500/20 blur-xl animate-pulse" />
                                    </>
                                ) : (
                                    <Mic className="w-5 h-5" />
                                )}
                            </button>
                            
                            <button
                                onClick={toggleCamera}
                                className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    isCameraMuted 
                                    ? 'bg-red-500/20 border-2 border-red-500 text-red-400 hover:bg-red-500/30' 
                                    : 'bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40'
                                } hover:scale-110 active:scale-95`}
                            >
                                {isCameraMuted ? (
                                    <>
                                        <VideoOff className="w-5 h-5 relative z-10" />
                                        <div className="absolute inset-0 bg-red-500/20 blur-xl animate-pulse" />
                                    </>
                                ) : (
                                    <Video className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <Button 
                                asChild 
                                variant="ghost"
                                size="lg"
                                className="px-8 text-white/70 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <Link href="/meetings">
                                    Cancel
                                </Link>
                            </Button>

                            <button
                                onClick={onJoin}
                                className="relative px-8 py-3 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                                
                                <div className="relative z-10 flex items-center gap-2">
                                    <LogIn className="w-5 h-5" />
                                    <span>Join Now</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer tip */}
                <div className="text-center mt-8">
                    <p className="text-white/40 text-sm flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Pro tip: You can change settings during the call
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-size: 200% 200%;
                        background-position: 0% 50%;
                    }
                    50% {
                        background-size: 200% 200%;
                        background-position: 100% 50%;
                    }
                }
                
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(20px) translateX(-10px); }
                }

                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }

                @keyframes ping-slow {
                    75%, 100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }

                @keyframes ping-slower {
                    75%, 100% {
                        transform: scale(1.8);
                        opacity: 0;
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                :global(.animate-gradient-x) {
                    animation: gradient-x 3s ease infinite;
                    background-size: 200% 200%;
                }

                :global(.animate-gradient) {
                    animation: gradient 8s ease infinite;
                    background-size: 400% 400%;
                }

                :global(.animate-blob) {
                    animation: blob 7s infinite;
                }

                :global(.animation-delay-2000) {
                    animation-delay: 2s;
                }

                :global(.animation-delay-4000) {
                    animation-delay: 4s;
                }

                :global(.animate-float) {
                    animation: float 6s ease-in-out infinite;
                }

                :global(.animate-float-reverse) {
                    animation: float-reverse 8s ease-in-out infinite;
                }

                :global(.animate-scan) {
                    animation: scan 4s linear infinite;
                }

                :global(.animate-ping-slow) {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                :global(.animate-ping-slower) {
                    animation: ping-slower 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                    animation-delay: 0.5s;
                }

                :global(.animate-pulse-slow) {
                    animation: pulse-slow 3s ease-in-out infinite;
                }

                /* Video preview styles */
                :global(.str-video__video-preview) {
                    width: 100% !important;
                    height: 100% !important;
                    border-radius: 0 !important;
                }
                
                :global(.str-video__video-preview video) {
                    object-fit: cover !important;
                    width: 100% !important;
                    height: 100% !important;
                }
            `}</style>
        </div>
    )
}