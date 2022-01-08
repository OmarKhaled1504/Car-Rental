import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/LoginForm';
import SignUp from './Components/RegisterForm';
import admin from './Components/adminDashBoard';
import Reservations from './pages/Reservations';
import Cars from './pages/Cars';
import Customers from './pages/Customers';
import Navbar from './Components/NavBar';
import Reports from './pages/Reports';
import NavbarUser from './NavbarUser';
import * as React from 'react';
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
import ResHistory from './ResHistory'

const NavRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <Navbar/>
      <Component {...props}/>
    </div>
  )}/>
)
const NavRouterProfile = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
 <div>
    <NavbarUser/>
    <div ClassName = "content"></div>
      <div>
        <ColorSelector/>
        <TypeSelector/>
        <Component {...props}/>
      </div>
    </div>)}/>
)
const NavRouterProfile2 = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
 <div>
    <NavbarUser/>
        <Component {...props}/>
    </div>)}/>
)
function App() {
  return (
    <>
  <Router>
    <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/SignIn" exact component={Login} />
            <Route path="/SignUp" exact component={SignUp} />
            <NavRoute path="/admin" exact component={admin} />
            <NavRoute path="/admin/Cars" exact component={Cars}/>
            <NavRoute path="/admin/Customers" exact component={Customers} />
            <NavRoute path="/admin/Reservations"  exact component={Reservations} />
            <NavRoute path="/admin/Reports"  exact component={Reports} />
            <NavRouterProfile path = "/user" exact component={Home}/>
            <NavRouterProfile2 path="/user/ResHistory" exact component={ResHistory}/>
          </Switch>
    </div>
  </Router>
    </>
  );
}

export default App;

