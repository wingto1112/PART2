import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import noteService from './services/notes'
import Message from './components/Message'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [del, setDel] = useState(true)

  const add = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhone
    }
    const a = persons.map(a => a.name)
    const b = persons.map(a => a.number)
    const c = persons.filter(x => x.name === newName).map(q => q.id)

    if (a.includes(newName) && b.includes(newPhone)) {
      window.alert(`${newName} is already added to phonebook`)
    } else if ((a.includes(newName) && !(b.includes(newPhone)))) {

      if (window.confirm(`${newName} is already added to phonebook, replace the old number?`)) {
        noteService
          .update(c, personObject)
          .then(setDel(!del))
      }
    } else {
      noteService
        .create(personObject)
        .then(returnNote => { setPersons(persons.concat(returnNote)) })
      setMessage(`Added ${newName}`)
      setTimeout(() => setMessage(null), 5000)
    }
    setNewName('')
    setNewPhone('')
  }
  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)
  const handleDelete = (event) => {
    const person = persons.filter(a => a.name === event.target.value).map(a => a.id)
    console.log(person);
    const confirm = window.confirm(`Delete ${event.target.value}?`)
    if (confirm) {
      noteService
        .deletePhone(person)
        .then(setDel(!del))
        .catch(error => {
          setMessage(`Information of ${event.target.value} has already been removed from server`)
          setTimeout(() => setMessage(null), 5000)
        })
    }
  }
  const hook = () => {
    noteService
      .getAll()
      .then(note => { setPersons(note) })
  }
  useEffect(hook, [del])

  return (
    <div>
      <h1>PhoneBook</h1>
      <Message message={message} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm add={add} newName={newName} newPhone={newPhone}
        handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} />
      <h2>Numbers</h2>
      <p key={del}>
        {persons.filter(a => a.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map(c => <Persons key={c.id} p={c} id={c.name} handleDelete={handleDelete} />)}
      </p>
    </div>
  )
}

export default App
