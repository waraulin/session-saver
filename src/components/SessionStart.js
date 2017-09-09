/**
 * Created by Will on 6/27/17.
 */
import React, { Component } from 'react';
import '../css/SessionStart.css';
import './SessionComplete';

class SessionStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: '',
            description: '',
            location: ''
        };
    }

    componentDidMount() {
        this.renderMap();
    }

    renderMap = () => {
        const initialLocation = {lat: 37.759, lng: -122.511}; //Ocean Beach, SF
        this.map = new window.google.maps.Map(document.getElementById('map'), {
            center: initialLocation,
            zoom: 12 //1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
        });
        this.marker = new window.google.maps.Marker({
            position: this.map.center,
            animation: window.google.maps.Animation.DROP,
            draggable:true
        });

        var update_timeout = null; // This is a hacky thing to make the map register both click and dblclick events, otherwise only single clicks are registered

        this.map.addListener('click', function(e) {
            update_timeout = setTimeout(function () {
                const lat = e.latLng.lat();
                const lng = e.latLng.lng();
                const pos = {lat, lng}
                this.marker.setPosition(pos);
                this.updateLocation(pos);
                this.marker.setMap(this.map);
                this.infoWindow.close();
            }.bind(this), 200);
        }.bind(this));

        this.map.addListener('dblclick', function(e) {
            clearTimeout(update_timeout);
            this.map.setZoom(this.map.zoom++);
        }.bind(this));

        this.infoWindow = new window.google.maps.InfoWindow;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.marker.setPosition(pos);
                this.marker.setMap(this.map);
                this.map.setCenter(pos);
                this.updateLocation(pos);
                this.infoWindow.setPosition(pos);
                this.infoWindow.setContent('Zoom in and move the pin for more accurate location.');
                this.infoWindow.open(this.map);
            }.bind(this), function(PositionError) {
                console.log(PositionError);
                this.handleLocationError(true, this.infoWindow, this.map.getCenter());
            }.bind(this));
        } else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
    };

    handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
        const infoCopy = "Navigate to your location and click to drop a pin."
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' + ' ' + infoCopy :
            'Error: Your browser doesn\'t support geolocation.' + ' ' + infoCopy);
        infoWindow.open(this.map);
    };

    updateLocation = (pos) => {
        this.setState({ location: JSON.stringify(pos) });
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleButtonClick = (e) => {
        this.props.startSession(this.state);
        this.refs.activity.value = "";
        this.refs.description.value = "";
        this.setState({
            activity: '',
            description: '',
            location: ''
        });
    };

    endSession = () => {
        this.props.startSession(this.state);
        this.refs.activity.value = "";
        this.refs.description.value = "";
        this.setState({
            activity: '',
            description: '',
            location: ''
        });
    };

    startSession = () => {
        //start timer
        //set pending state
        //timer expires => send email
        this.sendEmail();
    };

    sendEmail = () => {
        const email = {recipient: "waraulin@gmail.com", activity: this.state.activity, description: this.state.description, location: this.state.location};
        this.props.sendEmail(email);
    };

    render () {
        return (
            <div className="SessionContent">
                <h2>New Session</h2>
                <h5>Activity</h5>
                <select name="activity" ref="activity" onBlur={ this.handleInputChange } defaultValue={ this.state.activity }>
                    <option value="surf">Surf</option>
                    <option value="swim">Swim</option>
                    <option value="hike">Hike</option>
                    <option value="run">Run</option>
                    <option value="walk">Walk</option>
                    <option value="snow">Snow</option>
                    <option value="fly">Fly</option>
                </select>
                <h5>Description</h5>
                <textarea type="text" name="description" ref="description" onBlur={ this.handleInputChange } defaultValue={ this.state.description } />
                <h5>Location</h5>
                <div id="map"></div>
                <button className="btn" onClick={ this.startSessionk }>Start session</button>
                <button className="btn" onClick={ this.endSession }>End session!</button>
            </div>
        )
    }
}

export default SessionStart;