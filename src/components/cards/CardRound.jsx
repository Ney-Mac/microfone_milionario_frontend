import './CardStyles.css'

export default function CardRound({ src }) {
    return (
        <div className='card-round'>
            <div className="card-round-content">
                <img src={src} alt='Foto do artista' className='img-round' />
            </div>
        </div>
    )
}