import React from "react";
import Button from "../buttons/Button";
import user4_fill from '../../assets/users/user4_fill.png';
import './CardStyles.css';

export default function LongCard() {
    return (
        <div className="long-card">
            <div className="long-card-container">
                <div className="img-card-lg">
                    <img src={user4_fill} alt="Card Image" />
                </div>

                <div className="long-card-content">
                    <p className='lg-card-content-title'>
                        Titulo do Concurso
                    </p>
                    <p className="lg-card-content-title">
                        Termina em: 15/07/2023
                    </p>
                    <div className="lg-card-content-main">

                        <div className="lg-card-content-main-data">
                            <p>1 - Manuel Cariongo</p>
                            <p>3250 votos</p>
                            <p>2 - Raul Diogo</p>
                            <p>2798 votos</p>
                            <p>3 - Victoria Hugo</p>
                            <p>2342 votos</p>

                            <div className="black-line"></div>

                            <p>13 - Eu</p>
                            <p>567 votos</p>
                        </div>

                    </div>
                    <div className="lg-card-content-button">
                        <Button
                            type='button'
                            variant='contained'
                            to='/#'
                        >
                            Ver Concurso
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}