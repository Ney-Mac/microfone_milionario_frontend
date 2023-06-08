import {
    HeaderCliente,
    Button,
    AudioPlayer,
    LongCard,
} from '../../components';
import './DashboardArtistaStyles.css'
import user4_fill from '../../assets/users/user4_fill.png'
import audio1 from '../../assets/audio/cannon_in_d.mp3'

const DashboardArtista = () => {
    return (
        <div className="dsb-artista">
            <div className="dsh-header">
                <HeaderCliente
                    navbar={[
                        {
                            label: 'Concursos',
                            variant: 'sublined',
                            type: 'link',
                            to: '/#',
                            isActive: false,
                            key: 'nav-c-dsart',
                        },
                        {
                            label: 'Minha Galeria',
                            variant: 'sublined',
                            type: 'link',
                            to: '/#',
                            isActive: false,
                            key: 'nav-mg-dsart',
                        },
                    ]}
                />
            </div>

            <div className="main-content">
                <h3>Concursos em que estou inscrito</h3>

                <LongCard />
                <LongCard />
                <LongCard />
                <LongCard />
            </div>

            <div className="right-col">
                <div className="container-img-dsh-art">
                    <img src={user4_fill} alt='foto de perfil' />
                </div>
                <div className="container-my-numbers">

                    <div className="my-numbers-title">
                        <p>Meus números</p>
                    </div>
                    <div className="row-my-numbers">
                        <p>Concursos em que estou inscrito</p>
                        <p>20</p>
                    </div>

                    <div className="row-my-numbers">
                        <p>Total de votos</p>
                        <p>128</p>
                    </div>

                    <div className="row-my-numbers">
                        <p>Músicas na galeria</p>
                        <p>20</p>
                    </div>

                    <div className="row-my-numbers">
                        <p>Vídeos na galeria</p>
                        <p>20</p>
                    </div>

                    <div className="btn-my-numbers">
                        <Button
                            type='button'
                            variant='outlined'
                            to='/#'
                        >
                            Ir para minha Galeria
                        </Button>
                    </div>

                </div>
            </div>

            <div className="player">
                <AudioPlayer src={audio1} loop={true} autoplay controls />
            </div>
        </div>
    )
}

export default DashboardArtista;