import Link from "next/link";
import { categories, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 9);

  return (
    <div className="container">
      <section className="hero">
        <div>
          <div className="heroBadge">NEW • Curated picks</div>
          <h1>Shop smarter with shoppy.</h1>
          <p className="muted">
            A clean, static demo storefront with search, filters, sorting, and pagination.
          </p>
          <div className="heroBtns">
            <Link className="btn" href="/category/all">Browse all</Link>
            <Link className="btn btnGhost" href="/category/men">Men</Link>
          </div>
        </div>
        <div className="heroImg" />
      </section>

      <section className="section">
        <div className="sectionTitle">Shop by category</div>
        <div className="grid4">
          {categories.map((c) => (
            <Link key={c.slug} className="cat" href={`/category/${c.slug}`}>
              <div className="catImg" style={{ backgroundImage: `url(${c.image})` }} />
              <div className="catName">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionTitle">Featured products</div>
        <div className="grid3">
          {featured.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </div>
  );
}
