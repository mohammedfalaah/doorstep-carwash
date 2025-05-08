import React, { useEffect } from 'react'
import WhatsappChat from '../utils/WhatsappChat'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
         {/* Banner area start */}
         <section className="rts-banner-area two bg_image_two jarallax">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="banner-area-two">
                <div className="banner-content-area">
                  <h1 className="title wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                  Clean car, happy life — at your doorstep! by<span>CAT</span>  . 
                  </h1>
                  <h6 style={{color:'white'}}>Book Your Doorstep
Car wash Now
Why drive to the car wash
when the car wash can come
to you?</h6>
                  <Link to='about' className="rts-btn radius-small btn-primary wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsappChat />
      {/* Banner area end */}
      {/* About Area Start */}
      <section style={{backgroundColor:'#121212'}} className="rts-about-area two rts-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-image-area-two">
                  <div className="left wow scaleIn" data-wow-delay=".5s" data-wow-duration="1s">
                    <img src="assets/images/banner/test.jpg" width={339} alt />
                  </div>
                  <div className="right wow scaleIn" data-wow-delay=".5s" data-wow-duration="1s">
                    <img src="assets/images/about/08.webp" width={280} alt />
                    {/* assets/images/about/08.webp 
                    /assets/images/service/service-03.webp*/}
                    <div className="counter-area">
                      <h2 className="title"><span className="counter">1000</span><span>+</span></h2>
                      <p className="desc">Customer Already</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content-area">
                  <div className="section-title-area">
                    <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">About 
                      Us </p>
                    <h2 className="section-title cw wow move-right"> We clean your vehicle at your convenience. Save time, stay clean<br /> 
                      <span>Care Any Time.</span>
                    </h2>
                  </div>
                  <p className="desc dbc wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">At CAT – Care Any Time, we deliver premium vehicle wash services right to your doorstep. Whether it's a car, bike, van, or fleet – our trained team ensures spotless results using eco-friendly products, top-tier tools, and zero hassle.</p>
                  <Link to='about' className="rts-btn btn-primary radius-small wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">Learn More</Link>
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
      {/* <section className="rts-about-area two rts-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-image-area-two">
                  <div className="left wow scaleIn" data-wow-delay=".5s" data-wow-duration="1s">
                    <img src="/assets/images/about/04.webp" width={339} alt />
                  </div>
                  <div className="right wow scaleIn" data-wow-delay=".5s" data-wow-duration="1s">
                    <img src="/assets/images/about/05.webp" width={280} alt />
                    <div className="counter-area">
                      <h2 className="title"><span className="counter">1000</span><span>+</span></h2>
                      <p className="desc">Car Sold Already</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content-area">
                  <div className="section-title-area">
                    <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">About
                      Us</p>
                    <h2 className="section-title cw wow move-right">Driven by Excellence: Your Trusted Partner for Premium
                      <span>Vehicles</span>
                    </h2>
                  </div>
                  <p className="desc dbc wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">Welcome to Autovault where innovation drives every journey. Discover a
                    range
                    of designed to elevate your driving experience.</p>
                  <a className="rts-btn btn-primary radius-small wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-area">
          <img src="/assets/images/category/shape/shape-01.svg" alt />
          <img src="/assets/images/category/shape/shape-02.svg" alt />
        </div>
      </section> */}
      {/* About Area End */}
      {/* Category Area Start */}
      <section style={{backgroundColor:'#121212'}} className="rts-portfolio-area2 rts-section-gap">
        <div className="container">
          <div className="section-top d-flex justify-content-between align-items-end">
            <div className="section-title-area">
              <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".8s">Select your Door step wash</p>
              <h2 className="section-title cw wow move-right">Our  <span>Services</span></h2>
            </div>
          
          </div>
          <div className="section-inner mt--80 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
            <div className=" tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/service/abc.jpg" alt /></a>
                    
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Interior 
                        Cleaning</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                          Experience Interior freshness meets eco-smart cleaning shine. That’s the CAT promise.
                            {/* Experience CAT shine inside and out with our waterless car wash, perfect for eco-friendly cleaning */}
                          </li>
                         
                         
                        </ul>
                        {/* <div className="button-area">
                          <p className="cw">$5000</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/test2.webp" alt /></a>
                     
                       
                      </div>
                    
                      <div className="content-area">
                        <h6 className="title cw"><a >Car Washing</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            Experience CAT shine inside and out with our waterless car wash, perfect for eco-friendly cleaning
                          </li>
                       
                        </ul>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img style={{height:"230px"}} src="assets/images/portfolio/test3.avif" alt /></a>
                      
                      </div>
                      <div className="content-area">
                        <h6 className="title cw"><a >Bike</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                          Revive your ride – spotless, sleek, and ready to roll. CAT clean. Bike mean
                          </li>
                         
                        </ul>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img style={{height:'230px'}} src="assets/images/portfolio/test4.jpg" alt /></a>
                      
                      </div>
                      <div className="content-area">
                        <h6 className="title cw"><a >Scratch Removel</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                          Scratches steal the shine from your car — we bring it back. At CAT 
                          </li>
                        
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img style={{height:'229px'}} src="assets/images/portfolio/car-detailing.webp" alt /></a>                      
                      </div>
                      <div className="content-area">
                        <h6 className="title cw"><a >Polishing & Waxing</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                          our polishing and waxing service isn’t just about shine it’s about restoration and protection.
                          </li>
                      
                        </ul>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img style={{height:'230px'}} src="assets/images/portfolio/watermark-removel.jpeg" alt /></a>
                       
                      </div>
                   
                      <div className="content-area">
                        <h6 className="title cw"><a >Watermark Removal</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                          Say goodbye to stubborn watermarks and hard water stains on your car’s glass. Clean visuals. No distractions.
                          </li>
                          
                        </ul>
                       
                      </div>
                      
                    </div>
                    <Link style={{float:'right',marginTop:'10px'}} to='service' className="rts-btn btn-primary  radius-small wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s"> See All Services</Link>

                  </div>

                </div>
              </div>
              <div className="tab-pane fade" id="new-cars" role="tabpanel" aria-labelledby="new-cars-tab">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/04.webp" alt /></a>
                        <span className="tag">New</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/04.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Thunderbolt Car</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/05.webp" alt /></a>
                        <span className="tag">New</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/05.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Mercedes-Benz E-Class</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/06.webp" alt /></a>
                       
                       
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Ford Mustang Convertible</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/07.webp" alt /></a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Mazda MX-5 Miata</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/08.webp" alt /></a>
                        <span className="tag">New</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/08.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Honda Civic Hatchback</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/09.webp" alt /></a>
                        <span className="tag">New</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/09.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Hyundai Veloster</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="used" role="tabpanel" aria-labelledby="used-tab">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/07.webp" alt /></a>
                        <span className="tag">Used</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/07.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Mazda MX-5 Miata</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$6650</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/08.webp" alt /></a>
                        <span className="tag">Used</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/08.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Honda Civic Hatchback</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$6650</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/09.webp" alt /></a>
                        <span className="tag">New</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/09.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Hyundai Veloster</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/04.webp" alt /></a>
                        <span className="tag">New</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/04.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Thunderbolt Car</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/05.webp" alt /></a>
                        <span className="tag">New</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/05.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Mercedes-Benz E-Class</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/06.webp" alt /></a>
                        <span className="tag">New</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/06.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          5
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Ford Mustang Convertible</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="trending" role="tabpanel" aria-labelledby="trending-tab">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/04.webp" alt /></a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Thunderbolt Car</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/05.webp" alt /></a>
                        <span className="tag">Trending</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/05.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Mercedes-Benz E-Class</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/06.webp" alt /></a>
                        <span className="tag">Trending</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/06.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Ford Mustang Convertible</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/07.webp" alt /></a>
                        <span className="tag">Trending</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/07.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Mazda MX-5 Miata</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/08.webp" alt /></a>
                        <span className="tag">Trending</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/08.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Honda Civic Hatchback</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/09.webp" alt /></a>
                        <span className="tag">Trending</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/09.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Hyundai Veloster</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="stocks" role="tabpanel" aria-labelledby="stocks-tab">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/07.webp" alt /></a>
                        <span className="tag">Stocks</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/07.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Mazda MX-5 Miata</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/08.webp" alt /></a>
                        <span className="tag">Stocks</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/08.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Honda Civic Hatchback</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/09.webp" alt /></a>
                        <span className="tag">Stocks</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/08.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Hyundai Veloster</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/04.webp" alt /></a>
                        <span className="tag">Stocks</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/04.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Thunderbolt Car</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/05.webp" alt /></a>
                        <span className="tag">Stocks</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/05.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Mercedes-Benz E-Class</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <a ><img src="assets/images/portfolio/06.webp" alt /></a>
                        <span className="tag">Stocks</span>
                        <a href="wishlist.html" className="wishlist"><i className="fa-regular fa-heart" /></a>
                        <a href="assets/images/portfolio/06.webp" className="gallery-image">
                          <img src="assets/images/icon/image.svg" alt />
                          7
                        </a>
                      </div>
                      <span className="price">14,000$</span>
                      <div className="content-area">
                        <h6 className="title cw"><a >Ford Mustang Convertible</a>
                        </h6>
                        <ul className="feature-area">
                          <li>
                            <img src="assets/images/portfolio/feature-icon/01.svg" alt />
                            100 Miles
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/02.svg" alt />
                            Petrol
                          </li>
                          <li>
                            <img src="assets/images/portfolio/feature-icon/03.svg" alt />
                            Autometic
                          </li>
                        </ul>
                        <div className="button-area">
                          <p className="cw">$400</p>
                          <a  className="rts-btn btn-primary radius-small">View
                            Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Area End */}
    
      {/* Counter Area Start */}
      {/* <section className="rts-counter-area jarallax">
        <div className="container">
          <div className="counter-inner">
            <div className="inner wow zoomIn" data-wow-delay=".2s" data-wow-duration="1s">
              <div className="icon">
                <img src="/assets/images/counter/icon-01.svg" width={74} alt />
              </div>
              <div className="text">
                <h3 className="title cw"><span className="counter">320</span><span>M</span></h3>
                <p className="desc">Cars For Sale</p>
              </div>
            </div>
            <div className="inner wow zoomIn" data-wow-delay=".4s" data-wow-duration="1s">
              <div className="icon">
                <img src="/assets/images/counter/icon-02.svg" alt />
              </div>
              <div className="text">
                <h3 className="title cw"><span className="counter">5500</span><span>+</span></h3>
                <p className="desc">Dealer Review</p>
              </div>
            </div>
            <div className="inner wow zoomIn" data-wow-delay=".6s" data-wow-duration="1s">
              <div className="icon">
                <img src="/assets/images/counter/icon-03.svg" alt />
              </div>
              <div className="text">
                <h3 className="title cw"><span className="counter">300</span><span>M</span></h3>
                <p className="desc">Verified User</p>
              </div>
            </div>
            <div className="inner wow zoomIn" data-wow-delay=".8s" data-wow-duration="1s">
              <div className="icon">
                <img src="/assets/images/counter/icon-04.svg" alt />
              </div>
              <div className="text">
                <h3 className="title cw"><span className="counter">10</span><span>M</span></h3>
                <p className="desc">Visitor Per Day</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Counter Area End */}
    {/* Why Choose Us Area Start */}
    <section style={{ backgroundColor: '#121212' }} className="rts-why-choose-us2 rts-section-gap">
  <div className="container">
    <div className="section-inner">
      <div className="row">
        {/* Text Content */}
        <div className="col-12 col-lg-6 order-1 order-lg-1">
          <div className="left-side-content">
            <div className="section-title-area">
              <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".8s">Why Choose Us</p>
              <h2 className="section-title mb-5 cw wow move-right">Why Choose <span>Us</span></h2>
              <p className="wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".8s">
                CAT is a revolutionary high-performance waterless eco-conscious car wash and care company committed to the health of this planet. We study, import, and provide high-quality car care services to preserve the sustainability factor making this world a better place to live in. Hozzo the professional car cleaning service provider for your car wash right at your doorstep.
              </p>
            </div>
            <ul className="why-choose-feature-list wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".8s">
              <li><i className="rt-icon-check-circle" />Value</li>
              <li><i className="rt-icon-check-circle" />Quality</li>
              <li><i className="rt-icon-check-circle" />Hygine</li>
              <li><i className="rt-icon-check-circle" />Convenient</li>
              <li><i className="rt-icon-check-circle" />Trusted by the Community</li>
              <li><i className="rt-icon-check-circle" />Comprehensive Service</li>
              <li><i className="rt-icon-check-circle" />Control</li>
            </ul>
          </div>
        </div>

        {/* Images */}
        <div className="col-12 col-lg-6 order-2 order-lg-2 mt-4 mt-lg-0">
          <div className="right-side-image text-center">
            <img style={{height:'40rem'}}  className="wow scaleIn m-2" data-wow-delay=".2s" data-wow-duration="1s" src="assets/images/category/before-after.jpg" width={308} alt="Before and After" />
            <img className="wow scaleIn m-2" data-wow-delay=".2s" data-wow-duration="1s" src="assets/images/category/interior.webp" width={308} alt="Interior Clean" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us Area End */}
      
     
      {/* Testimonials Area Start */}
      <section style={{backgroundColor:'#121212'}} className="rts-testimonials-area ">
        <div className="container">
          <div className="section-title-area2">
            <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".8s">Testimonial</p>
            <h2 className="section-title wow move-right cw">What Our <span>Clients</span> Say</h2>
          </div>
          <div className="testimonial-slider-inner mt--80">
            <div className="swiper testimonialSlider2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="review-wrapper2">
                    <ul className="star-rating">
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star-sharp-half-stroke" /></li>
                    </ul>
                    <p className="desc">
                    Care any time wash showed up right on time, and their mobile car wash was amazing. They were so detailed and professional, Highly recommend them for anyone looking for a convenient car wash experience in Kerala
                    </p>
                    <div className="author-area d-flex align-items-center">
                      <div className="image">
                      <FaUserAlt />  
                      </div>
                      <div className="text">
                        {/* <h6 className="title cw">Sarah Martinez</h6> */}
                        <p className="designation">SHAHID MOHAMMED</p>
                      </div>
                    </div>
                    <div className="quote"><img src="/assets/images/testimonials/quote.svg" alt /></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="review-wrapper2">
                    <ul className="star-rating">
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star-sharp-half-stroke" /></li>
                    </ul>
                    <p className="desc">
                     the cat was convenient, and the pressure wash service arrived exactly as scheduled. I'm really impressed with how clean my car is. The service was excellent.
                    </p>
                    <div className="author-area d-flex align-items-center">
                      <div className="image">
                      <FaUserAlt />  
                      </div>
                      <div className="text">
                        {/* <h6 className="title cw">Jonathon Doe</h6> */}
                        <p className="designation">Santhosh Jose</p>
                      </div>
                    </div>
                    <div className="quote"><img src="/assets/images/testimonials/quote.svg" alt /></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="review-wrapper2">
                    <ul className="star-rating">
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star-sharp-half-stroke" /></li>
                    </ul>
                    <p className="desc">
                    CAT gave my car a showroom shine — right at home! Super professional, eco-friendly, and always on time.                    </p>
                    <div className="author-area d-flex align-items-center">
                      <div className="image">
                      <FaUserAlt />  
                      </div>
                      <div className="text">
                        {/* <h6 className="title cw">Michael Dam</h6> */}
                        <p className="designation">Poul vargheese</p>
                      </div>
                    </div>
                    <div className="quote"><img src="/assets/images/testimonials/quote.svg" alt /></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="review-wrapper2">
                    <ul className="star-rating">
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star-sharp-half-stroke" /></li>
                    </ul>
                    <p className="desc">
                    Great experience.. Amazing service at very affordable price.. It's been a great experience booking through  as per our convenience and the on time delivery of service. Thanks CAT
                    </p>
                    <div className="author-area d-flex align-items-center">
                      <div className="image">
                      <FaUserAlt />  
                      </div>
                      <div className="text">
                        {/* <h6 className="title cw">Jonathon Doe</h6> */}
                        <p className="designation">Shreya Santhosh</p>
                      </div>
                    </div>
                    <div className="quote"><img src="/assets/images/testimonials/quote.svg" alt /></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="review-wrapper2">
                    <ul className="star-rating">
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star" /></li>
                      <li><i className="rt-icon-star-sharp-half-stroke" /></li>
                    </ul>
                    <p className="desc">
                    I am impressed with my 1st experience of getting my car washed at my doorstep. This avoids driving to a washing station and waiting time. Would like to use in future too. They're the best doorstep car wash service in kerala for sure
                    </p>
                    <div className="author-area d-flex align-items-center">
                      <div className="image">
                      <FaUserAlt />                      </div>
                      <div className="text">
                        <p className="designation">Fara Favas</p>
                      </div>
                    </div>
                    <div className="quote"><img src="/assets/images/testimonials/quote.svg" alt /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination-4" />
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* App Download Area Start */}
      {/* <section className="rts-app-download-area rts-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="left-side-content">
                  <div className="section-title-area">
                    <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration=".8s">App Download</p>
                    <h2 className="section-title cw wow move-right">Download Our App Today For <span>IOS</span> and <span>Android</span></h2>
                  </div>
                  <p className="desc cg wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".8s">Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience.</p>
                  <div className="button-area">
                    <a href="#">
                      <img src="/assets/images/about/app-store.svg" alt />
                    </a>
                    <a href="#">
                      <img src="/assets/images/about/play-store.svg" alt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-change">
                <div className="right-side-image wow scaleOut" data-wow-delay=".5s" data-wow-duration="1s">
                  <img src="/assets/images/about/app_img.webp" width={542} alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* App Download Area End */}
    </div>
  )
}

export default HomePage