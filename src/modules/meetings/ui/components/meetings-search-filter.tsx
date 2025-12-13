import { Input } from "@/components/ui/input";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";
import { Search } from "lucide-react";

export const MeetingsSearchFilter = () => {
    const [filters, setFilters] = useMeetingsFilters();

    return (
        <div className="relative">
            <div className="
                flex items-center gap-3 
                bg-white rounded-xl px-4 py-2
                shadow-[0_4px_20px_rgba(255,200,100,0.25)]
                border border-amber-200
                hover:shadow-[0_6px_26px_rgba(255,180,80,0.35)]
                transition-all duration-300
            ">
                <div className="
                    w-9 h-9 flex items-center justify-center 
                    rounded-full bg-amber-50 
                    shadow-sm border border-amber-200
                ">
                    <Search className="w-4 h-4 text-amber-600" />
                </div>

                <Input
                    placeholder="Filter by name"
                    className="h-9 bg-transparent border-none shadow-none focus-visible:ring-0"
                    value={filters.search}
                    onChange={(e) => setFilters({ search: e.target.value })}
                />
            </div>
        </div>
    );
}
