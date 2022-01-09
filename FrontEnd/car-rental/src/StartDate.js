// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';

// export default function StartDate() {
//   const [value, setValue] = React.useState(new Date());

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