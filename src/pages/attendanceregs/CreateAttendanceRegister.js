
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn } from '../Functions';
import {useCookies} from 'react-cookie'
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import MyRegisters from './MyRegisters';
export function CreateAttendanceRegister(){
    const[status,setStatus]=useState('')
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
   
    return (<div class="componentPadding">
         
<div class='row'>
<div class='col-md-3'></div>
<div class='col-md-6'><div>
    <AttendenceRegisterNav/>
<p></p>
         <form method="post" id="attendanceRegisterCreateForm" action="#">
      <div class="bold">Create new contact register</div>
      <div class="light">Type a name to create a new register and save contacts to it.</div>
      <p></p>
       <div class="mb-3">
        <div class="formInputLabel">Name of register</div>
       <textarea rows="2" type="text" class="form-control" autoComplete="off" name="attendanceRegisterTitle" ></textarea>
  
     
       </div>
       
       <div style={{fontSize:"17px",paddingBottom:"3px"}} dangerouslySetInnerHTML={{__html:status}}/>
       <div  onClick={
       
         ()=>{

if(IsLoggedIn(cookies)===true){
  
          
  if(Array.from(document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value.trim()).length<1){
    ToastAlert('toastAlert2','Type a name for the register',3000)
              
    
    }  
    else{
           
        ToastAlert('toastAlert1','Please wait.........',3000)
        fetch(`/getTradingDetails/${cookies.user.contact}`).then(resp=>{
    
       return resp.json()}).then(response=>{
  
  let traderDetailsObj=response[0]
       
         if(traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens>0){
                             
           ToastAlert('toastAlert1','Creating............',7000)
      
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
       ToastAlert('toastAlert2','Limit reached, cant create more registers',3000)
      }else{
       if(res.success===1){
         ToastAlert('toastAlert1','Successful, please wait......',5000)
         document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value=""
     
         window.location.href=`/pages/attendanceregs/${res.contact}/${res.registerId}`
       }else{
         
         ToastAlert('toastAlert2','Not created, try again',3000)
  
       }
      }
          
    
       })
     
          }
         else {
  
           ToastAlert('toastAlert2','Contact Kayas to create more registers',4000)
         }
        
       })
  
        
           
        
      
    }
           
}else{}

         }
       } class="btn btn-success" style={{width:"100%"}}>Create register</div><p></p>
      
       </form>
       </div></div>
<div class='col-md-3'></div>
</div>
    
    
  
     </div>)
}

export default CreateAttendanceRegister