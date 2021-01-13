import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../../images/HomePageResources/logo.png';
import loveIcon from '../../../images/HomePageResources/Group 109.svg';
import userIcon from '../../../images/HomePageResources/User Panel.svg';
import cartIcon from '../../../images/HomePageResources/Group 108.svg';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../App';
import ScriptTag from 'react-script-tag';
const Navbar = () => {
    const [productsInfo, SetProductsInfo] = useContext(ProductContext);

    const Demo = props => (
        <ScriptTag type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
        )

        function googleTranslateElementInit() {
            new Demo.translate.TranslateElement({pageLanguage: 'fr'}, 'google_translate_element');
          }

   
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark navbarBg text-center">
            <Link to="/">
            <img src={logo} className="navbar-brand logo d-block d-sm-block d-md-none" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active mr-md-5 mr-0 mx-5 mx-md-0">
                        <Link className="nav-link" to="/products">All Items</Link>
                    </li>
                    <li className="nav-item mx-5">
                        <a className="nav-link" href="#">Most Popular</a>
                    </li>
                    <li className="nav-item mx-5">
                        <Link to="/">
                        <img src={logo} className="navbar-brand logo d-none d-sm-none d-md-block" alt="" />
                        </Link>
                    </li>
                    <li className="nav-item dropdown mx-5">
                        {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Language
                                 </a> */}
                                 <div id="google_translate_element"></div>
                        {/* <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item text-white" href="#">France</a>
                            <a className="dropdown-item text-white" href="#">English</a>

                        </div> */}
                    </li>
                    <li className="nav-item mr-5">
                        <span><img src={loveIcon} className='ml-5 icon' alt="" /></span>
                        <Link to="/cart">
                        <span>
                            <img src={cartIcon} className='ml-5 icon' alt="" />
                            <sup className="text-success"><b>{productsInfo.length}</b></sup>
                            </span>
                        </Link>
                        <Link to="/login">
                        <span><img src={userIcon} className='ml-5 icon' alt="" /></span>
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;