
'use client'

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const carouselImages = [
    { src: '/assets/images/hero-1.svg', alt: 'Smart Watch' },
    { src: '/assets/images/hero-2.svg', alt: 'Bag' },
    { src: '/assets/images/hero-3.svg', alt: 'Lamp' },
    { src: '/assets/images/hero-4.svg', alt: 'Air Fryer' },
    { src: '/assets/images/hero-5.svg', alt: 'Chair' },
]

const HeroCarousel = () => {
    return (
        <div>
            <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
            >
                {carouselImages.map((image, key) =>
                    <Image
                        key={key}
                        className='object-contain'
                        src={image.src}
                        alt={image.alt}
                        width={484}
                        height={484}
                    />
                )}
            </Carousel>
        </div>
    )
}

export default HeroCarousel