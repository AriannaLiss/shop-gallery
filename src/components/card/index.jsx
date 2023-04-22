import React from "react";
import CardImg from "../card-img";
import CardInfo from "../product-info";
import './card.css';

const Card = ({product}) => {
    const {img, name, label, price, rate} = product;
    return (
        <div className = 'card'>
            <CardImg src = {img} alt = {name} label ={label}/>

            <div className = 'card__description'>
                <h2 className = 'card__title'>{name}</h2>
                <div className = 'card__info-wrapper'>
                    <CardInfo text={rate + 'min'} className='product-time'/>
                    <CardInfo text={price + 'UAH'} className='product-price'/>
                </div>
            </div>
        </div>
    )
}

export default Card;
