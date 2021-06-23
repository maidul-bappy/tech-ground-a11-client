import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand m-4" href="#"><img src={logo} className="w-75" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link mr-5" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-5" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-5" to="/admin">Admin</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link mr-5" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
