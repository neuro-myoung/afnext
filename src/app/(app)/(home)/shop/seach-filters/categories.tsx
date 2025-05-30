import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface Props {
    data: any;
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