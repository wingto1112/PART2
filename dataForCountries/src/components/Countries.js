import React, { useState } from 'react'
import Country from './Country'
const Countries = ({countries, find, setcapitalCity, weather, showCountry}) => {

  const filter = countries.filter(a => a.name.toLowerCase().includes(find.toLowerCase()))
  if (filter.length === countries.length){
    return(
      <div></div>
    )
  } else if (filter.length === 1){
      return(
        filter.map(a => {
          setcapitalCity(a.capital)
          return(
            <Country filter = {a} weather = {weather}/>)             
          }
        )
      )
        }
  else if (filter.length <= 10){
    return (
      filter.map(a => <div> {a.name} <button value={a.name} onClick={showCountry}>show</button></div>)
    )}
  else {
    return(
      <div>Too Many matches, specify another filter</div>
    )
  } 
}


export default Countries


















/*const filter = display.filter(a => a.name.toLowerCase().includes(find.toLowerCase()))

const Search =({find, handleFindChange})=> {
    return(
      <div>
        find countries<input value = {find} onChange = {handleFindChange}/>
      </div>
    )
  }<Button value = {a.name}>show</Button>
  
  
  const Show = ({handleShow, display}) =>{
    return(<form onSubmit={handleShow}>
            {display.name}  
            <button type="submit">show</button>
           </form>
      )
  }
  
  const Display = ({display, weather}) => {
    const [show, setShow] = useState(false)
    const handleShow = (event) => {
      event.preventDefault()
      setShow(true)
    }
    return (
        <div>
          <Show handleShow = {handleShow} display = {display}/>
          {show === true
            ?<Countries countries ={display} weather = {weather}/>
            :''
          }
        </div>
      )
  }
  
  const Output = ({filter, weather}) => {
    return (
      filter.length > 10
      ?'Too Many matches, specify another filter'
      :filter.length === 1
      ?filter.map(a => <Countries countries ={a} weather = {weather}/>)
      :filter.map(a =>  <Display display = {a} weather = {weather}/>)
    )
  }*/
  /*<h2>Weather in {countries.capital}</h2>
{console.log(weather)}
<p><b>temperature:</b>  Celcius</p>
<img src = {weather.current.weather_icons} width = "100" alt = ""/>
<p><b> wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>*/