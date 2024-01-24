import { useState } from 'react'
import Header from './components/Hero'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss"
import Second from './components/Second'
import Img2 from "../src/assets/monument.jpg";
import Img1 from "../src/assets/naturedd.avif";
import Img3 from "../src/assets/naturedd.avif";
import Img4 from "../src/assets/naturedd.avif";



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
          <img src={Img1}/>
          <p className='legend' > Explore </p>
        </div>
        <div>
        <img src={Img2} />
          <p className='legend' > Monument </p>
        </div>
        <div >
          <img src={Img3}/>
          <p className='legend' > IndiaGate </p>
        </div>
        <div>
        <img src={Img4}/>
          <p className='legend' > Monument </p>
        </div>


      </Carousel>

    <hr />
      <Quotes quote={"Waking up in India is like waking up to life itself"} desc={"Reymond Page"} />
    <hr />

      <div className="cards-app">

        <Cards name={"David"} comment={"Must Visit"} />
        <Cards name={"Satya"} comment={"Amazing place"} />
        
        <Cards name={"Ashutosh"} comment={"Environment A1"} /><Cards name={"Deep"} comment={"Must Visit"} />
      </div>

      <Footer />
    </>
  )
}

export default App
