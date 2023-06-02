import React , {useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import {Form,Button,FormGroup,Label, Input} from 'reactstrap';
import './index.css'

function Contact() {

  const form = useRef();
  const [usermail,setEmail] = useState('')
  const changeEmail = (e) => {
    setEmail(e.value)
  } 
  const checkEmail = (e) => {
    console.log(usermail);
    if (usermail.endsWith('@gmail.com')) {
        e.target.valid = true
        console.log(true);
    }
    else{
      e.target.invalid=true
      console.log(false);
    }
  }
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
    
      <FormGroup floating className='col-12 mt-3 mb-2'>
        <Input 
          type="text"
          id="username"
          placeholder="Enter your Name"
          name="user_name"
        /> 
        <Label for="username">
            Name:
        </Label>
      </FormGroup>
      <FormGroup floating className='col-12 mt-3 mb-2'>
        <Input 
          type="email"
          id="useremail"
          placeholder="Enter your email"
          name="user_email"
          value={usermail}
          onChange={changeEmail}
          onBlur={checkEmail}
        /> 
        <Label for="useremail">
            Email:
        </Label>
      </FormGroup>
      <FormGroup floating className='col-12 mt-3 mb-2'>
        <Input 
          type="textarea"
          id="usermsg"
          placeholder="Enter your msg"
          name="user_msg"
        /> 
        <Label for="user-msg">
            Suggestions:
        </Label>
      </FormGroup>
      <Button type="submit" value="Send"> Submit </Button>
    
    </form>
      </div>
    </div>
  )
}

export default Contact
