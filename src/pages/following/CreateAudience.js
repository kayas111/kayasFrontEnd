import { ToastAlert,IsLoggedIn, Post } from '../Functions';
import {useCookies} from 'react-cookie'
import {LoginPage} from '../LoginPage'
import { useState } from 'react';


export function CreateAudience(){


const [cookies,setCookie,removeCookie]=useCookies(['user'])
let [status,setStatus]=useState('')


if(IsLoggedIn(cookies)==true){
    
    return(
    
        <div class='componentPadding'>
        <div class="row">

<div class="col-md-3"></div>
<div class="col-md-6">
    <div class="pageLabel">Create new audience</div>
    <div class="pageDescription">Create a name for your new audience</div>
<p></p>
    <form method="post" id="CreateAudienceForm" action="#">
      
       <div class="mb-3">
        <div class="formInputLabel">Name</div>
       <textarea rows="2" type="text" class="form-control" autoComplete="off" name="audienceName" ></textarea>
         </div>
       
       <div class="status">{status}</div>
       <div  onClick={
         ()=>{

let audienceName=document.getElementById("CreateAudienceForm").audienceName.value.trim()    
  if(Array.from(audienceName).length<1){
    ToastAlert('toastAlert2','Create a name for the new audience',3000)
              
    
    }  
    else{
           
      setStatus("Creating............")
       
  let payLoad={name:cookies.user.name,contact:cookies.user.contact,audienceName:audienceName}
  console.log(payLoad)
        
           
        
      
    }
           


         }
       } class="btn btn-success fullButtonWidth" >Create audience</div>
      
       </form>

</div>
<div class="col-md-3"></div>

        </div>
    </div>
        
        )
}else{
    return(<div>
        <LoginPage/>
    </div>)
}






} export default CreateAudience