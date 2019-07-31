import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Location = ({city}) => (
    //destructuring, técnica de la nueva deficniciòn de Javascrips ES6
    //const { city } = props; //desarmando y lo estoy poniendo dentro de la constante 
    //console.log(props);
    //debugger;
     
    <div className="locationCont"> 
            <h1> { city } </h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;