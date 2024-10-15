import { homeImages } from '../../../../mocks/images';
import { useCarouselCard } from "../../../../hooks/useCarouselCard";
import { DefaultButton } from "../../../../components/buttons/defaultbutton/DefaultButton";

import "./carouselcard.scss";

export function CarouselCard() {
    const { images, currentImage, indexCurrentImage, handleChangeImage } = useCarouselCard(homeImages);
    return (
        <div className="carousel-card">
            <img 
                className="carousel-card-photo" 
                src={currentImage} 
                alt=""
            />
            <div className="carousel-card-buttons">
                {images.map((image) => {
                    return (
                        <button 
                            key={image.id} 
                            className={image.id === indexCurrentImage ? "circle-button-active" : "circle-button"} 
                            onClick={() => handleChangeImage(image.id)}>
                        </button>
                    )
                })}
            </div>
            <div className="carousel-card-text-area">
                <p className="carousel-card-text-area-paragraph">
                    Sempre em busca de encontrar sua melhor versão.
                </p>
                <div className="carousel-card-button-area">
                    <p className="carousel-card-button-area-paragraph">
                        Agende já seu horário
                    </p>
                    <DefaultButton 
                        text={"Agendar Horário"} 
                        href={"https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio."}
                    />
                </div>
            </div>
        </div>
    );
};