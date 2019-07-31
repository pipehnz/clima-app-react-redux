import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';



 class App extends Component {
   
    render(){
    return (
        
         <Grid>
             <Row>
                <AppBar position="sticky">
                    <Toolbar>                        
                            <h3>Weather APP</h3>
                    </Toolbar>
                </AppBar>
             </Row>
             <Row>
                <Col xs={12} md={6} >
                <LocationListContainer 
                    cities={this.props.cities}/>
                </Col>
                <Col xs={12} md={6}>
                    <Paper elevation={4}>
                        <div className="details">
                                <ForecastExtendedContainer/>
                        </div>
                    </Paper>
                </Col>
             </Row>
            
        </Grid>
    );
    }
}

//export default App;

export default App;

