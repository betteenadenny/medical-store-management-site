import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { setUser } from "../../store/authSlice";
import checkGuest from "./CheckGuest";

function Login() {
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function attemptLogin() {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(
            user => user.email === email && user.password === password
        );

        if(user){
            const loggedInUser = {
                email:user.email,
                name:user.name
            };
            localStorage.setItem('user',JSON.stringify(loggedInUser));

            dispatch(setUser(loggedInUser));

            navigate('/medicine');
        }else{
            setErrorMessage('Invalid email or password');
        }
    }
    return (<div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1>Login</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
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
                        <button className="btn btn-primary float-right" onClick={attemptLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default checkGuest(Login);