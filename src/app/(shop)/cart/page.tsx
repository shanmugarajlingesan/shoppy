"use client";

import { useEffect, useMemo, useState } from "react";
import { CartItem, cartTotals, readCart, updateQty, clearCart } from "@/lib/cart";
import { formatINR } from "@/lib/data";
import QuantityPill from "@/components/QuantityPill";
import Link from "next/link";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(readCart());
  }, []);

  const totals = useMemo(() => cartTotals(items), [items]);

  const onQty = (id: string, size: string, qty: number) => {
    const updated = updateQty(id, size, qty);
    setItems(updated);
  };

  const onClear = () => {
    clearCart();
    setItems([]);
  };

  return (
    <div className="container">
      <div className="pageTitle">Cart</div>

      {items.length === 0 ? (
        <div className="empty">
          <div className="muted">Your cart is empty.</div>
          <Link className="btn" href="/category/all">Continue shopping</Link>
        </div>
      ) : (
        <div className="cart">
          <div>
            {items.map((it) => (
              <div key={`${it.id}_${it.size}`} className="cartItem">
                <div className="cartImg" style={{ backgroundImage: `url(${it.image})` }} />
                <div>
                  <div className="cartBrand">{it.brand}</div>
                  <div className="cartTitle">{it.title}</div>
                  <div className="muted">Size: {it.size}</div>

                  <div className="cartRow">
                    <div className="price">{formatINR(it.price)}</div>
                    <QuantityPill value={it.qty} onChange={(v) => onQty(it.id, it.size, v)} />
                  </div>
                </div>
              </div>
            ))}
            <button className="btn btnGhost" onClick={onClear}>Clear cart</button>
          </div>

          <div>
            <div className="summary">
              <div className="summaryTitle">Price details</div>
              <div className="sumRow">
                <div className="muted">Subtotal</div>
                <div>{formatINR(totals.subtotal)}</div>
              </div>
              <div className="sumRow">
                <div className="muted">Shipping</div>
                <div>{formatINR(totals.shipping)}</div>
              </div>
              <div className="divider" />
              <div className="sumRow strong">
                <div>Total</div>
                <div>{formatINR(totals.total)}</div>
              </div>

              <button className="btn full" onClick={() => alert("Demo only: checkout is disabled.")}>
                Checkout
              </button>
              <div className="muted small">Free shipping above ₹1,999 (demo rule)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
