import React, { useState, useEffect} from "react";

import axios from "axios";
import styled from 'styled-components';

// Components
import Explanation from './Explanation.js';
import Date from './Date.js';
import Title from './Title';


// PLACEHOLDER
import placeHolderImg from '../../lazy-loading.png';

// styled components;
const Button = styled.button`
       width: 100px;
       border: none;
       background-color: #0074D9;
       padding: 10px;
       border-radius: 5px;
       margin: 10px; 
       cursor: pointer;
`;

const placeHolderText = 'Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum, Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum,Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum. Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsumLorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsumLorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum';
const placeHolderDate = '07/30/2019';
const placeHolderTitle = 'Lorem Ipsum';


const PictureOfTheDay = (props) => {

    const [picture, setPicture] = useState(placeHolderImg);
    const [explanation, setExplanation] = useState(placeHolderText);
    const [date, setDate] = useState(placeHolderDate);
    const [title, setTitle] = useState(placeHolderTitle);

    // main and minor picture are used as a className on the pictures below for either the main one or the minor ones.
    let pictureClass = props.i === 0 ? 'main-picture' : 'minor-picture';
    let hideClass = props.i === 0 ? '' : 'hide';
  

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Fa76I6ybXCSv2LREPYjMwrsJD930bqwZnCYQNqBR&date=${props.date}`)

            .then(dataObject => {
                // Below is needed so that only the first picture displays an HD picture, this is needed
                // because the first picture is bigger and needs to be clearer as a result.
                props.i === 0 ? setPicture(dataObject.data.hdurl) : setPicture(dataObject.data.url);
                setExplanation(dataObject.data.explanation);

                setDate(dataObject.data.date);
                setTitle(dataObject.data.title);
                // console.log(dataObject.data);

            })

            .catch(err => {
                alert(err);
            });
    }, []);

    // TODO uncommment above and re set variables in the properties to reflect the data.

    return (
        <>
        <div className={`title-date ${hideClass}`}>
            <Title title={title}/>
            <Date date={date}/>
        </div>
        <div className={pictureClass}>
            <img src={picture} alt='From Nasa' />
            <Button>View in HD</Button>
        </div>
       
        <div className="info-paragraph">
            <Explanation explanation={explanation} i={props.i}/>
        </div>
        
        </>
    )
};

export default PictureOfTheDay;