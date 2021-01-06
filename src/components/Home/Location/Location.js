import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class Location extends Component {
    render() {
    return (
        <div className="darkBg">
            <div className="container pt-5 pb-5">
                    <h2 className="text-center">Location & Timing</h2>
                    <p className="text-center">Lorem ipsum lorem ip isujsd fskd j  lorem ippu summu</p>
            
            <div className="row justify-content-center">
                <div className="col-md-4 pt-4 text-center">
                   <h6>Opening & Closing time</h6>
                   <p>Sat (9.00 Am - 10 Pm)</p>
                   <p>Sun (9.00 Am - 10 Pm)</p>
                   <p>Mon (9.00 Am - 10 Pm)</p>
                   <p>Tue (9.00 Am - 10 Pm)</p>
                   <p>Wed (9.00 Am - 10 Pm)</p>
                   <p>Thu (9.00 Am - 10 Pm)</p>
                </div>
                <div className="col-md-8">
                <Map google={this.props.google} zoom={14}>
 
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                    {/* <h1>{this.state.selectedPlace.name}</h1> */}
                    </div>
                </InfoWindow>
                </Map>
                </div>
            </div>
            </div>
        </div>
    );
};
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDuKEG_v_355hUpIjFjcfAYH3UErZaik6s")
  })(Location)
