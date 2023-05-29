import './StartPageStyles.css'
import {
    HeaderStart,
    Card,
    Button,
    ButtonLink,
    CardRound,
    Footer,
} from '../components/index'
import backImg1 from '../assets/background/back_img_1.svg'
import backimg2 from '../assets/background/back_img_2.svg'
import userImg1 from '../assets/users/user1.png'
import userImg2 from '../assets/users/user2.png'
import userImg3 from '../assets/users/user3.png'
import bgImg from '../assets/startPage/music.png'

const StartPage = () => {

    return (
        <div className="start-page">
            <img
                src={backImg1}
                className='background-img img-1'
            />

            <HeaderStart />

            <section className='section-destaque'>
                <div className='destaque-container'>

                    <div className="container-row">
                        <h1>Microfone Milionário</h1>
                    </div>

                    <div className="container-row">
                        <p className='text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nostrum tempora voluptates eum reprehenderit quas voluptatibus?
                            Facilis et quod tenetur reprehenderit cupiditate,
                            consequatur veritatis suscipit minima praesentium
                            voluptates soluta libero dolores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Est expedita esse obcaecati debitis harum culpa ipsum
                            error nesciunt, sapiente labore quis modi. Ex, excepturi
                            similique! Asperiores voluptas veritatis velit dignissimos.
                        </p>
                    </div>

                    <div className="container-row">
                        <p className='textLead'>Aqui todos ganham</p>
                    </div>

                </div>
            </section>

            <section className='section-recentes'>

                <div className='container-row'>
                    <h2>Os mais recentes</h2>
                </div>

                <div className='container-row card-container'>
                    <div className="container-coluna">
                        <Card />
                    </div>
                    <div className="container-coluna">
                        <Card />
                    </div>
                    <div className="container-coluna">
                        <Card />
                    </div>
                </div>

                <div className='container-row button-container'>
                    <Button
                        variant='outlined'
                        type="button"
                    >
                        Concursos a decorrer
                    </Button>
                    <ButtonLink
                        variant='contained'
                        to="/register"
                    >
                        Criar Conta
                    </ButtonLink>
                    <Button
                        variant='outlined'
                        type="button"
                    >
                        Concursos decorridos
                    </Button>
                </div>

            </section>

            <section className='section-musicos'>
                <img
                    src={backimg2}
                    className='background-img img-2'
                />

                <div className='container-row'>
                    <h2 className='text'>Os mais votados</h2>
                </div>

                <div className="container-row">
                    <CardRound src={userImg1} />
                    <div className='info-artista'>
                        <h5>Nome do artista</h5>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Assumenda voluptate iusto ipsa.
                        </p>
                    </div>
                </div>

                <div className="container-row r-right">
                    <div className='info-artista'>
                        <h5>Nome do artista</h5>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Assumenda voluptate iusto ipsa.
                        </p>
                    </div>
                    <CardRound src={userImg2} />
                </div>

                <div className="container-row r-left">
                    <CardRound src={userImg3} />
                    <div className='info-artista'>
                        <h5>Nome do artista</h5>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Assumenda voluptate iusto ipsa.
                        </p>
                    </div>
                </div>

            </section>

            <section className="section-participe">

                <div className="container-col">

                    <div className="container-row r-participe">
                        <h3>Participe de concursos fantásticos</h3>
                    </div>

                    <div className="container-row r-participe">
                        <p>
                            Envie suas músicas e vídeos.
                            Alcance os melhores prémios
                        </p>
                    </div>

                    <div className="container-row r-participe">
                        <ButtonLink
                            variant='outlined'
                            to='/login'
                        >
                            Entrar
                        </ButtonLink>

                        <ButtonLink
                            variant='contained'
                            to='/register'
                        >
                            Criar Conta
                        </ButtonLink>
                    </div>

                </div>

                <div className="container-col">
                    <img src={bgImg} alt='music-image' className='bg-img' />
                </div>

            </section>

            <Footer />

        </div>
    )
}

export default StartPage;
