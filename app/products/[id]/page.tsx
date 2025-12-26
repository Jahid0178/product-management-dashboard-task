import { getProductById } from "@/actions/product.action";
import ProductGallery from "@/components/product/ProductGallery";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";

interface Args {
  params: Promise<{ id: string }>;
}

const SingleProductPage = async ({ params }: Args) => {
  const { id } = await params;
  const product = await getProductById(id);
  return (
    <section className="p-4 bg-blue-50 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductGallery images={product.images} />
        <div className="space-y-6 bg-white p-4 rounded">
          <span className="inline-flex items-center gap-2 bg-green-500 text-white px-2 py-1 rounded">
            <span>Stock:</span>
            <span>{product.availabilityStatus}</span>
          </span>
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <span className="inline-flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStarHalf className="text-yellow-400" />
                </span>{" "}
                {product.rating}
              </span>
              <span className="text-xs text-gray-500">
                ({product.reviews.length}) Reviews
              </span>
            </div>
          </div>
          <div>
            <p className="text-3xl font-medium">
              ${product.price}{" "}
              <small className="text-xs text-red-400">
                ({product.discountPercentage}%Off)
              </small>
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="inline-flex items-center gap-2">
              <IoIosCheckmark
                size={24}
                color="#00c950"
              />
              {product.brand}
            </li>
            <li className="inline-flex items-center gap-2">
              <IoIosCheckmark
                size={24}
                color="#00c950"
              />
              {product.availabilityStatus}
            </li>
            <li className="inline-flex items-center gap-2">
              <IoIosCheckmark
                size={24}
                color="#00c950"
              />
              {product.warrantyInformation}
            </li>
            <li className="inline-flex items-center gap-2">
              <IoIosCheckmark
                size={24}
                color="#00c950"
              />
              {product.shippingInformation}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
