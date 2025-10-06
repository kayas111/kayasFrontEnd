import { ToastAlert,IsLoggedIn, Post } from '../Functions';
import {useCookies} from 'react-cookie'
import {LoginPage} from '../LoginPage'
import { useState } from 'react';


export function CreateFollowsCategory(){


const [cookies,setCookie,removeCookie]=useCookies(['user'])
let [status,setStatus]=useState('')


if(IsLoggedIn(cookies)==true){
    
    return(
    
        <div class='componentPadding'>
        <div class="row">

<div class="col-md-3"></div>
<div class="col-md-6">
    <div class="pageLabel">Create a follows category</div>
    <div class="pageDescription">Create a name for your new categroy</div>
<p></p>
    <form method="post" id="followsCategoryCreateForm" action="#">
      
       <div class="mb-3">
        <div class="formInputLabel">Name</div>
       <textarea rows="2" type="text" class="form-control" autoComplete="off" name="followsCategoryName" ></textarea>
         </div>
       
       <div class="status">{status}</div>
       <div  onClick={
         ()=>{


  
          
  if(Array.from(document.getElementById("followsCategoryCreateForm").followsCategoryName.value).length<1){
    ToastAlert('toastAlert2','Type a name for the new category',3000)
              
    
    }  
    else{
           
      setStatus("Creating............")
       
  
        
           
        
      
    }
           


         }
       } class="btn btn-success fullButtonWidth" >Create category</div>
      
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






} export default CreateFollowsCategory