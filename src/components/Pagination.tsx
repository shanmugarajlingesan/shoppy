"use client";

export default function Pagination({
  page,
  totalPages,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  const clamp = (n: number) => Math.max(1, Math.min(totalPages, n));

  const nums: number[] = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);
  for (let i = start; i <= end; i++) nums.push(i);

  return (
    <div className="pager">
      <button className="pagerBtn" onClick={() => onPage(clamp(page - 1))} disabled={page <= 1}>
        Prev
      </button>

      {start > 1 && (
        <>
          <button className="pagerBtn" onClick={() => onPage(1)}>1</button>
          {start > 2 && <span className="pagerDots">…</span>}
        </>
      )}

      {nums.map((n) => (
        <button
          key={n}
          className={`pagerBtn ${n === page ? "active" : ""}`}
          onClick={() => onPage(n)}
        >
          {n}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="pagerDots">…</span>}
          <button className="pagerBtn" onClick={() => onPage(totalPages)}>{totalPages}</button>
        </>
      )}

      <button className="pagerBtn" onClick={() => onPage(clamp(page + 1))} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
}
