import React, { useState } from 'react'
import SigData from "../SIgupDataForm/SigData"

const FormData = () => {
    const[page,setpage]=useState(0);

    const FormTitles=["SigUp","Personal","Info","Other"]

    // Functionality of Page is Show

    const PageDisplay=()=>
    {
      if(page===0){
        return (<SigData/>)
      }
    }
  return (
    <div>
      <div className="form">
        <div className="progressbar"></div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body"></div>
                <div className="footer">
                    <button disabled={page===0} onClick={()=>setpage((curePage)=>curePage-1)}>Prev</button>
                    <button disabled={page===FormTitles.length-1} onClick={()=>setpage((curePage)=>curePage+1)}>Next</button>
                </div>
            </div>
        
      </div>
    </div>
  )
}

export default FormData
