import axios from "axios";

const getColeccion = async (token) => {
    try {
        await axios.get('http://127.0.0.1:5001/coleccion/', {
            headers: {
                Authorization: `${token}`,
                Accept: 'application/json'
            }
        }).then((result) => {
            console.log(result.data)
        })
    } catch (error) {
        console.log(error.response.data.message)
    }
}

const coleccionService = {getColeccion};

export default coleccionService;