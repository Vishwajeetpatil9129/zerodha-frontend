import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container">
                    <Link className="navbar-brand me-5" to="/">
                        <img src='media/images/logo.svg' style={{width:"40%"}} alt='logo'></img>
                     </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/product">Product </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/pricing">Pricing </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/support">Support </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;