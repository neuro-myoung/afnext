import { SearchInput } from "./search-input";
import { Categories } from "./categories";

interface Props {
  data: any;
};

export const SearchFilters = ({data}:Props) => {
    return (
        <div className="px-4 lg:px-8 py-8 border-b w-full flex flex-col gap-4" >
            <SearchInput />
            <Categories data={data} />
        </div>
    )
}