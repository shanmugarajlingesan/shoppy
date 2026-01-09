"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function buildUrl(pathname: string, params: URLSearchParams) {
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const initial = useMemo(() => sp.get("query") ?? "", [sp]);
  const [q, setQ] = useState(initial);

  useEffect(() => setQ(initial), [initial]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(sp.toString());
    const val = q.trim();
    if (val) params.set("query", val);
    else params.delete("query");

    // reset pagination on a new search
    params.delete("page");

    const safePath = pathname.startsWith("/category/") ? pathname : "/category/all";
    router.push(buildUrl(safePath, params));
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <span className="searchIcon" aria-hidden="true">⌕</span>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search products, brands..."
        aria-label="search"
      />
      <button type="submit" aria-label="search submit">Search</button>
    </form>
  );
}
