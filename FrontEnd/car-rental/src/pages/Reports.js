import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Reports =()=> {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status ,setStatus] = useState (false);
  const [reports, setReports] = useState(null)
  const [show , setShow] = useState (false);

  const Search = () =>{
    setStatus(true);
    setShow(false);
  }
  const Submit = async() =>{
    let response = await axios.get('http://localhost:8080/api/v1/reservations/getReports',{
      params: {
          startDate,
          endDate
      }
  }); 
    let data = response.data;
    setReports(data);
    console.log(reports)
    console.log(reports.count)
    console.log(reports.sum)
    setStatus(false);
    setShow(true);
  }
  return (
    <div className='Reports'>
      <h1>Reports</h1>
      <div className='paddedButtons2'>
                <button className="button" onClick={Search} >Search</button>
      </div>
      {status && <div>
        <div className="form-group">
                <label>From</label>
                <input type="date" className="form-control"   required placeholder="From" onChange={e => setStartDate(e.target.value)} />
        </div>
        <div className="form-group">
            <label>To</label>
            <input type="date" className="form-control"  required placeholder="To" onChange={e => setEndDate(e.target.value)} />
        </div>
        <div className='buttonContainer'>
                        <button className="button" onClick={Submit} >Submit</button>
                    </div>     
      </div>}
      {show &&<div>
        <div className="form-group">
                <label>Number of reservations</label>
                <h3>{reports[0].count}</h3>
        </div>
        <div className="form-group">
                <label>Total money</label>
                <h2>{reports[0].sum}</h2>
        </div>

      </div>}
    </div>
  );
}
export default Reports;