import SearchBar from "@/components/common/SearchBar/SearchBar";
import ProductsTable from "@/components/product/ProductsTable";

interface Args {
  searchParams: Promise<{
    query: string;
  }>;
}

export default async function ProductsPage({ searchParams }: Args) {
  const { query } = await searchParams;
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-blue-50 p-4">
      <div className="space-y-4 mb-8">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex justify-between items-center">
          <SearchBar placeholder="Search by product title" />
          <p>Filter</p>
        </div>
      </div>
      <ProductsTable query={query} />
    </section>
  );
}
