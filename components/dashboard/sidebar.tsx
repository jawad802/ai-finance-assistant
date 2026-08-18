"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ArrowLeftRight, Wallet, PieChart, Settings, Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarNavItems = [
    { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { title: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight },
    { title: "Budgets", href: "/dashboard/budgets", icon: Wallet },
    { title: "Analytics", href: "/dashboard/analytics", icon: PieChart },
    { title: "AI Assistant", href: "/dashboard/ai-assistant", icon: Sparkles },
    { title: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 border-r bg-card px-4 py-6 shrink-0">
                <div className="flex items-center gap-2 px-2 mb-8">
                    <div className="h-8 w-8 rounded-lg bg-[#E35335] flex items-center justify-center text-primary-foreground font-bold">
                        AI
                    </div>
                    <span className="font-semibold text-lg tracking-tight">Finance AI</span>
                </div>

                <nav className="flex flex-col gap-1">
                    {sidebarNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-[#E35335] text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Mobile Header Bar */}
            <div className="md:hidden flex items-center justify-between w-full border-b bg-card px-4 py-3 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                        AI
                    </div>
                    <span className="font-semibold text-base tracking-tight">Finance AI</span>
                </div>
                {/* Mobile Header Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="p-3 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                    aria-label="Open Menu"
                >
                    <Menu className="h-8 w-8 text-foreground" />
                </button>
            </div>

            {/* Full-Screen Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-background flex flex-col p-6 md:hidden">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-[#E35335] flex items-center justify-center text-primary-foreground font-bold">
                                AI
                            </div>
                            <span className="font-semibold text-lg tracking-tight">Finance AI</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="p-3 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                            aria-label="Close Menu"
                        >
                            <X className="h-8 w-8 text-foreground" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {sidebarNavItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                        isActive
                                            ? "bg-[#E35335] text-primary-foreground"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon className="h-8 w-8" />
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </>
    );
}