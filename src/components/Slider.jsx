import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';


const Slider = () => {
    return (
        <Swiper className='container mx-auto'
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <div className="relative">
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://blog.woodpeckerscrafts.com/wp-content/uploads/2020/08/woodpeckers-craft-wood-scaled.jpg" alt="" />
                    <div className="absolute top-0 left-0 p-10 mt-[0px] lg:mt-[100px]  text-white text-center ">
                        <h1 className="text-4xl font-bold">Discover artisanal wonders at RusticChic Crafts.</h1>
                        <p className="text-sm lg:text-lg">Explore our curated collection of unique jute and wooden crafts, blending rustic charm with chic elegance. Find the perfect piece to add character to your space or give as a thoughtful gift. Embrace craftsmanship with us today.</p>
                        <button className='btn mt-4 bg-[#BA4A00] border-[#BA4A00] text-white'>Know more About us</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://m.media-amazon.com/images/I/81SxZ9+yoEL._AC_UF1000,1000_QL80_.jpg" alt="" />
                    <div className="absolute top-0 left-0 p-10 text-center mt-[0px] lg:mt-[100px] text-white">
                    <h1 className="text-4xl font-bold">Discover artisanal wonders at RusticChic Crafts.</h1>
                        <p className="text-sm lg:text-lg">Explore our curated collection of unique jute and wooden crafts, blending rustic charm with chic elegance. Find the perfect piece to add character to your space or give as a thoughtful gift. Embrace craftsmanship with us today.</p>
                        <button className='btn mt-4 bg-[#BA4A00] border-[#BA4A00] text-white'>Know more About us</button>
                    </div>
                   
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://cdn.pixabay.com/photo/2019/10/04/05/42/workshop-4524838_1280.jpg" alt="" />
                    <div className="absolute top-0 left-0 p-10 mt-[0px] lg:mt-[100px]  text-center text-white">
                    <h1 className="text-4xl font-bold">Discover artisanal wonders at RusticChic Crafts.</h1>
                        <p className=" text-sm lg:text-lg">Explore our curated collection of unique jute and wooden crafts, blending rustic charm with chic elegance. Find the perfect piece to add character to your space or give as a thoughtful gift. Embrace craftsmanship with us today.</p>
                        <button className='btn mt-4 bg-[#BA4A00] border-[#BA4A00] text-white'>Know more About us</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
