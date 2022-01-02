
import Namebar from './Namebar';
import LoginForm from './Components/LoginForm';
import { useState } from 'react/cjs/react.development';
function App() {
  const admin = {
    email: "admin@admin.com",
    password: "admin"
  }
  const [user, setUser] = useState({name: "",email: ""});
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);
    if(details.email == admin.email && details.password == admin.password){
      console.log("Logged in");
    }else{
      console.log("details do not match")
    }
  }
  const Logout = () =>{

  }
  return (
    <div className="App">
      <Namebar />
      <div className="content">
        
        {(user.email != "")? (
          <div className="welcome">
            <h2>Welcome,<span>{user.name}</span></h2>
            <button>Logout</button>
          </div>
        ):(
          <LoginForm Login = {Login} error = {error} />
        )}
      </div>
    </div>
  );
}

export default App;
