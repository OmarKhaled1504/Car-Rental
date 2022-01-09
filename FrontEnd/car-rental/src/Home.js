import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Home = () =>{
    var username = sessionStorage.getItem('username');
    const [cars,setCars] = useState(null);
    const[status,setStatus] = useState(false);
    const[license,setLicense] = useState();

    const Search = async (e) =>{
        var color = sessionStorage.getItem('color');
        var type= sessionStorage.getItem('type');
        var region = sessionStorage.getItem('region');
        var price= sessionStorage.getItem('price');
        var startDate = sessionStorage.getItem('startDate');
        var endDate = sessionStorage.getItem('endDate');   
        e.preventDefault();
        let response = await axios.get('http://localhost:8080/api/v1/car/filterUser',{
           params: {
               color,
               region,
               type,
               startDate,
               endDate,
               price
           }
       }); 
       let data = response.data;
         console.log(data);
         setCars(data);
         setStatus(true);
        // console.log(startDate);
        // console.log(endDate);
        // console.log(color);
        // console.log(type);
        // console.log(region);
        // console.log(price);
    }
    const click =()=>{

    }
    const Res = ()=>{
        history.push('/Reserve')
    }
    return(
        <div className="home">
            <Button className='button500' variant="contained" onClick={Search}>Search</Button>
            <div className='container8'>
             <div className="blog-list">
               {status &&  <div>
                    {cars.map(car => (
                        <div  className="blog-preview" key={car.license} >
                            <h2> <img className="image" src ={car.image}></img> </h2>
                            <h2 className="Text"> {car.manufacturer}</h2>
                            <h2 className="Text"> {car.model}</h2>
                            <h2 className="Text">Year: {car.year}</h2>
                            <h2 className="Text">Color: {car.color }</h2>
                            <h2  className="Text">Plate: {car.license}</h2>
                            <h2  className="Text">Price per day: {car.price_per_day}</h2>
                            <div ><Button className='button' varient="outlined" onAnimationEnd={()=>  setLicense(car.license)}  onClick={()=>{
                                sessionStorage.setItem("license",car.license)
                                sessionStorage.setItem("region",car.region)
                                sessionStorage.setItem("price",car.price_per_day)
                                click()
                            }} className="Rent" onClick={Res}>Rent</Button></div>
                        </div>

                    ))
                    }
                 </div>}
        </div>
        </div>
        </div>
    );
} 

export default Home;