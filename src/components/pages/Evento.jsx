import React from "react";
import ImageNotFound from '../../assets/images/imagenotfound.jpg'
import routerService from "../../services/routerService";

export default function Evento({evento}) {
    let fechaEvento = new Date(evento.timestamp);

    return (
        <>
        <div className="col" style={{width: '400px'}}>
            <div className="card h-100">
                <b>Organizador: {evento.organizador}</b>
                <div className={'badge bg-dark text-white position-absolute'} style={{top: '0.5rem', right: '0.5rem'}}>{fechaEvento.toString().substring(3,15)}</div>
                <img className="card-img-top" src={evento.imagen !== undefined && evento.imagen !== null? evento.imagen : ImageNotFound} alt="..." onClick={() => {}}/>
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">{evento.nombre}</h5>
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {routerService.moveToPaginaEvento(evento._id)}}>Detalles</a></div>
                </div>
            </div>
        </div>
        </>
    )
}