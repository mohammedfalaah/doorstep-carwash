import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
          {/* rts footer area start */}
  <div className="rts-footer-area footer-two footer-bg-2" id="rts-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-wrapper-style-between">
            <div className="single-wized logo-area">
              <a href="index.html" className="logo">
                <img style={{height:'70px'}} src="/assets/images/logo/logo-car.png" alt />
              </a>
              <p className="desc">CARE ANY TIME - CAT sets fresh benchmarks in the world of green car care. Equipped with an innovative cleaning solution and an army of trained service personnel, we clean cars without water quickly and easily..</p>
            </div>
           
            <div className="single-wized">
              <h6 className="title">Quick Links</h6>
              <div className="body">
                <ul className="nav-bottom">
                  <li><a href='/'>Home</a></li>
                  <li><Link to='about'>About</Link></li>
                  <li><Link to='service'>Service </Link></li>
                  <li><Link to='contact'>Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="single-wized">
              <h6 className="title">Contact Us</h6>
              <div className="body">
                <p className="phone d-flex align-items-center">
                  <svg width={20} height={20} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="m22.56 30a5.16 5.16 0 0 1 -2-.41 34.53 34.53 0 0 1 -18.16-18.17 5 5 0 0 1 1.06-5.51l3-3a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-1.63 1.65a12.54 12.54 0 0 0 7.07 7.07l1.68-1.67a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-3 3a5 5 0 0 1 -3.56 1.5zm-13.94-26a1 1 0 0 0 -.71.29l-3 3a3 3 0 0 0 -.64 3.31 32.47 32.47 0 0 0 17.1 17.16 3 3 0 0 0 3.31-.64l3-3a1 1 0 0 0 0-1.42l-3.54-3.53a1 1 0 0 0 -1.41 0l-2.12 2.12a1 1 0 0 1 -1 .24 14.42 14.42 0 0 1 -9.12-9.12 1 1 0 0 1 .24-1l2.12-2.12a1 1 0 0 0 .29-.71 1 1 0 0 0 -.29-.7l-3.52-3.59a1 1 0 0 0 -.71-.29z" />
                    </g>
                  </svg>
                  <a href="tel:+919544727727">+919544727727</a>
                  </p>
                <p className="email d-flex align-items-center">
                  <svg width={20} height={20} viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="m29 7h-24a2 2 0 0 0 -2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-16a2 2 0 0 0 -2-2zm-12 10.758-11.893-8.758h23.786zm-4.54-.86-7.46 7.668v-13.161zm1.626 1.2 1.728 1.273a1.988 1.988 0 0 0 2.372 0l1.729-1.271 6.717 6.9h-19.264zm7.454-1.2 7.46-5.493v13.163z" />
                    </g>
                  </svg>
                  <a href="mailto:careanytime@gmail.com">careanytime@gmail.com</a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area-inner d-flex align-items-center justify-content-between">
              <p>Copyright ©
                All Rights Reserved by Care any Time
              </p>
              {/* <div className="social-area-transparent">
                <ul className="d-flex align-items-center">
                  <li><a href="#"><img src="/assets/images/icon/x-w.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon/in-w.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon/f-w.svg" alt /></a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts footer area end */}
    </div>
  )
}

export default Footer