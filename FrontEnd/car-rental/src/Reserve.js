import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from 'axios';



export default function Reserve (){
  const history = useHistory();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [amount, setAmount] = useState('');
  const [username,setUsername] = useState('')
  const [license,setLicense] = useState('')

  const pay = async(e) =>{
    e.preventDefault();
             let response = await axios.get('http://localhost:8080/api/v1/reservations/modify',{
                params: {
                  license,
                  username,
                  startDate,
                  endDate            
                }
            });
            sessionStorage.setItem('username',username)
            history.push("/user")

  }
    useEffect(() => {
      setStartDate(sessionStorage.getItem('startDate'));
       setEndDate(sessionStorage.getItem('endDate'));
       setAmount(sessionStorage.getItem('amount'));
       setLicense(sessionStorage.getItem('license'))
       setUsername(sessionStorage.getItem('username'))
      }, [])
  return(
  <div className='container10'>
  <h1>Start Date: {startDate}</h1>
  <h1>End Date: {endDate}</h1>
  <h1>Amount: {amount}</h1>
  <Button variant="contained" onClick={pay}>Pay</Button>
  </div>
    );
  }