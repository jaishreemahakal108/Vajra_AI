import { ChevronRight, Pencil, MoreVertical, Trash } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
    agentId: string;
    agentName: string;
    onEdit: () => void;
    onRemove: () => void;
}

export const AgentIdViewHeader = ({
    agentId,
    agentName,
    onEdit,
    onRemove
}: Props) => {
    return (
        <div className="relative flex items-center justify-between py-6 px-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 overflow-hidden">
            {/* Animated warm glow effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-radial from-amber-500/20 via-orange-500/10 to-transparent blur-3xl animate-pulse" 
                     style={{ animationDuration: '4s' }} />
                <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-radial from-rose-500/20 via-pink-500/10 to-transparent blur-3xl animate-pulse" 
                     style={{ animationDuration: '6s', animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-yellow-500/15 via-amber-500/5 to-transparent blur-2xl animate-pulse" 
                     style={{ animationDuration: '5s', animationDelay: '2s' }} />
            </div>

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <Breadcrumb className="relative z-10">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink 
                            asChild 
                            className="font-semibold text-xl text-slate-200 hover:text-amber-400 transition-all duration-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)] hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]"
                        >
                            <a href="/agents">
                                My Agents
                            </a>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-amber-500/60 text-xl font-medium [&_svg]:size-5">
                        <ChevronRight />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink 
                            asChild 
                            className="font-semibold text-xl text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]"
                        >
                            <a href={`/agents/${agentId}`}>
                                {agentName}
                            </a>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button 
                        variant="ghost" 
                        aria-label="Agent actions"
                        className="relative z-10 bg-slate-800/50 hover:bg-slate-700/60 border border-slate-600/50 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] group"
                    >
                        <MoreVertical className="text-slate-300 group-hover:text-amber-400 transition-colors duration-300" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                    align="end"
                    className="bg-slate-900/95 backdrop-blur-xl border-slate-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                >
                    <DropdownMenuItem 
                        onClick={onEdit}
                        className="hover:bg-slate-800/60 focus:bg-slate-800/60 cursor-pointer transition-all duration-200 hover:shadow-[inset_0_0_12px_rgba(251,191,36,0.1)]"
                    >
                        <Pencil className="size-4 mr-2 text-amber-400" />
                        <span className="text-slate-200">Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={onRemove}
                        className="hover:bg-red-950/40 focus:bg-red-950/40 text-red-400 cursor-pointer transition-all duration-200 hover:shadow-[inset_0_0_12px_rgba(239,68,68,0.1)]"
                    >
                        <Trash className="size-4 mr-2" />
                        <span>Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};