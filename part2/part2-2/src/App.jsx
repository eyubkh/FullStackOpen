import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './App.css'

function Country({name,languages,capital,population,img}){
    return(
      <div>
          <h2>{name}</h2>
          <p>Capital {capital}</p>
          <p>Population {population}</p>
          <h2>Languages</h2>
          {languages.map(item => <p key={item.name}>{item.name}</p>)}
          <img src={img}  alt="" />
      </div>
    )
}

function App() {

  const [notes , setNotes] = useState([])
  const [change,setChange] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setNotes(res.data)
      })
      .catch(err => {
        console.log('Error connecting to data server', {err})
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
        filter.length > 10
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
