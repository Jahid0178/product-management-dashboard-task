"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
}: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const getVisiblePages = () => {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (currentPage <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (currentPage >= totalPages - 2)
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 bg-white px-4 py-4 sm:px-6">
      <div className="text-center sm:text-left">
        <p className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to{" "}
          <span className="font-medium">
            {Math.min(currentPage * 10, totalItems)}
          </span>{" "}
          of <span className="font-medium">{totalItems}</span> results
        </p>
      </div>

      <div className="flex justify-center overflow-x-auto w-full sm:w-auto">
        <ul
          className="isolate inline-flex -space-x-px rounded-md shadow-sm bg-white"
          aria-label="Pagination"
        >
          {getVisiblePages().map((page, index) => {
            const isActive = page === currentPage;

            if (page === "...") {
              return (
                <li
                  key={`ellipsis-${index}`}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300"
                >
                  ...
                </li>
              );
            }

            return (
              <li key={page}>
                <Link
                  href={createPageURL(page as number)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "z-10 bg-blue-500 text-white ring-1 ring-inset ring-blue-500"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
