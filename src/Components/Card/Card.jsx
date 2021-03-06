import React from 'react'
import './card.css'

const Card = (props) => {
    return ( 
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`} alt="" />
            <h3>{props.monster.name}</h3>
            <p>{props.monster.email}</p>
        </div>
     );
}
 
export default Card;