/**
 * Created by Will on 6/27/17.
 */
import React, { Component } from 'react';
import '../css/SessionStart.css';
import './SessionComplete';

class SessionStart extends Component {
    constructor(props) {
        super(props);
        this.session = JSON.parse(localStorage.getItem('session')) || {
            activity: '',
            description: '',
            location: ''
        };
    }

    componentDidMount() {
        const office = {lat: 37.856, lng: -122.267};
        this.map = new window.google.maps.Map(document.getElementById('map'), {
            center: office,
            zoom: 8
        });

        this.infoWindow = new window.google.maps.InfoWindow;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.marker = new window.google.maps.Marker({
                    position: pos,
                    map: this.map
                });
                this.infoWindow.setPosition(pos);
                this.infoWindow.setContent('Is this your location?');
                this.map.setCenter(pos);
            }.bind(this), function() {
                this.handleLocationError(true, this.infoWindow, this.map.getCenter());
            }.bind(this));
        } else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
    }

    handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(this.map);
    };

    handleInputChange = (e) => {
        this.session[e.target.name] = e.target.value;
        localStorage.setItem('session', JSON.stringify(this.session));
    };

    handleButtonClick = (e) => {
        this.props.startSession(this.session);
        this.refs.activity.value = "";
        this.refs.description.value = "";
        this.refs.location.value = "";
        this.session = {
            activity: '',
            description: '',
            location: ''
        };
        localStorage.setItem('session', JSON.stringify(this.session));
    };

    render () {
        return (
            <div className="SessionContent">
                <h2>New Session</h2>
                <h5>Activity</h5>
                <input type="text" name="activity" ref="activity" onBlur={ this.handleInputChange } defaultValue={ this.session.activity } />
                <h5>Description</h5>
                <input type="text" name="description" ref="description" onBlur={ this.handleInputChange } defaultValue={ this.session.description } />
                <h5>Location</h5>
                <input type="text" name="location" ref="location" onBlur={ this.handleInputChange } defaultValue={ this.session.location } />
                <div id="map"></div>
                <button className="btn" onClick={ this.handleButtonClick }>Start session!</button>
            </div>
        )
    }
}

export default SessionStart;