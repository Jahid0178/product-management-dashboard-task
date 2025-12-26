import { ProductResponse, Product } from "@/typescript/interface";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL as string;

export const getProducts = async (
  query: string,
  category?: string,
  limit: number = 10,
  page: number = 1
): Promise<ProductResponse<Product[]>> => {
  const skip = (Math.max(1, page) - 1) * limit;
  let url = `${BASE_URL}/products`;

  if (category) {
    url += `/category/${category}?limit=${limit}&skip=${skip}`;
  } else if (query) {
    url += `/search?q=${query}&limit=${limit}&skip=${skip}`;
  } else {
    url += `?limit=${limit}&skip=${skip}`;
  }

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Failed to fetch products");

  return await response.json();
};

export const getProductCategories = async (): Promise<
  {
    slug: string;
    name: string;
    url: string;
  }[]
> => {
  const response = await fetch(`${BASE_URL}/products/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return await response.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return await response.json();
};
