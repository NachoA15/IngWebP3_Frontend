import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/App'
import SubirEvento from './components/pages/SubirEvento';
import Principal from './components/pages/Principal';
import PaginaEvento from './components/pages/PaginaEvento';
import './assets/css/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Principal />
  },
  {
    path: '/upload',
    element: <SubirEvento />
  },
  {
    path: '/evento/:id',
    element: <PaginaEvento />
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
