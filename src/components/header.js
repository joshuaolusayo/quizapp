import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header bg-warning">
            <div className="font-weight-bold shadow row bg-warning fixed-top">
                <div className="col-11 col-md-10 mx-auto bg-warning">
                    <nav className="navbar navbar-expand-md navbar-light px-md-5 bg-warning">
                        <Link className="navbar-brand" to="/modules">
                            <img className="logoPic" src={require('../images/logo.png')} alt=""/>
                            <span className="navbar-text font-weight-bold">
                                &nbsp;CSC444
                            </span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <hr />
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown mx-2">
                                    <Link className="nav-link dropdown-toggle" to="/modules" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Modules
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/modules/1">Module 1</Link>
                                        <Link className="dropdown-item" to="/modules/2">Module 2</Link>
                                        <Link className="dropdown-item" to="/modules/3">Module 3</Link>
                                        <Link className="dropdown-item" to="/modules/4">Module 4</Link>
                                        <Link className="dropdown-item" to="/modules/5">Module 5</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/tests">Tests</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown mx-2">
                                    <Link className="nav-link dropdown-toggle" to="/modules" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tests
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/tests/101">Module 1 Test</Link>
                                        <Link className="dropdown-item" to="/tests/102">Module 2 Test</Link>
                                        <Link className="dropdown-item" to="/tests/103">Module 3 Test</Link>
                                        <Link className="dropdown-item" to="/tests/104">Module 4 Test</Link>
                                        <Link className="dropdown-item" to="/tests/105">Module 5 Test</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/modules">Modules</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="clearSpace"></div>
        </div>
    )
}

export default Header;