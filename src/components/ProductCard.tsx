import Link from "next/link";
import { Product, formatINR } from "@/lib/data";

export default function ProductCard({ p }: { p: Product }) {
  const hasDeal = p.discountPct >= 50;

  return (
    <Link className="card" href={`/product/${p.id}`}>
      <div className="cardImgWrap">
        <div className="cardImg" style={{ backgroundImage: `url(${p.image})` }} aria-label={p.title} />
        <div className="pillRow">
          <span className="pill">{p.discountPct}% OFF</span>
          {hasDeal && <span className="pill pillHot">Hot Deal</span>}
        </div>
      </div>

      <div className="cardBody">
        <div className="cardBrand">{p.brand}</div>
        <div className="cardTitle" title={p.title}>{p.title}</div>

        <div className="priceRow">
          <div className="price">{formatINR(p.price)}</div>
          <div className="mrp">{formatINR(p.mrp)}</div>
        </div>

        <div className="metaRow">
          <div className="rating">★ {p.rating.toFixed(1)}</div>
          <div className="muted">{p.reviews.toLocaleString()} reviews</div>
        </div>
      </div>
    </Link>
  );
}
