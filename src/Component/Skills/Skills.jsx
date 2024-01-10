import React from 'react'
import "./Skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
const Skils = () => {
  return (
    <section className='skills section' id="skills">
      <h2 className='section_title'>Skils</h2>
        <span className='section_subtitle'>My technical level</span>
        <div className='skills_container container grid'>
<Frontend/>
<Backend/>
        </div>
    </section>
  )
}

export default Skils