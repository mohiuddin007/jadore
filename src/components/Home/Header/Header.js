import React from 'react';
import './Header.css';
import headerImg from '../../../images/HomePageResources/plate with green.png';
import HeaderCard from './HeaderCard';

const Header = () => {
    return (
        <div className="headerStyle text-white">
            {/* <div className="container"> */}
                <div className="row pt-5">
                    <div className="col-md-5 ml-5 pt-5">
                        <h1 className="textStyle">Good food Brings Good Mood</h1>
                        <p className="fontSize">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. </p>
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-6">
                                <button className="btn orderBtn">Order Food</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn bookBtn">Book Your Table</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ml-auto headerFood">
                            <img src={headerImg} className="headerImg img-fluid" alt="" />
                            
                    </div>
                </div>
            {/* </div> */}
            <HeaderCard/>
        </div>
    );
};

export default Header;