import React from 'react';
import './App.css';
import POTD from './componenets/main/POTD.js';
import Header from './componenets/header/Header.js';

function App() {

  // getDate will use javascript to grab all the date values i need in the correct format. 
  // the format is important because when passing the dates down into the POTD.js file the api call request will
  // need a specific format for the date
  // the number parameter gets subtracted from the 'day' value so that in the for loop we can grab previous days
  const getDate = (number) => {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate() - number;

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };
 
  // dates is where i will store up to 7 of the most recent days for the user, dates will then be used to create
  // new POTD cards that will display the appropriate image for that day
  const dates = [];


  // the for loop is needed to fill the dates array with dynamic range of dates so that when i create the
  // POTD cards each date will be different
  for(let i=0; i < 7; i++) {
    dates.push(getDate(i));
  }
  console.log(dates);

  // dates is an array that contains the previous 7 days for the user
  // const dates = [day0, day1, day2, day3, day4, day5, day6]

  return (
    <div className="App">
      <Header />
      {dates.map(date => {
       return <POTD date={date} />
      })}
      
    </div>
  );
}

export default App;
