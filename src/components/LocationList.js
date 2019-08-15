import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {
    // console.log(cities);
    const handleWeatherLocationListClick = (city) => {
        console.log("handleWeatherLocationListClick");
        onSelectedLocation(city);
    }
    //funcion para recorrer las ciudades.
    const CitiesList = cities => (
        cities.map( (city) =>  
            <WeatherLocation 
                key={city} 
                city={city}
                onWeatherLocationClick = { () => handleWeatherLocationListClick(city)}
                />
        ));
    return (
    <div className="locationList">
       {CitiesList(cities)}
    </div>
    );
};

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;
