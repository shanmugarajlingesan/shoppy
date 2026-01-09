"use client";

import { useMemo, useState } from "react";
import { getProductById, formatINR } from "@/lib/data";
import { addToCart } from "@/lib/cart";
import { useParams, useRouter } from "next/navigation";

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const p = useMemo(() => getProductById(params.id), [params.id]);
  const [img, setImg] = useState(p?.images?.[0] ?? "");
  const [size, setSize] = useState(p?.sizes?.[0] ?? "");

  if (!p) {
    return (
      <div className="container">
        <div className="pageTitle">Product not found</div>
      </div>
    );
  }

  const onAdd = () => {
    addToCart({
      id: p.id,
      title: p.title,
      brand: p.brand,
      price: p.price,
      image: p.image,
      size,
    });
    router.push("/cart");
  };

  return (
    <div className="container">
      <div className="product">
        <div>
          <div className="productMain" style={{ backgroundImage: `url(${img || p.image})` }} />
          <div className="thumbs">
            {p.images.map((u) => (
              <button
                key={u}
                className={`thumb ${u === img ? "active" : ""}`}
                onClick={() => setImg(u)}
                style={{ backgroundImage: `url(${u})` }}
                aria-label="thumbnail"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="pBrand">{p.brand}</div>
          <div className="pTitle">{p.title}</div>

          <div className="priceRow" style={{ marginTop: 14 }}>
            <div className="price">{formatINR(p.price)}</div>
            <div className="mrp">{formatINR(p.mrp)}</div>
            <span className="pill">{p.discountPct}% OFF</span>
          </div>

          <div className="muted" style={{ marginTop: 10 }}>
            ★ {p.rating.toFixed(1)} · {p.reviews.toLocaleString()} reviews
          </div>

          <div className="divider" />

          <div className="label">Select size</div>
          <div className="sizes">
            {p.sizes.map((s) => (
              <button key={s} className={`size ${s === size ? "active" : ""}`} onClick={() => setSize(s)}>
                {s}
              </button>
            ))}
          </div>

          <button className="btn full" onClick={onAdd}>Add to cart</button>

          <div className="divider" />
          <div className="label">Details</div>
          <p className="muted">{p.description}</p>
        </div>
      </div>
    </div>
  );
}
