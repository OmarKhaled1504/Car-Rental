import React from 'react';
import { useState } from 'react';

const Reports =()=> {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status ,setStatus] = useState (false);
  const Search = () =>{
    setStatus(true);

  }
  const Submit = () =>{
    setStatus(false);

  }
  return (
    <div className='Reports'>
      <h1>Reports</h1>
      <div className='paddedButtons2'>
                <button className="button" onClick={Search} >Search</button>
      </div>
      {status && <div>
        <div className="form-group">
                <label>Start Date</label>
                <input type="date" className="form-control"   required placeholder="Start Date" onChange={e => setStartDate(e.target.value)} />
        </div>
        <div className="form-group">
            <label>End Date</label>
            <input type="date" className="form-control"  required placeholder="End Date" onChange={e => setEndDate(e.target.value)} />
        </div>
        <div className='paddedButtons2'>
                <button className="button" onClick={Submit} >Submit</button>
        </div>      
      </div>}
    </div>
  );
}
export default Reports;