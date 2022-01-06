import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(null);
    const [verify, setVerify] = useState(null)
    const [as, setAs] = useState(null)

    const submit = async(e) =>{
        if (check && email === 'admin@admin.com' && password === 'admin'){
            history.push('/admin');
        }else{
            e.preventDefault()
            let response = await axios.get('http://localhost:8080/api/v1/customer/verify', { params: {
                    email,
                    password
                }})
            let data = await response.data
            if (data) {
                history.push('/admin')
            }else {
                alert("Invalid email or password")
            }
        }
    }
    const signUp = ()=>{
        history.push('/SignUp')
    }

    // useEffect(() => {
    //     async function fetchMyAPI() {
    //         let response = await axios.get('http://localhost:8080/api/v1/customer/verify', { params: {
    //                 email,
    //                 password
    //             }})
    //         let data = await response.data
    //         setVerify(data)
    //     }
    //
    //     fetchMyAPI()
    // }, [as])


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
                    <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={e => setCheck(e.target.checked)} />
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