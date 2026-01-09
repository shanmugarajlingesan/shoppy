"use client";

export default function QuantityPill({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="qty">
      <button onClick={() => onChange(Math.max(0, value - 1))} aria-label="decrease">−</button>
      <div className="qtyVal">{value}</div>
      <button onClick={() => onChange(value + 1)} aria-label="increase">+</button>
    </div>
  );
}
