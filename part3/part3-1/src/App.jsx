import React, { useState, useEffect } from 'react'
import { getAll, newUser, removeUser, updateUser } from './service/fetch'
import styled from 'styled-components'
import { animated , useSpring, config} from 'react-spring'

const Message = styled(animated.p)`
  position: absolute;
  transform: translateX(-50%);
  left: 15%;
  display: inline-block;
  padding: 10px 50px;
  font-size: 20px;
  color: #fff;
  margin-top: 10px;
  border: solid 3px #111;
  background-color: #333;

`


function App() {
  const [contacs, setContacs] = useState([])
  const [find, setFind] = useState('')
  const [float, setFloat] = useState('Welcome')

  function handleSumbit(event){
    event.preventDefault();
    setFloat(`Contac ${event.target[0].value } added`)
    let r = contacs
              .map(item => item.name == event.target[0].value ? item.id : '')
              .filter(item => item != '')
    const obj = {
      name: event.target[0].value ,
      number: event.target[1].value
    }
    if(r.length === 0){
      setContacs(contacs.concat({...obj, id: Math.random()}))
      newUser(obj)
     
    } else {
      const a = contacs.filter(item => item.id != r[0])
      setContacs(a.concat({...obj, id: Math.random()}))
      setFloat(`Contac ${event.target[0].value } Updated`)
      updateUser(obj,r[0])
    }
    event.target[0].value = ''
    event.target[1].value = ''
  }

  function handleOnChange(event) {
    setFind(event.target.value)
  }

  // Removing user 

  function handleRemove(id) {
    const rm = contacs.filter(item => item.id !== id)
    const userRemoved = contacs.find(item => item.id == id)
    setFloat(`Contac ${userRemoved.name} removed`)
    setContacs(rm)
    removeUser(id)
  }
  
  // Using fetch for get the data
  useEffect(() => {
    getAll()
    .then(data => {
      setContacs(data)
    })
    .catch(err => console.log('Error del fetch' , {err}))
  }, [])

  // parragraf animation
  const [styles,set] = useSpring(() => ({ from: { top: '-73px'} }))

  useEffect(() => {
    set({ to: [{top: '25px'},{top: '-75px'}],delay: 500,config: config.slow})
  }, [contacs])
  let search = new RegExp(find , 'ig')

  return (
    <main>
      <Message style={styles}>
        {float}
      </Message>
      <h2>Phonebook</h2>
      <input type="text" name="" id="" onChange={handleOnChange} />
      <h2>Add a new</h2>
      <form  onSubmit={handleSumbit}>
      <label htmlFor="name">name: </label>
      <input type="text" id="name" required />
      <label htmlFor="number">number: </label>
      <input type="tel" name="" id="number" pattern="[0-9]{9}"  required />
      <button>add</button>
      
      </form>
      <h2>Numbers</h2>
      {
      contacs
      .filter(item => item.name.match(search))
      .map((item,index) => {
        return (
          <div key={item.id ? item.id : item.name}>
            <p >{item.name}</p>
            <p>{item.number}</p>
            <button onClick={() => handleRemove(item.id, index)}>remove</button>
          </div>
        )
        
      } )
      }
    </main>
  )
}

export default App
