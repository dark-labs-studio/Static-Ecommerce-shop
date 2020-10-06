import { Link } from 'gatsby'
import React, { useState, useRef } from 'react'
import { useSprings, useTransition, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash-es/clamp'
import "./carousel.css"
import Carousel from 'react-responsive-carousel'

const CarouselIndex = () => {
    return (
        <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="assets/4.jpeg" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src="assets/5.jpeg" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src="assets/6.jpeg" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    );
}

export default CarouselIndex

