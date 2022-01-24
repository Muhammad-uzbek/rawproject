import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards, Navigation } from "swiper";
import 'swiper/css';
import { AllWrap} from "./swiper.e"
import styles from "./styles.js";
import 'swiper/css/navigation';


SwiperCore.use([EffectCards], Navigation);

export default function SwiperComponent(props) {
    const isItLittleText = (text) => {
        if (text.length > 120) {
            return text.slice(0, 120) + "...";
        } else {
            return text;
        }
    }
    return (
        <AllWrap>
            <div className="navbar">Zamin Mobile</div>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                autoplay={true}
                autoplaytimeout={2000}
                modules={[EffectCards, Navigation]}
                navigation
                effect={"cards"}
            >
                {
                    props.slideItems.map(slide=>{
                        return(
                            <SwiperSlide key={slide.id} style={{background:slide.randomColor}||'green'}>
                                <Image 
                                src={slide.image}
                                width={420}
                                height={300}
                                />
                                <div className="text-block">
                                    <h3 style={styles.swiperSlideTitle}>{slide.title}</h3>
                                    <p style={styles.swiperSlideDescription}>{isItLittleText(slide.description)}</p>
                                    <div className="link-btn">
                                        <Link href={slide.link}>
                                        Подробнее
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </AllWrap>
    );
}

{/* <Swiper
            style={styles.swiper}
            paginationClickable={true}
            centeredSlides={true}
            modules={[EffectCoverflow]}
            coverflow = {{
                rotate: 0,
                stretch: 100,
                depth: 150,
                modifier: 1.5,
                slideShadows : false,
            }}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={true}
            speed={1000}
            autoplaySpeed={3000}
            pagination={{ clickable: true }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            pagination = {{
                el: '.swiper-pagination',
                type: 'bullets',
            }}
            onInit={swiper => { console.log(swiper.realIndex); }}
            onSlideChange={(swiper) => console.log(swiper.realIndex)}
            >
                {props.sliderItems.map(slide => (
                    <SwiperSlide key={slide.id}
                    style={styles.swiperSlide}
                    >
                        <Image src={slide.image} 
                        layout={"fill"} 
                        style={styles.swiperSlideImage}
                        />
                        <div style={styles.textBlock}>
                            <h3 style={styles.swiperSlideTitle}>{slide.title}</h3>
                            <p style={styles.swiperSlideDescription}>{slide.description}</p>
                            <button style={styles.textButton}>Подробнее</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}