import { useRef } from 'react'
import { CardRound, Carousel } from '../../../components'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../../../components'
import Slider from 'react-slick'
import logoImg from '../../../assets/logo/mm_logo.jpeg'
import imgContent from '../../../assets/carousel/carrossel2.png'
import './StartPageStyles.css'

import userImg1 from '../../../assets/users/user1.png'
import userImg2 from '../../../assets/users/user2.png'
import userImg3 from '../../../assets/users/user3.png'

import img1 from '../../../assets/carousel/carrossel1.png'
import img2 from '../../../assets/carousel/carrossel2.png'
import img3 from '../../../assets/carousel/carrossel3.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'

const StartPage = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const sliderRef = useRef(null)

    const onLeftArrowClick = () => {
        sliderRef.current.slickPrev();
    }

    const onRightArrowClick = () => {
        sliderRef.current.slickNext();
    }

    return (
        <div className="start-page-container">

            <header className="start-header">
                <div className="start-header-img-container">
                    <img src={logoImg} alt="Logo MM" />
                </div>

                <nav className="start-navbar-container">
                    <ul className="start-navbar">
                        <li className="start-nav-item start-active-nav-item">
                            <Link className="start-nav-item-link">
                                Home
                            </Link>
                        </li>
                        <li className="start-nav-item">
                            <Link className="start-nav-item-link">
                                Contact
                            </Link>
                        </li>
                        <li className="start-nav-item">
                            <Link className="start-nav-item-link">
                                About us
                            </Link>
                        </li>
                        <li className="start-nav-item">
                            <Link className="start-nav-item-link">
                                Reading
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>


            <section className="start-carousel">
                <div className="slider-container">

                    <div className="left-arrow arrows" onClick={() => { onLeftArrowClick() }} >
                        <div className="arrow">
                            <BsChevronLeft />
                        </div>
                    </div>

                    <div className="right-arrow arrows" onClick={() => { onRightArrowClick() }} >
                        <div className="arrow">
                            <BsChevronRight />
                        </div>
                    </div>

                    <Slider
                        ref={sliderRef}
                        className='slider'
                        infinite={true}
                        dots={false}
                        speed={3000}
                        slidesToShow={1}
                        slidesToScroll={1}
                        arrows={false}
                    >
                        <div className="slide-img-container">
                            <img src={img2} alt="" className="slider-img" />
                        </div>

                        <div className="slide-img-container">
                            <img src={img1} alt="" className="slider-img" />
                        </div>

                        <div className="slide-img-container">
                            <img src={img3} alt="" className="slider-img" />
                        </div>
                    </Slider>
                </div>

                <div className="start-carousel-card-container">
                    <div className="start-carousel-card"></div>
                    <div className="start-carousel-card"></div>
                    <div className="start-carousel-card"></div>
                    <div className="start-carousel-card"></div>
                </div>
            </section>

            <main className="start-main">

                <section className="section-container">
                    <h3 className="title-section">
                        <span>Mais Votados</span>
                    </h3>

                    <Slider className='static-carousel' {...settings}>
                        <div className="static-carosel-card black"></div>
                        <div className="static-carosel-card"></div>
                        <div className="static-carosel-card red"></div>
                        <div className="static-carosel-card"></div>
                        <div className="static-carosel-card red"></div>
                        <div className="static-carosel-card"></div>
                        <div className="static-carosel-card black"></div>
                        <div className="static-carosel-card"></div>
                        <div className="static-carosel-card red"></div>
                        <div className="static-carosel-card"></div>
                    </Slider>

                </section>

                <section className="section-container">
                    <h3 className="title-section">
                        <span>Top 3 da semana</span>
                    </h3>

                    <div className="content-sg">

                        <div className="cont-card-round">
                            <CardRound src={userImg1} />
                            <div className="card-round-detail">
                                <h5>Thunder</h5>
                                <p>Imagine Dragons</p>
                            </div>
                        </div>

                        <div className="cont-card-round">
                            <CardRound src={userImg2} />
                            <div className="card-round-detail">
                                <h5>Casa de Madeira</h5>
                                <p>Calema</p>
                            </div>
                        </div>

                        <div className="cont-card-round">
                            <CardRound src={userImg3} />
                            <div className="card-round-detail">
                                <h5>Bat Out Of Hell</h5>
                                <p>Meatloaf</p>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="section-container">
                    <h3 className="title-section">
                        <span>Recentes</span>
                    </h3>

                    <Slider className='static-carousel' {...settings}>
                        <div className="static-carosel-card black"></div>
                        <div className="static-carosel-card"></div>
                        <div className="static-carosel-card red"></div>
                        <div className="static-carosel-card"></div>
                        <div className="static-carosel-card red"></div>
                        <div className="static-carosel-card"></div>
                        <div className="static-carosel-card black"></div>
                        <div className="static-carosel-card"></div>
                        <div className="static-carosel-card red"></div>
                        <div className="static-carosel-card"></div>
                    </Slider>

                </section>

                <section className="content-img">
                    <img src={imgContent} alt="Image Content" className="img-content" />

                    <div className="content">
                        <div className="empty-space"></div>
                        <h3 className="content-title c-item">Microfone Milionario</h3>
                        <div className="content-description c-item">Vote em concursos e ganhe dinheiro</div>
                        <div className="content-text c-item">
                            Aqui você encontra muitos concuros para participar e músicas para desfrutar.
                            Com videoclipes disponíveis, uma vasta gama de estilos musicais e diversos artistas,
                            incluindo os seus favoritos.
                        </div>
                        <div className="content-button c-item">
                            <ButtonLink
                                variant='contained'
                                to='/login'
                            >
                                Entrar
                            </ButtonLink>
                        </div>
                        <div className="content-button c-item">
                            <ButtonLink
                                variant='outlined'
                                to='/register'
                            >
                                Criar Conta
                            </ButtonLink>
                        </div>
                        <div className="empty-space"></div>
                    </div>
                </section>

            </main>

            <footer>
                
            </footer>

        </div>
    )
}

export default StartPage;
