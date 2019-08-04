import React from 'react';
import './App.scss';
import POTD from './componenets/main/POTD.js';
import Header from './componenets/header/Header.js';

function App() {

  // getDaysInMonth will return the specified days for the month/year specified
  const getDaysInMonth = (month, year) => {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };

  // getDate will use javascript to grab all the date values i need in the correct format.
  // the format is important because when passing the dates down into the POTD.js file the api call request will
  // need a specific format for the date
  // the number parameter gets subtracted from the 'day' value so that in the for loop we can grab previous days
  const getDate = number => {
    const today = new Date();
    let year = today.getFullYear();

    let month = (today.getDate() - number) <= 0 ? today.getMonth() : today.getMonth() + 1;

    const daysInMonth = getDaysInMonth(month, year);
  
   let day = '0';
    if ((today.getDate() - number) > 0) {
      day = today.getDate() - number;
    } else if ((today.getDate() - number) === 0) {
      day = daysInMonth;
    } else {
      day = daysInMonth + (today.getDate() - number);
    }


    // console.log('day:', day);
    // console.log('number:', number);
    // console.log('days in month:', daysInMonth);
    // console.log('today.getDat:', today.getDate());

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    // console.log(`${year}-${month}-${day}`)
    return `${year}-${month}-${day}`;
  };

  // dates is where i will store up to 7 of the most recent days for the user, dates will then be used to create
  // new POTD cards that will display the appropriate image for that day
  const dates = [];
  const dayNums = 15; // change to increase the number of photos displayed
  // console.log(dates);


  // the for loop is needed to fill the dates array with dynamic range of dates so that when i create the
  // POTD cards each date will be different
  for (let i = 0; i < dayNums; i++) {
    dates.push(getDate(i));
  }

  return (
    <>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="title">
      <div className="App">
        <Header />
        <div className='POTD-Container'>
          {dates.map((date, i) => {
            return <POTD date={date} i={i}/>;
          })}
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
