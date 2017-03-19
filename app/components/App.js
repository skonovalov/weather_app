import React, {Component} from "react";
import jsonp from "jsonp";
import store from "store";
import { connect } from "react-redux";
import Temperature from "./Temperature";
import City from "./City";

class App extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        console.log('==render==');
        console.log('this.props.testStore', this.props.store);
        return (
            <div className="app">
                <div className="app__top">
                    <City  />
                    <Temperature  />
                </div>

                <div className="app__bottom">
                    <div>
                        <input type     = "text"

                              />
                        <button type="button"  >Добавить город</button>
                    </div>
                    <div className="select">
                        {/*<select name="select"
                                id="select"
                                onChange = { this.handleSelect }>
                            {
                                this.cities.map((elem, index)=>{
                                    return <option key={index}
                                                   value={ elem.newKey }>{elem.newKey}</option>
                                })
                            }
                        </select> */}
                    </div>
                </div>
            </div>
        )
    }
    /*render() {
        console.log('==render==');
        console.log('this.props.testStore', this.props.testStore);
        return (
            <div className="app">
                <div className="app__top">
                    <City city = { this.state.city } />
                    <Temperature temp = { this.state.temp } />
                </div>

               <div className="app__bottom">
                   <div>
                       <input type     = "text"
                              onChange = { this.getCity }
                              value    = { this.state.inputVal }/>
                       <button type="button" onClick = { this.handleAddCity } >Добавить город</button>
                   </div>
                   <div className="select">
	                   <select name="select"
	                           id="select"
	                           onChange = { this.handleSelect }>
			                   {
				                   this.cities.map((elem, index)=>{
					                   return <option key={index}
					                                  value={ elem.newKey }>{elem.newKey}</option>
				                   })
			                   }
	                   </select>
                   </div>
               </div>
            </div>
        )
    }

    componentDidMount() {
        this.getLocation();
        this.getLocalStorageKeys();
	    console.log(this.cities);
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

        this.setState({
            inputVal: event.target.value
        });

        jsonp(`http://api.openweathermap.org/data/2.5/weather?APPID=d7f7b34f3a9398e8e3bb85cefb767ab1&units=metric&q=${value}`, null, function (err, data) {
            if (err) {
                console.error('error', err.message);
            } else {
                console.log('data', data);
                getData(data);
            }
        });

        function getData(data_){
            self.setState({
                addCity: '*' + data_.name

            });


        }
    }

    handleAddCity = () => {
	    store.set(this.state.addCity, '');

	    this.setState({
	        inputVal: ''
        });
	    console.log('success');
    }

    getLocalStorageKeys = () => {
    	let self = this;

        store.each(function(value, key) {
			if( key.indexOf('*') === -1 ) { return; }
			let newKey = key.trim().substring(1);

			self.cities.push({newKey, value});
		});
    }

	handleSelect = (event) => {
    	console.log('select event', event.target.value);
    	let self = this;

		jsonp(`http://api.openweathermap.org/data/2.5/weather?APPID=d7f7b34f3a9398e8e3bb85cefb767ab1&units=metric&q=${event.target.value}`, null, function (err, data) {
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
	}*/
}

export default connect(
    state=>({
        store: state
    }),
    dispatch=>({})
)(App);