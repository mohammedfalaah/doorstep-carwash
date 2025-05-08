import React, { useEffect } from 'react'
import WhatsappChat from '../utils/WhatsappChat'

const ServicePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
       <section className="rts-service-area  rts-section-gap">
  <div className="container">
    <div className="section-title-area2">
      <p className="sub-title wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">Our Service</p>
      <h2 className="section-title  wow move-right">Our Car <span>Service</span></h2>
    </div>
    <div className="section-inner">
      <div className="service-wrapper-2">
        <span className="number">01</span>
        <div className="content">
          <h5 className="title ">Foam Wash</h5>
          <p className="desc">Our foam wash service ensures a thorough and gentle cleaning, removing dirt and grime without causing any damage to the paintwork.</p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img style={{height:'270px'}} src="/assets/images/service/service-03.webp" width={396} alt />
          </a>
        </div>
        
      </div>
      <div className="service-wrapper-2">
        <span className="number">02</span>
        <div className="content">
          <h5 className="title ">Steam Services</h5>
          <p className="desc">We use advanced steam cleaning technology to sanitize and deodorize your vehicle, eliminating harmful bacteria and ensuring a fresh and clean interior.</p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/FEATURE_IMAGE.jpg" width={396} alt />
          </a>
        </div>
       
      </div>
      <div className="service-wrapper-2">
        <span className="number">03</span>
        <div className="content">
          <h5 className="title ">Interior cleaning</h5>
          <p className="desc">Our interior cleaning service includes a meticulous cleaning of seats, carpets, and upholstery, ensuring your car's interior is spotless and inviting.</p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/int.jpg" width={396} alt />
          </a>
        </div>
      
      </div>
      {/**/}
      <div className="service-wrapper-2">
        <span className="number">04</span>
        <div className="content">
          <h5 className="title ">Waxing</h5>
          <p className="desc">We offer professional waxing services to protect your car's paint and enhance its shine, providing a long-lasting, glossy finish.</p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/wax.jpg" width={396} alt />
          </a>
        </div>
      
      </div>
      <div className="service-wrapper-2">
        <span className="number">05</span>
        <div className="content">
          <h5 className="title ">Polishing</h5>
          <p className="desc"> Our polishing service removes minor scratches and imperfections, restoring your car's original shine and luster.</p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/polishing.jpg" width={396} alt />
          </a>
        </div>
      
      </div>
      <div className="service-wrapper-2">
        <span className="number">06</span>
        <div className="content">
          <h5 className="title ">Ceramic Cotting</h5>
          <p className="desc"> We provide ceramic coating services to protect your car's exterior from environmental damage, ensuring a durable and high-gloss finish.</p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/ceramic.webp" width={396} alt />
          </a>
        </div>
      
      </div>
      <div className="service-wrapper-2">
        <span className="number">07</span>
        <div className="content">
          <h5 className="title ">Leather Cleaning</h5>
          <p className="desc"> Our leather cleaning service maintains and restores the beauty of your car's leather seats, preventing cracking and fading. </p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/leather.webp" width={396} alt />
          </a>
        </div>
      
      </div>
      <div className="service-wrapper-2">
        <span className="number">08</span>
        <div className="content">
          <h5 className="title ">Roof Cleaning</h5>
          <p className="desc"> Our leather cleaning service maintains and restores the beauty of your car's leather seats, preventing cracking and fading. </p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/roof.jpg" width={396} alt />
          </a>
        </div>
      
      </div>
      <div className="service-wrapper-2">
        <span className="number">08</span>
        <div className="content">
          <h5 className="title ">Dashboard Cleaning</h5>
          <p className="desc"> Our dashboard cleaning service ensures your car's dashboard is free from dust and grime, providing a clean and hygienic environment. </p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/dashboard.webp" width={396} alt />
          </a>
        </div>
      
      </div>
      <div className="service-wrapper-2">
        <span className="number">09</span>
        <div className="content">
          <h5 className="title ">Dashboard Polishing</h5>
          <p className="desc"> We polish your car's dashboard to enhance its appearance and protect it from UV damage. </p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/polish.webp" width={396} alt />
          </a>
        </div>
      
      </div>
      <div className="service-wrapper-2">
        <span className="number">10</span>
        <div className="content">
          <h5 className="title ">AC Steaming</h5>
          <p className="desc">Our AC steaming service cleans and disinfects your car's air conditioning system, ensuring fresh and clean air circulation. </p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/ac.png" width={396} alt />
          </a>
        </div>
      
      </div>
      <div className="service-wrapper-2">
        <span className="number">10</span>
        <div className="content">
          <h5 className="title ">Headlight Restoration</h5>
          <p className="desc"> We restore your car's headlights to their original clarity, improving visibility and safety while driving at night. </p>
        </div>
        <div className="image-area">
          <a href="service-details.html">
            <img src="assets/images/category/head.jpg" width={396} alt />
          </a>
        </div>
      
      </div>
    </div>
   
  </div>
</section>
<WhatsappChat />

    </div>
  )
}

export default ServicePage