import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Program/Programs'
import Tilte from './Components/Title/Tilte'
import About from './Components/About/About'
import Compus from './Components/Compus/Compus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Tilte subTitle='Our Program' title='What we offer' />
        <Programs />
        <About />
        <Tilte subTitle='Gallery' title='Compus Photos' />
        <Compus />
        <Tilte subTitle='Testimonials' title='What Student says' />
        <Testimonial />
        <Tilte subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
      </div>
    </div>
  )
}

export default App
