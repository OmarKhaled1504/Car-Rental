import React from 'react';
import Navbar from '../Components/NavBar';

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
                <input type="text" className="form-control" required placeholder="License"onChange={e => setLicense(e.target.value) } />
            </div>
            <div className="form-group">
                <label>Color</label>
                <input type="text" className="form-control" required placeholder="Color"onChange={e => setColor(e.target.value)}  />
            </div>
            <div className="form-group">
                <label>Manafacturer</label>
                <input type="text" className="form-control" required placeholder="Manafacturer"onChange={e => setManufacturer(e.target.value)}  />
            </div>
            <div className="form-group">
                <label>Car Type</label>
                <input type="text" className="form-control" required placeholder="Car Type"onChange={e => setType(e.target.value)}  />
            </div>
            <div className="form-group">
                <label>Model</label>
                <input type="text" className="form-control" required placeholder="Model"onChange={e => setModel(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Year</label>
                <input type="text" className="form-control" required placeholder="Model"onChange={e => setYear(e.target.value)}  />
            </div>
            <div className="form-group">
                <label>Office</label>
                <input type="text" className="form-control" required placeholder="Office"onChange={e => setOffice(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Price/Day</label>
                <input type="text" className="form-control" required placeholder="Price/Day"onChange={e => setprice_day(e.target.value)} />
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
            <button className="button" onClick={Sumbit} >Submit</button>
            </div>
        </div>}
    </div>
  
  );
}

export default Reservations;