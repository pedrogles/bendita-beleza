import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "../../components/cards/servicecard/ServiceCard";
import { PageTitle, SmallParagraph, SubTitle } from "../../components/texts/Texts";

import { services, treatments } from "../../utils/service";
import { motion } from 'framer-motion';

import "./services.scss";

export default function Services() {
    const [carouselWidth_1, setCarouselWidth_1] = useState(0);
    const [carouselWidth_2, setCarouselWidth_2] = useState(0);
    const carousel_1 = useRef();
    const carousel_2 = useRef();
    useEffect(() => {
        setCarouselWidth_1(carousel_1.current.scrollWidth - carousel_1.current.offsetWidth);
        setCarouselWidth_2(carousel_2.current.scrollWidth - carousel_2.current.offsetWidth);
    }, [])
    return (
        <main id="services-page">
            <PageTitle name="Serviços" />
            <motion.div ref={carousel_1} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -carouselWidth_1}} className='inner-carousel'>
                    {services.map((service, key) => {
                        return (
                            <motion.div key={key}> 
                                <ServiceCard 
                                    photo={service.image}
                                    title={service.title}
                                    paragraph={service.paragraph}
                                />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <SmallParagraph name="Navegue entre os cards arrastando para o lado"/>

            {/* Tratamentos */}
            <SubTitle name="Tratamentos" />
            <motion.div ref={carousel_2} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -carouselWidth_2}} className='inner-carousel'>
                    {treatments.map((service, key) => {
                        return (
                            <motion.div key={key}> 
                                <ServiceCard 
                                    photo={service.image}
                                    title={service.title}
                                    paragraph={service.paragraph}
                                />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <SmallParagraph name="Navegue entre os cards arrastando para o lado"/>
        </main>
    )
}