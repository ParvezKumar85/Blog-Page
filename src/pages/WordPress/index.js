import React from 'react'
import { Footer, Hero, Navbar } from '../../components'
import Blog from '../blog'

const WordPress = () => {
    return (
        <div>
            <Navbar Page={"WordPress"} WordPress="active" />
            <Hero
                title="WordPress Page"
                des="WordPress is a free and open-source content management system (CMS) used for creating websites and blogs. It offers a user-friendly interface and a wide range of customizable templates and plugins. WordPress is built using PHP and MySQL, and can be easily customized to meet specific needs. It is one of the most popular CMS platforms, powering over 40% of websites on the internet."
                img="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1681581508~exp=1681582108~hmac=1b6b03706c50ecd1ce624c651e07826f42254a87d2941c8330ef504b01952307" />

            <Blog active="WordPress" />
            <Footer />

        </div>
    )
}

export default WordPress