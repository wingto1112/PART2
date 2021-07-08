import React from 'react'
const Header = ({course}) => {
    return (         
        <h2>{course.name}</h2>       
    )      
}
const Parts = ({course}) => {
      return(
        course.parts.map(a => <p>{a.name} {a.exercises}</p>)
      )
  }

const Total = ({course}) => {
    const sum = course.parts.map(a => a.exercises)
    const total = sum.reduce((s, p) => s + p)
    return(
       <h3>total of {total} exercises</h3>
    )

 }
 const All = ({course}) => {
    return(
        <div>
        <Header course = {course}/>
        <Parts course = {course}/>
        <Total course = {course}/>
        </div>
    )
 }
const Course = ({course}) =>{

      return(
        <div>
            {course.map(a => <All course ={a}/>)}
        </div>
      )
}
export default Course