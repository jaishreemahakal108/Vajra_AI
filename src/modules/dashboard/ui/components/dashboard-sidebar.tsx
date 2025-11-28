//dashboard-sidebar.tsx
"use client"

import { Separator } from "@/components/ui/separator"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { BotIcon, StarIcon, VideoIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DashboardUserButton } from "./dashboard-user-button"

const firstSection = [
    {
        icon: VideoIcon,
        label: "Meetings",
        href: "/meetings"
    },
    {
        icon: BotIcon,
        label: "Agents",
        href: "/agents",
    }
]

const secondSection = [
    {
        icon: StarIcon,
        label: "Upgrade",
        href: "/upgrade"
    }
]

export const DashboardSidebar = () => {
    const pathname = usePathname();

    return (
        <Sidebar className="border-r border-amber-900/10 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
            <SidebarHeader className="text-sidebar-accent-foreground pb-0 px-0 pt-0">
                <Link href="/" className="flex items-center justify-center p-6 relative group">
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-400/20 to-rose-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Logo container with full width */}
                    <div className="relative w-full aspect-square max-w-[200px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-amber-900/10 transition-all duration-500 group-hover:ring-amber-500/30 group-hover:shadow-amber-500/25 group-hover:scale-[1.02]">
                        {/* Animated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <video
                            src="/logo1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover relative z-10"
                        />
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                </Link>
            </SidebarHeader>
            
            <div className="px-6 py-4">
                <Separator className="bg-gradient-to-r from-transparent via-amber-900/20 to-transparent h-[2px]"/>
            </div>
            
            <SidebarContent className="px-4">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2">
                            {firstSection.map((item, index) => (
                                <SidebarMenuItem key={item.href} style={{ animationDelay: `${index * 100}ms` }} className="animate-in fade-in slide-in-from-left-5 duration-500">
                                    <SidebarMenuButton 
                                        asChild 
                                        className={cn(
                                            "h-12 rounded-2xl transition-all duration-300 ease-out group",
                                            "hover:bg-gradient-to-r hover:from-amber-100 hover:via-orange-100/50 hover:to-transparent",
                                            "hover:border-amber-300/40 hover:shadow-lg hover:shadow-amber-500/10 hover:translate-x-2",
                                            "border border-transparent backdrop-blur-sm relative overflow-hidden",
                                            pathname === item.href && "bg-gradient-to-r from-amber-100 via-orange-100/60 to-transparent border-amber-300/50 shadow-xl shadow-amber-500/20 translate-x-2 scale-[1.02]"
                                        )} 
                                        isActive={pathname === item.href}
                                    >
                                        <Link href={item.href} className="flex items-center gap-4 relative z-10">
                                            {/* Animated background on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 via-amber-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            <div className={cn(
                                                "p-2 rounded-xl transition-all duration-300",
                                                pathname === item.href 
                                                    ? "bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30" 
                                                    : "bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 group-hover:shadow-md"
                                            )}>
                                                <item.icon className={cn(
                                                    "size-5 transition-all duration-300",
                                                    pathname === item.href ? "text-white" : "text-amber-800 group-hover:text-amber-900"
                                                )}/>
                                            </div>
                                            <span className={cn(
                                                "text-sm font-bold tracking-tight transition-colors duration-300",
                                                pathname === item.href ? "text-amber-900" : "text-gray-700 group-hover:text-amber-900"
                                            )}>
                                                {item.label}
                                            </span>
                                            
                                            {/* Active indicator */}
                                            {pathname === item.href && (
                                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                            )}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="px-2 py-4">
                    <Separator className="bg-gradient-to-r from-transparent via-amber-900/20 to-transparent h-[2px]"/>
                </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2">
                            {secondSection.map((item, index) => (
                                <SidebarMenuItem key={item.href} style={{ animationDelay: `${(firstSection.length + index) * 100}ms` }} className="animate-in fade-in slide-in-from-left-5 duration-500">
                                    <SidebarMenuButton 
                                        asChild 
                                        className={cn(
                                            "h-12 rounded-2xl transition-all duration-300 ease-out group relative overflow-hidden",
                                            "hover:bg-gradient-to-r hover:from-amber-200 hover:via-yellow-100 hover:to-transparent",
                                            "hover:border-amber-400/50 hover:shadow-xl hover:shadow-yellow-500/20 hover:translate-x-2",
                                            "border border-transparent backdrop-blur-sm",
                                            pathname === item.href && "bg-gradient-to-r from-amber-200 via-yellow-100/70 to-transparent border-amber-400/60 shadow-2xl shadow-yellow-500/30 translate-x-2 scale-[1.02]"
                                        )} 
                                        isActive={pathname === item.href}
                                    >
                                        <Link href={item.href} className="flex items-center gap-4 relative z-10">
                                            {/* Animated sparkle effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/0 via-yellow-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                                            
                                            <div className={cn(
                                                "p-2 rounded-xl transition-all duration-300 relative",
                                                pathname === item.href 
                                                    ? "bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/40" 
                                                    : "bg-gradient-to-br from-yellow-100 to-amber-100 group-hover:from-yellow-200 group-hover:to-amber-200 group-hover:shadow-md"
                                            )}>
                                                <item.icon className={cn(
                                                    "size-5 transition-all duration-300",
                                                    pathname === item.href ? "text-white animate-pulse" : "text-amber-600 group-hover:text-amber-700"
                                                )}/>
                                            </div>
                                            <span className={cn(
                                                "text-sm font-bold tracking-tight transition-colors duration-300",
                                                pathname === item.href ? "text-amber-900" : "text-gray-700 group-hover:text-amber-900"
                                            )}>
                                                {item.label}
                                            </span>
                                            <span className="ml-auto text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-2 border-amber-300 shadow-lg shadow-amber-500/30 animate-pulse">
                                                PRO
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4">
                <DashboardUserButton />
            </SidebarFooter>
        </Sidebar>
    )
}