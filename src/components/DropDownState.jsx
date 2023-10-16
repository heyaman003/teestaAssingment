import React from 'react'

const DropDownState = ({handleStateChange,dummyData,selectedCountry}) => {
       if (!dummyData) {
              return null;
            }
  return (
       <select style={{width:'80%',height:'2rem',marginTop:"1rem", fontWeight:"bold"}} onChange={(e) => handleStateChange(dummyData.find(c => c.country === selectedCountry).state.find(s => s.state === e.target.value))}>
       <option value="">Select State</option>
       {dummyData.find(c => c.country === selectedCountry).state.map(state => (
         <option key={state.id} value={state.state}>{state.state}</option>
       ))}
     </select>
  )
}

export default DropDownState
