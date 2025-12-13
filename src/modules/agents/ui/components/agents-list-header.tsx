"use client";

import { Button } from "@/components/ui/button"
import { Plus, Sparkles, XCircle, Search } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialog";
import { useState } from "react";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { AgentsSearchFilter } from "./agents-search-filter";
import { DEFAULT_PAGE } from "@/constants";

export const AgentsListHeader = () => {
    const [filters, setFilters] = useAgentsFilters();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const isAnyFilterModified = !!filters.search;

    const onClearFilters = () => {
        setFilters({
            search: "",
            page: DEFAULT_PAGE,
        });
    };

    return (
        <>
            <NewAgentDialog
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
            />
            
            {/* Enhanced Background glow with moving particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                {/* Ambient glow orbs */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-orange-400/25 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
                <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-yellow-400/25 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
                <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-amber-300/20 rounded-full blur-2xl animate-pulse [animation-delay:0.5s]" />
                
                {/* Floating sparkles */}
                <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping [animation-duration:3s]" />
                <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping [animation-duration:4s] [animation-delay:1s]" />
                <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping [animation-duration:5s] [animation-delay:2s]" />
            </div>

            <div className="py-6 px-4 md:px-8 flex flex-col gap-6">
                {/* Header Card with animated gradient border */}
                <div className="relative group">
                    {/* Animated gradient border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
                    
                    <div className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-xl shadow-amber-500/10 border border-amber-200/50 p-6 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* Icon with rotating ring */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg blur-md opacity-50 animate-pulse"></div>
                                    <div className="relative p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-lg shadow-amber-500/30">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                
                                {/* Title with shimmer effect */}
                                <h5 className="relative font-bold text-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-pulse">
                                    My Agents
                                </h5>
                            </div>

                            {/* Button with hover lift and glow */}
                            <Button
                                onClick={() => setIsDialogOpen(true)}
                                className="relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 gap-2 overflow-hidden group"
                            >
                                {/* Button shine effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <Plus className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">New Agent</span>
                            </Button>
                        </div>
                    </div>
                </div>
                
                {/* Search filter - centered and compact with 3D effect */}
                <div className="flex justify-center perspective-1000">
                    <div className="relative group w-full max-w-2xl">
                        {/* 3D shadow layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-xl blur-sm translate-y-1 group-hover:translate-y-2 transition-transform duration-300"></div>
                        
                        <div className="relative bg-white/60 backdrop-blur-md rounded-xl shadow-lg shadow-amber-500/5 border border-amber-200/40 p-3 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-3">
                                {/* Search icon with glow */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md animate-pulse" />
                                    <div className="relative p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full border border-amber-300/50 shadow-inner hover:scale-110 transition-transform duration-300">
                                        <Search className="w-5 h-5 text-amber-600" />
                                    </div>
                                </div>
                                
                                {/* Search input with animated border */}
                                <div className="flex-1 relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-300 to-orange-300 rounded-lg opacity-0 hover:opacity-100 blur transition duration-300"></div>
                                    <div className="relative">
                                        <AgentsSearchFilter />
                                    </div>
                                </div>
                                
                                {/* Clear button with red glow and animations */}
                                {isAnyFilterModified && (
                                    <Button 
                                        variant="outline" 
                                        onClick={onClearFilters}
                                        className="relative border-red-300/50 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-200 gap-2 hover:-translate-y-0.5 hover:scale-105 group/btn overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-100/0 via-red-100/50 to-red-100/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                                        <XCircle className="w-4 h-4 relative z-10 group-hover/btn:rotate-90 transition-transform duration-300" />
                                        <span className="relative z-10">Clear</span>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}