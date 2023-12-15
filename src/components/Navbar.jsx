import React from "react";
import GoogleOAuth from "./oauth/GoogleOAuth";

export default function NavBar({ubicacion}) {
    let email = localStorage.getItem("email");


    // <nav class="navbar navbar-expand-lg fixed-top navbar-light" style={{backgroundColor: '#e3f2fd'}}>

    return(
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" id="profilepNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="/">NombreAplicacion</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item" style={{marginLeft: "20px"}}><a className={ubicacion === 'Productos'? 'nav-link active' : 'nav-link'} href="/productos">Productos</a></li>
                            <li className="nav-item" style={{marginLeft: "20px"}}><a className={ubicacion === 'Subir Producto'? 'nav-link active' : 'nav-link'} href={"/upload"}>Subir Producto</a></li> 
                            <li className="nav-item" style={{marginLeft: "20px"}}> <a className={ubicacion === 'Mis Productos'? 'nav-link active' : 'nav-link'} href={"/misProductos"}>Mis productos</a></li> 
                            <li className="nav-item" style={{marginLeft: "20px"}}><a className={ubicacion === 'Mis chats'? 'nav-link active' : 'nav-link'} href="/chats"> Mis chats</a></li> 
                            <li className="nav-item" style={{marginLeft: "20px"}}><a className={ubicacion === 'Mis Pujas'? 'nav-link active' : 'nav-link'} href={"/misPujas"}> Mis pujas</a></li>
                            <li className="nav-item" style={{marginLeft: "20px"}}><a className={ubicacion === 'Mi perfil'? 'nav-link active' : 'nav-link'} href={"/usuario/"}>Mi perfil</a></li>
                            <li className="nav-item" style={{marginLeft: "20px"}}><GoogleOAuth /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}