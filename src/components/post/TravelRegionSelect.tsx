import { c } from 'msw/lib/glossary-de6278a9';
import React, { useEffect, useState } from 'react';

interface TravelRegion {
  region: string;
  cities: string[];
}

const travelRegions: TravelRegion[] = [
  {
    region: '서울시',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '경기도',
    cities: ['하남시', '가평군', '수원시', '부천시'],
  },
  {
    region: '강원도',
    cities: ['춘천시', '속초시', '강릉시', '동해시'],
  },
];

const TravelRegionSelect = ({onValueChange}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
    console.log(selectedRegion)
    setSelectedCity('');
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setSelectedCity(e.target.value);
  };

  useEffect(()=>{
    console.log(selectedRegion)
    console.log(selectedCity)
    onValueChange([selectedRegion,selectedCity])
  },[selectedCity])

  return (
    <div className="flex flex-row">
      <select
        id="region"
        value={selectedRegion}
        onChange={handleRegionChange}
        className="border border-gray-300 rounded-md w-48 text-sm h-8"
      >
        <option value="">선택</option>
        {travelRegions.map((region, index) => (
          <option key={index} value={region.region}>
            {region.region}
          </option>
        ))}
      </select>
      {selectedRegion && (
        <div className="ml-3">
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="border border-gray-300 rounded-md w-48 text-sm h-8"
          >
            <option value="">전체</option>
            {travelRegions
              .find((region) => region.region === selectedRegion)
              ?.cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default TravelRegionSelect;
