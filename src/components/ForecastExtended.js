import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

/* 
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature : 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
} */

export const api_key = "2b89246e912b8d85052f81414f9f26f9";
export const url = "http://api.openweathermap.org/data/2.5/forecast"


class ForecastExtended extends Component {

    constructor (){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        // fetch or axios
        this.updateCity(this.props.city);
       
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
        
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch (url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData: forecastData})
                
            }
        );
    }
    

    renderForecastItemDays(forecastData){
       // return <h1>Render Ítems</h1>
         return forecastData.map( forecast =>  (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}/>)
        );
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>;
    }

    render() {
        const city = this.props.city;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                { forecastData ?
                     this.renderForecastItemDays(forecastData):
                     this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;