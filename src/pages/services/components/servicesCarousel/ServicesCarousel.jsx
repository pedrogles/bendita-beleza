import { ServiceCard } from '../';
import { motion } from 'framer-motion';
import { useCarousel } from "../../../../hooks/useCarousel";
import { SmallParagraph } from '../../../../components/texts/Texts';

import "./servicescarousel.scss";

export function ServicesCarousel({ services }) {
    const { carouselRef, width } = useCarousel(); 
    return (
        <div className='service-carousel'>
            <motion.div ref={carouselRef} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className='inner-carousel'>
                    {services.map((service, key) => {
                        return (
                            <motion.div key={key}> 
                                <ServiceCard 
                                    photo={service.image}
                                    title={service.title}
                                    paragraph={service.paragraph}
                                    href={service.link}
                                />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <SmallParagraph name="Navegue entre os cards arrastando para o lado"/>
        </div>
    );
};