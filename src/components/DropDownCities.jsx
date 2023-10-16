import React from 'react'
import Card from './Card';
const DropDownCities = ({handleSearch,handleCityChange,selectedState,selectedCities}) => {
       if(!selectedState){
              return null;
       }
  return (
       <div>
       <input style={{width:'80%',height:'2rem',marginTop:"1rem", fontWeight:"bold"}} type="text" placeholder="Search cities" onChange={(e)=>handleSearch(e.target.value)} />
       {selectedCities.map(city => (
         <Card key={city}>
           <input  type="checkbox" defaultChecked={true} onChange={() => handleCityChange(city.name)}/>
           {city}
         </Card>
       ))}
     </div>
  )
}

export default DropDownCities
