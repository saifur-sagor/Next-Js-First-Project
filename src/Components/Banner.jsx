"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
    title:
      "Delicious Food Delivered To Your <span class='text-yellow-400'>Door</span>",
    description:
      "Experience the best flavors from our top chefs with fresh ingredients.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=2070",
    title:
      "Fresh <span class='text-yellow-400'>Healthy Salads</span> & Organic Bowls",
    description:
      "Keep yourself fit and energized with our organic menu selections.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070",
    title:
      "Authentic <span class='text-yellow-400'>Italian Pizzas</span> & Pasta",
    description: "The real taste of Italy is now just one click away from you.",
  },
];

export default function Banner() {
  return (
    <div className="w-full h-[65vh] relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center transition-transform duration-[2000ms] scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                <div className="container mx-auto px-6 lg:px-20">
                  <div className="max-w-2xl space-y-5">
                    {/* Badge/Small Text */}
                    <p className="text-yellow-400 font-bold tracking-widest uppercase animate-bounce text-sm">
                      Special Offer Now Available
                    </p>

                    {/* Main Title with Animation */}
                    <h1
                      className="text-4xl lg:text-6xl font-black text-white leading-tight transition-all duration-700"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />

                    {/* Description */}
                    <p className="text-gray-200 text-lg lg:text-xl max-w-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #facc15 !important;
          width: 24px !important;
          border-radius: 10px !important;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
