import React, { useState , useEffect } from 'react'
import { Connection } from './axios/index'
import './App.css'
import Country from './Country'

function App() {

  const [notes , setNotes] = useState([])
  const [change,setChange] = useState('')
  

  useEffect(() => {
    Connection('https://restcountries.eu/rest/v2/all')
    .then(result => {
      setNotes(result)
    })
  },[])

  

  function handleChange(event){
      setChange(event.target.value)
  }

  const filter = notes.filter(item => {
        let find = RegExp(change,'ig')
        let result = find.test(item.name)
        return result
      })

  return (
    <div className="App">
      <h1>Hello</h1>
      <label htmlFor="find">Find countries: </label>
      <input type="text" id="find"  onChange={handleChange} />

      {
        filter.length > 1
        ? <p>Too many matche, specify another filter</p>
        : filter.map(item => (
            <Country 
              key={item.name} 
              name={item.name} 
              capital={item.capital}
              population={item.population}
              languages={item.languages}
              img={item.flag}
          />))
      }
    </div>
  )
}

export default App
