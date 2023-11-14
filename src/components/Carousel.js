import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
import { Data } from './Data'

const Carousel = () => {

    return (
        <div className='SliderPro'>
            <Slider
                autoplay
                autoplaySpeed={2500}
                dots
                infinite
            >
                {
                    Data.map(item => (
                        <img
                            className='SliderImg'
                            src={item}
                            alt="SliderImages"

                        />
                    ))
                }
            </Slider>
        </div>

    )
}

export default Carousel