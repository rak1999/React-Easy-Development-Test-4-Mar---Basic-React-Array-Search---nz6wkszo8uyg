import React, { useState } from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {

  const [input , setInput] = useState("");



  const show = () =>{
    if(input.value){
      return searchArray.map((item)=>console.log(item))
    }
  }
  
  return (
    <div id="main">
      <input type="text" id='search-input' onChange={show}/>
      <ul onChange={(e)=>{
        setInput(e.target.value)
      }}>
      {searchArray.map((item, index)=>{
        return (
          <li key={index} value={input}>{item}</li>
        )
      })}
      </ul>
    </div>
  )
}


export default App;
