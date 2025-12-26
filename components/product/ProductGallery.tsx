"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

interface Args {
  images: string[];
}

const ProductGallery = ({ images }: Args) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="w-full bg-white rounded"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={image}
            width={1000}
            height={1000}
            className="w-full"
            priority
            loading="eager"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductGallery;
