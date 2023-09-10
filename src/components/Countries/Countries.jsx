import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])

    // for list of visited country
    const [visiedCountry, setVisitedCountry] = useState([])

    const handleVisitedCountry = country =>{
        const newAddedVisitedCountry =[...visiedCountry, country];
        setVisitedCountry(newAddedVisitedCountry)
    }
    return (
        <div>
            <h2>From Countries {countries.length}</h2>
            <h4>Visited to {visiedCountry.length} countries</h4>
            <ul>
                {
                    visiedCountry.map(country =>
                        <li>{country.name.common}</li>
                        )
                }
            </ul>
            <div className="layout">
                {
                    countries.map(country =>
                        <Country
                         key={country.cca3} 
                         country={country}
                         handleVisitedCountry={handleVisitedCountry}
                         ></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;