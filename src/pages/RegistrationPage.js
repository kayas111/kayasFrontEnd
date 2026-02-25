import { useState } from "react"
import { ToastAlert } from "./Functions"
export function RegistrationPage(){

    const[status,setStatus]=useState('')
    
    
    return (<div class="componentPadding">
      <div class='row'>
        <div class='col-md-3'></div>
        <div class='col-md-6'>
<div class="pageLabel">Create account</div>
<div class="pageDescription">Create an account with Kayas</div><p></p>
       
    <form method="post" id="freeRegistrationForm">
   
     <div class="mb-3">
     <div class="formInputLabel">Your name</div>
     <input type="text" class="form-control" autoComplete="off" name="name"  ></input>
   <br></br>
   <div class="formInputLabel">Description, word or phrase (Optional)</div>
   <textArea rows="2" type="text" class="form-control" autoComplete="off" name="institution"  ></textArea>
   <br></br><div class="formInputLabel">WhatsApp contact</div>
   <input type="text" class="form-control" autoComplete="off" name="contact" ></input>
   <br></br> 
   
   <div class="formInputLabel">Email</div>
   <input type="text" class="form-control" autoComplete="off" name="email" ></input>
  
   <br></br>
   <div class="formInputLabel">Password (atleast 5 characters)</div>
   <div style={{color:"red"}}>Capital letters and small letters can be mixed but please remember how you mix them.</div>
     <input type="text" class="form-control" autoComplete="off" name="pin" ></input>
  
     </div>
      <div class="status">{status}</div>
     <div style={{width:"100%"}} onClick={
      ()=>{
  

        if(Array.from(document.getElementById("freeRegistrationForm").name.value).length<2){

ToastAlert('toastAlert2','Enter a correct name',3000)

}
else if(Array.from(document.getElementById("freeRegistrationForm").contact.value.trim()).length<10||Array.from(document.getElementById("freeRegistrationForm").contact.value.trim()).length>10)
        {
          ToastAlert('toastAlert2','Enter contact of 10 digits e.g 0703852178',3000)
        }else if((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("freeRegistrationForm").email.value.trim()))==false)
        
        {
           
           ToastAlert('toastAlert2','Enter correct email address',3000)
        }
        else if(Array.from(document.getElementById("freeRegistrationForm").pin.value.trim()).length<5)
        {
          ToastAlert('toastAlert2','Password should be atleast 5 characters',3000)
        }
else{
  if(Array.from(document.getElementById("freeRegistrationForm").institution.value.trim()).length==0)
  {
    
    document.getElementById("freeRegistrationForm").institution.value=""
  }else{}
  setStatus("Please wait.......")
  
   fetch('/verifyUser',{
       method:"post",
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
contact:document.getElementById("freeRegistrationForm").contact.value,
pin:document.getElementById("freeRegistrationForm").pin.value.trim()       }) 
   }).then(res=>res.json()).then((resp)=>{
       if(resp.registered===false){
let payLoad={
  name:document.getElementById("freeRegistrationForm").name.value.trim(),
  institution:document.getElementById("freeRegistrationForm").institution.value.trim(),
  contact:document.getElementById("freeRegistrationForm").contact.value.trim(),
  email:document.getElementById("freeRegistrationForm").email.value.trim(),
  pin:document.getElementById("freeRegistrationForm").pin.value.trim()

 }

 

   fetch('/collection_kayasers_registerFree',{
       method:"post",
       headers:{'Content-type':'application/json'},
       body:JSON.stringify(payLoad)
   }) .then(resp=>{
       
   
       return resp.json()}).then(res=>{
        
     let kayaserDetailsObj=res
     setStatus("Creating account.....")
     
     

     //window.location.href=window.location.href
     document.getElementById("freeRegistrationForm").name.value=""
     document.getElementById("freeRegistrationForm").institution.value=""
   
   document.getElementById("freeRegistrationForm").contact.value=""
       document.getElementById("freeRegistrationForm").email.value=""
     document.getElementById("freeRegistrationForm").pin.value=""
     fetch(`/getTradingDetails/${kayaserDetailsObj.contact}`).then(res=>res.json()).then(resp=>{
;


     })
      
     window.location.href='/pages/homepage';
      
      
          })
      
      

       } else if(resp.registered===true){
        setStatus("You already have an account with Kayas.")
    } 
        else{
          setStatus("An error has occured as you tried to register. Please try again")
         
          }
      
   }
       

   )
 
 
}
      } 

     } class="btn btn-success"><span class="fa fa-user-plus"></span> Create account</div><p></p>
    
     </form>


        </div>
        <div class='col-md-3'></div>
      </div>
     
    
     </div>)
  }


export default RegistrationPage