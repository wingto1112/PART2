import React from 'react'

const Persons =( {p, handleDelete, id} ) => {
return(
    <div>
    {p.name} {p.number} <button value ={id} onClick = {handleDelete}>delete</button>
    </div>
)

}
export default Persons