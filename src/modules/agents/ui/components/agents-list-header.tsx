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
            
            {/* Warm sun light effect background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="py-6 px-4 md:px-8 flex flex-col gap-6">
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
                
                <div className="flex justify-center">
                    <div className="relative w-full max-w-3xl group">
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
                        
                        <div className="relative bg-gradient-to-br from-white/90 to-amber-50/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-amber-500/10 border border-amber-200/60 p-6 hover:shadow-3xl hover:shadow-amber-500/20 transition-all duration-500">
                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-400/30 rounded-tl-2xl" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-400/30 rounded-br-2xl" />
                            
                            <div className="flex items-center gap-4">
                                {/* Search icon with glow */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md animate-pulse" />
                                    <div className="relative p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full border border-amber-300/50 shadow-inner">
                                        <Search className="w-5 h-5 text-amber-600" />
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <AgentsSearchFilter />
                                </div>
                                
                                {isAnyFilterModified && (
                                    <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={onClearFilters}
                                        className="relative bg-white/90 border-amber-300/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 hover:border-red-400/60 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 transition-all duration-300 gap-2 group/btn overflow-hidden"
                                    >
                                        {/* Animated background on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                        
                                        <XCircle className="relative w-4 h-4 text-amber-600 group-hover/btn:text-red-500 group-hover/btn:rotate-90 transition-all duration-300" />
                                        <span className="relative text-amber-700 group-hover/btn:text-red-600 font-semibold">
                                            Clear Filters
                                        </span>
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