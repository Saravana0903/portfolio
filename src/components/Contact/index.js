import React , {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './index.css'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6gae6x', 'template_ttcxop9', form.current, 'I2OJob87mMSBs4MoA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='container'>
      <div className='row'>
      <form ref={form} onSubmit={sendEmail}>
      <label className='col-12 mt-4'>Name</label>
      <input type="text" className='col-12 mt-2' name="user_name" />
      <label className='col-12 mt-4'>Email</label>
      <input type="email" className='col-12 mt-2' name="user_email" />
      <label className='col-12'>Message</label>
      <textarea name="message" className='col-12' />
      <input type="submit" value="Send" />
    </form>
      </div>
    </div>
  )
}

export default Contact
