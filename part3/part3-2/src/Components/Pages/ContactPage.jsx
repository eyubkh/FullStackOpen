import React, { useState, useEffect } from 'react'
import { Form } from '../Molecules/Form'
import { Contacts } from '../Molecules/Contacts'
import { getAll, addOne, deletOne } from '../../Server/index'

export const ContactPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getAll().then(data => setData(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        let id = data.length > 0 ? Math.max(...data.map(item => item.id)) : 0
        id++
        const obj = {
            name: e.target[0].value,
            phone: e.target[1].value
        }
        data.filter( item => item.name == obj.name).length === 0 ? setData(data.concat({...obj, id})) : alert('nombre existe')
        addOne(obj)
    }

    const handleDelet = (id) => {
        const deleted = data.filter( item => item.id != id)
        deletOne(id)
        setData(deleted)
    }

    return(
        <>
        <h3>Add contact</h3>
        <Form handleSubmit={handleSubmit} />
        <h3>List</h3>
        <Contacts handleDelet={handleDelet} data={data} />
        </>
    )
}