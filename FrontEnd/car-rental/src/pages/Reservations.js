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
    const [reservationStatus, setReservationStatus] = useState("All");
    const [paymentStatus, setPaymentStatus] = useState("All");
    const [reservations, setReservations] = useState(null);
    const[Model,setModel] = useState(null);
    const[year,setYear] = useState(null);
    const[color,setColor] = useState(null) ;
    const[manufacturer,setManufacturer] = useState(null);
    const[EndDate,setEndDate] = useState(null) ;
    const Search = () => {
        setSearch(true);
    }
    const Submit = async (e) => {
        // if (search) {
            // var str = new Date(startDate).toISOString + '';
            // var dateString = str.split("T")[0];
            // console.log(dateString);
            setSearch(false);
            console.log(license);
            console.log(startDate);
            console.log(username);
            console.log(reservationStatus);
            console.log(paymentStatus);
            e.preventDefault();
             let response = await axios.get('http://localhost:8080/api/v1/reservations/details',{
                params: {
                    license,
                    username,
                    startDate,
                    reservationStatus,
                    paymentStatus
                }
            }); 
            let data = response.data;
            console.log(data);
            setReservations(data);
            setStatus(true);

    }
    const handleDelete = () => {
    }
    const Return = () => {
        setSearch(false);
        setLicense(null);
        setUsername(null);
        setStartDate(null);
        setReservationStatus("All");
        setPaymentStatus("All");
        setModel(null);
        setYear(null) ;
        setColor(null) ;
        setEndDate(null) ;
        setColor(null) ;
        setStatus(false);
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
                    <select id="reservationStatus" onChange={e=>{setReservationStatus(e.target.value)}}>
                        <option name="All">All</option>
                        <option name="Incoming">Incoming</option>
                        <option name="Picked Up">Picked Up</option>
                    </select>
                    <label>Payment Status</label>
                    <select id="payementStatus" onChange={e => {setPaymentStatus(e.target.value)}}>
                        <option name="All"> All</option>
                        <option name="Paid">Paid</option>
                        <option name="Not Paid">Not Paid</option>
                    </select>
                    <div>
                    <button className="button" onClick = {Submit} >Submit</button>
                </div>
            </div>}
                </div>}
                {status && <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>manufacturer</th>
                            <th>model</th>
                            <th>year</th>
                            <th>color</th>
                            <th>License</th>
                            <th>start_date</th>
                            <th>end_date</th>
                            <th>Total payment</th>
                            <th>reservationStatus</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservations.map((reservation) => (
                                <tr key={reservation.License + reservation.username + reservation.start_date + reservation.end_date}>
                                    <td>{reservation.name}</td>
                                    <td>{reservation.manufacturer}</td>
                                    <td>{reservation.model}</td>
                                    <td>{reservation.year}</td>
                                    <td>{reservation.color}</td>
                                    <td>{reservation.License}</td>
                                    <td>{reservation.start_date}</td>
                                    <td>{reservation.end_date}</td>
                                    <td>{reservation.payment}</td>
                                    <td>{reservation.reservation_status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button className='button' onClick={Return}> return </button>
            </div>}
              
        </div>

    );
}

export default Reservations;