import React from 'react'
const Country = ({filter, weather}) =>{

    return(
      <div>
        <h1>{filter.name}</h1>
        <p>capital {filter.capital}</p>
        <p>population {filter.population}</p>
        <h2>languages</h2>
        <ul>{filter.languages.map(a => <li>{a.name}</li>)}</ul>
        <img src={filter.flag} width="150
        " alt=""/>
          <h2>Weather in {weather.location.name}</h2>
          <p><b>temperature:</b>{weather.current.temperature}  Celcius</p>
          <img src = {weather.current.weather_icons} width = "100" alt = ""/>
          <p><b> wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
      </div>
    )
  }
  export default Country

  /*<h2>Weather in {countries.capital}</h2>
  <p><b>temperature:</b>  Celcius</p>
  <img src = {weather.current.weather_icons} width = "100" alt = ""/>
  <p><b> wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>*/