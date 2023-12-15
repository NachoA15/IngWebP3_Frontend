import React from "react";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import eventoService from "../../services/eventoService";
import GoogleMap from '../maps/GoogleMap'
import Navbar from '../Navbar'
import ImageNotFound from '../../assets/images/imagenotfound.jpg'

export default function PaginaEvento() {

    const [evento, setEvento] = useState([]);

    let param = useParams();
    let idEvento = param.id;

    useEffect(() => {
        const fetchData = async() => {
            await eventoService.getEventoById(setEvento, idEvento);
        }
        fetchData();
    }, [])

    console.log(evento)

    return(
        <>
        <Navbar />
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6" style={{height: "500px", objectFit: 'contain'}}>
                        <img className="card-img-top mb-5 mb-md-0" src={evento.imagen !== undefined? evento.imagen : ImageNotFound} alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">Organizado por {evento.organizador}</div>
                        <hr/>
                        <h1 className="display-5 fw-bolder">{evento.nombre}</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 bg-light">
            <p>Localización aproximada del evento (código postal {evento.lugar}):</p>
            <GoogleMap locations={[{lat: evento.lat, lng: evento.lon}]}/>
        </section>
        </>
    )
}