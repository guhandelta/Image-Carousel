import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import { CarouselImages } from './CarouselImages';

const ImageSlider = ({CarouselImages}) => {
    const [current, setCurrent] = useState(0);
    const length = CarouselImages.length;

    return (
        <section className="carousel">
            <FaArrowAltCircleLeft className="left-arrow" />
            <FaArrowAltCircleRight className="right-arrow" />
            {CarouselImages.map((images, i)=> <img src={images.image} alt="Carousel Image"/>)}
        </section>
    )
}

export default ImageSlider
