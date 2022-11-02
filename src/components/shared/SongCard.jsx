import React, { useState } from "react";
import { ButtonPlayMusic } from './ButtonPlayMusic'

import '../../styles/songcard.css'

const SongCard = ({imageUrl, title, subtitle}) => {
    const [isMusicPlay, setIsMusicPlay] = useState(false);

    function changeMusicState() {
        setIsMusicPlay(!isMusicPlay);
    }

    return (
        <div className="card-container">
            <img src={imageUrl} alt="" className="image" />
            <div>
                {isMusicPlay === true ? (
                    <div className="isPlayMusicTrue">{title}</div>
                ) : (
                    <div>{title}</div>
                )}
                <div className="subtitle">{subtitle}</div>
            </div>
            <div className="btn-container">
                <ButtonPlayMusic onClick={changeMusicState} />
            </div>
        </div>
    )
}

export { SongCard }