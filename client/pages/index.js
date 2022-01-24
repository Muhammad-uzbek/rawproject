import React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperComponent from '../components/swiper';
import Img1 from '../assets/images/picture1.jpg';
import Img2 from '../assets/images/picture2.jpg';
import Img3 from '../assets/images/picture3.jpg';
import Img4 from '../assets/images/picture4.jpg';
import Img5 from '../assets/images/picture5.jpg';
import Img6 from '../assets/images/picture6.jpg';
import Img7 from '../assets/images/picture7.jpg';
import Img8 from '../assets/images/picture8.jpg';
import Img9 from '../assets/images/picture9.jpg';
// Import Swiper styles

export default function Home() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/getallslides', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setSlides(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <Head>
        <title>Zamin Mobile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Информация о тарифах и пакетах для мобильного интернета Zamin Mobile" />
        <meta name="keywords" content="мобильного интернета, Zamin Mobile, тарифи" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwiperComponent slideItems={slides}/>
    </div>
  )
}