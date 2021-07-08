import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'
const App =()=> {
  const [find, setFind] = useState('')
  const [countries, setCountries] = useState([])
  const [capitalCity, setcapitalCity] = useState('New York')
  const [weather, setWeather] = useState('')
  //const [show, setShow] = useState(false)
  const handleFindChange = (event) => setFind(event.target.value)
  //const setShow = (event) => setFind(event.target.value) 
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(a => {setCountries(a.data)})
  
  }, [])

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=432a2dae658b54b6e74f05cebf1c2a2c&query=${capitalCity}`)
      .then(a => setWeather(a.data))
  }, [capitalCity])
  
  console.log(capitalCity);
  const showCountry = (event) => {
    setFind(event.target.value)
  }
  return(
    <div>
      <Search find = {find} handleFindChange = {handleFindChange} />
      <Countries countries = {countries} find = {find} setcapitalCity = {setcapitalCity} weather = {weather} showCountry = {showCountry} /> 
    </div>
  )
}

export default App