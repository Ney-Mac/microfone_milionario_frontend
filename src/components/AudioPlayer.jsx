import ReactAudioPlayer from 'react-audio-player'
import './AudioPlayerStyles.css'

export default function AudioPlayer({ src, ...props }) {
    return (
        <ReactAudioPlayer
            className='audio-player'
            src={src}
            {...props}
        />
    )
}