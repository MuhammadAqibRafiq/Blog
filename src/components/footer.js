import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'


const footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white mt-3">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-2" href="https://www.linkedin.com/in/aqib-rafiq-2a3b65213/" role="button">
                            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "18px", marginTop: "7px" }} />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-2" href="https://github.com/MuhammadAqibRafiq" role="button">
                            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "24px", paddingTop: "7px" }} />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-2" href="https://www.facebook.com/aqibrafiq11" role="button">
                            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "18px", marginTop: "7px" }} />
                        </a>
                    </section>

                </div>



                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>

                    <a className="text-white" href="https://github.com/MuhammadAqibRafiq/Blog">© 2021 Copyright Reserved</a>
                </div>

            </footer>
        </div>
    )
}

export default footer
