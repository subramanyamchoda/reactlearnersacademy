import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';



function Header() {
    useEffect(() => {
        // Bootstrap's JavaScript requires jQuery and Popper.js
        // Initialize Bootstrap components here if needed
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark imga1">
            <img src="assrets\images\log.jpeg" className="logo1" width="50px" alt="Logo" />
            <a className="navbar-brand text-white1 text-white" href="index.jsp">Learners Academy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-white1" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/about">Services</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Header;
