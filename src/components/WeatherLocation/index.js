import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData/index'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './style.css';
import {
    SUN,
} from './../../constants/wethers';

// eslint-disable-next-line no-unused-vars
const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {

    constructor(props){
        super(props);//el super constructor ara que funcione correctamente

        const { city } = props;

        this.state = {
            city,
            data: null,
        }
    }

    componentDidMount() {
        //aquì deben ir los llamados a los services teniendo en cuenta el cilvo de vida del coponenete
        this.handleUpdateClick();
    }
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {

            // console.log(data);
            const newWeather = transformWeather(data);
           // console.log(newWeather);
            this.setState({
                city:data.name,
                data: newWeather
            });

        });
        
         //para modificar el estdo del constructor o la parte de estado dque queremos setear. no es necesario modificar todo el estado.
        /*  this.setState({
            city: "Medellín",
            data : data2
        }); */
    }

    render() {
        //destructuring
        const { onWeatherLocationClick } = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city = { city } > </Location> 
                {
                  data ? <WeatherData data={data}> </WeatherData> : <CircularProgress/> 
                
                }
                
               {/*  <button onClick={this.handleUpdateClick}>Actualizar</button> */}
              
            </div> 

             
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;