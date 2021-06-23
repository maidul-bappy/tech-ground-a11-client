import React from 'react';
import { Link } from 'react-router-dom';
import repair from '../../../images/repair.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{ minHeight: '450px' }} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 hashtech-hero-text">
                <h6>Electronics Service & Support</h6>
                <h1 className="font-weight--reguler mb-15">Facilitate All Local Electronics Service Providers</h1>
                <p>Best Electronic Repair, Management & Support Services.</p>
                <Link to="/" className="btn btn-primary btn-style">Get Details</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={repair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;


