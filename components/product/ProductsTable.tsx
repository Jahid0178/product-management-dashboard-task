import Image from "next/image";
import Link from "next/link";
import { Product } from "@/typescript/interface";

interface Args {
  products: Product[];
}

const ProductsTable = async ({ products }: Args) => {
  return (
    <div className="relative w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <table className="min-w-[720px] w-full table-auto text-left bg-white rounded-lg">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">Product</th>
              <th className="border border-gray-200 p-2">Price</th>
              <th className="border border-gray-200 p-2">Category</th>
              <th className="border border-gray-200 p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="whitespace-nowrap"
              >
                <td className="border border-gray-200 p-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={product.thumbnail || "/placeholder.png"}
                      alt="Product"
                      width={50}
                      height={50}
                      className="rounded shrink-0"
                    />
                    <span className="text-sm md:text-base">
                      {product.title}
                    </span>
                  </div>
                </td>

                <td className="border border-gray-200 p-2">${product.price}</td>

                <td className="border border-gray-200 p-2">
                  {product.category}
                </td>

                <td className="border border-gray-200 p-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
