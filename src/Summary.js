import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// load form values into local state so it can be displayed/used
function select(state) {
        return {values : state.form.contact.values};
}


class Summary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weather: 'querying...'
        }
    }
    // Lifecycle method
    componentDidMount(){
        this.apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=[' +  this.props.values.city + ']&APPID=b714ec74bbab5650795063cb0fdf5fbe'
        console.log(this.apiUrl);
        // Make HTTP reques with Axios
        axios.get(this.apiUrl, )
            .then((res) => {
                // Set state with result
                var weatherDescription = res.data.weather[0].description;
                this.setState({weather:weatherDescription});
                console.log(this.state.weather);
            });
    }

    render() {
        return (
            <div className="Summary">
                <div className="Summary-header">
                    <h2>Welcome to Summary</h2>
                </div>
                <p className="App-intro">
                Name:{this.props.values.name}
                </p>

                <p className="App-intro">
                Email:{this.props.values.email}
                </p>
                <p className="App-intro">
                City:{this.props.values.city}
                </p>

                <p className="App-intro">
                Weather:{this.state.weather}
                </p>
            </div>
        );
    }
}

// connect to the redux form state
export default connect(select)(Summary);