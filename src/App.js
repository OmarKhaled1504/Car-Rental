import './App.css';
import Navbar from './Navbar';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import Home from './Home';
import ColorSelector from './ColorSelector';
import TypeSelector from './TypeSelector';
import Profile from './Profile';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div ClassName = "content">
      
      <switch>
        <Route exact path="/">
              <ColorSelector/>
              <TypeSelector/>
              <Home />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
      </switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
