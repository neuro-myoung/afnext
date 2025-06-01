import { SearchInput } from "./search-input";
import { Categories } from "./categories";
import { CustomCategory } from "../../types";

interface Props {
  data: CustomCategory;
};

export const SearchFilters = ({data}:Props) => {
    return (
        <div className="px-4 lg:px-8 py-8 border-b w-full flex flex-col gap-4" >
            <SearchInput />
            <div className="hidden lg:block">
            <Categories data={data} />
            </div>
        </div>
    )
}