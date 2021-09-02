import React, { useState, useEffect } from 'react'
import { Form } from '../Molecules/Form'
import { Contacts } from '../Molecules/Contacts'
import { getAll, addOne, deletOne, updateOne } from '../../Server/index'

export const ContactPage = () => {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(true)
    useEffect(() => {
        getAll().then(data => setData(data))
    }, [update])

    const handleSubmit = (e) => {
        e.preventDefault()
        let _id = data.length > 0 ? Math.max(...data.map(item => item.id)) : 0
        _id++
        const obj = {
            name: e.target[0].value,
            phone: e.target[1].value
        }
        let validation = data.filter( item => item.name == obj.name)
        if(validation.length === 0){
            addOne(obj)
                .then(res => {
                    setData(data.concat(res))
                })
        } else {
            const { _id } = validation[0]
            updateOne(_id , obj)
            .then(res => {
                setUpdate(!update)
            })
        }
    }

    const handleDelet = (id) => {
        const deleted = data.filter( item => item._id != id)
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