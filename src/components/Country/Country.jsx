import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry}) => {
    const { name, flags, capital, area, region } = country;
    const [isVisited, setVisitStatus] = useState(false);
    const handleVisitStatus = () =>{
        // newStatus = !isVisited;
        setVisitStatus(!isVisited);
    }
    return (
        <div className={`box ${isVisited && 'visited'}`}>
            <img src={flags.png} alt="" />
            <div>
                <h2>Common Name : {name.common}</h2>
                <h4>Official Name : {name.official}</h4>
                <h3>Area : {area}</h3>
                <h4>Capital : {capital}</h4>
                <h4>Region : {region}</h4>
            </div>
            <div>
                <button onClick={handleVisitStatus}>{isVisited ? 'Visited' : 'Wanna Go'}</button>
                <span>
                    {isVisited ? ' Already visit the country' : ' Wanna Visit the country'}
                </span>
            </div>
            <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>

        </div>
    );
};

export default Country;