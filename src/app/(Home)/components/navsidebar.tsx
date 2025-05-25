import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: SidebarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="full"
        className="px-6 transition-none bg-[#0e0008]/75 backdrop-blur-md flex flex-col items-center shadow-[0_8px_32px_-8px_rgba(31, 38, 135, 0.37)] border-b border-[#ffffff]/20"
      >
        <SheetHeader className="w-full h-20 flex justify-center border-b">
          <SheetTitle className="flex w-full text-[#f2f2f2] text-lg">
            Menu
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="overflow-y-auto h-full w-full">
          <div className="flex flex-col h-full">
            {items.map((item) => (
                    <Button 
                      key = {item.href} 
                      variant = "navlink" 
                      className = {cn("h-20 relative cursor-pointer text-left rounded-none w-full")}
                      onClick = {() => onOpenChange(false)}
                    >
                    <Link
                        key={item.href}
                        href={item.href}
                        className="w-full text-2xl"
                    >
                        {item.children}
                    </Link>
                    </Button>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
