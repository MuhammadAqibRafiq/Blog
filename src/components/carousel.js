import React from 'react'
import { Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import './style.css'
import Js from '../components/js.gif'
import Js2 from '../components/js2.gif'


const caraus = () => {

    return (
        <Container className='mt-3' >
            <div className='card-header d-flex justify-content-center' style={{ background: 'white' }}><h5>PREREQUISITES</h5></div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Js}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Js2}
                        alt="Second slide"
                    />

                </Carousel.Item>

            </Carousel>

        </Container>


    )
}

export default caraus






















// import React from 'react'
// import { Row, Col, Card, Container } from "react-bootstrap"
// import Carousel from 'react-bootstrap/Carousel'
// import './style.css'
// import Bio from './bio'


// const caraus = ({ data }) => {

//     const posts = data.allContentfulPost.edges;
//     // console.log(posts[0].node.image.fluid.src)


//     return (

//         <Container className='carocont ' >
//             <Row >

//                 <Col className='carocol'>

//                     <Carousel variant="dark"  >

//                         <Carousel.Item >
//                             <div className='caroitem'>

//                                 <img  className="caroimg" alt='' src={posts[0].node.image.fluid.src} />

//                                 <div className='carotitlediv'>
//                                     <Card.Title className="carotitle" >{posts[0].node.title}</Card.Title>
//                                     <br />
//                                     {posts[0].node.subtitle}

//                                     <div className='carobio' >
//                                         <Bio />
//                                     </div>
//                                 </div>

//                             </div>

//                         </Carousel.Item>

//                         <Carousel.Item >
//                             <div className='caroitem'>

//                                 <img className="caroimg" alt='' src={posts[1].node.image.fluid.src} />

//                                 <div className='carotitlediv'>
//                                     <Card.Title className="carotitle" >{posts[1].node.title}</Card.Title>
//                                     <br />
//                                     {posts[1].node.subtitle}

//                                     <div className='carobio' >
//                                         <Bio />
//                                     </div>
//                                 </div>


//                             </div>
//                         </Carousel.Item>

//                     </Carousel>   
//                 </Col>
//             </Row>

//         </Container>




//     )
// }

// export default caraus