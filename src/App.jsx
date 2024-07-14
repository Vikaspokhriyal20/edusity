import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Program/Programs'
import Tilte from './Components/Title/Tilte'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

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
        <Campus />
        <Tilte subTitle='Testimonials' title='What Student says' />
        <Testimonial />
        <Tilte subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer/>
      </div>
    </div>
  )
}

export default App
