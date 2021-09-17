import React from 'react'
import Footer from "../components/footer"
import Frontpage from "../components/frontpage"
import { Container } from "react-bootstrap"


const prereq = () => {
    return (
        <>
            <Frontpage />
     
            <Container className='mt-5 mb-5'>
       
                <h5 className='d-flex justify-content-center'>Prerequisites: </h5>

                <ul><li>HTML</li><li>CSS</li><li>JavaScript</li> </ul>

                <h5> These topics have been released for everyone in Urdu:</h5>

                <li><a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6'>Learn HTML by Hira Khan</a></li>

                <li><a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob'>Learn CSS Intro by Hira Khan</a></li>

                <li><a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo'>Learn JavaScript by Zeeshan Hanif</a></li>

                <a href='https://www.youtube.com/playlist?list=PLlrxD0HtieHhW0NCG7M536uHGOtJ95Ut2'> Microsoft’s Beginner’s Series to: JavaScript</a>

                <h5> <span style={{ fontWeight: 'bold' }}> Note: </span> Material in English is already available <a href='https://css-tricks.com/where-do-you-learn-html-css-in-2020/' style={{color:'blue' , textDecoration:'underline'}}>extensively on the web.</a></h5>

                <h5> <span style={{ fontWeight: 'bold' }}> BONUS: </span> React Playlist start from basic <a href='https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ' style={{color:'blue' , textDecoration:'underline'}}>YOUTUBE.</a></h5>
    

            </Container>

            <Footer />
</>
    )
}

export default prereq
