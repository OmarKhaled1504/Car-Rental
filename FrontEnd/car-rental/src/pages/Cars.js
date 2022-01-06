import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Navbar from '../Components/NavBar';
import BlogList from '../Components/BlogList';

function Cars() {
    const[search,setSearch] = useState(false);
    const [insert,setInsert] = useState(false);
    const [modify,setModify] = useState(false);
    const [status,setStatus] = useState(null);
    const [cars, setCars] = useState(null)

    const Sumbit = () =>{
        if (search){
            setCars([{
                Lisence:'habal',color:'urg',manufacturer:'rjvne',model:'uvbtr'} ,
                {Lisence:'bdbg',color:'dbgg',manufacturer:'tebt',model:'rb'}])
            setStatus(true)
        }else if (insert){

        }
        setInsert(false);
        setSearch(false);
        setModify(false);
    }
    const Insert = () =>{
        setInsert(true) ;
        setModify(false);
        setSearch(false);
    }
    const Search = () =>{
        setSearch(true);
        setInsert(false);
        setModify(false);

    }
    const Modify = () =>{
        setModify(true);
        setInsert(false);
        setSearch(false);
    }
    useEffect(() => {
        console.log("rueirrgr");
    }, [status])
    const handleDelete = () =>{

    }
    const Return = () => {
        setStatus(false);
        setModify(false);
        setInsert(false);
        setSearch(false);
    }
  return (
    <div className='Cars'>
      <h1>Cars</h1>
      <div className='paddedButtons'>
        <button className="button" onClick={() => {Insert()}} >Insert</button>
        <button className="button" onClick={Search} >Search</button>
        <button className="button" onClick={Modify} >Modify</button>
      </div>
    {status && <div>
                <BlogList blogs={cars} title="All Blogs" handleDelete={handleDelete} />
                <button className='button' onClick={Return}> return </button>
             </div>}
      {(insert || search) && <div>
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
        {modify && <div>
            <div className="form-group">
                <label>Lisence</label>
                <input type="text" className="form-control" placeholder="Lisence" />
            </div>
            <div className="form-group">
                <label>Status</label>
                <select value={"Available"} onChange={(e) => {setStatus(e.target.value)}}>
                    <option name="Available"> Available</option>
                    <option name="Out of Serive">Out of Serive</option>
                </select>
            </div>
        </div>}
    </div>
  );
}

export default Cars;