import React from 'react';
import { useState } from 'react/cjs/react.development';
import Navbar from '../Components/NavBar';

function Cars() {
    const[search,setSearch] = useState(false);
    const [insert,setInsert] = useState(false);
    const [modify,setModify] = useState(false);

    const Sumbit = () =>{
        setInsert(false)
        setSearch(false)
    }
    const SumbitSearch = ()=>{
        setInsert(false)
        setSearch(false)
    }
    const Insert = () =>{
        setInsert(true) 
        setModify(false)
        setSearch(false)
    }
    const Search = () =>{
        setSearch(true);
        setInsert(false)
        setModify(false)
    }
    const Modify = () =>{
        setModify(true);
        setInsert(false)
        setSearch(false)
    }
  return (
    <div className='Cars'>
      <h1>Cars</h1>
      <div className='paddedButtons'>
        <button className="button" onClick={() => {Insert()}} >Insert</button>
        <button className="button" onClick={Search} >Search</button>
        <button className="button" onClick={Modify} >Modify</button>
      </div>
      {insert && <div>
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
        {search && <div>
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
            <button className="button" onClick={SumbitSearch} >Sumbit</button>
            </div>
        </div>}
      </div>

  );
}

export default Cars;