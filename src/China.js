import React from 'react';  
import styles from './App.module.css'  
import {Cards, Charts, CountryPicker } from './Components'  
import {fetchData} from './API';//we dont have to specify index file name if your file name is index  

class China extends React.Component {
    render(){    
        return(  
        <div className={styles.container}> 
            <iframe src="https://public.domo.com/cards/dBV5x" width="60%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
            <iframe src="https://public.domo.com/cards/bDX5B" width="60%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>

        </div>  
    )}
 }

 export default China;
