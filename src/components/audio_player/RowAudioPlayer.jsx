import { useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import AudioPlayer from './AudioPlayer';

export default function RowAudioPlayer({ audioSrc, imgSrc, imgProps, audioPlayerProps }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);

    const playAudio = () => {
        if (playerRef.current) {
            playerRef.current.play();
        }
    };

    const pauseAudio = () => {
        if (playerRef.current) {
            playerRef.current.pause();
        }
    };

    function handleAudioPlayer() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    function onPlay() {
        setIsPlaying(true);
    }

    function onPause() {
        setIsPlaying(false);
    }

    return (
        <div className="row-music">
            <div className="col-music-img">
                <img {...imgProps} src={imgSrc} alt="music image" className='player-img' />
                {!!imgSrc && <button onClick={() => { handleAudioPlayer() }}>
                    <IconContext.Provider
                        value={{
                            color: '#D59E04',
                            size: '2rem',
                            className: "music-icon-provider"
                        }}
                    >
                        {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                    </IconContext.Provider>
                </button>}
            </div>
            <div className="col-music-player">
                <AudioPlayer
                    ref={playerRef}
                    loop={true}
                    autoplay
                    controls
                    src={audioSrc}
                    style={{
                        width: '100%',
                    }}
                    onPlay={onPlay}
                    onPause={onPause}
                    {...audioPlayerProps}
                />
            </div>
        </div>
    )
}