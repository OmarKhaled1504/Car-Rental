import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import BlogList from './Components/BlogList';

const Home = () =>{
    function convert(str) {
        var mnths = {
            Jan: "01",
            Feb: "02",
            Mar: "03",
            Apr: "04",
            May: "05",
            Jun: "06",
            Jul: "07",
            Aug: "08",
            Sep: "09",
            Oct: "10",
            Nov: "11",
            Dec: "12"
          },
          date = str.split(" ");
        return [date[3], mnths[date[1]], date[2]].join("-");
      }
    var username = sessionStorage.getItem('username');
    const [cars,setCars] = useState(null);
    const[status,setStatus] = useState(false);
    const history = useHistory();


    const Search = async (e) =>{
        var color = sessionStorage.getItem('color');
        var type= sessionStorage.getItem('type');
        var region = sessionStorage.getItem('region');
        var price= sessionStorage.getItem('price');
        var startDatee = sessionStorage.getItem('startDate');
        var startDate = convert(startDatee)
        var endDatee = sessionStorage.getItem('endDate');   
        var endDate = convert(endDatee)

        console.log(endDate);
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
    return(
        <div className="home">
            <Button className='button500' variant="contained" onClick={Search}>Search</Button>
            <div className='container8'>
             <div className="blog-list">
               {status &&  <div>
                <BlogList cars = {cars} title="All Blogs"/>
                    <button className="Rent">Go Back </button>
                    <br/>
                 </div>}
        </div>
        </div>
        </div>
    );
} 

export default Home;