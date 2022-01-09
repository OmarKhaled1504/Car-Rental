import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

const Home = () =>{
    var username = sessionStorage.getItem('username');
    const [cars,setCars] = useState(null);
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
        // console.log(startDate);
        // console.log(endDate);
        // console.log(color);
        // console.log(type);
        // console.log(region);
        // console.log(price);


    }
    return(
        <div className="container7">
            <Button variant="contained" onClick={Search}>Search</Button>
             <div className="home">
        </div>
        </div>
        
    );
} 

export default Home;