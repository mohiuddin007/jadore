import React from 'react';
import './Footer.css';
import logo from '../../../images/HomePageResources/logo.png';
import faceboookLogo from '../../../images/HomePageResources/Facebook.svg';
import instagramLogo from '../../../images/HomePageResources/Instagram.png';
import twitterLogo from '../../../images/HomePageResources/Twitter.png';
import rightBtn from '../../../images/HomePageResources/right.svg';

const Footer = () => {
    return (
        <div className="footerBg pt-5">
            <div className="row p-5">
                <div className="col-md-4 pl-5">
                    <div className="row">
                    <img src={logo} className="navbar-brand logo" alt="" />
                    <h2 className="text-danger mt-2">Jadore Manger</h2>
                    <p className="mt-3">JADORE MANGER is a well known restaurent in Franch
                      you can come and get fresh food as well as can order online</p>
                    </div>
                    <div className="row mt-4">
                        <img src={faceboookLogo} alt=""/>
                    <img src={twitterLogo} alt=""/>
                        <img src={instagramLogo} alt=""/>
                    </div>
                    <p className="mt-4">©2020 Jadore Manger</p>
                </div>
                <div className="col-md-2 col-6 mt-3 text-center">
                     <h5>Products</h5>
                     <p className="mt-4">Breakfast</p>
                     <p className="mt-4">Launch</p>
                     <p className="mt-4">Snaks</p>
                     <p className="mt-4">Desert</p>
                     <p className="mt-4">Drink</p>
                     <p className="mt-4">Most Popular</p>
                </div>
                <div className="col-md-2 col-6 mt-3 text-center">
                     <h5>Nevigation</h5>
                     <p className="mt-4">Home</p>
                     <p className="mt-4">Catagory</p>
                     <p className="mt-4">Book Table</p>
                     <p className="mt-4">About Us</p>
                     <p className="mt-4">Privacy Policy</p>
                     <p className="mt-4">Order Food</p>
                </div>
                <div className="col-md-4 mt-4">
                      <h5>Get notified </h5>
                      <h5>about new amazing Offers</h5>
                      <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus </p>
                      <div className="mt-5">
                          <form>
                              <div className="row">
                              <input type="email" name="email" className="form-control formField" placeholder="E-mail"/><span> <img type="submit" src={rightBtn} className="rightArrow" alt=""/></span>
                             
                              </div>
                          
                          
                          </form>
                      
                      </div>
                       
                </div>
            </div>
        </div>
    );
};

export default Footer;