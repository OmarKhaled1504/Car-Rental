import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
                let response1 = await axios.get('http://localhost:8080/api/v1/customer/userName', { params: {
                    email,
                }})
                let data1 = await response1.data
                sessionStorage.setItem("username",data1);
                history.push('/user');
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
         <Stack spacing={6} direction="column">
        <div className="auth-inner">
        <form >
            <div className="form-group">
                <TextField  type="email" className="form-control" id="email" label="Email" variant="standard"  required onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group"> 
                <TextField type="password" className="form-control" id="psw" label="Password" variant="standard"  required onChange={e => setPassword(e.target.value)}/>
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
                <Button variant="text" className="button" onClick={signUp} >SignUp</Button>
            </div>
        </form>
   </div>
   </Stack>
 </div>
 
)
}
export default Login;