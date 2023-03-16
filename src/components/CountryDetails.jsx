import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";

const CountryDetails = (props) => {
    const {countries} = props;
    const {countryCode} = useParams();
    console.log(countryCode);
    const country = countries.find((country) => country.alpha3Code === countryCode);
    return (
        <div className="country-details">
            <h2>{country.name.official}</h2>
            <img src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.webp`} height={216} width={288} alt={country.name.common} />
            <div className="country-info">
                <h3>Capital: {country.capital}</h3>
            </div>
            <div className="country-info">
                <h3>Area (km2): {country.area}</h3>
                <h3></h3>
            </div>
            <div className="country-info">
                <h3>Bordering countries</h3>
                {country.borders.length != 0 ? <ul>{country.borders.map((border) => {
                            const nextBorder = countries.find((borderCountry) => borderCountry.alpha3Code === border);
                            return <li><NavLink to={`/${border}`}>{nextBorder.name.common}</NavLink></li>
                        })}</ul> : <h3>None</h3>}
            </div>
            <NavLink className="back-link" to="/">List of countries</NavLink>
        </div>
    )
}

export default CountryDetails;