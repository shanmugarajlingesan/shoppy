"use client";

import { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { Product, categories } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";

type SortKey = "relevance" | "price_asc" | "price_desc" | "rating_desc" | "discount_desc";
const PER_PAGE = 9;

function setParam(params: URLSearchParams, key: string, value: string | null) {
  if (value === null || value === "") params.delete(key);
  else params.set(key, value);
}

export default function ProductBrowser({ slug, products }: { slug: string; products: Product[] }) {
  const router = useRouter();
  const sp = useSearchParams();

  const [query, setQuery] = useState(sp.get("query") ?? "");
  const [sort, setSort] = useState<SortKey>(((sp.get("sort") as SortKey) ?? "relevance"));
  const [minPrice, setMinPrice] = useState(sp.get("min") ?? "");
  const [maxPrice, setMaxPrice] = useState(sp.get("max") ?? "");
  const [brandFilter, setBrandFilter] = useState<string[]>(
    sp.get("brands")?.split(",").filter(Boolean) ?? []
  );
  const [category, setCategory] = useState<string>(slug === "all" ? (sp.get("cat") ?? "all") : slug);
  const [page, setPage] = useState<number>(Number(sp.get("page") ?? "1") || 1);

  useEffect(() => {
    setQuery(sp.get("query") ?? "");
    setSort(((sp.get("sort") as SortKey) ?? "relevance"));
    setMinPrice(sp.get("min") ?? "");
    setMaxPrice(sp.get("max") ?? "");
    setBrandFilter(sp.get("brands")?.split(",").filter(Boolean) ?? []);
    if (slug === "all") setCategory(sp.get("cat") ?? "all");
    else setCategory(slug);
    setPage(Number(sp.get("page") ?? "1") || 1);
  }, [sp, slug]);

  const brands = useMemo(() => {
    const set = new Set(products.map((p) => p.brand));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [products]);

  const filteredSorted = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.slice();

    if (slug === "all" && category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (q) {
      list = list.filter((p) => {
        const hay = `${p.title} ${p.brand} ${p.category}`.toLowerCase();
        return hay.includes(q);
      });
    }

    const min = minPrice.trim() ? Number(minPrice) : NaN;
    const max = maxPrice.trim() ? Number(maxPrice) : NaN;
    if (!Number.isNaN(min)) list = list.filter((p) => p.price >= min);
    if (!Number.isNaN(max)) list = list.filter((p) => p.price <= max);

    if (brandFilter.length) {
      const set = new Set(brandFilter);
      list = list.filter((p) => set.has(p.brand));
    }

    switch (sort) {
      case "price_asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating_desc":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "discount_desc":
        list.sort((a, b) => b.discountPct - a.discountPct);
        break;
      default:
        break;
    }

    return list;
  }, [products, query, sort, minPrice, maxPrice, brandFilter, slug, category]);

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / PER_PAGE));
  const safePage = Math.max(1, Math.min(totalPages, page));

  const paged = useMemo(() => {
    const start = (safePage - 1) * PER_PAGE;
    return filteredSorted.slice(start, start + PER_PAGE);
  }, [filteredSorted, safePage]);

  const pushParams = (override: Partial<Record<string, string | null>>) => {
    const params = new URLSearchParams(sp.toString());
    for (const [k, v] of Object.entries(override)) setParam(params, k, v ?? null);
    const qs = params.toString();
    router.push(qs ? `?${qs}` : "?");
  };

  const applyToUrl = () => {
    pushParams({
      query: query.trim() || null,
      sort: sort !== "relevance" ? sort : null,
      min: minPrice.trim() || null,
      max: maxPrice.trim() || null,
      brands: brandFilter.length ? brandFilter.join(",") : null,
      cat: slug === "all" && category !== "all" ? category : null,
      page: "1", // reset when applying filters
    });
  };

  const clearAll = () => {
    setQuery("");
    setSort("relevance");
    setMinPrice("");
    setMaxPrice("");
    setBrandFilter([]);
    if (slug === "all") setCategory("all");
    pushParams({ query: null, sort: null, min: null, max: null, brands: null, cat: null, page: null });
  };

  const toggleBrand = (b: string) => {
    setBrandFilter((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));
  };

  const onPage = (p: number) => {
    setPage(p);
    pushParams({ page: String(p) });
  };

  return (
    <div className="browser">
      <aside className="filters">
        <div className="filtersTop">
          <div className="filtersTitle">Filters</div>
          <button className="linkBtn" onClick={clearAll}>Clear</button>
        </div>

        {slug === "all" && (
          <div className="field">
            <div className="label2">Category</div>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>
        )}

        <div className="field">
          <div className="label2">Search</div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. shirt, Nike" />
        </div>

        <div className="field">
          <div className="label2">Sort</div>
          <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
            <option value="relevance">Relevance</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating_desc">Rating</option>
            <option value="discount_desc">Discount</option>
          </select>
        </div>

        <div className="field">
          <div className="label2">Price Range (₹)</div>
          <div className="row2">
            <input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min" inputMode="numeric" />
            <input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max" inputMode="numeric" />
          </div>
        </div>

        <div className="field">
          <div className="label2">Brand</div>
          <div className="brandList">
            {brands.map((b) => (
              <label key={b} className="chk">
                <input type="checkbox" checked={brandFilter.includes(b)} onChange={() => toggleBrand(b)} />
                <span>{b}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="btn full" onClick={applyToUrl}>Apply</button>
        <div className="muted small">Apply updates the URL (shareable) and resets to page 1.</div>
      </aside>

      <section>
        <div className="resultsBar">
          <div className="muted">
            Showing <b>{filteredSorted.length}</b> products • Page <b>{safePage}</b> / <b>{totalPages}</b>
          </div>
        </div>

        {paged.length === 0 ? (
          <div className="empty2">
            <div className="pageTitle">No products found</div>
            <div className="muted">Try clearing filters or changing the search term.</div>
          </div>
        ) : (
          <>
            <div className="grid3">
              {paged.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
            <Pagination page={safePage} totalPages={totalPages} onPage={onPage} />
          </>
        )}
      </section>
    </div>
  );
}
