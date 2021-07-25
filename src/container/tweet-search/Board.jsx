import React from 'react';
import { saveCardToLocalStorage } from '../../assets/utils';

const Board = (props) => {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        if (card && card.childNodes) {
            card.style.display = 'block';
            e.target.appendChild(card);
            const user = {
                profile_image_url_https: card.childNodes[0].children[0].src,
                name: card.childNodes[0].children[1].innerHTML,
                screen_name: card.childNodes[0].children[2].innerHTML,
            };
            const tweet = {
                user,
                created_at: card.childNodes[0].children[3].innerHTML,
                text: card.childNodes[0].children[4].innerHTML,
            };
            saveCardToLocalStorage(tweet, card_id);
        }
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}>
            {props.children}
        </div>
    )
}

export default Board;