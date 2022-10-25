import {motion} from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import { BsInstagram } from 'react-icons/bs';

import images from '../../../carousel';

import '../../../style/services/carousel/carousel.scss';

function Carousel() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    }, [])

    return (
        <div id="carousel">
            <div className='title'>
                <h3>Fotos</h3>
            </div>
            <motion.div ref={carousel} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className='inner-carousel'>
                    {images.map(image => {
                        return (
                            <motion.div key={image} className='item'> 
                                <img src={image} alt="Carousel de imagens." />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <motion.div className='instagram'>
                <a href="https://www.instagram.com/benditabelezarv/" target="_blank" rel="noreferrer" alt="Link para Instagram.">
                    <h4>Arraste para o lado ou acesse nosso Instagram para ver mais fotos.</h4>
                    <p>Clique aqui.</p>
                    <BsInstagram className='icon' alt="Ícone do Instagram"/>
                </a>
            </motion.div>
            
        </div>
    )
};

export default Carousel;