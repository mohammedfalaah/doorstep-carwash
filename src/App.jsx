import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import ServicePage from "./Pages/ServicePage"


function App() {

  return (
    <>



    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="service" element={<ServicePage />} />



    </Routes>






<div>
  {/* <div className="loader-wrapper">
    <div className="loader">
    </div>
    <div className="loader-section section-left" />
    <div className="loader-section section-right" />
  </div> */}
  <div className="search-input-area">
    <div className="container">
      <div className="search-input-inner">
        <div className="input-div">
          <input className="search-input autocomplete" type="text" placeholder="Search by keyword or #" />
          <button><i className="far fa-search" /></button>
        </div>
      </div>
    </div>
    <div id="close" className="search-close-icon"><i className="far fa-times" /></div>
  </div>
  <div id="anywhere-home">
  </div>
  {/* progress area start */}
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919'}}>
      </path>
    </svg>
  </div>
  {/* progress area end */}
  

  {/* header style two */}
 
</div>

    </>
  )
}

export default App
