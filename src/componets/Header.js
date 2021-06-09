import React from 'react'
import image from "./images/logo.png";
import image1 from "./images/logoo1.png";
import "./style.css";
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={image} className="image1" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Epic-Games">STORE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contents1">NEWS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/FAQ">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Help" tabindex="-1" aria-disabled="true">HELP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Unreal" tabindex="-1" aria-disabled="true">UNREAL ENGINE</Link>
                            </li>

                            <li className="nav-item1">
                                <img src={image1} className="image2" />
                                <Link className="nav-link " to="/Sign" tabindex="-1" aria-disabled="true" id="navlink">SIGN IN</Link>
                            </li>

                            <li className="nav-item22">
                                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true" id="navlink">GET EPIC GAMES</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            

           



                <div className="container2">
                    <h5>Discover</h5>
                    <h5>Browse</h5>
                    <div className="search">
                    <nav class="navbar navbar-dark ">
                        <div class="container-fluid">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    </div>
                </div>

            

        </>
    )
}
