import './CardStyles.css'
import ButtonLink from '../buttons/ButtonLink'

export default function Card({ src, alt = 'card image' }) {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={src} alt={alt} />
            </div>
            <div className='card-body'>
                <h3>Titulo</h3>

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