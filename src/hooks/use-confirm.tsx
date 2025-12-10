import { useState, JSX } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export const useConfirm = (
    title: string,
    description: string,
): [() => JSX.Element, () => Promise<unknown>] => {
    const [promise, setPromise] = useState<{
        resolve: (value: boolean) => void;
    } | null>(null);

    const confirm = () => {
        return new Promise((resolve) => {
            setPromise({ resolve });
        });
    };

    const handleClose = () => {
        setPromise(null);
    };

    const handleConfirm = () => {
        promise?.resolve(true);
        handleClose();
    };

    const handleCancel = () => {
        promise?.resolve(false);
        handleClose();
    };

    const ConfirmationDialog = () => (
        <Dialog open={promise !== null} onOpenChange={handleClose}>
            <DialogContent className="relative overflow-hidden border-slate-700/50 bg-slate-900/95 backdrop-blur-2xl sm:max-w-md fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                {/* Warm glowing orbs */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                
                <DialogHeader className="relative z-10">
                    <DialogTitle className="text-xl font-semibold text-slate-100">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-slate-400">
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <div className="relative z-10 pt-4 w-full flex flex-col-reverse gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
                    <Button
                        onClick={handleCancel}
                        variant="outline"
                        className="w-full lg:w-auto border-slate-600 bg-slate-800/50 hover:bg-slate-700/60 text-slate-200 transition-all duration-300"
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={handleConfirm}
                        className="w-full lg:w-auto bg-amber-500 hover:bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all duration-300"
                    >
                        Confirm
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );

    return [ConfirmationDialog, confirm];
};