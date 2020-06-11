import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
    document.title = "Change Password"
    return (
        <div className="loginBanner container-fluid">
            <div className="row justify-content-center align-items-center h-100">
                <div className="loginDiv bg-warning col-10 col-sm-8 col-md-6 mx-auto pb-4">
                    <form className="d-flex flex-column justify-content-center align-items-center pt-4" action="#">
                        <img className="logo" src={require('../images/logo.png')} alt="logo" />
                        <input className="w-100 bg-transparent py-2 my-2" type="text" placeholder="Username" />
                        <input className="w-100 bg-transparent py-2 my-2" type="password" placeholder="Previous password" autoComplete="on" />
                        <input className="w-100 bg-transparent py-2 my-2" type="password" placeholder="New Password" autoComplete="off" />
                        <input className="w-100 bg-transparent py-2 my-2" type="password" placeholder="New Password" autoComplete="off" />
                        <input type="submit" className="border border-dark btn btn-md btn-outline-dark my-3 px-md-4" value="Change Password" />
                    </form>
                    <p className="text-dark px-sm-3 font-italic text-center"><small>Keep your password safe</small></p>
                    <hr />
                    <p className="text-center">Want to log in? 
                        <Link to="/login" className="text-muted"> Log in</Link> here
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;