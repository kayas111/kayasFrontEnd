
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn } from '../Functions';
import {useCookies} from 'react-cookie'
import { AttendenceRegisterNav } from './AttendanceRegsHome';

export function CreateAttendanceRegister(){
    const[status,setStatus]=useState('')
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
   
    return (<div class="componentPadding">

        
       <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <div class="pageLabel">Create new contacts register</div>
        <AttendenceRegisterNav/><p></p>
        <form method="post" id="attendanceRegisterCreateForm" action="#">
       <div class="mb-3">
        <div class="formInputLabel">Name of register</div>
       <textarea rows="2" type="text" class="form-control" autoComplete="off" name="attendanceRegisterTitle" ></textarea>
  
     
       </div>
       
       <div class="status">{status}</div>
       <div  onClick={
       
         ()=>{


  
          
  if(Array.from(document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value.trim()).length<1){
    setStatus('Type a name for the register')
              
    
    }  
    else{
           
      setStatus('Please wait .....')
        fetch(`/getTradingDetails/${cookies.user.contact}`).then(resp=>{
    
       return resp.json()}).then(response=>{
  
  let traderDetailsObj=response[0]
       
         if(traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens>0){
                             
          setStatus('Creating......')
      
           fetch('/createAttendanceRegister',{
       method:"post",
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
  registerTitle:document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value.trim(),
  institution:traderDetailsObj.institution,
  name:traderDetailsObj.name,
  contact:parseInt(traderDetailsObj.contact),
       })
   }).then(resp=>{
       
       return resp.json()}).then(res=>{
      
      if(res.registerLimitReached===1){
       setStatus('Limit reached, cant create more registers')
      }else{
       if(res.success===1){
         
         document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value=""
     
         window.location.href=`/pages/attendanceregs/${res.contact}/${res.registerId}`
       }else{
         
         setStatus('Try again.')
  
       }
      }
          
    
       })
     
          }
         else {
  
           ToastAlert('toastAlert2','Contact Kayas to create more registers',4000)
         }
        
       })
  
        
           
        
      
    }
           


         }
       } class="btn btn-success fullButtonWidth">Create register</div><p></p>
      
       </form>
        </div>
        <div class="col-md-3"></div>
       </div>


    
    
  
     </div>)
}

export default CreateAttendanceRegister