"use client"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react"
import { DashboardCommand } from "./dashboard-command"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const DashboardNavbar = () => {
    const { state, toggleSidebar, isMobile } = useSidebar();
    const [commandOpen, setCommandOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setCommandOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />

            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative flex px-4 gap-x-2 items-center py-3 border-b bg-background/60 backdrop-blur-lg shadow-sm overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:via-pink-500/20 before:to-blue-500/20 before:animate-[worm_6s_linear_infinite] before:blur-2xl before:rounded-full pointer-events-none"
            >
                <motion.div whileTap={{ scale: 0.92 }} className="pointer-events-auto">
                    <Button className="size-9 rounded-xl shadow-sm" variant="outline" onClick={toggleSidebar}>
                        {(state === "collapsed" || isMobile)
                            ? <PanelLeftIcon className="size-4" />
                            : <PanelLeftCloseIcon className="size-4" />}
                    </Button>
                </motion.div>

                <motion.div whileTap={{ scale: 0.97 }} className="w-[240px] pointer-events-auto">
                    <Button
                        className="h-9 w-full justify-start font-normal text-muted-foreground hover:text-foreground rounded-xl transition-all shadow-sm hover:shadow-md"
                        variant="outline"
                        size="sm"
                        onClick={() => setCommandOpen((open) => !open)}
                    >
                        <SearchIcon className="mr-2" />
                        Search
                        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                            <span className="text-xs">&#8984;</span>k
                        </kbd>
                    </Button>
                </motion.div>
            
                <div className="ml-auto relative pointer-events-auto">
                    <motion.span initial={{opacity:0.7}} animate={{opacity:[0.7,1,0.7], boxShadow:["0 0 10px rgba(255,200,50,0.4)", "0 0 18px rgba(255,150,50,0.7)", "0 0 10px rgba(255,200,50,0.4)"]}} transition={{duration:2,repeat:Infinity}} className="px-3 py-1 text-sm font-bold rounded-lg bg-transparent shadow-none relative overflow-hidden">
                        rzw.dev
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/40 via-orange-400/40 to-red-400/40 blur-2xl animate-[worm_4s_linear_infinite] pointer-events-none"></span>
                    </motion.span>
                </div>
            </motion.nav>
        </>
    );
};
