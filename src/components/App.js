import React, { useState } from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {

  const [input , setInput] = useState("");

  return (
    <div id="main">
      <input type="text" value={input} id='search-input' onChange={e=>setInput(e.target.value)}/>
      <ul>
        {input? searchArray.filter(name => name.match(new RegExp(input , "i")))
        .map(name=>{
          return (
              <li key={name}>{name}</li>
          )
        })
        : ""}
      </ul>
    </div>
  )
}


export default App;
