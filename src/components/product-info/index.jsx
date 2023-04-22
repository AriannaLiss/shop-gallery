import React from "react";
import './product-info.css';

const CardInfo = ({text, className}) => {
    return (
        <div className={className}>
            {text}
        </div>
    )
}

export default CardInfo;
