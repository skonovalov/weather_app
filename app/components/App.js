import React, {Component} from "react";
import jsonp from "jsonp";

import Temperature from "./Temperature";
import City from "./City";

export default class App extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            city: null,
            temp: null,
            addCity: '',
            data: ''
        };
    }
    render() {
        return (
            <div>
                <City city = {this.state.city} />
                <Temperature temp = { this.state.temp }/>

                <div>
                    <input type     = "text"
                           onChange = { this.getCity }
                           value    = { this.state.handleCity }/>
                    <button type="button" onClick = { this.handleAddCity } >Добавить город</button>
                </div>
                <div>
                    <select name="" id="">
                        {this.getLocalStorageKeys()}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        let self = this;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                 let lat = position.coords.latitude;
                 let lon = position.coords.longitude;

                jsonp(`http://api.openweathermap.org/data/2.5/weather?APPID=d7f7b34f3a9398e8e3bb85cefb767ab1&lat=${lat}&lon=${lon}&units=metric`, null, function (err, data) {
                    if (err) {
                        console.error('error', err.message);
                    } else {
                        console.log('data', data);
                        self.setState({
                            city: data.name,
                            temp: data.main.temp
                        });
                    }
                });
            }, ()=> console.log('error'));
        }
    }


    getCity =( event ) => {

        let self = this;
        let value = event.target.value;

        jsonp(`http://api.openweathermap.org/data/2.5/weather?APPID=d7f7b34f3a9398e8e3bb85cefb767ab1&units=metric&q=${value}`, null, function (err, data) {
            if (err) {
                console.error('error', err.message);
            } else {
                console.log('data', data);
                getData(data, value);
            }
        });

        function getData(data_, val){
            self.setState({
                addCity: val,
                data: [data_.name, data_.coord.lat, data_.coord.lon]
            });


        }
    }

    handleAddCity = () => {
        localStorage.setItem(this.state.data[0], `{lat:${this.state.data[1]}, lon: ${this.state.data[2]}}`);
    }

    getLocalStorageKeys = () => {
        for(let key in localStorage) {
           return (<option value={localStorage[key]} >{key}</option>)
        }
    }
}