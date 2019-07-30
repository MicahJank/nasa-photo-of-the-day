import React, { useState, useEffect} from "react";

import axios from "axios";

import placeHolderImg from '../../placeholder.jpg';


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

    // TODO uncommment above and remove setPicture below

    return (
        <div className="main-picture">
            <img src={placeHolderImg} alt='From Nasa' />
        </div>
    )
};

export default PictureOfTheDay;