import React, { useEffect, useState } from "react";
import Navbar from '../Navbar'
import { TextField, } from '@mui/material';
import eventoService from "../../services/eventoService";
import Evento from "./Evento";

export default function Principal() {
    const [eventos, setEventos] = useState([])
    
    useEffect(() => {
        eventoService.getEventos(setEventos);
    }, [eventos])

    return(
        <>
        <Navbar ubicacion={'Eventos'}/>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">
                       Eventos
                    </h1>
                    <p className="lead fw-normal text-white-50 mb-0">
                        Sección de eventos
                    </p>
                </div>
            </div>
        </header>

        <div className="container">
            <section className="panel panel-default">
            <div id="addProductForm">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const codPostal = document.getElementById('codPostal').value;
                    await eventoService.getEventosCercaCodPostal(setEventos, codPostal);
                }}> 
                <br />
                <div className="container center">
                    <div className="card bg-light">
                    <div className="card-body">
                        <div className="row text-center">
                        <h3 className="card-title" tabIndex="0">Introduzca un código postal:</h3>
                        <h6 tabIndex="0">Se le mostrarán aquellos eventos cercanos (por defecto se muestran todos los eventos)</h6>
                        </div>

                        <br />

                        <div className="row text-left">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div>
                            <TextField
                                required
                                id="codPostal"
                                label="Codigo Postal"
                                variant="standard"
                                size="small"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9,.]*' }}
                            />
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        </div>

                        <br />

                        <div className='container' style={{ maxWidth: 200, float: 'right' }}>
                        <button type="submit" className="btn btn-primary">Buscar Eventos</button>
                        </div>

                    </div>
                    </div>
                    <br />
                </div>
                <br />
                </form>
            </div>
            </section>
        </div>

        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        eventos.length === 0?
                        <h2>No hay eventos que mostrar</h2>

                        :

                        eventos.map((evento, key) => {
                            return <Evento evento={evento} />
                        })
                    }
                </div>
            </div>
        </section>

        </>
    )
}