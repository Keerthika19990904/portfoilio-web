import React from 'react';
import "./About.css";
import CV from "../../CV/keerthi-cv.pdf.pdf";
import Info from './Info';
const About = () => {
  return (
    <section className='about sction' id="about">
        <h2 className='section_title'>About Me</h2>
        <span className='section_subtitle'>My introduction</span>
        <div className='about_data'>
            <Info/>
            <p className='about_scription'>Frontn veloper,I create wb pages with UI/UX user 
            interface, I have years of experience and many clients are
             happy with the projects carried out.</p>
             <a download="" href={CV} className='button button--flex'>
                Download CV
             </a>
        </div>
    </section>
  )
}

export default About