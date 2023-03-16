import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>LAB - WikiCountries</Navbar>
        <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route path="/:countryCode" element={<CountryDetails countries={countries} />} />
        </Routes>
    </div>
  );
}

export default App;
