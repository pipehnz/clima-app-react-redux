import React, { Component } from 'react'
import {connect} from  'react-redux';
import PropTypes from 'prop-types';
import {setCity} from './../actions'
import LocationList from './../components/LocationList';


const cities = [
    "Monteria,co",
    "Mexico,mex",
    "Londres,lon",
    "Madrid,es",
    "Bogota,co",
];

class LocationListContainer extends Component {
    

    handleSelectedLocation = (city) => {
        this.props.SetCity(city);
    }

    render() {
        return (
            <LocationList 
                    cities={cities}
                    onSelectedLocation = {this.handleSelectedLocation} />
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => ({
    SetCity: value => dispatch(setCity(value))
});

export default connect(null,mapDispatchToProps)(LocationListContainer);
