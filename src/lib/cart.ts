export type CartItem = {
  id: string;
  title: string;
  brand: string;
  price: number;
  image: string;
  size: string;
  qty: number;
};

const KEY = "shoppy_cart_v1";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addToCart(item: Omit<CartItem, "qty">) {
  const cart = readCart();
  const idx = cart.findIndex((c) => c.id === item.id && c.size === item.size);
  if (idx >= 0) cart[idx].qty += 1;
  else cart.push({ ...item, qty: 1 });
  writeCart(cart);
  return cart;
}

export function updateQty(id: string, size: string, qty: number) {
  const cart = readCart()
    .map((c) => (c.id === id && c.size === size ? { ...c, qty } : c))
    .filter((c) => c.qty > 0);
  writeCart(cart);
  return cart;
}

export function clearCart() {
  writeCart([]);
}

export function cartTotals(items: CartItem[]) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal >= 1999 || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;
  return { subtotal, shipping, total };
}
