import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/authContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AxiosProvider } from './context/axiosContext.jsx'
import { UsuariosProvider } from './pages/Usuarios/hooks/UsuariosContext.jsx'
import { MaterialProvider } from './pages/Materiales/hooks/MaterialContext.jsx'
import { SuajeProvider } from './pages/Suajes/hooks/SuajeContext.jsx'
import { NotasProvider } from './pages/Notas/hooks/NotasContext.jsx'
import { TerminadosProvider } from './pages/Terminados/hooks/TerminadosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AxiosProvider>
          <UsuariosProvider>
            <MaterialProvider>
              <SuajeProvider>
                <NotasProvider>
                  <TerminadosProvider>
                    <App />
                  </TerminadosProvider>
                </NotasProvider>
              </SuajeProvider>
            </MaterialProvider>
          </UsuariosProvider>
        </AxiosProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
