import React from 'react'
import "./Home.css";
import Social from './Social';
import Data from './Data';
const Home = () => {
  return (
    <section className='home section' id="home">
        <div className='home_container grid'>
            <div className='home_content grid'>
                <Social/>
                <Data/>
                <div className='home_img'>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home