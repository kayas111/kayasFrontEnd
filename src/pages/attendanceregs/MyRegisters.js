
import React, {useState,useEffect} from 'react'
import { ToastAlert,IsLoggedIn,SuspenseComponent, MessageComponent } from '../Functions';
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import {useCookies} from 'react-cookie'
import LoginPage from '../LoginPage';
import {Link} from 'react-router-dom';

export function MyRegisters(){
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[status,setStatus]=useState('')
    const[goToRegisterStatus,setGoToRegisterStatus]=useState('')
    let [arrayOfRegisters,setArrayOfRegisters]=useState([])
    const[showSuspenseComponent,setShowSuspenseComponent]=useState(true)

    let data=""
    const[myRegisters,setMyRegisters]=useState(<SuspenseComponent/>)

useEffect(()=>{
 if(cookies.user==undefined){}else{
  fetch('/getMyRegisters',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
      contact:parseInt(cookies.user.contact),
    })
  }).then(resp=>{
   return resp.json()}).then(resp=>{
   
  if(resp.length===0){
  setArrayOfRegisters([])
  ToastAlert('toastAlert2',"You don't have any contact registers. Please create one",4000)
  setTimeout(()=>{
    window.location.href='/pages/attendanceregs/createattendanceregister'
  },5000)
  
  }else{
    
  resp.reverse()
  setArrayOfRegisters(resp)
  setShowSuspenseComponent(false)
  
  
  
  }
  
      
     
      })
 }
},[])
    
     

   
     return(
      <div class="componentPadding">
 

{
  (()=>{

    if((cookies.user)==undefined){
           
          return(<div>
            
            <div class="pageLabel">Send an SMS message to many contacts at once.</div>
      <div class="pageDescription">Create a register and save contacts to that register. You'll be able to send an SMS message to all those contacts at once. You can also make quick phones calls to all the contacts.</div>
<p></p><p></p>
          <MessageComponent message="You need to login" /></div>)    
      
      }else{
      
      return(<div>
        
        
        <div id="myregisters" class="pageLabel">My contact registers</div>
 <AttendenceRegisterNav/><p></p>
          

        <div style={{paddingTop:"7px"}}class="row">
          
          {


(()=>{
return( arrayOfRegisters.map((register)=>{
 return(
   <div class='col-sm-6 col-md-3'>
     <Link to={`/pages/attendanceregs/${register.contact}/${register.registerId}`}
     >
 <div class="divContainer1">
 <div  class="divContainer1Inner">
 <div class="bold" >{register.registerTitle}</div>
 <div class='light'>{register.attendees.length} contacts</div>
 </div>
 </div>
 
 
     </Link>
   </div>
 )
 
 }


 
 )
 
 )




})()
 
} <p></p>
          {showSuspenseComponent && <SuspenseComponent/>}





          </div>
  
   
   
  
  
   
     
      
              
     
      </div>)
      
      }

  })()
}




      </div>
     )       
          
  }

  export default MyRegisters