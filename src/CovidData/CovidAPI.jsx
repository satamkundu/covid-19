import React, { useState, useEffect } from 'react';
import './CovidAPI.css';
import image from './images/image.png';
import  image_1 from './images/image_1.png';
import axios from 'axios';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import DataVisualization from './components/DataVisualization';
import Switch from '@material-ui/core/Switch';

const CovidAPI = () =>{
    const [state, setState] = useState([]);
    const [country, setCountry] = useState('');

    const [checkState, setCheckState] = React.useState({checkedA: false, checkedB: true});

    const handleChange = (event) => {
        setCheckState({ ...state, [event.target.name]: event.target.checked });
        (checkState.checkedA)?document.body.style.backgroundColor = "white":document.body.style.backgroundColor = "#303030";
    };

    useEffect( ()=>{
        const fetchCountryData =  async () => {     
            const res = (country === '')?
            await axios.get(`https://covid19.mathdro.id/api/`)
            :
            await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
            console.log(res.data);
            setState(res.data);
        }
        fetchCountryData();
    },[country] );

    const handleCountryChange = async (country) =>{
        setCountry(country);
    }

    return(
    <>
        <div className="container">
            <div className="container-top">
                <img className="image" src={(checkState.checkedA)?image_1:image} alt="Covid-19"/> 
                <Switch checked={checkState.checkedA} onChange={handleChange} name="checkedA"/>
            </div>
            <Cards data={state}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <DataVisualization data={state} country={country}/>
        </div>
    </>
    );
}
export default CovidAPI;