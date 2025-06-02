import { CategoryDropdown } from "./category-dropdown";
import { CategoriesGetManyOutput } from "@/modules/categories/types";

interface Props {
    data: CategoriesGetManyOutput
}

export const Categories = ({data}: Props) => {
    return (
        <div className="flex gap-4">
            {data.map((category) => (
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