import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
          {/* header area start */}
      {/* header area start */}
      <header className="header-two header--sticky">
        {/* <div className="header-top">
          <div className="container-2">
            <div className="header-top-inner d-flex align-items-center justify-content-between">
              <div className="left d-flex align-items-center">
                <div className="map-area">
                  <svg width={20} height={20} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="m22.56 30a5.16 5.16 0 0 1 -2-.41 34.53 34.53 0 0 1 -18.16-18.17 5 5 0 0 1 1.06-5.51l3-3a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-1.63 1.65a12.54 12.54 0 0 0 7.07 7.07l1.68-1.67a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-3 3a5 5 0 0 1 -3.56 1.5zm-13.94-26a1 1 0 0 0 -.71.29l-3 3a3 3 0 0 0 -.64 3.31 32.47 32.47 0 0 0 17.1 17.16 3 3 0 0 0 3.31-.64l3-3a1 1 0 0 0 0-1.42l-3.54-3.53a1 1 0 0 0 -1.41 0l-2.12 2.12a1 1 0 0 1 -1 .24 14.42 14.42 0 0 1 -9.12-9.12 1 1 0 0 1 .24-1l2.12-2.12a1 1 0 0 0 .29-.71 1 1 0 0 0 -.29-.7l-3.52-3.59a1 1 0 0 0 -.71-.29z" />
                    </g>
                  </svg>
                  <a href="call-to_12505550199.html">+12505550199</a>
                </div>
                <div className="map-area">
                  <svg width={20} height={20} viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="m29 7h-24a2 2 0 0 0 -2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-16a2 2 0 0 0 -2-2zm-12 10.758-11.893-8.758h23.786zm-4.54-.86-7.46 7.668v-13.161zm1.626 1.2 1.728 1.273a1.988 1.988 0 0 0 2.372 0l1.729-1.271 6.717 6.9h-19.264zm7.454-1.2 7.46-5.493v13.163z" />
                    </g>
                  </svg>
                  <a href="mail-to_Autovault%40gmail.html">Autovault@gmail.com</a>
                </div>
                <div className="map-area">
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1791_1046)">
                      <path d="M8 4C7.47258 4 6.95701 4.1564 6.51848 4.44941C6.07995 4.74243 5.73815 5.15891 5.53632 5.64618C5.33449 6.13345 5.28168 6.66963 5.38457 7.18691C5.48747 7.70419 5.74144 8.17935 6.11438 8.55229C6.48732 8.92523 6.96248 9.1792 7.47976 9.28209C7.99704 9.38499 8.53322 9.33218 9.02049 9.13035C9.50776 8.92851 9.92424 8.58672 10.2173 8.14819C10.5103 7.70966 10.6667 7.19408 10.6667 6.66667C10.6667 5.95942 10.3857 5.28115 9.88562 4.78105C9.38552 4.28095 8.70724 4 8 4ZM8 8C7.73629 8 7.47851 7.9218 7.25924 7.77529C7.03997 7.62878 6.86908 7.42055 6.76816 7.17691C6.66724 6.93328 6.64084 6.66519 6.69229 6.40655C6.74373 6.14791 6.87072 5.91033 7.05719 5.72386C7.24366 5.53739 7.48124 5.4104 7.73988 5.35895C7.99852 5.30751 8.26661 5.33391 8.51025 5.43483C8.75388 5.53574 8.96212 5.70664 9.10863 5.92591C9.25514 6.14517 9.33333 6.40296 9.33333 6.66667C9.33333 7.02029 9.19286 7.35943 8.94281 7.60948C8.69276 7.85952 8.35362 8 8 8Z" fill="white" />
                      <path d="M8 15.9999C7.43863 16.0027 6.88474 15.8711 6.38471 15.6159C5.88468 15.3607 5.45306 14.9895 5.126 14.5332C2.58533 11.0285 1.29667 8.39387 1.29667 6.70187C1.29667 4.92403 2.00291 3.21901 3.26003 1.9619C4.51715 0.704777 6.22217 -0.00146484 8 -0.00146484C9.77784 -0.00146484 11.4829 0.704777 12.74 1.9619C13.9971 3.21901 14.7033 4.92403 14.7033 6.70187C14.7033 8.39387 13.4147 11.0285 10.874 14.5332C10.5469 14.9895 10.1153 15.3607 9.61529 15.6159C9.11526 15.8711 8.56137 16.0027 8 15.9999ZM8 1.45387C6.60828 1.45546 5.27401 2.00902 4.28992 2.99312C3.30582 3.97721 2.75226 5.31148 2.75067 6.7032C2.75067 8.0432 4.01267 10.5212 6.30333 13.6805C6.4978 13.9484 6.75291 14.1664 7.04781 14.3167C7.34271 14.467 7.669 14.5454 8 14.5454C8.331 14.5454 8.6573 14.467 8.95219 14.3167C9.24709 14.1664 9.5022 13.9484 9.69667 13.6805C11.9873 10.5212 13.2493 8.0432 13.2493 6.7032C13.2477 5.31148 12.6942 3.97721 11.7101 2.99312C10.726 2.00902 9.39172 1.45546 8 1.45387Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1791_1046">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <a href="#">280 Augusta Avenue, M5T 2L9 Toronto, Canada</a>
                </div>
              </div>
              <div className="right">
                <div className="social-area-transparent">
                  <ul className="d-flex align-items-center">
                    <li><a href="#"><img src="/assets/images/icon/x.svg" alt /></a></li>
                    <li><a href="#"><img src="/assets/images/icon/in.svg" alt /></a></li>
                    <li><a href="#"><img src="/assets/images/icon/f.svg" alt /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container-2">
          <div className="header-bottom">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-wrapper-1">
                  <div className="logo-area-start">
                    <a href="/" className="logo">
                      <img style={{height:'70px'}} src="/assets/images/logo/logo-car.png" alt="logo_area" />
                    </a>
                  </div>
                  <div className="header-right d-block">
                    <div className="bottom d-flex align-items-center justify-content-between">
                      <div className="nav-area">
                        <ul className>
                          <li className=" main-nav">
                            <a href='/'  className="main-menu">Home</a>
                           
                          </li>
                          <li className="main-nav">
                            <Link to={'about'} className="main-menu" >About Us</Link>
                          </li>
                          <li className="main-nav">
                            <Link to={'service'} className="main-menu" >Services</Link>
                          </li>
                       
                          
                          <li className="main-nav"><Link to={'contact'} className="main-menu">Contact</Link></li>
                        </ul>
                      </div>
                      <div className="bottom-right">
                        
                        <div className="menu-btn" id="menu-btn">
                          <svg width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={55} height={55} rx={15} fill="#FF3600" />
                            <rect x={18} y={33} width={10} height={2} fill="#ffffff" />
                            <rect x={18} y={26} width={20} height={2} fill="#ffffff" />
                            <rect x={18} y={19} width={10} height={2} fill="#ffffff" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header area end */}
      {/* header area end */}
      <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">X</button>
    {/* mobile menu area start */}
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li >
            <a href="/" className="main">Home</a>
           
          </li>
          <li><Link to='about' className="main">About</Link></li>
          
          <li><Link to='service' className="main">Service</Link></li>
         
         
          <li><Link to='contact' className="main">Contact</Link></li>
        </ul>
      </nav>
      {/* <div className="rts-social-style-one pl--20 mt--50">
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
    {/* mobile menu area end */}
  </div>
    </div>
  )
}

export default Header