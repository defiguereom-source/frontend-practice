import React from 'react';
import "../stylesheets/Cards.css"
function Card({ titule, img, price, }){
    return(
        <div className='menu'>
            <article className='card'>
                {titule}
                <img src={`./img/${img}`} alt="" />
                {price}
                <button>Comprar</button>
            </article>
        </div>
    )
}

export default Card;