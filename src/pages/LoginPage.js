import { useState } from "react"
import { ToastAlert,VerifyRegistrationAndPin } from "./Functions"
import { setCookieOptionsObj} from '../Variables';
import {RegistrationPage} from "./RegistrationPage"
import {useCookies} from 'react-cookie'
export function LoginPage(){
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    let [status, setStatus]=useState('')
    return (
    <div>
    <div class="componentPadding">
          <div class='row'>
        <div class='col-md-3'></div>
        <div class='col-md-6'>
<div class="pageLabel">You need to log in</div>
<div class="pageDescription">Log in to proceed</div><p></p>
         
    <form method="post" id="loginForm">
    <div class="mb-3">
 
   <br></br><div class="formInputLabel">Your contact</div>
   <input type="text" class="form-control" autoComplete="off" name="contact" ></input>

  
   <br></br>
   <div class="formInputLabel">Enter your Kayas PIN that you created while creating an account with Kayas</div>
     <input type="password" class="form-control" autoComplete="off" name="pin" ></input>
  
     </div><p></p>
      <div class="status">{status}</div>
     <div onClick={
      ()=>{
  if(Array.from(document.getElementById("loginForm").contact.value.trim()).length<10||Array.from(document.getElementById("loginForm").contact.value.trim()).length>10)
        {
          ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
        }
        else if(Array.from(document.getElementById("loginForm").pin.value).length<5||Array.from(document.getElementById("loginForm").pin.value).length>5)
        {
          ToastAlert('toastAlert2','Enter PIN of 5 digits e.g. 12345',3000)
        }
else{

setStatus('Please wait........')
  
let contact=document.getElementById("loginForm").contact.value,pin=document.getElementById("loginForm").pin.value
 VerifyRegistrationAndPin(contact.trim(),pin.trim()).then(resp=>{
    
    if(resp.registered===false){
     ToastAlert('toastAlert2','You have no account with Kayas. Tap menu and create an account',3000)
    }else
    
       if(resp.pin===false){
         
         ToastAlert('toastAlert2','Incorrect PIN',3000)
       }else{
         let user={name:resp.details.name,contact:resp.details.contact,role:'user'}
         setCookie('user',user,setCookieOptionsObj)
       setStatus('Logging in......')
       window.location.href=window.location.href
      //  document.getElementById("loginForm").pin.value=""
      //  document.getElementById("loginForm").contact.value=""
       
       }
     })
    


 
}
      } 

     } class="btn btn-success fullButtonWidth"> Log in</div><p></p>
    
     </form>
<p></p>


        </div>
        <div class='col-md-3'></div>
      </div>
     
      
    </div>
    <RegistrationPage/>
    </div>
    
    )
}

export default LoginPage