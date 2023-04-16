import React from 'react'
import { Footer, Hero, Navbar } from '../../components'
import Blog from '../blog'

const Home = () => {
    return (
        <div>
            <Navbar Home="active" Page={"Select Category"} />
            <Hero
                title="Home Page"
                des="Welcome to our blog, where we share our thoughts and experiences on a variety of topics. Our team of writers are passionate about exploring different ideas and perspectives, and we hope to inspire and inform our readers through our content. From lifestyle to travel, food to technology, we cover it all.

            We believe that everyone has a story to tell and a unique perspective to share, and we welcome guest contributions from our readers. We aim to create a community where people can come together to exchange ideas and learn from each other."
                img="https://img.freepik.com/free-photo/top-view-work-desk-with-coffee-keyboard_23-2148397869.jpg?w=740&t=st=1681579915~exp=1681580515~hmac=03d71c4d8d0e44db3b83f305dfe29da045ffe65f13c6b044ed761bdde6bac68a"
            />
            <Blog Home="active"/>
            <Footer />
        </div>
    )
}

export default Home