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
    function registerUser(event){
        event.preventDefault();
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
            setErrorMessage('Email is already taken');
            return
        }

        const newUser = {name,email,password};
        existingUsers.push(newUser);    
        localStorage.setItem('users',JSON.stringify(existingUsers));

        setErrorMessage('');
        alert('Registration Successful');
        navigate('/login');

    }
    return <div>
        <Navbar/>
        <div className="container-fluid col-6 ">
            <div className="row">
                <h1>Register</h1>
                {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                <form onSubmit={registerUser}>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="text"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password" >Password:</label>
                        <input type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="passwordConf">Confirm Password:</label>
                        <input type="password"
                        id="passwordConf"
                        className="form-control"
                        value={passwordConf}
                        onChange={(event)=>setPasswordConf(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default checkGuest(Register) ;