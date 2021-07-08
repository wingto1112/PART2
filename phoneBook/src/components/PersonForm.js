import React from "react"

const PersonForm = (props) => {

    return(
      <form onSubmit={props.add}>
      <div>
        name: <input value = {props.newName} onChange = {props.handleNameChange}/>
      </div>
      <div>
        number: <input value = {props.newPhone} onChange = {props.handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
  }

  export default PersonForm