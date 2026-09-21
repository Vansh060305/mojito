import React from 'react'
import Navbar from './components/Navbar'
import { gsap } from "gsap";
import About from './components/About'
import Hero from './components/Hero'
import Art from './components/Art'
import {ScrollTrigger, SplitText} from "gsap/all";
import Cocktails from './components/Cocktails';
import Menu from './components/Menu';
import Contact from './components/Contact';
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar/> 
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App