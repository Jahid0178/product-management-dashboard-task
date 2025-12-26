import { getProductCategories, getProducts } from "@/actions/product.action";
import Pagination from "@/components/common/Pagination/Pagination";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import ProductFilters from "@/components/product/ProductFilters";
import ProductsTable from "@/components/product/ProductsTable";
import ProductsTableSkeleton from "@/components/shared/ProductsTableSkeleton";
import { PAGE_LIMIT } from "@/constants";
import { Suspense } from "react";

interface Args {
  searchParams: Promise<{
    query: string;
    page?: string;
    limit?: string;
    category: string;
  }>;
}

export default async function ProductsPage({ searchParams }: Args) {
  const {
    query = "",
    page = "1",
    limit = PAGE_LIMIT,
    category = "",
  } = await searchParams;
  const categories = await getProductCategories();
  const { products, total } = await getProducts(
    query,
    category,
    Number(limit),
    Number(page)
  );

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-blue-50 p-4 overflow-x-hidden">
      <div className="space-y-4 mb-8">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <SearchBar placeholder="Search by product title" />
          <ProductFilters categories={categories} />
        </div>
      </div>
      <Suspense
        key={`${query}-${category}-${page}`}
        fallback={<ProductsTableSkeleton />}
      >
        <ProductsTable products={products} />
      </Suspense>
      <Pagination
        currentPage={Number(page)}
        totalPages={Math.ceil(total / Number(limit))}
        totalItems={total}
      />
    </section>
  );
}
