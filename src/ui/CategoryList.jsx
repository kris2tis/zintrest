import { useCategoryies } from "services/services";

import LinkPage from "ui/link";
import CategoryButton from "./CategoryButton";

export default async function CategoryList({containerClassName}) {
  const {
    data: { categories },
  } = await useCategoryies();
  
  return (
    <div className={`${containerClassName} flex-row gap-x-3`}>
      {categories.map((category) => (
        <LinkPage key={category._id} href={`/category/${category.slug}`}>
          <CategoryButton title={category.title} slug={category.slug} />
        </LinkPage>
      ))}
    </div>
  );
}
