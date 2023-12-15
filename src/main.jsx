import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/App'
import SubirProducto from './components/pages/SubirProducto';
import Mapa from './components/pages/Mapa'
import './assets/css/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/upload',
    element: <SubirProducto />
  },
  {
    path: '/map',
    element: <Mapa />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
