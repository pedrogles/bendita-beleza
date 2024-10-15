import { useState } from "react";

export function useCarouselCard(images) {
    const [carouselData, setCarouselData] = useState({
        indexCurrentImage: 0,
        currentImage: images[0].src
    });
    const { indexCurrentImage, currentImage } = carouselData;
    const handleChangeImage = (i) => {
        setCarouselData(prevData => ({...prevData, indexCurrentImage: i, currentImage: images[i].src}));
    };
    return { 
        images, 
        currentImage, 
        indexCurrentImage, 
        handleChangeImage 
    };
};