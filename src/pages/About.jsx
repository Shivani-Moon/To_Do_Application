import React from 'react'
import about from '../assets/about.jpg'
import './About.css'

const About = () => {
  return (
    <div>
      <h1 className='text-center text-success '><b>To Do Application</b></h1>

      <div id='about'>
        <img src={about} alt='About' id='image'></img>
        <p id='para'><b>Boost productivity with this feature-rich To-Do List App, featuring compilation of tasks, activities, or items that an individual intends to complete. It serves as a planning tool to help organize and prioritize work, whether personal or professional, and is often used to enhance productivity and ensure tasks are not forgotten.</b></p>
      </div>
    </div>
  )
}

export default About
