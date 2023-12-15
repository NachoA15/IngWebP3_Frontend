import React from "react";
import Navbar from '../Navbar'
import GoogleMap from '../maps/GoogleMap'

export default function Mapa() {
    let coordenadas = [{lat: 36.72016, long:  -4.42034}]//, {lat: 36, long: 4}]
    return(
        <>
        <Navbar />
        <section className="py-5 bg-light" style={{width: '800px'}}>
            <GoogleMap locations={coordenadas}/>
        </section>
        </>
    )
}