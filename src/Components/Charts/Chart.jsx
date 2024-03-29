import React,{useState, useEffect} from 'react';  
import { fetchDailyData } from '../../API';  
import { Line, Bar } from 'react-chartjs-2';  
import styles from './Chart.module.css';
  
const Chart = ({data:{confirmed, recovered, deaths}, country}) => {  
    //this is a set representation with setter method of a state  
    const [dailyData, setDailyData] = useState([]);  
      
    useEffect(() => {  
    const fetchAPI = async()=>{  
        setDailyData(await fetchDailyData());  
        }  
        fetchAPI();  
    },[]);  
  
const lineChart =(  
    dailyData.length ? (   
        <Line data={{  
                        labels: dailyData.map(({date}) =>  date),  
                        datasets :[{  
                            data :  dailyData.map(({confirmed}) =>  confirmed),  
                            label: 'Infected',  
                            borderColor: 'rgba(164, 204, 52, 1)',  
                            fill: true,  
                        },  
                        {  
                            data :  dailyData.map(({deaths}) =>  deaths),  
                            label: 'Deaths',  
                            borderColor: 'black',  
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',  
                            fill: true,  
                        }]  
                    }}  
                    options={ {  
                        scales : { xAxes : [ { gridLines : { display : false } } ], yAxes : [ { gridLines : { display : false } } ] }  
                    } }  
                    />):null  
                    );  
  
const BarChart  =(  
       confirmed?(  
        <Bar  
        data={{  
            labels: ['Infected', 'Recovered', 'Deaths'],  
            datasets:[{  
                label:'People',  
                backgroundColor:['rgba(164, 204, 52, 1)', 'rgba(135, 0, 0, 1)', 'rgba(0, 0, 0, 1)' ],  
                data:[confirmed.value, recovered.value, deaths.value]  
            }]  
        }}  
        options={{  
            legend:{display:false},  
            title: {display:true, text:`current state in ${country}`}  
        }}  
        />             
        ): null  
    )  
    return (  
     <div className={styles.container}>  
         {country? BarChart : lineChart}  
     </div>  
    )  
}  
export default Chart; 