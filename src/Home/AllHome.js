import React from "react"
import Preloader from '../Preloader'
import SubNavbar from '../SubNavbar'
import Navebar from '../Navbar'
import Banner from './Banner'
import Feature from './Feature'
import About from './About'
import Service from './Service'
import Featur from './Featur'
import Projects from './Projects'
import Quote from './Quote'
import Team from './Team'
import Testimonial from './Testimonial'
import Back from './Back'


function AllHome() {
    return (
        <div>
            {/* <Preloader /> */}
            <SubNavbar />
            <Navebar />
            <Banner />
            <Feature />
            <About />
            <Service />
            <Featur />
            <Projects />
            <Quote />
            <Team />
            <Testimonial />
            <Back />
        </div>
    )
}


export default AllHome;