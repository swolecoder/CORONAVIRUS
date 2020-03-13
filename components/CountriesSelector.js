import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountriesSelector() {
  const countries = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setselectedCountris] = useState('USA');

  if (!countries) return <p> Loading.....</p>;
  console.log('shish', countries);
  return (
    <div>
      <h1>Current Showing {selectedCountry}</h1>
      <select
        onChange={e => {
          console.log('Hi', e.target.value);
          setselectedCountris(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => {
          return (
            <option key={code} value={countries.iso3[code]}>
              {country}
            </option>
          );
        })}
      </select>

      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
