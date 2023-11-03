import React from 'react'
import "./index.css"
import {SiHtml5,SiCss3,SiJavascript,SiPython,SiReact,SiNodedotjs,SiBootstrap,SiPostman,SiGithub} from "react-icons/si"

function About() {
  return (
    <div className='pt-4 pb-4'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1 className='text-success'>About Me</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6'>
           <img src="WhatsApp Image 2023-02-10 at 12.43.22 PM.jpeg" className='about-pic' />
        </div>
        <div className='col-12 col-md-6'>
           <h5 className="text-secondary">My Experience</h5>
           <p className='text-dark'>I am a FullStack Developer having hands on experience 
            in Designing and Developing of Websites and manual Testing of API's using <span>PostMan</span> and 
            Deploying them in <span>Firebase</span> and <span>Vercel</span> 
           </p>
           <div className='pro-con p-4'>
            <div className='con-1'>
              <h1 className='con-head'>10 + </h1>
              <p className='con-para'>Projects</p>
           </div>
           <div className='con-1'>
              <h1 className='con-head'>3000 +</h1>
              <p className='con-para'>Learning hours </p>
           </div>
           <div className='con-1'>
              <h1 className='con-head'>300 +</h1>
              <p className='con-para'>Coding Problems</p>
           </div>
           </div>
        </div>
      </div>
    </div>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
          <h4 className='text-secondary'>My Skills</h4>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiHtml5 className='skill-icon' />
            <p className='skill-para'>HTML</p>
            </div>
        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiCss3 className='skill-icon' />
            <p className='skill-para'>CSS</p>
          </div>
        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiJavascript className='skill-icon' />
            <p className='skill-para'>JAVASCRIPT</p>
          </div>
        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiPython className='skill-icon' />
            <p className='skill-para'>PYTHON</p>
            </div>
        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiReact className='skill-icon' />
            <p className='skill-para'>REACT</p>
          </div>
        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiNodedotjs className='skill-icon' />
            <p className='skill-para'>NODE</p>
          </div>
        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiBootstrap className='skill-icon' />
            <p className='skill-para'>BOOTSTRAP</p>
          </div>
        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiPostman className='skill-icon' />
            <p className='skill-para'>POSTMAN</p>
          </div>
        </div>

        <div className='ol-12 col-md-6 col-lg-4'>
          <div className='skill-con'>
            <SiGithub className='skill-icon' />
            <p className='skill-para'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
