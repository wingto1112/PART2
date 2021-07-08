import React from 'react'
const Search =({find, handleFindChange})=>{

    return(
        <div>
            find countries<input value = {find} onChange = {handleFindChange}/>
        </div>
    )
}
export default Search