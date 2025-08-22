import React from 'react'
import about from '../assets/about.jpg'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1 className='text-center text-success about-title'><b>To Do Application</b></h1>

      <div id='about'>
        <img src={about} alt='About' id='image'></img>
        <div id='content'>
          <p id='para'>
            <b>Boost productivity with this feature-rich To-Do List App! Organize and prioritize your tasks, whether personal or professional, to ensure nothing is forgotten.</b>
          </p>

          <h2 className='features-title'>Key Features:</h2>
          <ul className='features-list'>
            <li>✅ Add, edit, and delete tasks easily</li>
            <li>📌 Categorize tasks as Completed or Pending</li>
            <li>⏰ Set deadlines and reminders</li>
            <li>📊 Track your productivity over time</li>
            <li>💻 Clean and user-friendly interface</li>
          </ul>

          <div className='highlight'>
            <h3>Why Use Our App?</h3>
            <p>Stay organized, increase efficiency, and never miss a task again. Perfect for students, professionals, and anyone looking to manage their time effectively.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
