import React from 'react';  
import styles from './App.module.css' ; 
import {Grid} from '@material-ui/core'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import coronaImage from './Images/covid-image1.png';  
import World from './World';
import US from './US';
import China from './China';

class App extends React.Component {  
    render() {
        return (
        <Router>
            <div>
            <div className={styles.container}>
            <Grid container spacing = {3} justify="center">
            <Grid className={styles.btnGrid} >   
                 <Button  style={{backgroundColor: '#4A148C'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://covid-7551e.web.app/">  
                Global
                </Button>   
                <Button style={{backgroundColor: '#004D40'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://covid-7551e.web.app/US">  
                US
                </Button>
                <Button style={{backgroundColor: '#581845'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://covid-7551e.web.app/China">  
                China
                </Button>  
                </Grid>  
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <img className={styles.image} src={coronaImage} href="https://covid-7551e.web.app/" alt="Covid Image"/>
            </div>
            <Switch>
                <Route exact path='/' component={World} />
                <Route exact path='/US' component={US} />
                <Route exact path='/China' component={China} />
            </Switch>
            </div>
        </Router>
        );
      }
    }
  
export default App; 