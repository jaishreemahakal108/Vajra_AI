//dashboard-user-button.tsx
import { authClient } from "@/lib/auth-client"
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { 
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export const DashboardUserButton = () => {
    const router = useRouter();
    const isMobile = useIsMobile();
    const { data, isPending } = authClient.useSession();

    const onLogout = () => {
        authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in");
                }
            }
        })
    }

    if(isPending || !data?.user){
        return null;
    }

    if(isMobile){
        return (
            <Drawer>
                <DrawerTrigger className="group rounded-2xl border-2 border-amber-200/50 bg-gradient-to-br from-white/80 via-amber-50/50 to-orange-50/50 backdrop-blur-md p-3.5 w-full flex items-center justify-between hover:border-amber-300/70 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400/30 relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                        <div className="flex items-center gap-3 flex-1 min-w-0 relative z-10">
                            {data.user.image ? (
                                <Avatar className="size-11 rounded-xl overflow-hidden ring-4 ring-amber-400/30 shadow-lg transition-all duration-300 group-hover:ring-amber-500/50 group-hover:scale-105">
                                    <AvatarImage src={data.user.image} className="object-cover"/>
                                </Avatar>
                            ) : (
                                <GeneratedAvatar
                                    seed={data.user.name}
                                    variant="initials"
                                    className="size-11 ring-4 ring-amber-400/30 shadow-lg transition-all duration-300 group-hover:ring-amber-500/50 group-hover:scale-105 rounded-xl"
                                />
                            )}
                            <div className="flex flex-col gap-1 text-left overflow-hidden flex-1 min-w-0">
                                <p className="text-sm font-bold truncate w-full text-gray-800 group-hover:text-amber-900 transition-colors duration-300">
                                    {data.user.name}
                                </p>
                                <p className="text-xs truncate w-full text-gray-600 group-hover:text-amber-700 transition-colors duration-300">
                                    {data.user.email}
                                </p>
                            </div>
                        </div>
                        <ChevronDownIcon className="size-5 shrink-0 text-amber-600 transition-all duration-300 group-hover:text-amber-700 group-hover:translate-y-0.5 relative z-10"/>

                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>
                            {data.user.name}
                        </DrawerTitle>
                        <DrawerDescription>
                            {data.user.email}
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button 
                            variant="outline"
                            onClick={() => {}}
                        >
                            <CreditCardIcon className="size-4 text-black"/>
                            Billing
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={onLogout}
                        >
                            <LogOutIcon className="size-4 text-black"/>
                            Logout
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        )
    }
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="group rounded-2xl border-2 border-amber-200/50 bg-gradient-to-br from-white/80 via-amber-50/50 to-orange-50/50 backdrop-blur-md p-3.5 w-full flex items-center justify-between hover:border-amber-300/70 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400/30 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-3 flex-1 min-w-0 relative z-10">
                    {data.user.image ? (
                        <Avatar className="size-11 rounded-xl overflow-hidden ring-4 ring-amber-400/30 shadow-lg transition-all duration-300 group-hover:ring-amber-500/50 group-hover:scale-105">
                            <AvatarImage src={data.user.image} className="object-cover"/>
                        </Avatar>
                    ) : (
                        <GeneratedAvatar
                            seed={data.user.name}
                            variant="initials"
                            className="size-11 ring-4 ring-amber-400/30 shadow-lg transition-all duration-300 group-hover:ring-amber-500/50 group-hover:scale-105 rounded-xl"
                        />
                    )}
                    <div className="flex flex-col gap-1 text-left overflow-hidden flex-1 min-w-0">
                        <p className="text-sm font-bold truncate w-full text-gray-800 group-hover:text-amber-900 transition-colors duration-300">
                            {data.user.name}
                        </p>
                        <p className="text-xs truncate w-full text-gray-600 group-hover:text-amber-700 transition-colors duration-300">
                            {data.user.email}
                        </p>
                    </div>
                </div>
                <ChevronDownIcon className="size-5 shrink-0 text-amber-600 transition-all duration-300 group-hover:text-amber-700 group-hover:translate-y-0.5 relative z-10"/>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" side="right" className="w-72 rounded-2xl border-2 border-amber-200/50 shadow-2xl bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 backdrop-blur-xl">
                <DropdownMenuLabel className="py-3.5 px-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-base truncate text-gray-800">{data.user.name}</span>
                        <span className="text-sm font-medium text-gray-600 truncate">{data.user.email}</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gradient-to-r from-transparent via-amber-300/40 to-transparent h-[2px]"/>
                <DropdownMenuItem className="cursor-pointer flex items-center justify-between py-3 px-4 mx-2 my-1 rounded-xl hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 transition-all duration-300 focus:bg-gradient-to-r focus:from-amber-100 focus:to-orange-100">
                    <span className="font-semibold text-gray-700">Billing</span>
                    <CreditCardIcon className="size-5 text-amber-600"/>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout} className="cursor-pointer flex items-center justify-between py-3 px-4 mx-2 my-1 rounded-xl hover:bg-gradient-to-r hover:from-red-100 hover:to-rose-100 hover:text-red-700 transition-all duration-300 focus:bg-gradient-to-r focus:from-red-100 focus:to-rose-100 focus:text-red-700 group">
                    <span className="font-semibold">Logout</span>
                    <LogOutIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1"/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}