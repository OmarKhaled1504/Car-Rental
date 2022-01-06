import React from 'react';
import Navbar from '../Components/NavBar';
import { useState } from 'react';
const Customers = ()=> {
  const[search,setSearch] = useState(false);
  const [status,setStatus] = useState(null);
  const [customers, setCustomers] = useState(null)

  const Search = () =>{
    setSearch(true);
    setStatus(false);
  }
  const Sumbit = () =>{
    setStatus(true)
    setSearch(false);

  }
  return (
    <div className='Customers'>
    <h1>Customers</h1>
     <div>
     <div className='paddedButtons2'>
        <button className="button" onClick={Search} >Search</button>
      </div>
      </div>
      { search && <div>
         <div className="form-group">
                <label>Lisence</label>
                <input type="text" className="form-control" placeholder="Lisence" />
            </div>
            <div className="form-group">
                <label>Color</label>
                <input type="text" className="form-control" placeholder="Color" />
            </div>
            <div className="form-group">
                <label>Manafacturer</label>
                <input type="text" className="form-control" placeholder="Manafacturer" />
            </div>
            <div className="form-group">
                <label>Model</label>
                <input type="text" className="form-control" placeholder="Model" />
            </div>
            <div className="form-group">
                <label>Office</label>
                <input type="text" className="form-control" placeholder="Office" />
            </div>
            <div className="form-group">
                <label>Price/Day</label>
                <input type="text" className="form-control" placeholder="Price/Day" />
            </div>
            <div>
            <button className="button" onClick={Sumbit} >Sumbit</button>
            </div>
        </div>}
    </div>
  );
}
export default Customers;