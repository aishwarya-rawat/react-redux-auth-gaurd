
import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{ backgroundColor: props.color }}>{props.children}</div>
    )

}

export default Card;