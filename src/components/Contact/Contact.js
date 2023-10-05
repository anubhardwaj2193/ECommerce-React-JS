import React, { useRef } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';
import HeaderSite from '../UI/HeaderSite';

export default function App() {


    const nameRef = useRef('');
    const mailRef = useRef('');
    const phoneRef = useRef('')

    function submitHandler(event){


        event.preventDefault();
        const contactDetails = {

            name : nameRef.current.value,
            mail:mailRef.current.value,
            phone:mailRef.current.value
        }
           addMovieHandler(contactDetails)
        console.log(contactDetails)
    }

    async function addMovieHandler(data) {
        const response= await fetch('https://e-commerce-b807c-default-rtdb.firebaseio.com/contact.json',{
        method:'POST',
        body:JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }


    

  return (

    <React.Fragment>
  
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '400px',margin:'3rem'  }}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' ref={nameRef} />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' ref={mailRef} />
      <MDBInput type='tel' label='Phone Number' v-model='email' wrapperClass='mb-4' ref={phoneRef}/>

    

      <MDBBtn color='primary' block className='my-4' onClick={submitHandler}> 
        Send
      </MDBBtn>
    </form>

    </React.Fragment>
  );
}