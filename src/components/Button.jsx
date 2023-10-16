import React from 'react'

const Button = ({handleSubmit}) => {
  return (
    <div style={{width:"30%",margin:"auto",marginTop:"10px",color:"black",}}>
       <button style={{ padding:"8px",fontWeight:"bold", borderRadius:"10%", marginBottom:"10px"}} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Button
