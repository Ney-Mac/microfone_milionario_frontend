import React from "react";
import {
    AudioPlayer,
    HeaderCliente,
    Carousel,
    Card,
} from "../../components";
import './DashboardClienteStyles.css'
import img1 from '../../assets/carousel/carrossel1.png'
import img2 from '../../assets/carousel/carrossel2.png'
import img3 from '../../assets/carousel/carrossel3.png'
import audio1 from '../../assets/audio/cannon_in_d.mp3'

const DashboardCliente = () => {

    return (
        <div className="dashboard-cliente">
            <HeaderCliente
                navbar={[
                    {
                        label: 'Concursos',
                        variant: 'sublined',
                        type: 'link',
                        to: '/cliente',
                        isActive: true,
                        key: 'nav-c-dscli',
                    },
                    {
                        label: 'Minha Carteira',
                        variant: 'sublined',
                        type: 'link',
                        to: '/#',
                        isActive: false,
                        key: 'nav-m-dscli',
                    },
                ]}
            />

            <section className="carrossel-container">
                <Carousel />
            </section>

            <section className="container-concursos">
                <h1>A decorrer</h1>

                <div className="row-container-cards">
                    <Card src={img1} />
                    <Card src={img2} />
                    <Card src={img3} />
                </div>
            </section>

            <section className="container-concursos">
                <h1>Já decorridos</h1>

                <div className="row-container-cards">
                    <Card src={img1} />
                    <Card src={img2} />
                    <Card src={img3} />
                </div>
            </section>

            <div className="player">
                <AudioPlayer src={audio1} autoplay controls />
            </div>
        </div>
    )
}

export default DashboardCliente;