import { XCircle } from "lucide-react"

export const CancelledState = () => {
    return (
        <>
            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-2xl p-8 lg:p-12 flex flex-col gap-y-8 items-center justify-center min-h-[400px] relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>
                
                {/* Main content */}
                <div className="relative z-10 flex flex-col items-center gap-y-6 text-center max-w-md">
                    {/* Animated icon container */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
                        <div className="relative bg-white rounded-full p-6 shadow-2xl bounce-gentle">
                            <XCircle className="w-20 h-20 text-red-500" strokeWidth={1.5} />
                        </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="space-y-3">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            Meeting Cancelled
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            This meeting has been cancelled and is no longer available
                        </p>
                    </div>
                    
                    {/* Decorative line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                </div>
            </div>
            
            <style jsx global>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }
                
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.1);
                    }
                }
                
                @keyframes bounce-gentle {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                .animate-blob {
                    animation: blob 7s ease-in-out infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
                
                .bounce-gentle {
                    animation: bounce-gentle 3s ease-in-out infinite;
                }
            `}</style>
        </>
    )
}