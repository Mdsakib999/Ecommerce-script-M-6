import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const brands = [
  { id: 1, name: "Pilot" },
  { id: 2, name: "Staedtler" },
  { id: 3, name: "Faber-Castell" },
  { id: 4, name: "Parker" },
  { id: 5, name: "Moleskine" },
  { id: 6, name: "Post-it" },
  { id: 7, name: "Scotch" },
  { id: 8, name: "Fellowes" },
  { id: 9, name: "Pentel" },
  { id: 10, name: "Uni-ball" },
  { id: 11, name: "Sharpie" },
  { id: 12, name: "Swingline" },
];

export default function Brands() {
  return (
    <div className="py-4 md:py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-12">Trusted Brands</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0, // continuous scroll
          disableOnInteraction: false,
        }}
        speed={3000} // smooth speed
        className="w-full mx-auto"
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-1 md:p-4 text-lg font-semibold">
              {brand.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
