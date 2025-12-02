import { Button } from "@/components/ui/button";

interface Props {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const DataPagination = ({
    page,
    totalPages,
    onPageChange,
}: Props) => {
    return(
        <div className="flex items-center justify-between">
            <div className="flex-1 text-sm text-muted-foreground flex items-center gap-2">
                <span>Page</span>
                <span className="inline-flex items-center justify-center min-w-[2rem] h-8 px-2 rounded-md bg-amber-500 text-white font-semibold shadow-lg animate-pulse" style={{
                    animation: 'glow 2s ease-in-out infinite',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 30px rgba(251, 191, 36, 0.4)'
                }}>
                    {page}
                </span>
                <span>of {totalPages || 1}</span>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    disabled={page === 1}
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(Math.max(1, page-1))}
                    className="transition-all duration-300 hover:scale-105 hover:shadow-md disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                    Previous
                </Button>
                <Button
                    disabled={page === totalPages || totalPages === 0}
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(Math.min(totalPages, page+1))}
                    className="transition-all duration-300 hover:scale-105 hover:shadow-md disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                    Next
                </Button>
            </div>
            <style>{`
                @keyframes glow {
                    0% {
                        box-shadow: 0 0 20px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4);
                    }
                    25% {
                        box-shadow: 0 0 25px rgba(251, 191, 36, 0.9), 0 0 35px rgba(251, 191, 36, 0.7), 0 0 45px rgba(251, 191, 36, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 30px rgba(251, 191, 36, 1), 0 0 40px rgba(251, 191, 36, 0.8), 0 0 50px rgba(251, 191, 36, 0.6);
                    }
                    75% {
                        box-shadow: 0 0 25px rgba(251, 191, 36, 0.9), 0 0 35px rgba(251, 191, 36, 0.7), 0 0 45px rgba(251, 191, 36, 0.5);
                    }
                    100% {
                        box-shadow: 0 0 20px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4);
                    }
                }
            `}</style>
        </div>
    )
}
