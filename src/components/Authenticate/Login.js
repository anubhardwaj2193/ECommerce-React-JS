import { useState, useRef,useContext } from 'react';
import { json ,useNavigate } from 'react-router-dom';
import CartContext from '../store/CartContext';


import classes from './login.module.css';


const Login = ()=>{
  const navigate=  useNavigate();

   const authCTX= useContext(CartContext);

    const [isLoading,setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

const sumitHandler = (event)=>{

    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

 setIsLoading(true);
fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIenHPw5lbksFwuEDuEjs87KUx_BsK8pQ',
{
    method:'POST',
    body: JSON.stringify({
        email: enteredEmail,
        password:enteredPassword,
        returnSecureToken: true
    }),

    headers:{
        'Content-Type': 'application/json'
    }

    
}

)
.then(res=>{
setIsLoading(false);
    if(res.ok){
 console.log(res)
return res.json();
    }
    else{

        res.json().then(data=>{
            let errorMessage = 'Authentication Failed';
          

        
          throw new Error(errorMessage)
        });
    }
})
.then(data=>{
authCTX.login(data.idToken);
navigate('/store', { replace: true })
})
.catch(err=>{
    alert(err.message)
})
     
}
  
    return (
      <section className={classes.auth}>
        <h1>{'Login'}</h1>
        <form >
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && <button onClick={sumitHandler}
              type='button'>Login
            </button>}
            {isLoading && <p> Sending Request...</p>}
          </div>
        </form>
      </section>
    );


}


export default Login;