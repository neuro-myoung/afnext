
'use client'
import { SearchInput } from "./search-input";
import { Categories } from "./categories";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const SearchFilters = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());
    
    return (
        <div className="px-4 lg:px-8 py-8 border-b w-full flex flex-col gap-4" >
            <SearchInput />
            <div className="hidden lg:block">
            <Categories data={ data } />
            </div>
        </div>
    )
}