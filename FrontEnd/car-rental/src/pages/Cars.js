import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Navbar from '../Components/NavBar';
import BlogList from '../Components/BlogList';
import axios from 'axios';

function Cars() {
    const [search, setSearch] = useState(false);
    const [insert, setInsert] = useState(false);
    const [modify, setModify] = useState(false);
    const [status, setStatus] = useState(null);
    const [cars, setCars] = useState(null);
    const [License, setLicense] = useState(null);
    const [Color, setColor] = useState(null);
    const [Manufacturer, setManufacturer] = useState(null);
    const [Model, setModel] = useState(null);
    const [Office, setOffice] = useState(null);
    const [price_day, setprice_day] = useState(null)
    const [year, setYear] = useState(null)
    const [carType, setType] = useState(null);

    const Sumbit = async (e) => {
        var x = parseInt(year)
        var y = parseInt(price_day)
        if (search) {
            const carStatus = document.getElementById("carStatus").value;
            setSearch(false);
            e.preventDefault();
            let response = await axios.get('http://localhost:8080/api/v1/car/filter', {
                params: {
                    License,
                    Color,
                    Manufacturer,
                    Model,
                    x,
                    Office,
                    y,
                    carStatus,
                    carType
                }
            });
            let data = response.data;
            setLicense(null);
            setColor(null);
            setManufacturer(null);
            setModel(null);
            setOffice(null);
            setprice_day(null);
            setYear(null);
            setType(null);
            setCars(data);
            setStatus(true);
        } else if (insert) {

            var jsonData = {
                "license": License,
                "color": Color,
                "manufacturer": Manufacturer,
                "model": Model,
                "year": x,
                "region": Office,
                "price_per_day": y,
                "status": "Available",
                "car_type": carType
            }
            console.log(jsonData)
            fetch('http://localhost:8080/api/v1/car/insert', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData)
            })

        }
        setInsert(false);
        setSearch(false);
        setModify(false);
    }
    const Insert = () => {
        setInsert(true);
        setModify(false);
        setSearch(false);
    }
    const Search = () => {
        setSearch(true);
        setInsert(false);
        setModify(false);
    }
    const Modify = () => {
        setModify(true);
        setInsert(false);
        setSearch(false);
    }
    const handleModify = async () => {
        const carStatus = document.getElementById("carStatus").value;
        fetch('http://localhost:8080/api/v1/car/modify/' + License + '/' + carStatus, {
            method: 'POST'
        })
        setModify(false)
    }
    // useEffect(() => {
    //     console.log("rueirrgr");
    // }, [status])

    const handleDelete = () => {

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
                <button className="button" onClick={() => { Insert() }} >Insert</button>
                <button className="button" onClick={Search} >Search</button>
                <button className="button" onClick={Modify} >Modify</button>
            </div>
            {status && <div>
                <table>
                <thead>
                <tr>
                    <th>car type</th>
                    <th>manufacturer</th>
                    <th>model</th>
                    <th>region</th>
                    <th>license</th>
                    <th>price per day</th>
                    <th>Status</th>

                </tr>
                </thead>
                <tbody>
                    {
                        cars.map((car) => (
                            <tr key={car.license}>
                                <td>{car.manufacturer}</td>
                                <td>{car.model}</td>
                                <td>{car.region}</td>
                                <td>{car.car_type}</td>
                                <td>{car.license}</td>
                                <td>{car.car_status}</td> 
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                <button className='button' onClick={Return}> return </button>
            </div>}
            {(insert || search) && <div>
                <div className="form-group">
                    <label>License</label>
                    <input type="text" className="form-control" required placeholder="License" onChange={e => setLicense(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input type="text" className="form-control" required placeholder="Color" onChange={e => setColor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Manafacturer</label>
                    <input type="text" className="form-control" required placeholder="Manafacturer" onChange={e => setManufacturer(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Car Type</label>
                    <input type="text" className="form-control" required placeholder="Car Type" onChange={e => setType(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input type="text" className="form-control" required placeholder="Model" onChange={e => setModel(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="text" className="form-control" required placeholder="Model" onChange={e => setYear(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Office</label>
                    <input type="text" className="form-control" required placeholder="Office" onChange={e => setOffice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Price/Day</label>
                    <input type="text" className="form-control" required placeholder="Price/Day" onChange={e => setprice_day(e.target.value)} />
                </div>
                {search && <div className="form-group">
                    <label>Status</label>
                    <select id="carStatus">
                        <option name="All"> All</option>
                        <option name="Available"> Available</option>
                        <option name="Out of Serive">Out of Serive</option>
                    </select>

                </div>}
                <div>
                    <button className="button" onClick={Sumbit} >Submit</button>
                </div>
            </div>}
            {modify && <div>
                <div className="form-group">
                    <label>Lisence</label>
                    <input type="text" className="form-control" placeholder="Lisence" onChange={(e) => { setLicense(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select id="carStatus">
                        <option name="Available"> Available</option>
                        <option name="Out of Serive">Out of Serive</option>
                    </select>
                    <button className='button' onClick={handleModify}>Submit</button>
                </div>
            </div>}
        </div>
    );
}

export default Cars;