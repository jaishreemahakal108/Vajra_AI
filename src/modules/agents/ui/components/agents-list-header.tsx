// "use client";

// import { Button } from "@/components/ui/button"
// import { PlusIcon } from "lucide-react";
// import { NewAgentDialog } from "./new-agent-dialog";
// import { useState } from "react";

// export const AgentsListHeader = () => {
//     const [isDialogOpen, setIsDialogOpen] = useState(false);

//     return (
//         <>
//             <NewAgentDialog
//                 open={isDialogOpen}
//                 onOpenChange={setIsDialogOpen}
//             />
//             <div className="py-4 px-4 md:px-8 flex flex-col gap-4">
//                 <div className="flex items-center justify-between">
//                     <h5 className="font-medium text-xl">My Agents</h5>
//                     <Button onClick={() => setIsDialogOpen(true)}>
//                         <PlusIcon/>
//                         New Agent
//                     </Button>
//                 </div>
//             </div>
//         </>
//     )
// }

"use client";

import { Button } from "@/components/ui/button"
import { Plus, Sparkles } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialog";
import { useState } from "react";

export const AgentsListHeader = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <NewAgentDialog
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
            />
            
            {/* Warm sun light effect background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="py-6 px-4 md:px-8 flex flex-col gap-4">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl shadow-amber-500/10 border border-amber-200/50 p-6 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h5 className="font-bold text-2xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                My Agents
                            </h5>
                        </div>
                        <Button 
                            onClick={() => setIsDialogOpen(true)}
                            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            New Agent
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}