import { ServiceCard } from "../../components/cards/servicecard/ServiceCard";
import { PageTitle, SmallParagraph, SubTitle } from "../../components/texts/Texts";

import { services, treatments } from "../../utils/service";
import { motion } from 'framer-motion';

import "./services.scss";

import { useCarousel } from "../../hooks/useCarousel";

export default function Services() {
    const { carouselRef: carouselRef1, width: width1  } = useCarousel(); 
    const { carouselRef: carouselRef2, width: width2 } = useCarousel(); 
    return (
        <main id="services-page">
            <PageTitle name="Serviços" />
            <motion.div ref={carouselRef1} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width1}} className='inner-carousel'>
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

            {/* Tratamentos */}
            <SubTitle name="Tratamentos" />
            <motion.div ref={carouselRef2} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width2}} className='inner-carousel'>
                    {treatments.map((service, key) => {
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
        </main>
    )
}