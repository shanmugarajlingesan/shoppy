export type Category = {
  slug: string;
  name: string;
  image: string;
};

export type Product = {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  mrp: number;
  discountPct: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  sizes: string[];
  description: string;
};

export const categories: Category[] = [
  {
    slug: "men",
    name: "Men",
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
  },
  {
    slug: "women",
    name: "Women",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
  },
  {
    slug: "kids",
    name: "Kids",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60",
  },
  {
    slug: "beauty",
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
  },
];

export const products: Product[] = [
  {
    "id": "1001",
    "title": "Slim Fit Oxford Shirt",
    "brand": "Jack & Jones",
    "category": "men",
    "price": 799,
    "mrp": 1757,
    "discountPct": 54,
    "rating": 4.4,
    "reviews": 713,
    "image": "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Slim Fit Oxford Shirt by Jack & Jones. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1002",
    "title": "Slim Fit Oxford Shirt - Premium",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 499,
    "mrp": 1247,
    "discountPct": 59,
    "rating": 3.9,
    "reviews": 824,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Slim Fit Oxford Shirt - Premium by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1003",
    "title": "Slim Fit Oxford Shirt - Everyday",
    "brand": "Puma",
    "category": "men",
    "price": 599,
    "mrp": 1497,
    "discountPct": 59,
    "rating": 4.1,
    "reviews": 4752,
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Slim Fit Oxford Shirt - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1004",
    "title": "Regular Fit Polo Tee",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 499,
    "mrp": 1247,
    "discountPct": 59,
    "rating": 4.3,
    "reviews": 526,
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Regular Fit Polo Tee by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1005",
    "title": "Regular Fit Polo Tee - Premium",
    "brand": "Levis",
    "category": "men",
    "price": 1499,
    "mrp": 3297,
    "discountPct": 54,
    "rating": 3.8,
    "reviews": 1084,
    "image": "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Regular Fit Polo Tee - Premium by Levis. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1006",
    "title": "Regular Fit Polo Tee - Everyday",
    "brand": "Levis",
    "category": "men",
    "price": 699,
    "mrp": 1747,
    "discountPct": 59,
    "rating": 4.3,
    "reviews": 1659,
    "image": "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Regular Fit Polo Tee - Everyday by Levis. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1007",
    "title": "Denim Jacket",
    "brand": "HRX",
    "category": "men",
    "price": 499,
    "mrp": 1247,
    "discountPct": 59,
    "rating": 3.9,
    "reviews": 4475,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Denim Jacket by HRX. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1008",
    "title": "Denim Jacket - Premium",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 2499,
    "mrp": 4998,
    "discountPct": 50,
    "rating": 4.0,
    "reviews": 1592,
    "image": "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Denim Jacket - Premium by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1009",
    "title": "Denim Jacket - Everyday",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 1499,
    "mrp": 3747,
    "discountPct": 59,
    "rating": 4.2,
    "reviews": 2933,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Denim Jacket - Everyday by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1010",
    "title": "Chino Pants",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 599,
    "mrp": 958,
    "discountPct": 37,
    "rating": 4.2,
    "reviews": 1471,
    "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Chino Pants by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1011",
    "title": "Chino Pants - Premium",
    "brand": "Nike",
    "category": "men",
    "price": 499,
    "mrp": 798,
    "discountPct": 37,
    "rating": 4.5,
    "reviews": 4814,
    "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Chino Pants - Premium by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1012",
    "title": "Chino Pants - Everyday",
    "brand": "Jack & Jones",
    "category": "men",
    "price": 2799,
    "mrp": 6997,
    "discountPct": 59,
    "rating": 4.5,
    "reviews": 683,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Chino Pants - Everyday by Jack & Jones. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1013",
    "title": "Running Sneakers",
    "brand": "HRX",
    "category": "men",
    "price": 499,
    "mrp": 998,
    "discountPct": 50,
    "rating": 4.3,
    "reviews": 3770,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Running Sneakers by HRX. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1014",
    "title": "Running Sneakers - Premium",
    "brand": "Jack & Jones",
    "category": "men",
    "price": 399,
    "mrp": 877,
    "discountPct": 54,
    "rating": 4.1,
    "reviews": 5124,
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Running Sneakers - Premium by Jack & Jones. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1015",
    "title": "Running Sneakers - Everyday",
    "brand": "Puma",
    "category": "men",
    "price": 1499,
    "mrp": 2698,
    "discountPct": 44,
    "rating": 4.4,
    "reviews": 3379,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Running Sneakers - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1016",
    "title": "Casual Loafers",
    "brand": "Levis",
    "category": "men",
    "price": 2499,
    "mrp": 5497,
    "discountPct": 54,
    "rating": 4.2,
    "reviews": 1241,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Casual Loafers by Levis. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1017",
    "title": "Casual Loafers - Premium",
    "brand": "Nike",
    "category": "men",
    "price": 1799,
    "mrp": 3957,
    "discountPct": 54,
    "rating": 4.7,
    "reviews": 1356,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Casual Loafers - Premium by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1018",
    "title": "Casual Loafers - Everyday",
    "brand": "Puma",
    "category": "men",
    "price": 1099,
    "mrp": 1758,
    "discountPct": 37,
    "rating": 4.2,
    "reviews": 4946,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Casual Loafers - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1019",
    "title": "Hooded Sweatshirt",
    "brand": "Roadster",
    "category": "men",
    "price": 799,
    "mrp": 1757,
    "discountPct": 54,
    "rating": 4.2,
    "reviews": 5115,
    "image": "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Hooded Sweatshirt by Roadster. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1020",
    "title": "Hooded Sweatshirt - Premium",
    "brand": "Allen Solly",
    "category": "men",
    "price": 499,
    "mrp": 1097,
    "discountPct": 54,
    "rating": 4.6,
    "reviews": 4701,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Hooded Sweatshirt - Premium by Allen Solly. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1021",
    "title": "Hooded Sweatshirt - Everyday",
    "brand": "Nike",
    "category": "men",
    "price": 699,
    "mrp": 1537,
    "discountPct": 54,
    "rating": 4.3,
    "reviews": 629,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Hooded Sweatshirt - Everyday by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1022",
    "title": "Graphic T-Shirt",
    "brand": "Adidas",
    "category": "men",
    "price": 899,
    "mrp": 1438,
    "discountPct": 37,
    "rating": 4.0,
    "reviews": 550,
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Graphic T-Shirt by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1023",
    "title": "Graphic T-Shirt - Premium",
    "brand": "Levis",
    "category": "men",
    "price": 3499,
    "mrp": 5598,
    "discountPct": 37,
    "rating": 4.6,
    "reviews": 5147,
    "image": "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Graphic T-Shirt - Premium by Levis. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1024",
    "title": "Graphic T-Shirt - Everyday",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 1999,
    "mrp": 3598,
    "discountPct": 44,
    "rating": 4.3,
    "reviews": 2965,
    "image": "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Graphic T-Shirt - Everyday by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1025",
    "title": "Sports Track Pants",
    "brand": "HRX",
    "category": "men",
    "price": 699,
    "mrp": 1537,
    "discountPct": 54,
    "rating": 4.7,
    "reviews": 3937,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Sports Track Pants by HRX. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1026",
    "title": "Sports Track Pants - Premium",
    "brand": "HRX",
    "category": "men",
    "price": 799,
    "mrp": 1278,
    "discountPct": 37,
    "rating": 4.4,
    "reviews": 2288,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Sports Track Pants - Premium by HRX. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1027",
    "title": "Sports Track Pants - Everyday",
    "brand": "Allen Solly",
    "category": "men",
    "price": 399,
    "mrp": 718,
    "discountPct": 44,
    "rating": 4.7,
    "reviews": 4447,
    "image": "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Sports Track Pants - Everyday by Allen Solly. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1028",
    "title": "Formal Trousers",
    "brand": "Allen Solly",
    "category": "men",
    "price": 399,
    "mrp": 997,
    "discountPct": 59,
    "rating": 4.0,
    "reviews": 865,
    "image": "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Formal Trousers by Allen Solly. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1029",
    "title": "Formal Trousers - Premium",
    "brand": "Jack & Jones",
    "category": "men",
    "price": 899,
    "mrp": 1798,
    "discountPct": 50,
    "rating": 4.5,
    "reviews": 4482,
    "image": "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Formal Trousers - Premium by Jack & Jones. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1030",
    "title": "Formal Trousers - Everyday",
    "brand": "Puma",
    "category": "men",
    "price": 999,
    "mrp": 1798,
    "discountPct": 44,
    "rating": 4.5,
    "reviews": 1977,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Formal Trousers - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1031",
    "title": "Linen Shirt",
    "brand": "Jack & Jones",
    "category": "men",
    "price": 399,
    "mrp": 638,
    "discountPct": 37,
    "rating": 4.5,
    "reviews": 3988,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Linen Shirt by Jack & Jones. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1032",
    "title": "Linen Shirt - Premium",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 1799,
    "mrp": 3957,
    "discountPct": 54,
    "rating": 4.5,
    "reviews": 2983,
    "image": "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Linen Shirt - Premium by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1033",
    "title": "Linen Shirt - Everyday",
    "brand": "HRX",
    "category": "men",
    "price": 1099,
    "mrp": 2417,
    "discountPct": 54,
    "rating": 3.9,
    "reviews": 1794,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Linen Shirt - Everyday by HRX. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1034",
    "title": "Bomber Jacket",
    "brand": "Roadster",
    "category": "men",
    "price": 2799,
    "mrp": 5598,
    "discountPct": 50,
    "rating": 4.5,
    "reviews": 814,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Bomber Jacket by Roadster. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1035",
    "title": "Bomber Jacket - Premium",
    "brand": "Puma",
    "category": "men",
    "price": 2799,
    "mrp": 5038,
    "discountPct": 44,
    "rating": 4.1,
    "reviews": 2843,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Bomber Jacket - Premium by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1036",
    "title": "Bomber Jacket - Everyday",
    "brand": "Adidas",
    "category": "men",
    "price": 1999,
    "mrp": 3198,
    "discountPct": 37,
    "rating": 4.4,
    "reviews": 1512,
    "image": "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Bomber Jacket - Everyday by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1037",
    "title": "Training Tee",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 2499,
    "mrp": 4498,
    "discountPct": 44,
    "rating": 4.3,
    "reviews": 5001,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Training Tee by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1038",
    "title": "Training Tee - Premium",
    "brand": "Levis",
    "category": "men",
    "price": 3499,
    "mrp": 8747,
    "discountPct": 59,
    "rating": 3.8,
    "reviews": 236,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Training Tee - Premium by Levis. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1039",
    "title": "Training Tee - Everyday",
    "brand": "Allen Solly",
    "category": "men",
    "price": 799,
    "mrp": 1757,
    "discountPct": 54,
    "rating": 4.7,
    "reviews": 1715,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Training Tee - Everyday by Allen Solly. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1040",
    "title": "Walking Shoes",
    "brand": "Puma",
    "category": "men",
    "price": 1499,
    "mrp": 3747,
    "discountPct": 59,
    "rating": 3.9,
    "reviews": 4924,
    "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Walking Shoes by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1041",
    "title": "Walking Shoes - Premium",
    "brand": "Nike",
    "category": "men",
    "price": 799,
    "mrp": 1278,
    "discountPct": 37,
    "rating": 4.6,
    "reviews": 3018,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Walking Shoes - Premium by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1042",
    "title": "Walking Shoes - Everyday",
    "brand": "Allen Solly",
    "category": "men",
    "price": 2299,
    "mrp": 5747,
    "discountPct": 59,
    "rating": 3.8,
    "reviews": 1363,
    "image": "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK6",
      "UK7",
      "UK8",
      "UK9",
      "UK10"
    ],
    "description": "Walking Shoes - Everyday by Allen Solly. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1043",
    "title": "Classic Jeans",
    "brand": "Adidas",
    "category": "men",
    "price": 899,
    "mrp": 2247,
    "discountPct": 59,
    "rating": 3.7,
    "reviews": 1347,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic Jeans by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1044",
    "title": "Classic Jeans - Premium",
    "brand": "Tommy Hilfiger",
    "category": "men",
    "price": 699,
    "mrp": 1747,
    "discountPct": 59,
    "rating": 3.8,
    "reviews": 4366,
    "image": "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic Jeans - Premium by Tommy Hilfiger. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1045",
    "title": "Classic Jeans - Everyday",
    "brand": "HRX",
    "category": "men",
    "price": 3499,
    "mrp": 5598,
    "discountPct": 37,
    "rating": 3.9,
    "reviews": 2388,
    "image": "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic Jeans - Everyday by HRX. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1046",
    "title": "Checkered Shirt",
    "brand": "Adidas",
    "category": "men",
    "price": 3499,
    "mrp": 5598,
    "discountPct": 37,
    "rating": 4.5,
    "reviews": 639,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Checkered Shirt by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1047",
    "title": "Checkered Shirt - Premium",
    "brand": "Allen Solly",
    "category": "men",
    "price": 2999,
    "mrp": 5398,
    "discountPct": 44,
    "rating": 4.4,
    "reviews": 3825,
    "image": "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Checkered Shirt - Premium by Allen Solly. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1048",
    "title": "Checkered Shirt - Everyday",
    "brand": "Allen Solly",
    "category": "men",
    "price": 1099,
    "mrp": 2747,
    "discountPct": 59,
    "rating": 4.6,
    "reviews": 2246,
    "image": "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Checkered Shirt - Everyday by Allen Solly. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1049",
    "title": "Printed A-Line Kurta",
    "brand": "Puma",
    "category": "women",
    "price": 2299,
    "mrp": 3678,
    "discountPct": 37,
    "rating": 4.1,
    "reviews": 2708,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Printed A-Line Kurta by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1050",
    "title": "Printed A-Line Kurta - Premium",
    "brand": "Adidas",
    "category": "women",
    "price": 599,
    "mrp": 1078,
    "discountPct": 44,
    "rating": 4.4,
    "reviews": 1122,
    "image": "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Printed A-Line Kurta - Premium by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1051",
    "title": "Printed A-Line Kurta - Everyday",
    "brand": "Nike",
    "category": "women",
    "price": 799,
    "mrp": 1598,
    "discountPct": 50,
    "rating": 4.6,
    "reviews": 3951,
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Printed A-Line Kurta - Everyday by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1052",
    "title": "Solid Straight Kurta",
    "brand": "Adidas",
    "category": "women",
    "price": 2799,
    "mrp": 5038,
    "discountPct": 44,
    "rating": 4.7,
    "reviews": 1952,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Solid Straight Kurta by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1053",
    "title": "Solid Straight Kurta - Premium",
    "brand": "W",
    "category": "women",
    "price": 1999,
    "mrp": 3998,
    "discountPct": 50,
    "rating": 4.1,
    "reviews": 3041,
    "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Solid Straight Kurta - Premium by W. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1054",
    "title": "Solid Straight Kurta - Everyday",
    "brand": "Nike",
    "category": "women",
    "price": 399,
    "mrp": 798,
    "discountPct": 50,
    "rating": 4.3,
    "reviews": 3728,
    "image": "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Solid Straight Kurta - Everyday by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1055",
    "title": "Minimalist Tote Bag",
    "brand": "Nike",
    "category": "women",
    "price": 2999,
    "mrp": 7497,
    "discountPct": 59,
    "rating": 4.0,
    "reviews": 646,
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Minimalist Tote Bag by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1056",
    "title": "Minimalist Tote Bag - Premium",
    "brand": "MANGO",
    "category": "women",
    "price": 1299,
    "mrp": 2598,
    "discountPct": 50,
    "rating": 3.7,
    "reviews": 1607,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Minimalist Tote Bag - Premium by MANGO. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1057",
    "title": "Minimalist Tote Bag - Everyday",
    "brand": "H&M",
    "category": "women",
    "price": 1999,
    "mrp": 3598,
    "discountPct": 44,
    "rating": 4.2,
    "reviews": 4337,
    "image": "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Minimalist Tote Bag - Everyday by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1058",
    "title": "Everyday Sneakers",
    "brand": "Nike",
    "category": "women",
    "price": 599,
    "mrp": 1198,
    "discountPct": 50,
    "rating": 3.8,
    "reviews": 1621,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Everyday Sneakers by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1059",
    "title": "Everyday Sneakers - Premium",
    "brand": "Anouk",
    "category": "women",
    "price": 599,
    "mrp": 1198,
    "discountPct": 50,
    "rating": 3.8,
    "reviews": 1941,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Everyday Sneakers - Premium by Anouk. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1060",
    "title": "Everyday Sneakers - Everyday",
    "brand": "Biba",
    "category": "women",
    "price": 399,
    "mrp": 798,
    "discountPct": 50,
    "rating": 4.7,
    "reviews": 3542,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Everyday Sneakers - Everyday by Biba. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1061",
    "title": "Floral Maxi Dress",
    "brand": "Anouk",
    "category": "women",
    "price": 2999,
    "mrp": 5398,
    "discountPct": 44,
    "rating": 4.6,
    "reviews": 1442,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Floral Maxi Dress by Anouk. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1062",
    "title": "Floral Maxi Dress - Premium",
    "brand": "Zara",
    "category": "women",
    "price": 1499,
    "mrp": 2998,
    "discountPct": 50,
    "rating": 4.2,
    "reviews": 1806,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Floral Maxi Dress - Premium by Zara. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1063",
    "title": "Floral Maxi Dress - Everyday",
    "brand": "Puma",
    "category": "women",
    "price": 1299,
    "mrp": 2598,
    "discountPct": 50,
    "rating": 4.5,
    "reviews": 2171,
    "image": "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Floral Maxi Dress - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1064",
    "title": "High-Rise Jeans",
    "brand": "W",
    "category": "women",
    "price": 3499,
    "mrp": 6298,
    "discountPct": 44,
    "rating": 4.2,
    "reviews": 2132,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "High-Rise Jeans by W. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1065",
    "title": "High-Rise Jeans - Premium",
    "brand": "Adidas",
    "category": "women",
    "price": 2799,
    "mrp": 6997,
    "discountPct": 59,
    "rating": 4.5,
    "reviews": 3340,
    "image": "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "High-Rise Jeans - Premium by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1066",
    "title": "High-Rise Jeans - Everyday",
    "brand": "Zara",
    "category": "women",
    "price": 1099,
    "mrp": 2198,
    "discountPct": 50,
    "rating": 3.9,
    "reviews": 1264,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "High-Rise Jeans - Everyday by Zara. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1067",
    "title": "Oversized Shirt",
    "brand": "Puma",
    "category": "women",
    "price": 399,
    "mrp": 638,
    "discountPct": 37,
    "rating": 4.3,
    "reviews": 2213,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Oversized Shirt by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1068",
    "title": "Oversized Shirt - Premium",
    "brand": "MANGO",
    "category": "women",
    "price": 1999,
    "mrp": 4997,
    "discountPct": 59,
    "rating": 4.4,
    "reviews": 2429,
    "image": "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Oversized Shirt - Premium by MANGO. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1069",
    "title": "Oversized Shirt - Everyday",
    "brand": "H&M",
    "category": "women",
    "price": 499,
    "mrp": 1097,
    "discountPct": 54,
    "rating": 3.9,
    "reviews": 2323,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Oversized Shirt - Everyday by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1070",
    "title": "Athleisure Leggings",
    "brand": "Nike",
    "category": "women",
    "price": 1599,
    "mrp": 3997,
    "discountPct": 59,
    "rating": 4.0,
    "reviews": 402,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Athleisure Leggings by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1071",
    "title": "Athleisure Leggings - Premium",
    "brand": "Puma",
    "category": "women",
    "price": 399,
    "mrp": 798,
    "discountPct": 50,
    "rating": 4.1,
    "reviews": 4008,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Athleisure Leggings - Premium by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1072",
    "title": "Athleisure Leggings - Everyday",
    "brand": "Zara",
    "category": "women",
    "price": 1099,
    "mrp": 2747,
    "discountPct": 59,
    "rating": 4.5,
    "reviews": 864,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Athleisure Leggings - Everyday by Zara. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1073",
    "title": "Block Heel Sandals",
    "brand": "Adidas",
    "category": "women",
    "price": 499,
    "mrp": 1097,
    "discountPct": 54,
    "rating": 3.7,
    "reviews": 2612,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Block Heel Sandals by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1074",
    "title": "Block Heel Sandals - Premium",
    "brand": "Only",
    "category": "women",
    "price": 2999,
    "mrp": 5398,
    "discountPct": 44,
    "rating": 4.4,
    "reviews": 5007,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Block Heel Sandals - Premium by Only. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1075",
    "title": "Block Heel Sandals - Everyday",
    "brand": "Biba",
    "category": "women",
    "price": 799,
    "mrp": 1598,
    "discountPct": 50,
    "rating": 4.4,
    "reviews": 1305,
    "image": "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Block Heel Sandals - Everyday by Biba. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1076",
    "title": "Handbag Satchel",
    "brand": "Adidas",
    "category": "women",
    "price": 2999,
    "mrp": 5398,
    "discountPct": 44,
    "rating": 4.6,
    "reviews": 4251,
    "image": "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Handbag Satchel by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1077",
    "title": "Handbag Satchel - Premium",
    "brand": "Only",
    "category": "women",
    "price": 1099,
    "mrp": 1758,
    "discountPct": 37,
    "rating": 3.7,
    "reviews": 1210,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Handbag Satchel - Premium by Only. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1078",
    "title": "Handbag Satchel - Everyday",
    "brand": "Adidas",
    "category": "women",
    "price": 2499,
    "mrp": 6247,
    "discountPct": 59,
    "rating": 3.8,
    "reviews": 274,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Handbag Satchel - Everyday by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1079",
    "title": "Crop Top",
    "brand": "Zara",
    "category": "women",
    "price": 2799,
    "mrp": 5598,
    "discountPct": 50,
    "rating": 3.7,
    "reviews": 694,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Crop Top by Zara. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1080",
    "title": "Crop Top - Premium",
    "brand": "MANGO",
    "category": "women",
    "price": 2999,
    "mrp": 4798,
    "discountPct": 37,
    "rating": 4.4,
    "reviews": 4001,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Crop Top - Premium by MANGO. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1081",
    "title": "Crop Top - Everyday",
    "brand": "Zara",
    "category": "women",
    "price": 999,
    "mrp": 1798,
    "discountPct": 44,
    "rating": 4.4,
    "reviews": 3891,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Crop Top - Everyday by Zara. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1082",
    "title": "Pleated Skirt",
    "brand": "Biba",
    "category": "women",
    "price": 1499,
    "mrp": 2398,
    "discountPct": 37,
    "rating": 4.3,
    "reviews": 1744,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Pleated Skirt by Biba. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1083",
    "title": "Pleated Skirt - Premium",
    "brand": "Nike",
    "category": "women",
    "price": 1299,
    "mrp": 2598,
    "discountPct": 50,
    "rating": 4.3,
    "reviews": 1213,
    "image": "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Pleated Skirt - Premium by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1084",
    "title": "Pleated Skirt - Everyday",
    "brand": "Biba",
    "category": "women",
    "price": 1299,
    "mrp": 2078,
    "discountPct": 37,
    "rating": 4.4,
    "reviews": 4130,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Pleated Skirt - Everyday by Biba. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1085",
    "title": "Anarkali Kurta",
    "brand": "H&M",
    "category": "women",
    "price": 2499,
    "mrp": 5497,
    "discountPct": 54,
    "rating": 4.2,
    "reviews": 1090,
    "image": "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Anarkali Kurta by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1086",
    "title": "Anarkali Kurta - Premium",
    "brand": "MANGO",
    "category": "women",
    "price": 2799,
    "mrp": 4478,
    "discountPct": 37,
    "rating": 4.0,
    "reviews": 746,
    "image": "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Anarkali Kurta - Premium by MANGO. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1087",
    "title": "Anarkali Kurta - Everyday",
    "brand": "Adidas",
    "category": "women",
    "price": 999,
    "mrp": 1798,
    "discountPct": 44,
    "rating": 3.8,
    "reviews": 859,
    "image": "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Anarkali Kurta - Everyday by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1088",
    "title": "Workwear Blazer",
    "brand": "H&M",
    "category": "women",
    "price": 1799,
    "mrp": 3238,
    "discountPct": 44,
    "rating": 4.3,
    "reviews": 4287,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Workwear Blazer by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1089",
    "title": "Workwear Blazer - Premium",
    "brand": "Nike",
    "category": "women",
    "price": 1099,
    "mrp": 2417,
    "discountPct": 54,
    "rating": 4.6,
    "reviews": 4102,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Workwear Blazer - Premium by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1090",
    "title": "Workwear Blazer - Everyday",
    "brand": "Anouk",
    "category": "women",
    "price": 2799,
    "mrp": 6157,
    "discountPct": 54,
    "rating": 4.1,
    "reviews": 1272,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Workwear Blazer - Everyday by Anouk. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1091",
    "title": "Party Heels",
    "brand": "Nike",
    "category": "women",
    "price": 699,
    "mrp": 1398,
    "discountPct": 50,
    "rating": 3.7,
    "reviews": 2891,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Party Heels by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1092",
    "title": "Party Heels - Premium",
    "brand": "Anouk",
    "category": "women",
    "price": 1499,
    "mrp": 2998,
    "discountPct": 50,
    "rating": 4.1,
    "reviews": 3338,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Party Heels - Premium by Anouk. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1093",
    "title": "Party Heels - Everyday",
    "brand": "Nike",
    "category": "women",
    "price": 2299,
    "mrp": 4598,
    "discountPct": 50,
    "rating": 4.6,
    "reviews": 2418,
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Party Heels - Everyday by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1094",
    "title": "Cotton Saree",
    "brand": "H&M",
    "category": "women",
    "price": 799,
    "mrp": 1438,
    "discountPct": 44,
    "rating": 4.7,
    "reviews": 3693,
    "image": "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Cotton Saree by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1095",
    "title": "Cotton Saree - Premium",
    "brand": "Nike",
    "category": "women",
    "price": 2299,
    "mrp": 3678,
    "discountPct": 37,
    "rating": 4.5,
    "reviews": 3397,
    "image": "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Cotton Saree - Premium by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1096",
    "title": "Cotton Saree - Everyday",
    "brand": "MANGO",
    "category": "women",
    "price": 499,
    "mrp": 1097,
    "discountPct": 54,
    "rating": 4.2,
    "reviews": 1255,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Cotton Saree - Everyday by MANGO. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1097",
    "title": "Kids Graphic T-Shirt",
    "brand": "H&M",
    "category": "kids",
    "price": 3499,
    "mrp": 6298,
    "discountPct": 44,
    "rating": 3.9,
    "reviews": 3518,
    "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Graphic T-Shirt by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1098",
    "title": "Kids Graphic T-Shirt - Premium",
    "brand": "Gini & Jony",
    "category": "kids",
    "price": 1299,
    "mrp": 2857,
    "discountPct": 54,
    "rating": 4.4,
    "reviews": 2584,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Graphic T-Shirt - Premium by Gini & Jony. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1099",
    "title": "Kids Graphic T-Shirt - Everyday",
    "brand": "Pepe Jeans",
    "category": "kids",
    "price": 699,
    "mrp": 1258,
    "discountPct": 44,
    "rating": 4.3,
    "reviews": 735,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Graphic T-Shirt - Everyday by Pepe Jeans. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1100",
    "title": "Kids Sneakers",
    "brand": "Max",
    "category": "kids",
    "price": 1099,
    "mrp": 2417,
    "discountPct": 54,
    "rating": 4.6,
    "reviews": 3806,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sneakers by Max. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1101",
    "title": "Kids Sneakers - Premium",
    "brand": "Puma",
    "category": "kids",
    "price": 1099,
    "mrp": 1758,
    "discountPct": 37,
    "rating": 3.9,
    "reviews": 4673,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sneakers - Premium by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1102",
    "title": "Kids Sneakers - Everyday",
    "brand": "UCB Kids",
    "category": "kids",
    "price": 1299,
    "mrp": 3247,
    "discountPct": 59,
    "rating": 3.9,
    "reviews": 284,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sneakers - Everyday by UCB Kids. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1103",
    "title": "Kids Hoodie",
    "brand": "Pepe Jeans",
    "category": "kids",
    "price": 2999,
    "mrp": 5398,
    "discountPct": 44,
    "rating": 4.1,
    "reviews": 2890,
    "image": "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Hoodie by Pepe Jeans. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1104",
    "title": "Kids Hoodie - Premium",
    "brand": "FirstCry",
    "category": "kids",
    "price": 1799,
    "mrp": 3238,
    "discountPct": 44,
    "rating": 4.4,
    "reviews": 4455,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Hoodie - Premium by FirstCry. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1105",
    "title": "Kids Hoodie - Everyday",
    "brand": "Gini & Jony",
    "category": "kids",
    "price": 1099,
    "mrp": 2417,
    "discountPct": 54,
    "rating": 4.1,
    "reviews": 3772,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Hoodie - Everyday by Gini & Jony. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1106",
    "title": "Kids Shorts",
    "brand": "Adidas",
    "category": "kids",
    "price": 499,
    "mrp": 1097,
    "discountPct": 54,
    "rating": 4.4,
    "reviews": 3997,
    "image": "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Shorts by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1107",
    "title": "Kids Shorts - Premium",
    "brand": "Nike",
    "category": "kids",
    "price": 1999,
    "mrp": 4997,
    "discountPct": 59,
    "rating": 4.6,
    "reviews": 3797,
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Shorts - Premium by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1108",
    "title": "Kids Shorts - Everyday",
    "brand": "Adidas",
    "category": "kids",
    "price": 799,
    "mrp": 1997,
    "discountPct": 59,
    "rating": 4.7,
    "reviews": 1012,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Shorts - Everyday by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1109",
    "title": "Kids Dress",
    "brand": "Mothercare",
    "category": "kids",
    "price": 599,
    "mrp": 1497,
    "discountPct": 59,
    "rating": 4.5,
    "reviews": 131,
    "image": "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Dress by Mothercare. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1110",
    "title": "Kids Dress - Premium",
    "brand": "H&M",
    "category": "kids",
    "price": 1499,
    "mrp": 2698,
    "discountPct": 44,
    "rating": 4.3,
    "reviews": 4447,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Dress - Premium by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1111",
    "title": "Kids Dress - Everyday",
    "brand": "Nike",
    "category": "kids",
    "price": 699,
    "mrp": 1118,
    "discountPct": 37,
    "rating": 4.0,
    "reviews": 4895,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Dress - Everyday by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1112",
    "title": "Kids Track Pants",
    "brand": "Puma",
    "category": "kids",
    "price": 399,
    "mrp": 638,
    "discountPct": 37,
    "rating": 4.2,
    "reviews": 3893,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Track Pants by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1113",
    "title": "Kids Track Pants - Premium",
    "brand": "Puma",
    "category": "kids",
    "price": 2799,
    "mrp": 6997,
    "discountPct": 59,
    "rating": 3.9,
    "reviews": 2143,
    "image": "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Track Pants - Premium by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1114",
    "title": "Kids Track Pants - Everyday",
    "brand": "Gini & Jony",
    "category": "kids",
    "price": 499,
    "mrp": 798,
    "discountPct": 37,
    "rating": 3.9,
    "reviews": 3560,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Track Pants - Everyday by Gini & Jony. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1115",
    "title": "Kids Sandals",
    "brand": "Pepe Jeans",
    "category": "kids",
    "price": 1799,
    "mrp": 3238,
    "discountPct": 44,
    "rating": 4.2,
    "reviews": 2889,
    "image": "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sandals by Pepe Jeans. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1116",
    "title": "Kids Sandals - Premium",
    "brand": "Pepe Jeans",
    "category": "kids",
    "price": 999,
    "mrp": 1598,
    "discountPct": 37,
    "rating": 4.5,
    "reviews": 4255,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sandals - Premium by Pepe Jeans. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1117",
    "title": "Kids Sandals - Everyday",
    "brand": "Puma",
    "category": "kids",
    "price": 1499,
    "mrp": 2698,
    "discountPct": 44,
    "rating": 3.9,
    "reviews": 1934,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sandals - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1118",
    "title": "Kids Jeans",
    "brand": "FirstCry",
    "category": "kids",
    "price": 2799,
    "mrp": 6997,
    "discountPct": 59,
    "rating": 3.9,
    "reviews": 1949,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Jeans by FirstCry. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1119",
    "title": "Kids Jeans - Premium",
    "brand": "H&M",
    "category": "kids",
    "price": 799,
    "mrp": 1757,
    "discountPct": 54,
    "rating": 3.8,
    "reviews": 313,
    "image": "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Jeans - Premium by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1120",
    "title": "Kids Jeans - Everyday",
    "brand": "H&M",
    "category": "kids",
    "price": 499,
    "mrp": 898,
    "discountPct": 44,
    "rating": 4.1,
    "reviews": 2693,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Jeans - Everyday by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1121",
    "title": "Kids Polo Tee",
    "brand": "Adidas",
    "category": "kids",
    "price": 1599,
    "mrp": 2878,
    "discountPct": 44,
    "rating": 3.9,
    "reviews": 4419,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Polo Tee by Adidas. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1122",
    "title": "Kids Polo Tee - Premium",
    "brand": "Gini & Jony",
    "category": "kids",
    "price": 1999,
    "mrp": 3998,
    "discountPct": 50,
    "rating": 4.7,
    "reviews": 3744,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Polo Tee - Premium by Gini & Jony. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1123",
    "title": "Kids Polo Tee - Everyday",
    "brand": "Nike",
    "category": "kids",
    "price": 1299,
    "mrp": 2078,
    "discountPct": 37,
    "rating": 4.1,
    "reviews": 1133,
    "image": "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Polo Tee - Everyday by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1124",
    "title": "Kids Jacket",
    "brand": "UCB Kids",
    "category": "kids",
    "price": 1499,
    "mrp": 3297,
    "discountPct": 54,
    "rating": 3.8,
    "reviews": 3998,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Jacket by UCB Kids. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1125",
    "title": "Kids Jacket - Premium",
    "brand": "Mothercare",
    "category": "kids",
    "price": 999,
    "mrp": 1998,
    "discountPct": 50,
    "rating": 4.1,
    "reviews": 4007,
    "image": "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Jacket - Premium by Mothercare. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1126",
    "title": "Kids Jacket - Everyday",
    "brand": "Puma",
    "category": "kids",
    "price": 1999,
    "mrp": 3198,
    "discountPct": 37,
    "rating": 4.1,
    "reviews": 3921,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Jacket - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1127",
    "title": "Kids Night Suit",
    "brand": "Puma",
    "category": "kids",
    "price": 599,
    "mrp": 1497,
    "discountPct": 59,
    "rating": 4.0,
    "reviews": 2350,
    "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Night Suit by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1128",
    "title": "Kids Night Suit - Premium",
    "brand": "Gini & Jony",
    "category": "kids",
    "price": 1599,
    "mrp": 3198,
    "discountPct": 50,
    "rating": 4.0,
    "reviews": 4998,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Night Suit - Premium by Gini & Jony. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1129",
    "title": "Kids Night Suit - Everyday",
    "brand": "Puma",
    "category": "kids",
    "price": 699,
    "mrp": 1537,
    "discountPct": 54,
    "rating": 4.4,
    "reviews": 3935,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Night Suit - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1130",
    "title": "Kids Cap",
    "brand": "Mothercare",
    "category": "kids",
    "price": 799,
    "mrp": 1757,
    "discountPct": 54,
    "rating": 3.9,
    "reviews": 2604,
    "image": "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Cap by Mothercare. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1131",
    "title": "Kids Cap - Premium",
    "brand": "Puma",
    "category": "kids",
    "price": 1599,
    "mrp": 3198,
    "discountPct": 50,
    "rating": 4.2,
    "reviews": 5000,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Cap - Premium by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1132",
    "title": "Kids Cap - Everyday",
    "brand": "Pepe Jeans",
    "category": "kids",
    "price": 899,
    "mrp": 1618,
    "discountPct": 44,
    "rating": 4.1,
    "reviews": 397,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Cap - Everyday by Pepe Jeans. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1133",
    "title": "Kids Socks Pack",
    "brand": "UCB Kids",
    "category": "kids",
    "price": 899,
    "mrp": 1977,
    "discountPct": 54,
    "rating": 4.6,
    "reviews": 711,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Socks Pack by UCB Kids. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1134",
    "title": "Kids Socks Pack - Premium",
    "brand": "Puma",
    "category": "kids",
    "price": 699,
    "mrp": 1537,
    "discountPct": 54,
    "rating": 4.2,
    "reviews": 3781,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Socks Pack - Premium by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1135",
    "title": "Kids Socks Pack - Everyday",
    "brand": "Pepe Jeans",
    "category": "kids",
    "price": 2499,
    "mrp": 6247,
    "discountPct": 59,
    "rating": 4.6,
    "reviews": 2044,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Socks Pack - Everyday by Pepe Jeans. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1136",
    "title": "Kids School Shoes",
    "brand": "Nike",
    "category": "kids",
    "price": 1499,
    "mrp": 2998,
    "discountPct": 50,
    "rating": 4.0,
    "reviews": 2312,
    "image": "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids School Shoes by Nike. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1137",
    "title": "Kids School Shoes - Premium",
    "brand": "Gini & Jony",
    "category": "kids",
    "price": 999,
    "mrp": 2197,
    "discountPct": 54,
    "rating": 3.9,
    "reviews": 2129,
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids School Shoes - Premium by Gini & Jony. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1138",
    "title": "Kids School Shoes - Everyday",
    "brand": "FirstCry",
    "category": "kids",
    "price": 999,
    "mrp": 1998,
    "discountPct": 50,
    "rating": 3.8,
    "reviews": 2181,
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids School Shoes - Everyday by FirstCry. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1139",
    "title": "Kids Sweatshirt",
    "brand": "Puma",
    "category": "kids",
    "price": 699,
    "mrp": 1537,
    "discountPct": 54,
    "rating": 4.7,
    "reviews": 958,
    "image": "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sweatshirt by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1140",
    "title": "Kids Sweatshirt - Premium",
    "brand": "Mothercare",
    "category": "kids",
    "price": 1799,
    "mrp": 2878,
    "discountPct": 37,
    "rating": 4.6,
    "reviews": 2027,
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sweatshirt - Premium by Mothercare. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1141",
    "title": "Kids Sweatshirt - Everyday",
    "brand": "FirstCry",
    "category": "kids",
    "price": 999,
    "mrp": 1598,
    "discountPct": 37,
    "rating": 4.1,
    "reviews": 1576,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Sweatshirt - Everyday by FirstCry. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1142",
    "title": "Kids Kurta Set",
    "brand": "H&M",
    "category": "kids",
    "price": 699,
    "mrp": 1747,
    "discountPct": 59,
    "rating": 4.4,
    "reviews": 2984,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Kurta Set by H&M. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1143",
    "title": "Kids Kurta Set - Premium",
    "brand": "UCB Kids",
    "category": "kids",
    "price": 799,
    "mrp": 1278,
    "discountPct": 37,
    "rating": 3.9,
    "reviews": 2208,
    "image": "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Kurta Set - Premium by UCB Kids. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1144",
    "title": "Kids Kurta Set - Everyday",
    "brand": "Puma",
    "category": "kids",
    "price": 399,
    "mrp": 798,
    "discountPct": 50,
    "rating": 4.1,
    "reviews": 3165,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "description": "Kids Kurta Set - Everyday by Puma. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1145",
    "title": "Hydrating Face Serum",
    "brand": "L'Oreal",
    "category": "beauty",
    "price": 999,
    "mrp": 1598,
    "discountPct": 37,
    "rating": 4.5,
    "reviews": 4609,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Hydrating Face Serum by L'Oreal. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1146",
    "title": "Hydrating Face Serum - Premium",
    "brand": "L'Oreal",
    "category": "beauty",
    "price": 1999,
    "mrp": 4997,
    "discountPct": 59,
    "rating": 3.9,
    "reviews": 4494,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Hydrating Face Serum - Premium by L'Oreal. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1147",
    "title": "Hydrating Face Serum - Everyday",
    "brand": "Cetaphil",
    "category": "beauty",
    "price": 1299,
    "mrp": 2857,
    "discountPct": 54,
    "rating": 4.7,
    "reviews": 2639,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Hydrating Face Serum - Everyday by Cetaphil. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1148",
    "title": "Matte Lipstick",
    "brand": "Plum",
    "category": "beauty",
    "price": 1799,
    "mrp": 3957,
    "discountPct": 54,
    "rating": 4.1,
    "reviews": 3100,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Matte Lipstick by Plum. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1149",
    "title": "Matte Lipstick - Premium",
    "brand": "Cetaphil",
    "category": "beauty",
    "price": 999,
    "mrp": 1598,
    "discountPct": 37,
    "rating": 4.1,
    "reviews": 1402,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Matte Lipstick - Premium by Cetaphil. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1150",
    "title": "Matte Lipstick - Everyday",
    "brand": "Cetaphil",
    "category": "beauty",
    "price": 1799,
    "mrp": 3957,
    "discountPct": 54,
    "rating": 4.5,
    "reviews": 1184,
    "image": "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Matte Lipstick - Everyday by Cetaphil. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1151",
    "title": "Sunscreen SPF 50",
    "brand": "The Ordinary",
    "category": "beauty",
    "price": 1999,
    "mrp": 3198,
    "discountPct": 37,
    "rating": 4.3,
    "reviews": 3157,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Sunscreen SPF 50 by The Ordinary. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1152",
    "title": "Sunscreen SPF 50 - Premium",
    "brand": "The Ordinary",
    "category": "beauty",
    "price": 1799,
    "mrp": 3598,
    "discountPct": 50,
    "rating": 3.9,
    "reviews": 1527,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Sunscreen SPF 50 - Premium by The Ordinary. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1153",
    "title": "Sunscreen SPF 50 - Everyday",
    "brand": "Revlon",
    "category": "beauty",
    "price": 999,
    "mrp": 1998,
    "discountPct": 50,
    "rating": 3.8,
    "reviews": 476,
    "image": "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Sunscreen SPF 50 - Everyday by Revlon. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1154",
    "title": "Vitamin C Serum",
    "brand": "Plum",
    "category": "beauty",
    "price": 1999,
    "mrp": 3198,
    "discountPct": 37,
    "rating": 4.6,
    "reviews": 1432,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Vitamin C Serum by Plum. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1155",
    "title": "Vitamin C Serum - Premium",
    "brand": "Cetaphil",
    "category": "beauty",
    "price": 999,
    "mrp": 2197,
    "discountPct": 54,
    "rating": 3.9,
    "reviews": 1906,
    "image": "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Vitamin C Serum - Premium by Cetaphil. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1156",
    "title": "Vitamin C Serum - Everyday",
    "brand": "The Ordinary",
    "category": "beauty",
    "price": 1999,
    "mrp": 3998,
    "discountPct": 50,
    "rating": 3.8,
    "reviews": 2143,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Vitamin C Serum - Everyday by The Ordinary. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1157",
    "title": "Moisturizer Cream",
    "brand": "Minimalist",
    "category": "beauty",
    "price": 499,
    "mrp": 998,
    "discountPct": 50,
    "rating": 3.8,
    "reviews": 5031,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526178613552-2b45c6a0b1d2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Moisturizer Cream by Minimalist. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1158",
    "title": "Moisturizer Cream - Premium",
    "brand": "Lakme",
    "category": "beauty",
    "price": 2299,
    "mrp": 4598,
    "discountPct": 50,
    "rating": 4.3,
    "reviews": 3607,
    "image": "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Moisturizer Cream - Premium by Lakme. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1159",
    "title": "Moisturizer Cream - Everyday",
    "brand": "Revlon",
    "category": "beauty",
    "price": 2999,
    "mrp": 6597,
    "discountPct": 54,
    "rating": 3.9,
    "reviews": 148,
    "image": "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Moisturizer Cream - Everyday by Revlon. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1160",
    "title": "Face Wash Gel",
    "brand": "Nykaa",
    "category": "beauty",
    "price": 2499,
    "mrp": 6247,
    "discountPct": 59,
    "rating": 4.5,
    "reviews": 3874,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Face Wash Gel by Nykaa. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1161",
    "title": "Face Wash Gel - Premium",
    "brand": "L'Oreal",
    "category": "beauty",
    "price": 599,
    "mrp": 1078,
    "discountPct": 44,
    "rating": 4.1,
    "reviews": 3112,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Face Wash Gel - Premium by L'Oreal. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1162",
    "title": "Face Wash Gel - Everyday",
    "brand": "Minimalist",
    "category": "beauty",
    "price": 499,
    "mrp": 798,
    "discountPct": 37,
    "rating": 4.3,
    "reviews": 793,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Face Wash Gel - Everyday by Minimalist. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1163",
    "title": "Kajal Eyeliner",
    "brand": "Minimalist",
    "category": "beauty",
    "price": 599,
    "mrp": 958,
    "discountPct": 37,
    "rating": 4.5,
    "reviews": 3215,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975593359-4f4f6a3a2f6e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Kajal Eyeliner by Minimalist. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1164",
    "title": "Kajal Eyeliner - Premium",
    "brand": "L'Oreal",
    "category": "beauty",
    "price": 699,
    "mrp": 1258,
    "discountPct": 44,
    "rating": 3.8,
    "reviews": 4149,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Kajal Eyeliner - Premium by L'Oreal. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1165",
    "title": "Kajal Eyeliner - Everyday",
    "brand": "Nykaa",
    "category": "beauty",
    "price": 599,
    "mrp": 1198,
    "discountPct": 50,
    "rating": 4.3,
    "reviews": 2186,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Kajal Eyeliner - Everyday by Nykaa. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1166",
    "title": "Hair Serum",
    "brand": "Lakme",
    "category": "beauty",
    "price": 2499,
    "mrp": 4498,
    "discountPct": 44,
    "rating": 4.0,
    "reviews": 4053,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Hair Serum by Lakme. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1167",
    "title": "Hair Serum - Premium",
    "brand": "Plum",
    "category": "beauty",
    "price": 2999,
    "mrp": 5398,
    "discountPct": 44,
    "rating": 4.0,
    "reviews": 421,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975869016-16c9d4c7dc6a?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Hair Serum - Premium by Plum. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1168",
    "title": "Hair Serum - Everyday",
    "brand": "The Ordinary",
    "category": "beauty",
    "price": 1299,
    "mrp": 2598,
    "discountPct": 50,
    "rating": 4.6,
    "reviews": 1502,
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Hair Serum - Everyday by The Ordinary. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1169",
    "title": "Body Lotion",
    "brand": "Maybelline",
    "category": "beauty",
    "price": 1799,
    "mrp": 3957,
    "discountPct": 54,
    "rating": 4.3,
    "reviews": 4871,
    "image": "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Body Lotion by Maybelline. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1170",
    "title": "Body Lotion - Premium",
    "brand": "Minimalist",
    "category": "beauty",
    "price": 1999,
    "mrp": 3998,
    "discountPct": 50,
    "rating": 4.0,
    "reviews": 3142,
    "image": "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1520974090749-6c3b60d74f27?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c1ea60b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975750023-2560f72c0626?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Body Lotion - Premium by Minimalist. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1171",
    "title": "Body Lotion - Everyday",
    "brand": "Neutrogena",
    "category": "beauty",
    "price": 599,
    "mrp": 1317,
    "discountPct": 54,
    "rating": 3.9,
    "reviews": 5161,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Body Lotion - Everyday by Neutrogena. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1172",
    "title": "Perfume Spray",
    "brand": "Minimalist",
    "category": "beauty",
    "price": 1299,
    "mrp": 2598,
    "discountPct": 50,
    "rating": 4.3,
    "reviews": 4919,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Perfume Spray by Minimalist. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1173",
    "title": "Perfume Spray - Premium",
    "brand": "Maybelline",
    "category": "beauty",
    "price": 499,
    "mrp": 898,
    "discountPct": 44,
    "rating": 3.8,
    "reviews": 5166,
    "image": "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Perfume Spray - Premium by Maybelline. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  },
  {
    "id": "1174",
    "title": "Perfume Spray - Everyday",
    "brand": "Minimalist",
    "category": "beauty",
    "price": 1799,
    "mrp": 2878,
    "discountPct": 37,
    "rating": 3.8,
    "reviews": 1981,
    "image": "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
    "images": [
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60"
    ],
    "sizes": [
      "UK4",
      "UK5",
      "UK6",
      "UK7"
    ],
    "description": "Perfume Spray - Everyday by Minimalist. Comfortable, durable, and designed for daily wear. Static catalog item for demo storefront."
  }
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id) || null;
}

export function getProductsByCategory(slug: string) {
  if (slug === "all") return products;
  return products.filter((p) => p.category === slug);
}

export function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}
