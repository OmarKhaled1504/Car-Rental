import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


export default function EndDate() {
  const [value, setValue] = React.useState(new Date());

  return (
    <div className='container6'>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
     <DesktopDatePicker
          label="End Date"
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    </div>
  );
}