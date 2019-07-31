import React, { useState, useEffect} from "react";

import axios from "axios";

// Components
import Explanation from './Explanation.js';
import Date from './Date.js';


// PLACEHOLDER
import placeHolderImg from '../../placeholder.jpg';
const placeHolderText = 'Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum';
const placeHolderDate = '07/30/2019';


const PictureOfTheDay = () => {

    const [picture, setPicture] = useState(placeHolderImg);
    const [explanation, setExplanation] = useState(placeHolderText);
    const [date, setDate] = useState(placeHolderDate);

    // useEffect(() => {
    //     axios
    //         .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

    //         .then(imgObject => {
    //             setPicture(imgObject.data.url)
    //             console.log(imgObject.data);
    //         })

    //         .catch(err => {
    //             alert(err);
    //         });
    // }, []);

    // TODO uncommment above and re set variables in the properties to reflect the data.

    return (
        <>
        <Date date={date}/>
        <div className="main-picture">
            <img src={picture} alt='From Nasa' />
        </div>
        <div>
            <Explanation explanation={explanation} />
        </div>
        </>
    )
};

export default PictureOfTheDay;