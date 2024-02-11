import React from 'react'
import "./index.css"
import Carouselfile from "../Carouselfile"
import {BsFillCalendarMonthFill} from "react-icons/bs"
import {ImHome} from "react-icons/im"
import {SiGmail} from "react-icons/si"

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className='col-12 text-center'>
           <h1 className='welcome-msg text-success'>Welcome to my PortFolio</h1>
        </div>
      </div>
      <div className='row bg-dark home-con p-5'>
         <div className='col-12 order-1 order-md-2 col-md-6'>
             <Carouselfile />
         </div>
         <div className="col-12 order-2 order-md-1 col-md-6">
              <h1 className="home-head">
                I am <br />
                <span className="text-success">a FullStack</span> <span className="text-danger"> Dev</span> 🧑‍💻 😀 😄
                </h1>
                <a href="Saravana's_Resume_2024.pdf" download = "saravana_resume.pdf">
                  <button className="btn btn-outline-info">Download Resume</button>
                </a>

              <p className="text-light pt-5">I'm a Full Stack developer having demonstrated skills in React,Node and Express
              frameworks. I am an Electronics and Communication Engineer, doing minors in the Computer Sciences. 
              </p>
              <div className='my-info'>
                <div className='info-item'>
                  <BsFillCalendarMonthFill color="white" className="icon-home"/>
                  <p className='text-light mt-auto mb-auto'> 12-08-2003 </p>
                </div>
                <div className='info-item'>
                  <SiGmail color="white" className="icon-home"/>
                  <p className='text-light mt-auto mb-auto'>saravanaadiraju@gmail.com</p>
                </div>
                <div className='info-item'>
                  <ImHome color="white" className="icon-home"/>
                  <p className='text-light mt-auto mb-auto'>Rajahmundry,Andhra Pradesh</p>
                </div>
              </div>
         </div>
      </div>

    </div>
  )
}

export default Home

