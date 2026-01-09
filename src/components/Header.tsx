"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readCart } from "@/lib/cart";
import SearchBar from "./SearchBar";

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = readCart();
      setCount(cart.reduce((s, it) => s + it.qty, 0));
    };
    update();
    window.addEventListener("storage", update);
    const t = setInterval(update, 700);
    return () => {
      window.removeEventListener("storage", update);
      clearInterval(t);
    };
  }, []);

  return (
    <header className="header">
      <div className="headerInner">
        <Link href="/" className="brand">
          shoppy<span className="brandDot">.</span>
        </Link>

        <nav className="nav">
          <Link href="/category/men">Men</Link>
          <Link href="/category/women">Women</Link>
          <Link href="/category/kids">Kids</Link>
          <Link href="/category/beauty">Beauty</Link>
          <Link href="/category/all">All</Link>
        </nav>

        <div className="searchWrap">
          <SearchBar />
        </div>

        <div className="actions">
          <Link className="cartBtn" href="/cart" aria-label="cart">
            <span className="cartIcon" aria-hidden="true">🛒</span>
            <span className="cartText">Cart</span>
            <span className="badge">{count}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
