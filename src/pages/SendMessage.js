import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastAlert } from "./Functions";

export function SendMessage(props){
    const [advertiserContact,setAdvertiserContact]=useState('')
    const [sendNotice,setSendNotice]=useState('Please wait.....')
    let componentParams=useParams()
    
    useEffect(()=>{
      if(componentParams.recommender===undefined){
        setAdvertiserContact('0703852178')
        setSendNotice('Send message')
        
      }else{
        setAdvertiserContact(componentParams.recommender)
        setSendNotice('Send message')
      }
    })
    
  
    const [requestStatus,setRequestStatus]=useState('')
  
    return (
      <div style={{padding:"5px"}}>  
      
      <div class='row'>
        <div class='col-md-3'></div>
        <div class='col-md-6'> 
        <div class="pageLabel">Send message to Kayas</div>
      <div class="pageDescription">Send a message to Kayas</div><p></p>
        
        <form id='requestForm' >
      
  
      <div class="mb-3">
        <div class="formInputLabel">Your name</div>
      <input type="text" class="form-control" autoComplete="off" name="name" ></input>
    <br></br>
    <div class="formInputLabel">Your contact</div>
      <input type="text" class="form-control" autoComplete="off" name="contact"></input>
    <br></br>
    <div class="formInputLabel">Type your request/inquiry</div>
    <textArea rows="5"type="text" list="serviceTypes" class="form-control" autoComplete="off" name="serviceType"></textArea>
   
      </div>
      <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:requestStatus}}/>
      <div class="btn btn-success" style={{width:"100%"}} onClick={()=>{
  if(Array.from(document.getElementById('requestForm').name.value).length<2){
    ToastAlert('toastAlert2','Enter correct name',3000)
    
  }
  else if(Array.from(document.getElementById('requestForm').contact.value).length<10 || Array.from(document.getElementById('requestForm').contact.value).length>10){
    ToastAlert('toastAlert2','Enter correct contact of 10 digits',3000)
  
  } else if(Array.from(document.getElementById('requestForm').serviceType.value).length<1){
    ToastAlert('toastAlert2','Enter a message',3000)
  }
  
  else{
    ToastAlert('toastAlert1','Sending....',3000)
  
  fetch('/submitMessage',{
    method:"post",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({name:document.getElementById('requestForm').name.value,contact:parseInt(document.getElementById('requestForm').contact.value),serviceType:document.getElementById('requestForm').serviceType.value,recommender:parseInt(advertiserContact)})
  }).then(resp=>resp.json()).then(resp=>{
    ToastAlert('toastAlert1','Successful',3000)
    document.getElementById('requestForm').name.value=""
    document.getElementById('requestForm').contact.value=""
    document.getElementById('requestForm').serviceType.value=""
  
  })
  
  
  
  
  }
  
      }}><span class="fa fa-envelope"></span> {sendNotice}</div>
      </form>
     </div>
        <div class='col-md-3'></div>
      </div>
      
     
      
      </div>
    )
  }
  

  export default SendMessage
  