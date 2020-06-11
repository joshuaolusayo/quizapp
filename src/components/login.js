import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    document.title = "Log in";
    return (
        <div className="loginBanner container-fluid">
            <div className="row justify-content-center align-items-center h-100">
                <div className="loginDiv bg-warning col-10 col-sm-8 col-md-6 mx-auto pb-4">
                    <form className="d-flex flex-column justify-content-center align-items-center pt-4">
                        <img className="logo" src={require('../images/logo.png')} alt="logo" />
                        <input className="w-100 bg-transparent py-2 my-2" type="text" name="username" placeholder="Username" required />
                        <input className="w-100 bg-transparent py-2 my-2" type="password" name="password" placeholder="Password" autoComplete="on" required />
                        <input type="submit" value="Log in" className="border border-dark btn btn-md btn-outline-dark my-3 px-md-4" />
                    </form>
                    <p className="text-dark px-sm-3 font-italic text-center"><small>By logging in, I agree to the terms and conditions of the University of Ilorin.</small></p>
                    <hr />
                    <p className="text-center">Want to change your password password? 
                        <Link to="/changepassword" className="text-muted"> Click here</Link> here
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;