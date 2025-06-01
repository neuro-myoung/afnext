import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props {
    disabled?: boolean;
};

export const SearchInput = ({disabled}:Props) => {
    return (
        <div className="flex items-center gap-2 w-full">
            <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#c2c2c2]" />
                <Input className = "pl-8 rounded-full" placeholder="Search Products" disabled={disabled}/>
            </div>
        </div>
    )
}