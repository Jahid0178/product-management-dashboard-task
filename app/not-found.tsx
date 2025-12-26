import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative mb-6">
        <h1 className="text-9xl font-extrabold text-blue-100 select-none">
          404
        </h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800 w-full">
          Page Not Found
        </p>
      </div>

      <div className="max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Oops! The product or page you are looking for doesn't exist.
        </h2>
        <p className="text-gray-500">
          It might have been moved, deleted, or the URL might be incorrect.
          Please check the address and try again.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition shadow-md"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
