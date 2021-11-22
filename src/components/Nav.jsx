import React from "react";

function Nav() {
    return (
        <div>
            <a href="javascript:void(0);" id="hamburger">
            <i className="fas fa-bars fa-4x"></i>
        </a>

        <nav className="link-menu">

            <a href="" className="headlink">
                ABOUT
            </a>

            <a href="" className="headlink">
                PROJECTS
            </a>

            {/* <!-- <a href="" className="headlink">
                MORE PROJECTS
            </a> --> */}

            <a href="" className="headlink">
                RESUME
            </a>
            
            <a href="" className="headlink">
                CONNECT
            </a>

        </nav>
        </div>
    );
}



export default Nav;