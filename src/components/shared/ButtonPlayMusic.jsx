import React from "react";
import '../../styles/buttonPlayMusic.css'

const ButtonPlayMusic = (props) => {
    return (
        <button onClick={props.onClick} className="play"><i class="fa fa-play"></i></button>
    )
}

export { ButtonPlayMusic }