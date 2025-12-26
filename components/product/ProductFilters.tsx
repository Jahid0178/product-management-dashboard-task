"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Args {
  categories: {
    slug: string;
    name: string;
    url: string;
  }[];
}

const ProductFilters = ({ categories }: Args) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    const selectedCategory = e.target.value;
    if (selectedCategory === "") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <select
      className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 outline-none"
      onChange={handleSelect}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option
          key={category.slug}
          value={category.slug}
        >
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default ProductFilters;
