import React, { createRef, useEffect, useState } from 'react';
import { TextField, } from '@mui/material';
import Navbar from '../Navbar'

export default function DataForm({ setFilled, setData }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="container">
        <section className="panel panel-default">
          <div id="addProductForm">
            <form onSubmit={(e) => {
                e.preventDefault();
                const nombre = document.getElementById('nombre').value;
                const precio = document.getElementById('precio').value;
                const codPostal = document.getElementById('codPostal').value;
                const fecha = selectedDate;
                const descripcion = document.getElementById('descripcion').value;

                let data = {
                  nombre: nombre,
                  precio: precio,
                  codPostal: codPostal,
                  fecha: selectedDate,
                  descripcion: descripcion
                }

                setData(data);

                setFilled(true);
              }}> 
              <br />
              <div className="container center">
                <div className="card bg-light">
                  <div className="card-body">
                    <div className="row text-center">
                      <h3 className="card-title" tabIndex="0">Introduzca la información del producto:</h3>
                      <h6 tabIndex="0">Los campos obligatorios se muestran con un asterisco (*)</h6>
                    </div>

                    <br />

                    <div className="row text-left">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div>
                          <TextField
                            required
                            id="nombre"
                            label="Nombre del producto"
                            variant="standard"
                            size="small"
                          />
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>

                    <br />

                    <div className="row text-left">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div>
                          <TextField
                            required
                            id="precio"
                            label="Precio del producto"
                            variant="standard"
                            size="medium"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9,.]*' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-2"></div>
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

                    <div className="row text-left">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div>
                          <TextField
                            required
                            id="fechaCierre"
                            //label="Fecha de Cierre"
                            type="date"
                            value={selectedDate}
                            onChange={(e) => handleDateChange(e.target.value)}
                            variant="standard"
                            size="small"
                          />
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>

                    <br />

                    <div className="row text-left">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div>
                          <TextField
                            id="descripcion"
                            label="Descripción del producto"
                            size="medium"
                            multiline
                            rows={5}
                          />
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>

                    <br />

                    <div className='container' style={{ maxWidth: 150, float: 'right' }}>
                      <button type="submit" className="btn btn-primary">Siguiente</button>
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
    </>
  )
}
