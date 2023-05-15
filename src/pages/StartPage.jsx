import './StartPageStyles.css'
import {
	Header,
    Card,
    Button,
} from '../components/index'
import RectBack from '../assets/retangulo_background/rectangulo_background.svg'

const StartPage = () => {

	return (
		<div className="start-page">
			<img
				src={RectBack}
                className='rectImg'
			/>
			<Header />

            <div className='section-destaque'>
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
            </div>

            <div className='section-recentes'>

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
                    <Button 
                        variant='contained'
                        type="button"
                    >
                        Criar Conta
                    </Button>
                    <Button 
                        variant='outlined'
                        type="button"
                    >
                        Concursos decorridos
                    </Button>
                </div>

            </div>

		</div>
	)
}

export default StartPage;
