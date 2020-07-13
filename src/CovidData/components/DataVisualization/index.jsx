import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';

import './style.css';

const DataVisualization = (props) =>{
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const fetctGlobalData = async () =>{
            const globalRes = await axios.get(`https://covid19.mathdro.id/api/daily`);
            setDailyData(globalRes.data);
            // console.log(globalRes.data);
        }
        fetctGlobalData();
    },[]);

    const barChart = (
      props.data.confirmed ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current Country in ${props.country}` },
          }}
        />
      ) : null
    );
        
    const lineChart = (
      dailyData.length ? (
        <Line
          data={{
            labels: dailyData.map(({ reportDate }) => reportDate),
            datasets: [{
              data: dailyData.map((data) => data.confirmed.total),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map((data) => data.deaths.total),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            },
            ],
          }}
        />
      ) : null
    );

    return(
    <>
      <div className="container-chart">
        {props.country ? barChart : lineChart}
      </div>
    </>
    );
}

export default DataVisualization;