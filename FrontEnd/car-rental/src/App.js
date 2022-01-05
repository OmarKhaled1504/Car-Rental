import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/LoginForm';
import SignUp from './Components/RegisterForm';
import admin from './Components/adminDashBoard';
import Reservations from './pages/Reservations';
import Cars from './pages/Cars';
import Customers from './pages/Customers';
import Navbar from './Components/NavBar';
import Reports from './pages/Reports';

const NavRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <Navbar/>
      <Component {...props}/>
    </div>
  )}/>
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
          </Switch>
    </div></Router>
    </>
  );
}

export default App;

