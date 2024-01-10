import React from 'react'
import "./Services.css";
const Services = () => {
  return (
    <section className='services section' id="services">
      <h2 className='section_title'>Services</h2>
        <span className='section_subtitle'>What i offer</span>
        <div className='services_container container grid'>
            <div className='services_content'>
                <div>
                    <i className='uil uil services_icon'></i>
                    <h3 className='services_title'></h3>
                </div>
                <span className='services_button'>View More 
                <i className='uil uil-arrow-right services_button-icon'></i></span>
                <div className="services_modal">
                    <div className='services_modal-content'>
                        <i className='uil uil-tims services_modal-close'></i>
                        <h3 className='services_modal-title'></h3>
                        <p className='services_modal-description'>Service with more than 
                        3 years of experience.Providing quality work to clients and companies. </p>
                        <ul className='services_modal-services grid'>
                            <li className='services_modal-service'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>I develop the user interface</p>
                            </li>
                            <li className='services_modal-service'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>Web page development.</p>
                            </li>
                            <li className='services_modal-service'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>I create UX element interations.</p>
                            </li>
                            <li className='services_modal-service'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>I position your company brand.</p>
                            </li>
                            <li className='services_modal-service'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            </section>
  )
}

export default Services