import React from "react";
import './card-img.css';

const CardImg = ({src, alt,label}) => {
    return(
        <>
            <div className = 'card__picture'>
                <span className="card__label"/>
                <img src={src} alt={alt}/>
            </div>
            {
                label ?
                    <p className = 'card__sale'>
                        {label}
                    </p> 
                    : null
            }
        </>
    )
}

export default CardImg;
