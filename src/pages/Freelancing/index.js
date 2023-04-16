import React from 'react'
import { Footer, Hero, Navbar } from '../../components'
import Blog from '../blog'

const Freelancing = () => {
  return (
    <div>
      <Navbar Page={"Freelancing"} Freelancing="active" />
      <Hero
        title="Freelancing Page"
        des="Freelancing is a self-employed work model where individuals offer their services to clients on a project basis, rather than being employed by a company. Freelancers can work remotely and have flexible schedules, allowing them to work on multiple projects and clients simultaneously. They can offer a wide range of services, from writing and graphic design to web development and consulting. Freelancing offers freedom and autonomy, but requires strong self-discipline and business skills."
        img="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=740&t=st=1681581462~exp=1681582062~hmac=90e05a766ff701e951e3a5748a648e2cb66677f3060b484b72d4e0cabd14c2d3"
      />
      <Blog active="Freelancing" />
      <Footer />
    </div>
  )
}

export default Freelancing