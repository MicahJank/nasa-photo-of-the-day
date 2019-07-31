import React from 'react';


const Explanation = ({ explanation, i }) => {

    // checkContent is needed so that only the first image i get back from the API will show the explanation
    // text. This way i check to see what position the image is in, in the array (through i) and if
    // it is not 0 (i.e. it is not the first image) then i add a hide class to it.
    const checkContent = () => {
        if (i !== 0) {
            return (
                <p className="hide">{explanation}</p>
            );
        } else {
            return (
                <p>{explanation}</p>
            );
        }
    };

    return (
        checkContent()
    );
};

export default Explanation;