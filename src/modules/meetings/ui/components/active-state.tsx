import { Button } from "@/components/ui/button"
import { VideoIcon} from "lucide-react"
import Link from "next/link"

interface Props {
    meetingId: string;
}

export const ActiveState = ({
    meetingId,
}: Props) => {
    return (
        <>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 lg:p-8 flex flex-col gap-y-10 items-center justify-center">
                <div className="w-full max-w-2xl relative group">
                    {/* Video container with modern styling */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                        {/* Gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-10"></div>
                        
                        {/* Animated border glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                        
                        <video 
                            className="w-full h-auto relative z-0"
                            autoPlay 
                            loop 
                            muted
                            playsInline
                        >
                            <source src="/call.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        {/* Live indicator badge */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-red-500/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span className="text-white font-semibold text-sm">LIVE</span>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-4 w-full">
                    <div className="w-full lg:w-auto bounce-button">
                        <Button 
                            asChild 
                            className="w-full lg:w-auto relative overflow-visible bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-8 py-6 rounded-xl shadow-xl
                                       before:absolute before:inset-0 before:rounded-xl before:bg-green-400 
                                       before:opacity-40 before:blur-lg before:animate-pulse-glow
                                       hover:before:opacity-70 hover:before:blur-xl hover:before:scale-110
                                       hover:scale-105 transition-all duration-300"
                        >
                            <Link href={`/call/${meetingId}`}>
                                <VideoIcon className="w-5 h-5" />
                                Join Meeting
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            
            <style jsx global>{`
                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.4;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.6;
                        transform: scale(1.05);
                    }
                }
                
                @keyframes bounce-subtle {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }
                
                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }
                
                .bounce-button {
                    animation: bounce-subtle 2s ease-in-out infinite;
                }
            `}</style>
        </>
    )
}