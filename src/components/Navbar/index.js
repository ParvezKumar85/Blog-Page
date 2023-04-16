import React, { useEffect, useState } from 'react'
import "./nav.css"
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
const Navbar = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className='col-7 logoname' onClick={() => navigate("/")}>
                        <h2 className="navbar-brand">Blog Website</h2>
                    </div>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={() => navigate("/")}>
                                <a className={props.Home ? "active nav-link" : "nav-link"}>Home</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id={props.Page === "Select Category"?"":"active"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.Page}
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a className={props.WebDevelopment ? "active dropdown-item" : "dropdown-item"} onClick={() => navigate("/WebDevelopment")}>Web Development</a></li>
                                    <li><a className={props.AppDevelopment ? "active dropdown-item" : "dropdown-item"} onClick={() => navigate("/AppDevelopment")}>App Development</a></li>
                                    <li><a className={props.WordPress ? "active dropdown-item" : "dropdown-item"} onClick={() => navigate("/WordPress")}>WordPress</a></li>
                                    <li><a className={props.Freelancing ? "active dropdown-item" : "dropdown-item"} onClick={() => navigate("/Freelancing")}>Freelancing</a></li>
                                </ul>
                            </li>

                            <li className="nav-item" onClick={() => navigate("/About")}>
                                <a className={props.About ? "active nav-link" : "nav-link"}>About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar 