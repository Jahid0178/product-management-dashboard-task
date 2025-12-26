"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useDebounceFunction from "@/hooks/useDebounceFunction";

interface Args {
  placeholder: string;
}

const SearchBar = ({ placeholder }: Args) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebounceFunction((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term.trim());
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <div className="w-full md:w-auto">
      <input
        type="search"
        className="block w-full px-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 outline-none"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchBar;
