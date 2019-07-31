import React, { useState, useEffect} from "react";

import axios from "axios";

// Components
import Explanation from './Explanation.js';
import Date from './Date.js';
import Title from './Title';


// PLACEHOLDER
import placeHolderImg from '../../placeholder.jpg';
const placeHolderText = 'Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum, Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum,Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum. Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsumLorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsumLorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum';
const placeHolderDate = '07/30/2019';
const placeHolderTitle = 'Lorem Ipsum';


const PictureOfTheDay = (props) => {

    const [picture, setPicture] = useState(placeHolderImg);
    const [explanation, setExplanation] = useState(placeHolderText);
    const [date, setDate] = useState(placeHolderDate);
    const [title, setTitle] = useState(placeHolderTitle);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Fa76I6ybXCSv2LREPYjMwrsJD930bqwZnCYQNqBR&date=${props.date}`)

            .then(dataObject => {
                setPicture(dataObject.data.url)
                setExplanation(dataObject.data.explanation);
                setDate(dataObject.data.date);
                setTitle(dataObject.data.title);
                console.log(dataObject.data);

            })

            .catch(err => {
                alert(err);
            });
    }, []);

    // TODO uncommment above and re set variables in the properties to reflect the data.

    return (
        <>
        <div className="title-date">
            <Title title={title}/>
            <Date date={date}/>
        </div>
       
        <div className="main-picture">
            <img src={picture} alt='From Nasa' />
        </div>
        <div className="info-paragraph">
            <Explanation explanation={explanation} />
        </div>
        </>
    )
};

export default PictureOfTheDay;