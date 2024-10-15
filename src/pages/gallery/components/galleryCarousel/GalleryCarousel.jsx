import { motion } from 'framer-motion';
import { galleryImages } from '../../../../mocks/images';
import { useCarousel } from '../../../../hooks/useCarousel';

import "./gallerycarousel.scss";

export function GalleryCarousel() {
    const { width, carouselRef } = useCarousel();
    return (
        <motion.div ref={carouselRef} className='carousel'>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className='inner-carousel'>
                {galleryImages.map(image => {
                    return (
                        <motion.div key={image.id} className='carousel-item'> 
                            <img className='carousel-image' src={image.src} alt="" />
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    );
};