import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useEffect } from 'react';


export default function EndDate() {
  const [value, setValue] = React.useState(new Date());

  useEffect(() => {
      sessionStorage.setItem("endDate",value);
    }, [value])
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
// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

// export default function EndDate() {
//   const [value, setValue] = React.useState(null);

//   return (
//     <div className='container6'>
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label="Basic example"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//     </div>
//   );
// }
