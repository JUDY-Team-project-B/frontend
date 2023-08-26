import { c } from 'msw/lib/glossary-de6278a9';
import React, { useEffect, useState } from 'react';

interface TravelRegion {
  region: string;
  cities: string[];
}

const travelRegions: TravelRegion[] = [
  {
    region: '서울특별시',
    cities: ['종로구', '중구', '용산구','성동구','광진구','동대문구'
    ,'중랑구']
  },
  {
    region: '인천광역시',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '경기도',
    cities: ['하남시', '가평군', '수원시', '부천시'],
  },
  {
    region: '경상북도',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '경상남도',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '대전광역시',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '충청북도',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '충청남도',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '울산광역시',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '부산광역시',
    cities: ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '강서구','연제구'],
  },
  {
    region: '대구광역시',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '강원도',
    cities: ['강릉', '동해', '삼척','속초','원주','춘천','태백','고성','양구','양양'],
  },
  {
    region: '광주광역시',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '전라북도',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '전라남도',
    cities: ['강동구', '송파구', '강남구'],
  },
  {
    region: '제주도',
    cities: ['서귀포', '송파구', '강남구'],
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
