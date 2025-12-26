const ProductsTableSkeleton = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-sm">
      <table className="table-auto border-collapse min-w-full">
        <thead>
          <tr className="bg-white">
            <th className="text-left border border-gray-200 p-2 font-bold">
              Product
            </th>
            <th className="text-left border border-gray-200 p-2 font-bold">
              Price
            </th>
            <th className="text-left border border-gray-200 p-2 font-bold">
              Category
            </th>
            <th className="text-left border border-gray-200 p-2 font-bold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="animate-pulse">
          {[...Array(8)].map((_, index) => (
            <tr key={index}>
              <td className="border border-gray-200 p-2">
                <div className="flex items-center gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-200 rounded shrink-0" />
                  <div className="h-4 bg-gray-100 rounded w-40" />
                </div>
              </td>

              <td className="border border-gray-200 p-2">
                <div className="h-4 bg-gray-100 rounded w-16" />
              </td>

              <td className="border border-gray-200 p-2">
                <div className="h-4 bg-gray-100 rounded w-24" />
              </td>

              <td className="border border-gray-200 p-2">
                <div className="h-4 bg-gray-100 rounded w-10" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTableSkeleton;
