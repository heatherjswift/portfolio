import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`)
        } else {
          setErrorMessage('');
        }
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1>Contact Me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div className='my-1'>
          <label htmlFor='name' className='mx-1'>Name:</label>
          <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
        </div>
        <div className='my-1'>
          <label htmlFor='email' className='mx-1'>Email address:</label>
          <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
        </div>
        <div className='my-1'>
          <label htmlFor='message' className='mx-1'>Message:</label>
          <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;