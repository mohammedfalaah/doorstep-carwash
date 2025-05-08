import React, { useEffect } from 'react'
import WhatsappChat from '../utils/WhatsappChat'
import { GiGrowth } from 'react-icons/gi'
import { IoBusinessOutline, IoDiamond } from 'react-icons/io5'

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
       <div>
      {/* Breadcrumb area start */}
{/* rts breadcrumb area start */}
{/* <div className="rts-breadcrumb-area service jarallax">
  <div className="container">
    <div className="breadcrumb-area-wrapper">
      <h1 className="title">About</h1>
      <div className="nav-bread-crumb">
        <a href="index.html">Home</a>
        <a href="#" className="current">About</a>
      </div>
    </div>
  </div>
</div> */}
{/* rts breadcrumb area end */}
{/* Breadcrumb area end */}

<section className="rts-about-area inner two rts-section-gapTop">
  <div className="container">
    <div className="section-inner">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content-area">
            <div className="section-title-area">
              <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">
                About Us - Care Any Time
              </p>
              <h2 className="section-title wow move-right">
                Revolutionizing Doorstep Car Wash and Detailing in India
              </h2>
            </div>
            <p className="desc wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
              Care Any Time began our journey in January 2020, bringing car wash services right to your doorstep.
              By 2021, we expanded to include 100 franchisees across Kerala, with plans to grow further into Car Shoppe services. 
              In 2022, introducing doorstep car wash and Car Shoppe facilities. 
              Continuing our growth, 2023 saw over 150 franchisees nationwide and the launch of our own branded products. 
              Now in 2024, with over 180 franchisees, we've transitioned to Bike units, offering even more accessible service options.
            </p>
            <a href="call-to_%2b12505550199.html" className="rts-btn call-btn wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
              <span>
                <i className="fa-regular fa-phone" />
              </span>
              <div className="content">
                <h6>Call Us Now</h6>
                <p>+91 9544727727</p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 about-image-area">
          <div className="left wow scaleIn" data-wow-delay=".5s" data-wow-duration="1s">
            <img src="/assets/images/service/service-03.webp" width={339} alt />
          </div>
          <div className="right wow scaleIn" data-wow-delay=".5s" data-wow-duration="1s">
            <img src="assets/images/category/dashboard.webp" width={280} alt />
            <div className="counter-area">
              <h2 className="title"><span className="counter">1000</span><span>+</span></h2>
              <p className="desc"> Customers Already</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-shape-area">
    <img src="assets/images/category/shape/shape-01.svg" alt />
    <img src="assets/images/category/shape/shape-02.svg" alt />
  </div>
</section>


  {/* About Area End */}
  {/* Counter Area Start */}
  {/* <section className="rts-counter-area-two">
    <div className="container">
      <div className="counter-inner">
        <div className="inner wow zoomIn" data-wow-delay=".2s" data-wow-duration="1s">
          <div className="icon">
            <img src="assets/images/counter/icon-01.svg" width={74} alt />
          </div>
          <div className="text">
            <h3 className="title"><span className="counter">320</span><span>M</span></h3>
            <p className="desc">Cars For Sale</p>
          </div>
        </div>
        <div className="inner wow zoomIn" data-wow-delay=".4s" data-wow-duration="1s">
          <div className="icon">
            <img src="assets/images/counter/icon-02.svg" alt />
          </div>
          <div className="text">
            <h3 className="title"><span className="counter">5500</span><span>+</span></h3>
            <p className="desc">Dealer Review</p>
          </div>
        </div>
        <div className="inner wow zoomIn" data-wow-delay=".6s" data-wow-duration="1s">
          <div className="icon">
            <img src="assets/images/counter/icon-03.svg" alt />
          </div>
          <div className="text">
            <h3 className="title"><span className="counter">300</span><span>M</span></h3>
            <p className="desc">Verified User</p>
          </div>
        </div>
        <div className="inner wow zoomIn" data-wow-delay=".8s" data-wow-duration="1s">
          <div className="icon">
            <img src="assets/images/counter/icon-04.svg" alt />
          </div>
          <div className="text">
            <h3 className="title"><span className="counter">10</span><span>M</span></h3>
            <p className="desc">Visitor Per Day</p>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* Counter Area End */}
  {/* Testimonials Area Start */}
  
  {/* Testimonials Area End */}
  {/* Team Area Start */}
  
  {/* Team Area End */}
  {/* Brand Area Start */}

  {/* Brand Area End */}
 
</div>
<section className="rts-working-process-area rts-section-gap">
  <div className="container">
    <div className="section-title-area2">
      {/* <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">Who We Are</p>
      <h2 className="section-title wow move-right">Our <span>Philosophy</span></h2> */}
    </div>
    <div className="working-inner mt--80">
      <img className="shape" src="assets/images/icon/line.svg" alt />
      <div className="working-process-wrapper">
        <div className="icon"><GiGrowth /></div>
        <h6 className="title">Our Vision</h6>
        <p className="desc">To revolutionize vehicle care by delivering premium, eco-friendly, and doorstep car wash solutions that prioritize customer convenience and satisfaction.</p>
      </div>
      <div className="working-process-wrapper">
        <div className="icon"><IoBusinessOutline /></div>
        <h6 className="title">Our Mission</h6>
        <p className="desc">To provide consistent, high-quality vehicle cleaning and detailing services using innovative methods, delivered with professionalism and a customer-first mindset.</p>
      </div>
      <div className="working-process-wrapper">
        <div className="icon"><IoDiamond /></div>
        <h6 className="title">Our Values</h6>
        <p className="desc">We stand for reliability, quality, sustainability, and customer trust — every wash reflects our commitment to excellence and care.</p>
      </div>
    </div>
  </div>
</section>



<WhatsappChat />

    </div>
    
  )
}

export default AboutPage