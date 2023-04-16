import React from 'react'
import { Footer, Hero, Navbar } from '../../components'
import Blog from '../blog'

const WebDevelopment = () => {
  return (
    <div>
      <Navbar Page={"Web Development"} WebDevelopment="active" />
      <Hero
        title="Web Development Page"
        des="Web development is the process of creating and maintaining websites and web applications. It involves using programming languages such as HTML, CSS, and JavaScript to design and build the user interface, as well as back-end languages like PHP and Python to handle server-side functionality. Web developers need strong technical skills, as well as good communication and problem-solving abilities. It is a constantly evolving field that offers numerous opportunities for innovation and creativity."
        img="https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?w=740&t=st=1681580679~exp=1681581279~hmac=8eb11d619aa2f81bcb0237a6b86245fd44c838e1a2d5bb13b12478831e5f3ce3" />

      <Blog active="Web Development" />
      <Footer />
    </div>
  )
}

export default WebDevelopment