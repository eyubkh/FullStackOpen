import React from 'react'

 export const Contact = ({id,name,phone,handleDelet}) => {
     return(
         <article>
             <p>{name}</p>
             <p>{phone}</p>
             <button onClick={() => handleDelet(id)}>delet</button>
         </article>
     )
 }