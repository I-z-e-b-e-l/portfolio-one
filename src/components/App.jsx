import React from "react";
import Nav from "./Nav"

function App() {
    return (
        <div>

            <Nav />

            <div id="landing-div">
        
                <h1 className="make-red">Izebel</h1>
                <h3 id="make-blue">Full Stack Web Developer</h3>

            </div>


            <div className="content-div">


            <div id="about-div" className="section-div">
                <p><strong>Hello, I'm Izebel.</strong></p>

                <p>I'm a full stack web developer with a background in the nonprofit world and the arts. </p>

                <p>My technical skills include:  <strong>React, Javascript, HTML, CSS, Mongo, Mongoose, Express, EJS, Node.JS, Git, Mobile first design. </strong></p>

                <p>Outside of my professional work, I'm an avid fusion and contra dancer, and I enjoy trapeze and partner acrobatics. I bring people together to make the world more awesome. </p>

            </div>


            <div id="coding-projects-div" className="section-div">
                <h2>Projects</h2>
                {/* <!-- <p className="descriptor">details</p> --> */}

                <img className="project-img" src="friendlytherapy1.JPG" />

                <div className="center-me">
                    <i class="fas fa-chevron-down fa-4x"></i>
                </div>


                <div className="project-detail-div">

                    <p>friendlytherapy.info is a database of mental healthcare providers and resources for members of marginalized communities. The site serves ~200 visitors/month.</p>

                    <p><strong>Technologies:</strong> Javascript, HTML/CSS, MongoDB, Node.JS, Express, EJS,  Heroku</p>

                    <button>Live Link</button>
                    <button>Demo</button>
                    <button>Repo</button>

                    <div className="center-me">
                    <i class="fas fa-chevron-down fa-4x"></i>
                </div>

                </div>

                <div className="spacer"></div>
                {/* <!-- <div className="spacer"></div> --> */}

                <img className="project-img" src="askmetodance1.JPG" />

                <div className="center-me">
                    <i class="fas fa-chevron-down fa-4x"></i>
                </div>


                <div className="project-detail-div">

                    <p>askmetodance.org is a community project facilitating consent culture within dance communities.Website built on Weebly.</p>

                    <button>Live Link</button>

                    <div className="center-me">
                    <i class="fas fa-chevron-up fa-4x"></i>
                </div>

                </div>

                {/* <!-- <div className="spacer"></div> --> */}

            </div>

            {/* <!-- <div id="more-projects-div" className="section-div">

            </div> --> */}


            <div id="resume-div" className="section-div">
                <h2>Resume</h2>

                <div className="center-me">
                    {/* <!-- <a href="">Download Resume PDF</a>
                    <a href="">Resume as Google Doc</a> --> */}

                    <button>Download Resume PDF</button>

                    <div className="spacer"></div>

                    <button>Resume as Google Doc</button>

                    <div className="spacer"></div>


                </div>

            </div>


            <div id="connect-div" className="section-div">
                <h2>Connect</h2>

                <div className="center-me">
                <p><strong>izebel@rocketmail.com</strong></p>

                <div className="center-icons">

                    <a href="https://github.com/I-z-e-b-e-l" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square fa-5x social-icon"></i>
                    </a> 

                    <a href="https://www.linkedin.com/in/seraab/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-5x social-icon"></i>
                    </a>


                    <a href="mailto:agentavery@sample.com">
                        <i className="fas fa-envelope-square fa-5x social-icon"></i>
                    </a>

                </div>

                </div>

            </div>

        </div>

{/* end div */}
        </div>
    );
}

export default App;