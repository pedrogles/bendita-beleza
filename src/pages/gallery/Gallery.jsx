import { motion } from 'framer-motion';
import { PageTitle } from "../../components/texts/Texts";
import { gallery_images } from "../../utils/images";
import { FaInstagram } from "react-icons/fa";

import "./gallery.scss";
import { useCarousel } from '../../hooks/useCarousel';

export default function Gallery() {
    const { width, carouselRef } = useCarousel();
    return (
        <main id="gallery-page">
            <PageTitle name="Galeria de Imagens" />
            <motion.div ref={carouselRef} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className='inner-carousel'>
                    {gallery_images.map(image => {
                        return (
                            <motion.div key={image.id} className='carousel-item'> 
                                <img className='carousel-image' src={image.src} alt="" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <a className='insta-redirect-anchor' href="https://www.instagram.com/benditabelezarv/" target="_blank" rel="noreferrer" alt="">
                <p className='anchor-paragraph'>Arraste para o lado ou acesse nosso Instagram para ver mais fotos e videos.</p>
                <FaInstagram className='insta-icon' alt=""/>
                <p className='anchor-paragraph'>Clique aqui</p>
            </a>
        </main>
    )
}