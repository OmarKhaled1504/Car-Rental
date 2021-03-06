import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useEffect } from 'react';


export default function StartDate (){
  const [value, setValue] = React.useState(new Date());

  useEffect(() => {
    sessionStorage.setItem("startDate",value);
  }, [value])
  return (
    <div className='container5'>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
     <DesktopDatePicker
          label="Start Date"
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

//   return (
//     <div className='container5'>
//        <LocalizationProvider dateAdapter={AdapterDateFns}>
//      <DesktopDatePicker
//           label="For desktop"
//           value={value}
//           minDate={new Date('2017-01-01')}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         </LocalizationProvider>
//     </div>
//   );
// }
