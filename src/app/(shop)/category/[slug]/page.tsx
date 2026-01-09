import { categories, getProductsByCategory } from "@/lib/data";
import ProductBrowser from "@/components/ProductBrowser";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const cat = categories.find((c) => c.slug === slug);
  const items = getProductsByCategory(slug);

  return (
    <div className="container">
      <div className="pageTitle">
        {slug === "all" ? "All products" : (cat ? cat.name : "Category")}
      </div>
      <ProductBrowser slug={slug} products={items} />
    </div>
  );
}
