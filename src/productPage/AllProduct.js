import axios from 'axios'
import React, { Component } from 'react'
import { Container,Row,Col } from 'reactstrap'
import SubNavbar from '../SubNavbar'
import Navbar from '../Navbar'
// import Preloader from '../Preloader'
// import SubNavbar from '../SubNavbar'
// import Navbar from '../reactstrap'

class AllProduct extends Component {
    // state = {
    //     persons: []
    // }
    // componentDidMount() {
    //     axios.get('/js/Api.json')
    //         .then((item) => {
    //             this.state(
    //                 {
    //                     persons: item.data.product
    //                 }
    //             )

    //         })

    // }
    render() {
        return (
            <div>
                
                {/* <Preloader /> */}
                {/* <SubNavbar /> */}
                <SubNavbar/>
                <Navbar/>
                {/* <Container>
                    <Row className=' mt-n2 wow fadeInUp'>
                        {this.state.persons.map((result) => (
                            <div>
                                <h2>{result.title} </h2>
                            </div>

                        ))}
                    </Row>
                </Container> */}
                

            </div >
        )
    }
}
export default AllProduct