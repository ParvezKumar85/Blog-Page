import React from 'react'
import { Footer, Hero, Navbar } from '../../components'
import Blog from '../blog'

const AppDevelopment = () => {
  return (
    <div>
      <Navbar Page={"App Development"} AppDevelopment="active" />
      <Hero
        title="App Development Page"
        des="App development is the process of creating software applications that run on mobile devices or desktops. It involves using programming languages such as Java, Swift, and React Native to design and build the user interface and functionality. App developers need strong technical skills, as well as good communication and problem-solving abilities. It is a rapidly growing field that offers numerous opportunities for innovation and entrepreneurship."
        img="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051191.jpg?w=740&t=st=1681581563~exp=1681582163~hmac=2aac9d37e015978902bfa796534457e5f46916679691e841454a6d99446135f1"
      />
      <Blog active="App Development" />
      <Footer />
    </div>
  )
}

export default AppDevelopment