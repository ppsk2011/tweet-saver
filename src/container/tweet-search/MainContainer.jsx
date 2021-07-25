import React, { useState, useEffect } from "react";
import BoardContainer from "./BoardContainer";
import "./mainContainer.css";
import { getTweets } from "../../service/tweetservice";
import { statuses } from "../../assets/sampleResponse.json";
const count = 10;

const MainContainer = (props) => {
    const [searchString, setSearchString] = useState("");
    const [tweetsList, setTweetsList] = useState([]);
    const handleChange = (e) => {
        e.preventDefault();
        setSearchString(e.target.value);
        console.log(searchString);
    };

    useEffect(() => { }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        getTweets(searchString, count).then((response) => {
            console.log("Response coming from tweetservice");
            const { data: { statuses }, } = response;
            setTweetsList(statuses)
        });
    };
    const clearStorage = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div >
            <div className='main'>
                <h1>Tweet Saver</h1>
                <hr/>
                <div className='form'>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <input className='button' type="text" name="searchStr" placeholder="Search twitter" onChange={(e) => { handleChange(e) }} />
                        <button className='button' type="submit">Search</button>
                    </form>
                    <button className='button' onClick={clearStorage}>Clear Storage</button>
                    <h1 className='savedTweets'>Saved tweets</h1>
                </div>
         
            </div>
            <BoardContainer tweetsList={tweetsList} />
        </div>
    );
};

export default MainContainer;
