import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div className="header-container container-fluid">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;
