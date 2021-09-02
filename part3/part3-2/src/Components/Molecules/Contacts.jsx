import React from 'react'
import { Contact } from './Contact'

export const Contacts = ({data, handleDelet}) => {
    return(
        <section>
            {
                data.map(item => <Contact key={item._id} id={item._id} name={item.name} phone={item.phone} handleDelet={handleDelet} />)
            }
        </section>
    )
}
