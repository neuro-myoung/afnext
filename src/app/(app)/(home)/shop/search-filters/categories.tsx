import { CategoryDropdown } from "./category-dropdown";
import { CustomCategory } from "../../types";

interface Props {
  data: CustomCategory[];
}

export const Categories = ({ data }: Props) => {
  return (
    <div className="relative w-full">

      <div className="flex gap-4">
        {data.map((category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
