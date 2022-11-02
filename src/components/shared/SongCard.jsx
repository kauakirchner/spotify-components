import React, { useState } from "react";
import { ButtonPlayMusic } from './ButtonPlayMusic'

import '../../styles/songcard.css'

const SongCard = ({imageUrl, title, subtitle}) => {
    const [isMusicPlay, setIsMusicPlay] = useState(false);
    function changeMusicState() {
        setIsMusicPlay(!isMusicPlay);
        const musicTitle = document.getElementById('is-play-music');
        isMusicPlay === true 
        ? musicTitle.classList.add('isPlayMusicTrue') 
        : musicTitle.classList.remove('isPlayMusicTrue');
    }

    return (
        <div className="card-container">
            <img src={imageUrl} alt="" className="image" />
            <div>
                <div id="is-play-music">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </div>
            <div className="btn-container">
                <ButtonPlayMusic onClick={changeMusicState} />
            </div>
        </div>
    )
}

export { SongCard }