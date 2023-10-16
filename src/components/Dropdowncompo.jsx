import React, { useState, useEffect } from 'react';
import dummyData from '../dummydata/data';
import DropdownCountry from './DropdownCountry';
import DropDownState from './DropDownState';
import DropDownCities from './DropDownCities';
import Button from './Button';

const DummyComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState(null);  // Initialize as null

  useEffect(() => {
    console.log("Updated Selected Cities:", selectedCities);
  }, [selectedCities]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCities(null);  // Update to null when country changes
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCities(state.city.map(city => city.name));
  };

  const handleCityChange = (city) => {
    const updatedCities = selectedCities && selectedCities.includes(city) ?
      selectedCities.filter(selectedCity => selectedCity === city) :
      (selectedCities ? [...selectedCities, city] : [city]);
    setSelectedCities(updatedCities);
  };

  const handleSearch = (e) => {
    if (!selectedCities) {
      console.log("Selected cities is undefined or null.");
      return;
    }

    const searchTerm = e.toLowerCase();
    const filteredCities = selectedCities.filter((city) =>
      city.toLowerCase().includes(searchTerm)
    );

    console.log("Filtered Cities:", filteredCities);
    setSelectedCities(filteredCities);
    if(e===""||filteredCities.length===0)
    setSelectedCities(selectedState.city.map(city => city.name));  // Update selectedCities with filtered cities
  };

  const handleSubmit = () => {
    console.log('Selected Country:', selectedCountry);
    console.log('Selected State:', selectedState);
    console.log('Selected Cities:', selectedCities);
  };

  return (
    <div>
      <h1>Dynamic Dropdown</h1>
      <DropdownCountry handleCountryChange={handleCountryChange} dummyData={dummyData} />
      <br />
      {selectedCountry && (
        <DropDownState handleStateChange={handleStateChange} selectedCountry={selectedCountry} dummyData={dummyData} />
      )}
      <br />
      {selectedState && (
    <DropDownCities handleSearch={handleSearch} handleCityChange={handleCityChange} selectedState={selectedState}selectedCities={selectedCities} />
      )}
      <Button handleSubmit={handleSubmit} />
    </div>
  );
};

export default DummyComponent;
