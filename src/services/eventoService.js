import axios from "axios";

const getEventos = async (setEventos) => {
    try {
        await axios.get('https://ing-web-p3-backend.vercel.app/eventos/').then((result) => {
            setEventos(result.data.eventos);
        })
    } catch (error) {
        console.log(error.response.data.message)
    }
}

const getEventoById = async (setEventos, idEvento) => {
    try {
        await axios.get('https://ing-web-p3-backend.vercel.app/eventos/' + idEvento).then((result) => {
            setEventos(result.data.evento);
        })
    } catch (error) {
        console.log(error.response.data.message)
    }
}

const getEventosCercaCodPostal = async (setEventos, codPostal) => {
    try {
        await axios.get('https://ing-web-p3-backend.vercel.app/eventos?codPostal=' + codPostal).then((result) => {
            setEventos(result.data.eventos);
        })
    } catch (error) {
        console.log(error.response.data.message)
    }
}

const crearNuevoEvento = async (token, data, imageURL) => {
    try {
        console.log(token)
        await axios.post('https://ing-web-p3-backend.vercel.app/eventos/', 
            {
                nombre: data.nombre,
                timestamp: data.fecha,
                codPostal: data.codPostal,
                organizador: data.organizador,
                imagen: imageURL
            }, 
            {
                headers: {
                    Authorization: `${token}`,
                    Accept: 'application/json'
                }
            }
        ).then((result) => {
            console.log(result.data)
        })
    } catch (error) {
        console.log(error.response)
    }
}

const eventoService = {getEventos, getEventoById, getEventosCercaCodPostal, crearNuevoEvento};

export default eventoService;