import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";
import { CustomCategory } from "../../types";

interface Props {
    data: CustomCategory;
};

export const Categories = ({data}: Props) => {
    return (
        <div className="flex gap-4">
            {data.map((category: Category) => (
                <div key={category.id}>
                    <CategoryDropdown
                        category={category}
                        isActive={false}
                        isNavigationHovered={false}
                        />
                </div>
            ))}
        </div>
    )
}