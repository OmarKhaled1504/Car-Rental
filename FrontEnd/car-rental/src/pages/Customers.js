import React from 'react';
import Navbar from '../Components/NavBar';
const Customers = ()=> {
  const Search = () =>{

  }
  return (
    <div className='Customers'>
    <h1>Customers</h1>
     <div>
     <div className='paddedButtons2'>
        <button className="button" onClick={Search} >Search</button>
      </div>
      </div>
    </div>
  );
}
export default Customers;