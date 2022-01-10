import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

var Startdate = sessionStorage.getItem('startDate');
var EndDate = sessionStorage.getItem('endDate');
const pay = async(e) =>{


}

console.log(Startdate);
export default function Reserve (){
  return(
  <div className='container10'>
  <h1>Start Date: {Startdate}</h1>
  <h1>End Date: {EndDate}</h1>
  <Button variant="contained" onClick={pay}>Pay</Button>
  </div>
    );
  }