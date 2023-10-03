import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
    const images = [
        "/Assets/about.jpg",
        "/Assets/camera.jpeg",
        "/Assets/credit.jpg",
        "/Assets/building.jpeg",
        "/Assets/car.png",
        "/Assets/workspace.jpeg",
        "/Assets/iphone.png",
        "/Assets/house3.jpg"
    ];

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={3}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
            >
                {images.map((img, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className='h-[400px] overflow-hidden'>
                                <img
                                    src={`${img}`}
                                    className='w-full h-full object-cover'
                                    alt='image'
                                />

                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
