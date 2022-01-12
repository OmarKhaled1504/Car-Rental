import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';



 const  SignUp = ()=> {
    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //const [response , setResponse] = useState('');

    const history = useHistory();
    const SignUp = async (e) =>{
        e.preventDefault()
        let response = await axios.get('http://localhost:8080/api/v1/customer/signup', { params:{
                email,
                username
            }})
        let data = await response.data
        // let response = await axios.get('http://localhost:8080/api/v1/customer/signup/'+email+'/'+userName)
        // let data = await response.data
        if(password != confirmPassword){
            alert("Invalid Confirm Password")
        }else if (data){
            var jsonData = {
                "email": email,
                "name": name,
                "username":username,
                "password": password
            }
            console.log(jsonData)
             fetch('http://localhost:8080/api/v1/customer', { 
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(jsonData) 
        })
                sessionStorage.setItem("username",username);
                history.push('/user')
        }else {
            alert("Username or email already exists");
        }
        

    }
    const SignIn = () =>{
        history.push('/')
    }
        return (
            <div className="Login">
             <Stack spacing={6} direction="column">
                <div className="auth-inner">
                    <form>
                    <div className="form-group">
                            <TextField type="text" className="form-control" placeholder="Name" variant="standard" onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <TextField type="text" className="form-control" placeholder="Username" variant="standard" onChange={e => setUserName(e.target.value) }/>
                        </div>

                        <div className="form-group">
                            <TextField type="email" className="form-control" placeholder="E-mail" variant="standard" onChange={e => setEmail(e.target.value) }/>
                        </div>

                        <div className="form-group">
                            <TextField type="password" className="form-control" placeholder="Password" variant="standard" onChange={e => setPassword(e.target.value) }/>
                        </div>
                        <div className="form-group">
                            <TextField type="password" className="form-control" placeholder="Confirm-Password" variant="standard" onChange={e => setConfirmPassword(e.target.value)}/>
                        </div>
                        
                        <div>
                            <button type="submit" className="button" onClick={SignUp}>Sign Up</button>
                        </div>
                        <div>
                            <label>Already have an Account?</label>
                            <button type="submit" className="button" onClick={SignIn} >Sign In</button>
                        </div>
                    </form>
                </div>
            </Stack>
            </div>

        ); 
}
export default SignUp;