import React from "react";


const DropdownCountry = ({ handleCountryChange, dummyData }) => {
  if (!dummyData) {
    return null;
  }

  return (
      <select style={{width:'80%',height:'2rem',fontWeight:"bold"}}  onChange={(e) => handleCountryChange(e.target.value)}>
        <option  value="">Select Country</option>
        {dummyData.map((country) => (
          <option  key={country.id} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
  );
};

export default DropdownCountry;
