import React from 'react';

const Card = (props) => {
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.stopPropagation();
    }
    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = 'none';
        }, 0)
    }
    return (
        <div id={props.id}
            name={props.id}
            className={props.className}
            draggable={props.draggable}
            onDrop={drop}
            onDragStart={dragStart}
            onDragOver={dragOver}>
            {props.children}
        </div>
    )
}

export default Card;