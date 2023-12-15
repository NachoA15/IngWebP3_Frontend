import React, { useEffect, useState } from "react";
import DataForm from './DataForm'
import UploadImage from "./UploadImage"
import eventoService from "../../services/eventoService";
import routerService from "../../services/routerService";
import Swal from 'sweetalert2'

export default function Form() {
    const token = localStorage.getItem('token');

    if (token === null || token === undefined) {
        Swal.fire({
            icon: 'info',
            text: 'Por favor, inicie sesión antes de subir un evento'
        }).then((res) => {
            if (res.isConfirmed) {
                routerService.moveToMainPage();
            }
        })
    }

    const [filled, setFilled] = useState(false)
    const [data, setData] = useState({})
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        if (imageURL !== '') {
            const res = eventoService.crearNuevoEvento(token, data, imageURL);
            Swal.fire({
                icon: 'success',
                title: 'Evento creado con éxito'
            }).then((res) => {
                if (res.isConfirmed) {
                    routerService.moveToMainPage();
                }
            })
        }
    }, [imageURL])

    return(
        <>
        {
            filled?
                <UploadImage setFilled={setFilled} setData={setData} setImageURL={setImageURL}/>
            :
                <DataForm setFilled={setFilled} setData={setData}/>
        }
        </>
    )
}