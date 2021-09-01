import React from 'react'
import { Button } from '../Atom/Button'

export const Form = ({handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name..." />
            <input type="tel" placeholder="Phone Number..." required />
            <Button text="send" />
        </form>
    )
}
