import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { red } from '@mui/material/colors';
import { borderLeft } from '@mui/system';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const regions = [
  'Cairo',
  'Alexandria',
  
];

export default function RegionSelect() {
  const [regionChoose, setregionChoose] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setregionChoose(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 2, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Region</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={regionChoose}
          onChange={handleChange}
          input={<OutlinedInput label="Color" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {regions.map((region) => (
            <MenuItem key={region} value={region}>
              <Checkbox checked={regionChoose.indexOf(region) > -1} />
              <ListItemText primary={region} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}