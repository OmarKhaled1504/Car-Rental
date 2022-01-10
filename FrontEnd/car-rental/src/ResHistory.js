import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function Reservations() {
    const [username, setUsername] = useState(null);
    const [reservations, setReservations] = useState(null);
    const [status , setStatus] = useState(false)
     useEffect(async (e) => {
      setUsername(sessionStorage.getItem('username'));
      let response = await axios.get('http://localhost:8080/api/v1/reservations/userReservations',{
         params: {
          username
         }
     }) 
     let data = response.data;
     setReservations(data);
     console.log(data);
     setStatus(true)
    }, [])

 
    return (
        <div className='Reservations'>
            <h1>Reservations</h1>
              <div>
               {status && <table className='Tablee'>
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
                </table>}
            </div>     
        </div>

    );
}

export default Reservations;