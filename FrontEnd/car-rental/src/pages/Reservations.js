import React from 'react';
import Navbar from '../Components/NavBar';
import { useState } from 'react';

function Reservations() {
  const[search,setSearch] = useState(false);

  const Search = () =>{

  }
  return (
    <div className='Reservations'>
      <h1>Reservations</h1>
      <div className='paddedButtons2'>
        <button className="button" onClick={Search} >Search</button>
      </div>
      {search && <div>
            <div className="form-group">
                <label>License</label>
                <input type="text" className="form-control" required placeholder="License"  />
            </div>
            <div className="form-group">
                <label>Color</label>
                <input type="text" className="form-control" required placeholder="Color"  />
            </div>
            <div className="form-group">
                <label>Manafacturer</label>
                <input type="text" className="form-control" required placeholder="Manafacturer" />
            </div>
            <div className="form-group">
                <label>Car Type</label>
                <input type="text" className="form-control" required placeholder="Car Type" />
            </div>
            <div className="form-group">
                <label>Model</label>
                <input type="text" className="form-control" required placeholder="Model" />
            </div>
            <div className="form-group">
                <label>Year</label>
                <input type="text" className="form-control" required placeholder="Model"  />
            </div>
            <div className="form-group">
                <label>Office</label>
                <input type="text" className="form-control" required placeholder="Office" />
            </div>
            <div className="form-group">
                <label>Price/Day</label>
                <input type="text" className="form-control" required placeholder="Price/Day" />
            </div>
            {search &&  <div className="form-group">
                <label>Status</label>
                <select id = "carStatus">
                    <option name="All"> All</option>
                    <option name="Available"> Available</option>
                    <option name="Out of Serive">Out of Serive</option>
                </select>
               
            </div>}
            <div>
            <button className="button"  >Submit</button>
            </div>
        </div>}
    </div>
  
  );
}

export default Reservations;