import React from 'react'
import './index.css'

function Project() {
  return (
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-12 mt-4 col-lg-6'>
                <img src = "food.png" className='pro-pic' />
        </div>
        <div className='col-12 mt-4 col-lg-6 d-flex flex-column justify-content-center'>
             <h3 className='project-head'>Restaurant Page</h3>
             <p className='project-para'>Developed a Responsive website for the interaction of users with Restaurant, to Order their desired items.</p>
             <p>technologies used:- <span className='text-success'>HTML, CSS , BOOTSTRAP</span></p>
             <p>Project URL: <a href="https://saravanafood.ccbp.tech" target="_blank">https://saravanafood.ccbp.tech</a></p>
        </div>
        <div className='col-12 mt-4 col-lg-6'>
              <img src = "ecom.png" className='pro-pic' />
        </div>
        <div className='col-12 mt-4 col-lg-6 d-flex flex-column justify-content-center'>
              <h3 className='project-head'>Ecommerce Website</h3>
              <p className='project-para'>Developed a Responsive website for the interaction of users with the best possible market out there, to Order their desired products in variety of brands.</p>
             <p>technologies used:- <span className='text-success'>HTML, CSS , BOOTSTRAP</span></p>
             <p>Project URL: <a href="https://saravanaecom.ccbp.tech" target="_blank">https://saravanaecom.ccbp.tech</a></p>
        </div>
        <div className='col-12 mt-4 col-lg-6'>
              <img src = "appstore.png" className='pro-pic' />
        </div>
        <div className='col-12 mt-4 col-lg-6 d-flex flex-column justify-content-center'>
              <h3 className='project-head'>App store</h3>
              <p className='project-para'>Developed a React Responsive website for the App store where users can search for their desired apps on the go ! just by entering the name of the apps</p>
             <p>technologies used:- <span className='text-success'>REACT JS,REST API,HTML, CSS , BOOTSTRAP</span></p>
             <p>Project URL: <a href="https://vedaappstore.ccbp.tech" target="_blank">https://vedaappstore.ccbp.tech</a></p>
        </div>
        <div className='col-12 mt-4 col-lg-6'>
              <img src = "todo.png" className='pro-pic' />
        </div>
        <div className='col-12 mt-4 col-lg-6 d-flex flex-column justify-content-center'>
              <h3 className='project-head'>Todo App</h3>
              <p className='project-para'>Developed a  Responsive website for maintaing a todolist where users can create their own task which they are planning to accomplish on the day </p>
             <p>technologies used:- <span className='text-success'>REACT JS,HTML, CSS , BOOTSTRAP</span></p>
              <p>Project URL: <a href="https://saravanatodoapp.ccbp.tech" target="_blank">https://saravanatodoapp.ccbp.tech</a></p>
        </div>
        <div className='col-12 mt-4 col-lg-6'>
              <img src = "currency.png" className='pro-pic' />
        </div>
        <div className='col-12 mt-4 col-lg-6 d-flex flex-column justify-content-center'>
              <h3 className='project-head'>Cryptocurrency App</h3>
              <p className='project-para'>Developed a React Responsive website for constant monitoring of crypto currency values using Rest API , where users can analyse the rise and fall of currency value in dollars</p>
             <p>technologies used:- <span className='text-success'>REACT JS,Rest API,HTML, CSS , BOOTSTRAP</span></p>
              <p>Project URL: <a href="https://vedacurrencies.ccbp.tech" target="_blank">https://vedacurrencies.ccbp.tech</a></p>
        </div>
      </div>
    </div>
  )
}

export default Project
