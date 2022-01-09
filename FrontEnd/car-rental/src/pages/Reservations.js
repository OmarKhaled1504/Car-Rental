import React from 'react';
import Navbar from '../Components/NavBar';
import { useState } from 'react';
import BlogList from '../Components/BlogList';
import axios from 'axios';


function Reservations() {
    const [search, setSearch] = useState(false);
    const [status, setStatus] = useState(null);
    const [license, setLicense] = useState(null);
    const [username, setUsername] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [reservationStatus, setReservationStatus] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [reservations, setReservations] = useState(null);
    const Search = () => {
        setSearch(true);
    }
    const Submit = async (e) => {
        // if (search) {
            var str = new Date(startDate).toISOString + '';
            var dateString = str.split("T")[0];
            console.log(dateString);
            setSearch(false);
            e.preventDefault();
             let response = await axios.get('', {
                params: {
                    license,
                    username,
                    startDate,
                    reservationStatus,
                    paymentStatus
                }
            }); //TODO
            let data = response.data;
            setLicense(null);
            setUsername(null);
            setStartDate(null);
            setReservationStatus(null);
            setPaymentStatus(null);
            setReservations(data);
            setStatus(true);
        
    }
    const handleDelete = () => {
    }
    const Return = () => {
        setStatus(false);
        setSearch(false);
    }
    return (
        <div className='Reservations'>
            <h1>Reservations</h1>
            <div className='paddedButtons2'>
                <button className="button" onClick={Search} >Search</button>
            </div>
            {status && <div>
                <BlogList blogs={reservations} title="All Blogs" handleDelete={handleDelete} />
                <button className='button' onClick={Return}> return </button>
            </div>}
            {search && <div>
                <div className="form-group">
                    <label>License</label>
                    <input type="text" className="form-control" required placeholder="License" onChange={e => setLicense(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" required placeholder="Username" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Start Date</label>
                    <input type="date" className="form-control" id = "bdate"  required placeholder="Start Date" onChange={e => setStartDate(e.target.value)} />
                </div>




                {search && <div className="form-group">
                    <label>Reservation Status</label>
                    <select id="reservationStatus">
                        <option name="All">All</option>
                        <option name="Picked Up">Picked Up</option>
                        <option name="Not Picked Up">Not Picked Up</option>
                    </select>
                    <label>Payment Status</label>
                    <select id="payementStatus">
                        <option name="All"> All</option>
                        <option name="Paid">Paid</option>
                        <option name="Not Paid">Not Paid</option>
                    </select>

                </div>}
                <div>
                    <button className="button" onClick = {Submit} >Submit</button>
                </div>
            </div>}
        </div>

    );
}

export default Reservations;