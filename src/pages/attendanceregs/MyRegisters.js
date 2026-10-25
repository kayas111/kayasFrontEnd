
import React, {useState,useEffect} from 'react'
import {MessageComponent } from '../Functions';
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import {CreateAttendanceRegister} from './CreateAttendanceRegister';
import {useCookies} from 'react-cookie'

import {Link} from 'react-router-dom';

export function MyRegisters(){
  const [cookies]=useCookies(['user'])
    
    
    let [arrayOfRegisters,setArrayOfRegisters]=useState()
    

    
    

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
   resp.reverse()
    setArrayOfRegisters(resp)
      
     
      })
 }
},[])
    
     

   
     return(
      <div class="componentPadding">
 


<div class="row">
  <div class="col-md-3"></div>
  <div class="col-md-6">
  {
  (()=>{

    if((cookies.user)==undefined){
           
          return(<div>
            
            <div class="pageLabel">Send one SMS message to many contacts at once.</div>
      <div class="pageDescription">Create a register and save contacts to that register. You'll be able to send an SMS message to all those contacts at once. You can also make quick phones calls to all the contacts.</div>
<p></p><p></p>
          <MessageComponent message="Use the login button at the top and first log in." /></div>)    
      
      }else{
      
      return(<div>
        
        
        <div id="myregisters" class="pageLabel">My contact registers</div>
 <AttendenceRegisterNav/><p></p>
          

        <div style={{paddingTop:"7px"}}class="row">
          
          {


(()=>{

 if(arrayOfRegisters){




  if(arrayOfRegisters.length==0){
return(<>

<div>
<MessageComponent message="You have no contact registers. Please create atleast one below."/> <p></p>
<div class="row">
  <div class="col-md-3"></div>
  <div class="col-md-6">

<Link to={`/pages/attendanceregs/createattendanceregister`}><div class="btn btn-sm btn-success fullButtonWidth">Create contacts register</div></Link>
</div>
  <div class="col-md-3"></div>
</div>
</div>
</>)


  }else{



    return( arrayOfRegisters.map((register)=>{
      return(
        <div>
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


  }


 }else{
return(<MessageComponent message="Loading, please wait....."/>)
 }



})()
 
}
          





          </div>
  
   
   
  
  
   
     
      
              
     
      </div>)
      
      }

  })()
}
  </div>
  <div class="col-md-3"></div>
</div>



      </div>
     )       
          
  }

  export default MyRegisters