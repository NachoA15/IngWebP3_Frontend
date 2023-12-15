import React from "react";
import GoogleOAuth from "./oauth/GoogleOAuth";

export default function NavBar({ubicacion}) {
    let email = localStorage.getItem("email");


    // <nav class="navbar navbar-expand-lg fixed-top navbar-light" style={{backgroundColor: '#e3f2fd'}}>

    return(
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" id="profilepNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="/">Eventual</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item" style={{marginLeft: "20px"}}><a className={ubicacion === 'Eventos'? 'nav-link active' : 'nav-link'} href="/">Eventos</a></li>
                            <li className="nav-item" style={{marginLeft: "20px"}}><a className={ubicacion === 'Subir Evento'? 'nav-link active' : 'nav-link'} href={"/upload"}>Subir Evento</a></li> 
                            <li className="nav-item" style={{marginLeft: "20px"}}><GoogleOAuth /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}