import React, { useState, useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import './boardContainer.css'
import { convertDate } from '../../assets/utils';
const BoardContainer = (props) => {
    const { tweetsList } = props;
    const [storedTweets, setStoredTweets] = useState([]);
    useEffect(() => {
        loadStoredTweets();
    }, [])

    const loadStoredTweets = () => {
        setStoredTweets(JSON.parse(localStorage.getItem('cardsList')));
    }
    return (
        <main className='flexBox'>
            <Board id='board-1' className='board' >
                {tweetsList.length > 0 && tweetsList.map((tweet) => (
                    <Card id={tweet.id} key={tweet.id} className='card' draggable='true'>
                        <div draggable='false' className='cardItem'>
                            <img draggable='false' className='profileImage' src={tweet.user.profile_image_url_https} />
                            <span draggable='false' className='profileName'>{tweet.user.name}</span>
                            <span draggable='false' className='profileScreenName' >@{tweet.user.screen_name}</span>
                            <span draggable='false' className='tweetCreateDate'  >{convertDate(tweet.created_at)}</span>
                            <div draggable='false' className='tweetText'  >{tweet.text}</div>
                        </div>
                    </Card>
                ))}
            </Board>
            <Board id='board-2' className='board' >
                {storedTweets && storedTweets.length > 0 && storedTweets.map((tweet,index) => (
                    <Card  key={index} className='card' draggable='true'>
                           <div draggable='false' className='cardItem'>
                            <img name='imgSrc' draggable='false' className='profileImage' src={tweet.user.profile_image_url_https} />
                            <span name='fullName' draggable='false' className='profileName'>{tweet.user.name}</span>
                            <span name='userName' draggable='false' className='profileScreenName' >{tweet.user.screen_name}</span>
                            <span name='tweetDate' draggable='false' className='tweetCreateDate'  >{tweet.created_at}</span>
                            <div name='tweetText' draggable='false' className='tweetText'  >{tweet.text}</div>
                        </div>
                    </Card>
                ))}

            </Board>

        </main>
    )
}

export default BoardContainer;