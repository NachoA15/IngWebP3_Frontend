import React from "react";
import UploadWidget from '../cloudinary/uploadWidget'

export default function UploadImage({setFilled, setData, setImageURL}) {
    return(
        <>
        <div className="container">
            <section className="panel panel-default">
                <div id="addProductForm">
                    <br />
                    <div className="container center">
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="row text-center">
                                    <h3 className="card-title" tabIndex="0">Suba la imagen que desee</h3>
                                    <h6 tabIndex="0">Posteriormente se creará el evento</h6>
                                </div>

                                <br />

                                <div className="row text-left">
                                    <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div>
                                                <UploadWidget setImageUrl={setImageURL}/>
                                            </div>
                                        </div>
                                    <div className="col-md-2"></div>
                                </div>

                                <div className='container' style={{ maxWidth: 150, float: 'left' }}>
                                    <button type="submit" className="btn btn-dark" 
                                        onClick={() => {
                                            setData({});
                                            setFilled(false);
                                        }}>Anterior</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

/*

 <div className="row text-left">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div>
                          <TextField
                            id='imagen'
                            label='Imagen (URL)'
                            variant="standard"
                            size='medium'
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            multiple={false}
                          />
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>

                    <br /> */