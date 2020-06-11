import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="">
             <div className="container-fluid bg-warning">
                <div className="footer row py-5 px-3">
                    <div className="col-sm-10 mx-auto text-center jumbotron rounded-0 bg-warning text-light mb-0">
                        <h3 className="joingrp text-dark font-weight-bold">Join the class social group</h3><br />
                        <div className="socialLinks mb-4 mb-sm-5">
                            <Link className="rounded-circle btn btn-primary text-center mx-2 shadow shadow" to="https://wwww.facebook.com/oyeleke.oluwasayo">
                                <i className="fa fa-facebook fa-2x"></i>
                            </Link>
                            <Link className="rounded-circle btn btn-success text-center mx-2 shadow" to="https://web.whatsapp.com">
                                <i className="fa fa-whatsapp fa-2x"></i>
                            </Link>
                            <Link className="rounded-circle btn btn-info text-center mx-2 shadow" to="www.telegram.com">
                                <i className="fa fa-telegram fa-2x"></i>
                            </Link>
                        </div>
                        <hr />
                        <div className="navLinks mb-0 d-flex flex-column justify-content-center align-items-center flex-md-row">
                            <Link className="mx-3 my-2 my-md-0 font-weight-bold text-dark" to="/modules">
                                <i className="fa fa-book invisible fawesome"></i>
                                &nbsp;MODULES
                            </Link>
                            <Link className="mx-3 my-2 my-md-0 font-weight-bold text-dark" to="/tests">
                                <i className="fa fa-edit invisible fawesome"></i>
                                &nbsp;TAKE TESTS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <p className="text-light p-3 text-center mb-0">Made with <i className="fa fa-heart text-warning"></i> by Joshua Oyeleke</p>
            </div>
        </div>
    );
};

export default Footer;
