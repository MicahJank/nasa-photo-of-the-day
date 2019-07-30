import React, { useState, useEffect} from "react";

import axios from "axios";


const PictureOfTheDay = () => {

    const [picture, setPicture] = useState('');

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

            .then(imgObject => {
                console.log(imgObject);
            })

            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="main-picture">
            <img src={picture} alt='From Nasa' />
        </div>
    )
};

export default PictureOfTheDay;