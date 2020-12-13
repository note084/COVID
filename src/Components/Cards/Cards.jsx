import React from 'react';  
import styles from './Cards.module.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';  
import CountUp from 'react-countup';  
import cx from 'classnames';
import infectedImage from './Images/infected.jpg'; 
import recoveredImage from './Images/recovered.png';
import deathImage from './Images/death.png';
  
  
  
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } } ) => {  
     if(!confirmed){  
        return 'Please wait..';  
    }  
   console.log(lastUpdate);  
    return (  
        <div className={styles.container}>  
            <Grid container spacing = {3} justify="center">  
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>  
                    <CardContent >  
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <img className={styles.card_icon} src={infectedImage} alt="infected" />
                        <Typography variant="h5" component="h2">  
                            <CountUp start={0} end={confirmed.value} duration={3} separator="," />  
                        </Typography>
                        <br/>
                        <br/>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>                
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>  
                    </CardContent>  
                </Grid>  
  
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>  
                    <CardContent>  
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>  
                        <img className={styles.card_icon} src={recoveredImage} alt="recovered" />
                        <Typography variant="h5" >  
                            <CountUp start={0} end={recovered.value} duration={3} separator="," />  
                        </Typography>
                        <br/>
                        <br/>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>  
                    </CardContent>  
                </Grid>  
  
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>  
                    <CardContent>  
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography> 
                        <img className={styles.card_icon} src={deathImage} alt="death" /> 
                        <Typography variant="h5" >  
                            <CountUp start={0} end={deaths.value} duration={3} separator="," />  
                        </Typography>
                        <br/>
                        <br/>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of deaths caused by Covid-19</Typography>  
                    </CardContent>  
                </Grid>  
            </Grid>  
        </div>  
        )  
}  
export default Cards; 