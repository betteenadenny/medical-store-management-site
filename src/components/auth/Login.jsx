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

    function attemptLogin(event) {
        event.preventDefault()
        if(!email || !password){
            setErrorMessage('All fields are required');
            return
        }

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
    return <div>
        <Navbar/>
        <div className="container-fluid col-6">
            <div className="row">
                <h1>Login</h1>
                {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                <form onSubmit={attemptLogin}>
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
                        <label for="password">Password:</label>
                        <input type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" >
                            Login
                        </button>
                    </div>
                </form>
            </div> 
        </div>
    </div>
}

export default checkGuest(Login);