import React from "react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


interface Slide {
  image: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  return (
    <Carousel infiniteLoop showArrows={true} showThumbs={false}>
      {slides.map((slide, index) => (
        <div key={index}>
          <Image src={slide.image} height="auto" width="800px"/>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
