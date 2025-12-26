"use client";

import { useEffect } from "react";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-blue-50 flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center min-w-[600px] min-h-[400px] p-6 bg-white border border-red-100 rounded-lg shadow-sm">
          <div className="bg-red-50 p-4 rounded-full mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Something went wrong!
          </h2>
          <p className="text-gray-500 mb-6 text-center max-w-md">
            {error.message ||
              "We encountered an error while loading the products."}
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium cursor-pointer"
          >
            Try again
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalError;
