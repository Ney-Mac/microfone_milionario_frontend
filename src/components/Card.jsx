import './CardStyles.css'
import ButtonLink from './ButtonLink'

export default function Card() {
    return (
        <div className='card'>
            <div className='card-img'>

            </div>
            <div className='card-body'>
                <h1>Titulo</h1>

                <div className="row-card">
                    <p>Texto Left</p>
                    <p>Texto right</p>
                </div>

                <div className="row-card">
                    <p>Texto Left</p>
                    <p>Texto right</p>
                </div>

                <div className="row-card">
                    <p>Texto Left</p>
                    <p>Texto right</p>
                </div>
                
                <div className="row-button">
                    <ButtonLink
                        variant='outlined'
                        to='#'
                    >
                        Ver Concurso
                    </ButtonLink>
                </div>
            </div>
        </div>
    )
}