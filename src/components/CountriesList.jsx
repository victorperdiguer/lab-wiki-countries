import React from "react";
import { Link, NavLink } from "react-router-dom";

const CountriesList = (props) => {
    const { countries } = props;

    return (
        <div className="countries-list">
            {countries.map((country) => {
                return (
                    <div className="country-card" key={country.alpha3Code}>
                        <img src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.webp`} height={54} width={72} alt={country.name.common} />
                        <h2><Link to={country.alpha3Code}>{country.name.common}</Link></h2>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;