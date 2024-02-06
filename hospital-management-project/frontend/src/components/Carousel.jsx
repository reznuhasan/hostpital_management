import React from 'react'
import { Pagination,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../Styles/Carousel.css"
import slide1 from '../assets/slider1.jpg';
import slide2 from '../assets/slider2.jpg'
import slide3 from '../assets/slider3.jpg'
import slide4 from '../assets/slider4.jpg'
import slide5 from '../assets/slider5.jpg'
import slide6 from '../assets/slider6.jpg'
import slide7 from '../assets/slider7.jpg'
import slide8 from '../assets/slider8.jpeg'
const Carousel = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay:3500,
                    disableOnInteraction: false,
                  }}
                  style={{"height":"570px"}}
            >
                <SwiperSlide>
                    <img src={slide1} style={{"height":"500px"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} style={{"height":"500px"}}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} style={{"height":"500px"}}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} style={{"height":"500px"}}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} style={{"height":"500px"}}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} style={{"height":"500px"}}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} style={{"height":"500px"}}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide8} style={{"height":"500px"}}></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel