import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import axios from 'axios';

import './CountryPicker.css';

const CountryPicker = (props) =>{
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const getAllCountry = async () =>{
            const country_res = await axios.get(`https://covid19.mathdro.id/api/countries`);
            setCountries(country_res.data.countries);
            // console.log(country_res.data.countries);
        }
        getAllCountry();
    },[]);
    return(
        <>
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e)=>{props.handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {countries.map((country, index) => <option key={index} value={country.name}>{country.name}</option>)}
            </NativeSelect>
        </FormControl>
        </>
    );
}
export default CountryPicker;