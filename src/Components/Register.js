import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Register(){


    let myRef = useRef(null);
    let myRef1 = useRef(null);

   const [registerForm, setRegisterForm] = useState({
       name: '',
       surname: '',
       country: '',
       city: '',
       username: '',
       password: '',
       email: ''
   });

   function HandleForm(event){
    const target = event.target;
       setRegisterForm(function(curr){
           return {
               ...curr,
               [target.name]: target.value
           }
       });
   }

   useEffect(function(){
       if(registerForm.name){
          console.log(registerForm.name)
       }
       if(registerForm.surname){
        console.log(registerForm.surname);
    }
    if(registerForm.country){
        console.log(registerForm.country);
    }
    if(registerForm.username){
        if(registerForm.username === 'H'){
            myRef.current.setAttribute('style', 'display: block;');
        }else{
            myRef.current.setAttribute('style', 'display: none;');
        }
    }else{
        myRef.current.setAttribute('style', 'display: none;');
    }
    if(registerForm.password){
        if(registerForm.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
            myRef1.current.setAttribute('style', 'display: none;');
        }else{
            myRef1.current.setAttribute('style', 'display: block;');
        }
    }else{
        myRef1.current.setAttribute('style', 'display: none;');
    }
    if(registerForm.city){
        console.log(registerForm.city);
    }
    if(registerForm.email){
        console.log(registerForm.email);
    }
   }, [registerForm])

    return(
        <div className="register">
        <form className="register-form">
         <span className="reg-form-title"><h1>Register new account</h1></span>
         <div className="name-surname">
         <h4>Name</h4>
         <h4>Surname</h4>
         </div>
         <div className="name-surname-input">
         <input placeholder="name" name="name" value={registerForm.name} onChange={HandleForm}/>
         <input placeholder="surname" name="surname" value={registerForm.surname} onChange={HandleForm}/>
         </div>
         <div className="country-city">
         <h4>Country</h4>
         <h4>City</h4>
         </div>
         <div className="country-city-input">
         <input placeholder="country" name="country" value={registerForm.country} onChange={HandleForm}/>
         <input placeholder="city" name="city" value={registerForm.city} onChange={HandleForm}/>
         </div>
         <div className="login-password">
         <h4>Username</h4>
         <h4>Password</h4>
         </div>
         <div className="login-password-input">
         <input placeholder="username" name="username" value={registerForm.username} onChange={HandleForm}/>
         <div className="inv-username" ref={myRef} style={{display: 'none'}}>username already taken!</div>
         <div className="inv-password" ref={myRef1} style={{display: 'none'}}>password must contain('A-Z' amd '0-9')!</div>
         <input placeholder="password" type='password' name="password" value={registerForm.password} onChange={HandleForm}/>
         </div>
         <h4>Email</h4>
         <input className="email-input" placeholder="email" name="email" value={registerForm.email} onChange={HandleForm}/>
         <div className="inv-email">email already registered!</div>
         <button type="button">Register</button>
         <hr/>
         <Link className="reg-login" to='/login'>Login</Link>
        </form>
        </div>
    )
}