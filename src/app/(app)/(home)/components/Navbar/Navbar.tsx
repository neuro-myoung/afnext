'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"
import { MenuIcon, ShoppingCart } from 'lucide-react';
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button";
import { NavSidebar } from "./Navsidebar";

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({
    href,
    children,
    isActive
}) => {
    return (
        <Button 
            asChild
            className={cn(
                "text-lg cursor-pointer",
                isActive && "text-white"
            )}
            variant="navlink" 
            size="full"
        >
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/shop", children: "Shop" },
    { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="w-full h-20 bg-[#0e0008]/75 backdrop-blur-md flex justify-center items-center shadow-[0_8px_32px_-8px_rgba(31, 38, 135, 0.37)] border-b border-[#ffffff]/20 fixed z-10">
            <NavSidebar 
                    items={navbarItems}
                    open={isSidebarOpen}
                    onOpenChange={setIsSidebarOpen}
                />
            <div className="flex justify-between max-w-[1600px] w-full h-full items-center px-2 lg:px-4">
                <Link href="/" className="pl-6 flex text-center text-white">
                    <span className={cn("text-xl font-bold")}>Alix Fuerst Art</span>
                </Link>

                <div className="h-full items-center hidden lg:flex">
                    {navbarItems.map((item) => (
                        <NavbarItem
                            key = {item.href}
                            href = {item.href}
                            isActive={pathname === item.href}
                        >
                            {item.children}
                        </NavbarItem>
                    ))}
                </div>
            </div>
            <div className="hidden lg:flex h-[60%] border-l-[1px] px-2 lg:px-4">
                <Button variant = "navlink" size="full" className={cn("h-full text-md cursor-pointer rounded-full")}>
                    <Link href="/checkout">
                        <ShoppingCart />
                    </Link>
                </Button>
            </div>
            <div className="flex lg:hidden items-center justify-center px-2 lg:px-4">
                <Button 
                    variant = "ghost" 
                    className = "size-12 border-transparent cursor-pointer rounded-full hover:bg-[#e93e68] hover:text-white focus:text-white focus:bg-[#e93e68]"
                    onClick = {() => setIsSidebarOpen(true)}
                >
                    <MenuIcon className="size-6" />
                </Button> 
            </div>
    </nav>
  )
}
