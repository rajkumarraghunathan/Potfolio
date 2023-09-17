import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        // text-bg-secondary
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow p-3 mb-5" >
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link Navlink" to='/Home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn Navlink" to='/About'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn Navlink" to='/Education' >Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn Navlink" to='/Skills' >Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn Navlink" to='/Projects'>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn Navlink" to='/Experience'>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn Navlink" to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>

    )
}

export default Header