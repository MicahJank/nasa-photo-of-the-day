import React, { useState, useEffect} from "react";

import axios from "axios";

// Components
import Explanation from './Explanation.js';
import Date from './Date.js';


// PLACEHOLDER - WILL BE DELETED
import placeHolderImg from '../../placeholder.jpg';
const explanationText = 'Lorem Ipsum blipsum crimson ripsum shnipsum calipsum blipsum';
const dateText = '07/30/2019';


const PictureOfTheDay = () => {

    const [picture, setPicture] = useState('');

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
        <Date date={dateText}/>
        <div className="main-picture">
            <img src={placeHolderImg} alt='From Nasa' />
        </div>
        <div>
            <Explanation explanation={explanationText} />
        </div>
        </>
    )
};

export default PictureOfTheDay;