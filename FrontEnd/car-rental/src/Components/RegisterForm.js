import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
 const  RegisterForm = ()=> {
    const [UserName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();
    const SignIn = () =>{
        history.push('/')
    }
        return (
            <div className="Register">
                <div className="auth-inner">
                    <form>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" placeholder="Username" onChange={e => setUserName(e.target.value) }/>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="E-mail" onChange={e => setEmail(e.target.value) }/>
                        </div>

                        <div className="form-group">
                            <label>Password </label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value) }/>
                        </div>
                        <div className="form-group">
                            <label>Confirm-Password</label>
                            <input type="password" className="form-control" placeholder="Confirm-Password" onChange={e => setConfirmPassword(e.target.value)}/>
                        </div>
                        <div>
                            <button type="submit" className="button">Sign Up</button>
                        </div>
                        <div>
                            <label>Already have an Account?</label>
                            <button type="submit" className="button" onClick={SignIn} >Sign In</button>
                        </div>
                    </form>
                </div>
            </div>

        ); 
}
export default RegisterForm;