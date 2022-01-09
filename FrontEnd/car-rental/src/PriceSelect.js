import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PriceSelect() {
  const [price, setprice] = React.useState('');

  const handleChange = (event) => {
    setprice(event.target.value);
  };

  return (
    <div className='container1'>
    <Box sx={{ minWidth: 200 }}>
      <FormControl  sx={{ m: 2, width: 300}}>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={price}
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value={200}>200</MenuItem>
          <MenuItem value={400}>400</MenuItem>
          <MenuItem value={600}>600</MenuItem>
          <MenuItem value={800}>800</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}