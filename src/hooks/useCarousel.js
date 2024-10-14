import { useEffect, useRef, useState } from "react";

export function useCarousel() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();
    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }, [])
    return { width, carouselRef };
};