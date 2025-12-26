import Image from "next/image";
import Link from "next/link";
import { Product } from "@/typescript/interface";

interface Args {
  products: Product[];
}

const ProductsTable = async ({ products }: Args) => {
  return (
    <table className="table-auto border-collapse border border-gray-200 min-w-full bg-white">
      <thead>
        <tr>
          <th className="text-left border border-gray-200 p-2">Product</th>
          <th className="text-left border border-gray-200 p-2">Price</th>
          <th className="text-left border border-gray-200 p-2">Category</th>
          <th className="text-left border border-gray-200 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border border-gray-200 p-2">
              <div className="flex items-center gap-2">
                <Image
                  src={product.thumbnail || "/placeholder.png"}
                  alt={"Product"}
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <h3>{product.title}</h3>
                </div>
              </div>
            </td>
            <td className="border border-gray-200 p-2">${product.price}</td>
            <td className="border border-gray-200 p-2">{product.category}</td>
            <td className="border border-gray-200 p-2">
              <Link
                href={`/products/${product.id}`}
                className="hover:underline"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
