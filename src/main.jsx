import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { HotelContextProvider } from "./context/hotel.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <CssBaseline/>
    <HotelContextProvider>
      <App />
    </HotelContextProvider>
    </BrowserRouter>
)
