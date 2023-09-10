import './country.css'

const Country = ({country}) => {
    const { name, flags, capital, area, region } = country;
    return (
        <div className='box'>
            <img src={flags.png} alt="" />
            <div>
                <h2>Common Name : {name.common}</h2>
                <h4>Official Name : {name.official}</h4>
                <h3>Area : {area}</h3>
                <h4>Capital : {capital}</h4>
                <h4>Region : {region}</h4>
            </div>

        </div>
    );
};

export default Country;