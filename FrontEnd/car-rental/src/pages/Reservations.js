import React from 'react';
import Navbar from '../Components/NavBar';

function Reservations() {
  const Search = () =>{

  }
  return (
    <div className='Reservations'>
      <h1>Reservations</h1>
      <div className='paddedButtons2'>
        <button className="button" onClick={Search} >Search</button>
      </div>
    </div>
  
  );
}

export default Reservations;