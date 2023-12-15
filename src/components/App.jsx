import React from 'react'
import GoogleOAuth from './oauth/GoogleOAuth'
import UploadWidget from './cloudinary/uploadWidget'
import '../assets/css/App.css'

function App() {

  return (
    <>
      <h1>Frontend</h1>
      <br />
      <br />
      <GoogleOAuth />
    </>
  )
}

export default App
