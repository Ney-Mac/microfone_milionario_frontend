import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayerStyles.css';

const AudioPlayer = forwardRef(({ src, ...props }, ref) => {
    const audioRef = useRef(null);

    const play = () => {
        if (audioRef.current) {
            audioRef.current.audioEl.current.play();
            //console.log(audioRef.current.audioEl.current);
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.audioEl.current.pause();
            //console.log(audioRef.current.audioEl.current);
        }
    };

    useImperativeHandle(ref, () => ({
        play,
        pause
    }));

    return (
        <ReactAudioPlayer
            className='audio-player'
            ref={audioRef}
            src={src}
            {...props}
        />
    );
})





export default AudioPlayer;
