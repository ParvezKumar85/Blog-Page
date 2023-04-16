import React from 'react'
import { Footer, Hero, Navbar } from '../../components'

const About = () => {
    return (
        <div>
            <Navbar About="active" Page={"Select Category"} />
            <Hero
                title="About Page "
                des="Hi, I'm Manoj Missrani, and I'm the blogger behind bloger website. I started this blog because [brief explanation of what led you to start the blog].
                My goal with this blog is to [brief explanation of the purpose and goals of your blog]. I cover topics such as [list a few of the main topics you cover], and I strive to provide value to my readers through [brief explanation of the kind of value you want to provide].
                I hope my blog can be a valuable resource for you. If you have any questions or comments, please don't hesitate to reach out to me at [contact information]. Thanks for stopping by!"
                img="https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?w=740&t=st=1681587388~exp=1681587988~hmac=370a913b75af004fe14bc702d6fdca4d6305c0384f6e9ebd06b695d333b6c018"
            />
            <Footer />
        </div>
    )
}

export default About