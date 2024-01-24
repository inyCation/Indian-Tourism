import { useState } from 'react'
import Header from './components/Hero'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss"
import Second from './components/Second'



import "./media.scss"
import Quotes from './components/Quotes'
import Footer from './components/Footer'
import Cards from './components/Cards'
function App() {


  return (
    <>
      <Header />
      <Second />
      <hr />
      <Quotes quote={"Time spent in India has an extraordinary effect on one. It acts as a barrier that makes the rest of the world seem unreal."} desc={"Tahir Shah"} />
      <hr />

      <Carousel>
        <div >
          <img src="../src/assets/monument.jpg"/>
          <p className='legend' > Explore </p>
        </div>
        <div>
        <img src="../src/assets/naturedd.avif"/>
          <p className='legend' > Monument </p>
        </div>
        <div >
          <img src="../src/assets/indiaGate.avif"/>
          <p className='legend' > IndiaGate </p>
        </div>
        <div>
        <img src="../src/assets/monumentt.jpg"/>
          <p className='legend' > Monument </p>
        </div>


      </Carousel>

    <hr />
      <Quotes quote={"Waking up in India is like waking up to life itself"} desc={"Reymond Page"} />
    <hr />

      <div className="cards-app">

        <Cards name={"lorem"} comment={"amazing place"} />
        <Cards name={"lorem"} comment={"amazing place"} />
        
        <Cards name={"lorem"} comment={"amazing place"} /><Cards name={"lorem"} comment={"amazing place"} />
      </div>

      <Footer />
    </>
  )
}

export default App
