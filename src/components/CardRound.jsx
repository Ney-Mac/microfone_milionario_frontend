import './CardStyles.css'

export default function CardRound({ src }) {
    return (
        <div className='card-round'>
            <img src={src} alt='Foto do artista' className='img-round' />
        </div>
    )
}