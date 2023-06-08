import React, { useState } from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import img1 from '../assets/carousel/carrossel1.png'
import img2 from '../assets/carousel/carrossel2.png'
import img3 from '../assets/carousel/carrossel3.png'
import Button from "./buttons/Button";
import CardRound from "./cards/CardRound";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselStyles.css";
import user1 from '../assets/users/user1.png'
import user2 from '../assets/users/user2.png'
import user3 from '../assets/users/user3.png'
import user4 from '../assets/users/user4.png'

const imageData = [
    {
        alt: "image1",
        src: img1,
    },
    {
        alt: "image2",
        src: img2,
    },
    {
        alt: "image3",
        src: img3,
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(null);

    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
        <ReactCarousel
            className="carousel"
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={imageData[currentIndex]}
            onChange={handleChange}
            showThumbs={false}
            showStatus={false}
        >
            {imageData.map((image) => (
                <div key={image.alt} className="carousel-content">
                    <div className="container-inside-carousel">
                        <div className="about-concurso">

                            <h3>Nome do Concurso</h3>

                            <div className="carousel-row">
                                <div className="carousel-col">
                                    <CardRound src={user1} />
                                    <p>Matias</p>
                                    <p>1250 votos</p>
                                </div>
                                <div className="carousel-col">
                                    <CardRound src={user2} />
                                    <p>Maria</p>
                                    <p>1837 votos</p>
                                </div>
                                <div className="carousel-col">
                                    <CardRound src={user3} />
                                    <p>Julio Lopes</p>
                                    <p>549 votos</p>
                                </div>
                            </div>

                            <div className="carousel-row-button">
                                <Button
                                    type="button"
                                    variant='contained'
                                >
                                    Ver Concurso
                                </Button>
                            </div>
                        </div>
                    </div>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </ReactCarousel>
    );
}