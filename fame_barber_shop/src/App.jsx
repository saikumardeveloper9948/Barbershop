import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import NewsArticles from './components/NewsArticles'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Address from './components/Address'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <div id="home" className="pt-16">
          <Hero />
        </div>
        <About />
        <div id="services" >
          <Services />
        </div>
        <WhyChooseUs />
        <div id="news" >
          <NewsArticles />
        </div>
        <div id="testimonials" >
          <Testimonials/>
        </div>
        <div id="faq" >
          <FAQ/>
        </div>
        <div id="" >
          <Address/>
        </div>
        
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App
