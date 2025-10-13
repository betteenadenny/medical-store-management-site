import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkGuest from "./CheckGuest";

function Register() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConf, setPasswordConf] = useState('');
    let [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    function registerUser(){
        if(!name || !password || !passwordConf || !email){
            setErrorMessage('All Fields are required!');
            return
        }

        if(password !== passwordConf){
            setErrorMessage('Passwords do not match');
            return
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = existingUsers.find(
            user => user.email === email
        )
        if(userExists){
            setErrorMessage('A Email is already taken');
            return
        }

        const newUser = {name,email,password};
        existingUsers.push(newUser);    localStorage.setItem('users',JSON.stringify(existingUsers));

        setErrorMessage('');
        alert('Registration Successful');
        navigate('/login');

    }
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1>Register</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"
                        className="form-control"
                        value={name}
                        onInput={(event)=>setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text"
                        className="form-control"
                        value={email}
                        onInput={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password"
                        className="form-control"
                        value={password}
                        onInput={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password"
                        className="form-control"
                        value={passwordConf}
                        onInput={(event)=>setPasswordConf(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={registerUser}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default checkGuest(Register) ;