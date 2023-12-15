import React, { useEffect, useState } from "react";
import DataForm from './DataForm'
import UploadImage from "./UploadImage";

export default function Form() {

    const [filled, setFilled] = useState(false)
    const [data, setData] = useState({})
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        if (imageURL !== '') {
            console.log(data);
            console.log(imageURL);
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