import { Loader2 } from "lucide-react";

interface Props {
    title: string;
    description: string;
};

export const EmptyState = ({
    title,
    description,
}: Props) => {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <div className="relative">
                {/* Animated background circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-blue-500/10 rounded-full animate-ping" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-purple-500/20 rounded-full animate-pulse" />
                </div>
                
                {/* Main spinner */}
                <div className="relative z-10 bg-white dark:bg-slate-800 rounded-full p-8 shadow-xl">
                    <Loader2 className="w-16 h-16 text-blue-600 dark:text-blue-400 animate-spin" />
                </div>
            </div>
            
            {/* Text content */}
            <div className="flex flex-col gap-y-4 max-w-md mx-auto text-center mt-12 px-4">
                <h6 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                    {title}
                </h6>
                <p className="text-base text-slate-600 dark:text-slate-400">
                    {description}
                </p>
            </div>
        </div>
    );
};