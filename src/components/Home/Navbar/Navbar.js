import React from 'react';
import './Navbar.css';
import logo from '../../../images/HomePageResources/logo.png';
import loveIcon from '../../../images/HomePageResources/Group 109.svg';
import userIcon from '../../../images/HomePageResources/User Panel.svg';
import cartIcon from '../../../images/HomePageResources/Group 108.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbarBg text-center">
            <img src={logo} className="navbar-brand logo d-block d-sm-block d-md-none" alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active mr-md-5 mr-0 mx-5 mx-md-0">
                        <a className="nav-link" href="#">All Items</a>
                    </li>
                    <li className="nav-item mx-5">
                        <a className="nav-link" href="#">Most Popular</a>
                    </li>
                    <li className="nav-item mx-5">
                        <img src={logo} className="navbar-brand logo d-none d-sm-none d-md-block" alt="" />
                    </li>
                    <li className="nav-item dropdown mx-5">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Language
                                 </a>
                        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item text-white" href="#">France</a>
                            <a className="dropdown-item text-white" href="#">English</a>

                        </div>
                    </li>
                    <li className="nav-item mr-5">
                        <span><img src={loveIcon} className='ml-5 icon' alt="" /></span>
                        <span><img src={cartIcon} className='ml-5 icon' alt="" /></span>
                        <span><img src={userIcon} className='ml-5 icon' alt="" /></span>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;