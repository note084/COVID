import React from 'react';  
import styles from './App.module.css';
import {Cards, Charts, CountryPicker } from './Components';
import {fetchData} from './API';

class World extends React.Component {
    state = {         
    data: {},  
    country: '',  
    }  
    async componentDidMount(){  
        const data = await fetchData();  
        //console.log(fetchedData);  
        this.setState({data});  
    }  
    
    handleCountryChange = async (country) => {          
        const data = await fetchData(country);  
        this.setState({data: data, country: country});  
    }  
    render(){  
        const {data, country } = this.state;  
        return(  
        <div  className={styles.container} >
            <CountryPicker handleCountryChange={this.handleCountryChange}/>  
            <Cards data={data}/>  
            <Charts data={data} country={country}/>
        </div>  
    )}
 }

 export default World;
