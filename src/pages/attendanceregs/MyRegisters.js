
import React, {useState,useEffect} from 'react'
import { ToastAlert,IsLoggedIn,SuspenseComponent, MessageComponent } from '../Functions';
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
  
  // setMyRegisters(
  // resp.map((register)=>{
  // return(
  //   <div class='col-sm-6 col-md-3'>
  //     <Link to={`/pages/attendanceregs/${register.contact}/${register.registerId}`}
  //     >
  
  // <div class="divContainer1">
  // <div  class="divContainer1Inner">
  // <div class="bold" >{register.registerTitle}</div>
  // <div class='light'>{register.attendees.length} contacts</div>
  // </div>
  // </div>
  
  
  //     </Link>
  //   </div>
  // )
  // })
  
  // )
  
  }
  
      
     
      })
},[])
    
     
    if(IsLoggedIn(cookies)==true){
           
          return(<div>
        
            <div style={{padding:"5px"}}>
              
            <div id="myregisters" class="pageLabel">My registers</div>
            <div class="pageDescription">A list of all contact registers created by you.</div>
            <div style={{paddingTop:"7px"}}class="row">
              {/* {myRegisters} */}
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
      
       
       </div>
      
      
       
         
          
                  </div>)    
      
      }else{
      
      return(<div>
     <LoginPage />
      </div>)
      
      }
  
            
          
  }

  export default MyRegisters