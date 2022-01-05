import { useHistory } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submit = async() =>{

  
        let url = 'http://localhost:8080/api/v1/customer/' + email +'/'+ password
        let bool = await fetch(url)
        let response = await bool.json();

        if (response === false) {
            alert("Wrong email or password!")
            return false;
        }
        else{
            alert("el mfrod n5osh fel page")
        }
    }
    const signUp = ()=>{
        history.push('/SignUp')
    }

  return (  
    <div className="Login">
        <div className="auth-inner">
        <form >
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" id="email" required onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group"> 
                <label>Password</label>
                <input type="password" className="form-control" id="psw" required onChange={e => setPassword(e.target.value)}></input>
            </div>

            <div>
                <div className="form-group">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Admin</label>
                </div>
            </div>
            <div>
                <button onClick={submit} className="button" >Sign In</button>
            </div>
            <div>
                <label>Don't have an account?</label>
                <button className="button" onClick={signUp} >SignUp</button>
            </div>
        </form>
   </div>
 </div>
)
}
export default Login;