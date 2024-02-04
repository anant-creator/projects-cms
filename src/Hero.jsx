import React from 'react';
import heroImg from './assets/hero.svg';


const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
          <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quod et natus! Nulla, architecto accusantium doloribus at quia cum culpa iusto laudantium quasi assumenda. Reiciendis repudiandae explicabo dignissimos modi nisi praesentium maiores fugiat dolorem quibusdam necessitatibus itaque aliquid ex, suscipit aspernatur quasi ipsum officia architecto a est voluptates sapiente ullam?
            </p>
          </div>
          <div className="img-container">
            <img src={heroImg} alt="woman with the browser"className='img' />
          </div>
        </div>
    </section>
  )
}

export default Hero