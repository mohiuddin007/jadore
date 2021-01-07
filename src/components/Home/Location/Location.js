import React from 'react';
import './Location.css';
import image1 from '../../../images/HomePageResources/Group 86 1.png';
import image2 from '../../../images/HomePageResources/Group 86 1(1).png';


const Location = () => {


    return (
        <div className="darkBg pt-5 pb-5">
                <h2 className="text-center">Location & Timing</h2>
                <p className="text-center">Lorem ipsum lorem ip isujsd fskd j  lorem ippu summu</p>

                <div className="row mt-5 justify-content-center">
                    <div className="d-none d-sm-block col-md-2 ">
                         <img src={image1} className="img-fluid leaf" alt=""/>
                    </div>
                    <div className="col-10 col-sm-10 col-md-4 pt-4 text-center">
                        <h6 className="mb-3">Opening & Closing time</h6>
                        <p>Sat (9.00 Am - 10 Pm)</p>
                        <p>Sun (9.00 Am - 10 Pm)</p>
                        <p>Mon (9.00 Am - 10 Pm)</p>
                        <p>Tue (9.00 Am - 10 Pm)</p>
                        <p>Wed (9.00 Am - 10 Pm)</p>
                        <p>Thu (9.00 Am - 10 Pm)</p>
                    </div>
                    <div className="col-10 col-sm-10 col-md-4">
                        <div className="text-center mt-3">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe id="gmap_canvas" className="googleMap" src="https://maps.google.com/maps?q=81%20Boulevand%20de%20Menilmontant,%2075011%20paris&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                <a href="https://git.io/JLbaF"></a><a href="https://codepen.io/embed-google-map/full/BaLrEGr"></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="d-none d-sm-block col-md-2">
                    <img src={image2} className="img-fluid leaf" alt=""/>
                    </div>
                </div>
        </div>
    );
};

export default Location;
