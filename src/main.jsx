import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './layouts/Header.jsx'
import Footer from './layouts/Footer.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter> 
  <Header />
  <div className="rts-wrapper">
    <div className="rts-wrapper-inner">
      
    
    <App />
    
    </div>
  </div>
    
    <Footer />
  </BrowserRouter>,
)
{/* <div className="rts-wrapper">
    <div className="rts-wrapper-inner">
    
     
    
    </div>
  </div> */}