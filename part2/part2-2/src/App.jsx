import React, {useState} from 'react'
import { DATA } from './server/data'
import './App.css'
import Main from './components/organisms/Main'

const INFO_STATE = {
    name: '',
    tlf: ''
  }


function App() {
  const [persons = {} , setPersons] = useState(DATA)
  const [ info = {} ,setInfo ] = useState(INFO_STATE)
  const [search, setSearch] = useState('')
  
  

  function addContact(event){
    event.preventDefault()
    const a = persons.filter( (item = {name: ''})  => item.name === info.name)
    console.log(a)
    if(a.length === 0){
      let obj = {
        id: persons.length + 1,
        name: info.name,
        tlf: info.tlf
      }
      setPersons(persons.concat(obj))
      setInfo({name: '', tlf: ''})
      alert(`Contact ${info.name} added`)
    } else{
      alert('Name duplicated')
    }
  }

  
  function handleChangeSearch(event){
    setSearch(event.target.value)
  }

  
  return (
    <div className="content" >
          <Main setInfo={setInfo} info={info} addContact={addContact} search={search} data={persons} handleChangeSearch={handleChangeSearch} />
      </div>
  )
}

export default App
