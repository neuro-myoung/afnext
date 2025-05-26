"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import { useState, useRef } from "react";
import { useDropdown } from "./useDropdown";
import { SubcategoryMenu } from "./subcategory-menu";

interface Props {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getDropdownPosition } = useDropdown(dropdownRef);

  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  const dropdownPosition = getDropdownPosition();

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Button
          variant="ghost"
          className={cn(
            "border-1 rounded-full h-11 px-4 bg-transparent hover:bg-white/50 focus:bg-white/50 cursor-pointer text-[#c2c2c2] hover:text-white focus:text-white",
            isActive && !isNavigationHovered && "bg-white/50 text-white"
          )}
        >
          {category.name}
        </Button>
        {category.subcategories && category.subcategories.length > 0 && (
          <div
            className={cn(
              "opacity-0 absolute border-b-[6px] -bottom-2 w-0 h-0 border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent border-b-[#c2c2c2] left-1/2 -translate-x-1/2",
              isOpen && "opacity-100"
            )}
          />
        )}
      </div>
      <SubcategoryMenu
        category={category}
        isOpen={isOpen}
        position={dropdownPosition}
      />
    </div>
  );
};
