import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (<Router>
    <div className="App">
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path="/LogIn" component={LoginForm} />
            <Route path="/SignUp" component={RegisterForm} />
          </Switch>
    </div></Router>
  );
}

export default App;
