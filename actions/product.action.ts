import { ProductResponse, Product } from "@/typescript/interface";

export const getProducts = async (
  query: string
): Promise<ProductResponse<Product[]>> => {
  const response = await fetch(
    `https://dummyjson.com/products${query ? `/search?q=${query}` : ""}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  return await response.json();
};
