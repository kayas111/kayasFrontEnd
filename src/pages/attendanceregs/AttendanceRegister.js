


import React, {useEffect,useState,useRef} from 'react'
import { ToastAlert,IsLoggedIn } from '../Functions';
import {useCookies} from 'react-cookie'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import { kayasDomainUrl } from '../../Variables';
import { Link } from 'react-router-dom';






export function AttendanceRegister(){
    let registerParams=useParams(),charactersPerSms=145
     const[status,setStatus]=useState('')
     const [cookies,setCookie,removeCookie]=useCookies(['user'])
     const[status2,setStatus2]=useState('')
     const[sendSmsTokens,setSendSmsTokens]=useState('')
   
     const[retrieveStatus,setRetrieveStatus]=useState('')
       let formActionUrl=`/pages/attendanceregs/article/`
       const[registrarName,setRegistrarName]=useState('')
       const[messageesNumb,setMessageesNumb]=useState('')
       const[numberOfContacts,setNumberOfContacts]=useState('')
       const[arrayOfAttendees,setArrayOfAttendees]=useState([])
       const[sendToContactRegisterStatus,setSendToContactRegisterStatus]=useState('')
       const[sendToContactRegisterName,setSendToContactRegisterName]=useState('')
       const[clickCharge,setClickCharge]=useState('10000')
       const[clickNumb,setClickNumb]=useState('10000')
       const[clickRate,setClickRate]=useState('100')
       const[messagees,setMessagees]=useState('')
       const[registrarContact,setRegistrarContact]=useState('')
       const[institution,setInstitution]=useState('')
       const[registerTitle,setRegisterTitle]=useState('Please wait......')
       const[accBal,setAccBal]=useState('Caltulating......')
       const[charLength,setCharLength]=useState('')
       const[noOfSms,setNoOfSms]=useState('')
       const[smsUnitCost,setSmsUnitCost]=useState('')
       const[smsCost,setSmsCost]=useState('caltulating.....')
     
       const [attendeeRegisterMessageStatus,setAttendeeRegisterMessageStatus]=useState('')
       const [attendeeRegisterSmsStatus,setAttendeeRegisterSmsStatus]=useState('')
       let contactsReceivedFlag=0
    
    
      const[registerPresentFlag,setregisterPresentFlag]=useState(1)
       
   function NoOfSmsCalculator(charLength){
 
 
     let smsArrayCategory=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],numbOfSms=1
     smsArrayCategory.reverse()
     smsArrayCategory.forEach(category=>{
       if(charLength<(category*charactersPerSms)+1){
         numbOfSms=category
       }else{
 ;
       }
     })
 
 return numbOfSms
 
   }
       
       let data="",whatsappAttendanceRegisterShareLink=`whatsapp://send?text=*${encodeURIComponent(registerTitle)}*%0A%0ATap link below:%0A${window.location.origin}/pages/attendanceregs/${registerParams.registrar}/${registerParams.id}`,
       kayasWhatsappGroupLink='https://chat.whatsapp.com/BU6aMsNR6jL5x11rcWc9HZ'
      useEffect(()=>{
      window.location.href="#"
      
         fetch(`/attendanceregs/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(registerDataDoc=>{
                
           if(registerDataDoc.presence===0){
          
             setRegisterTitle("This Register does not exist. Please try another or create your own register too for free")
             setRegistrarName("Kayas 0703852178-WhatsApp")
           }else{
                 
             setRegistrarName(registerDataDoc.name)
             setInstitution(registerDataDoc.institution)
             setRegisterTitle(registerDataDoc.registerTitle)
             setRegistrarContact(registerDataDoc.contact)
       
          
         
           }
          
           
         })
 
 
         fetch(`/attendees/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
           setMessageesNumb(res.registerDoc.attendees.length)
           setArrayOfAttendees(res.registerDoc.attendees)
 
            
         })
         fetch(`/getTradingDetails/${registerParams.registrar}`).then(res=>res.json()).then((resp)=>{
 
 setAccBal(resp[0].accBal)
 setSendSmsTokens(resp[0].permissionTokensObj.sendSmsTokens)
 
         })
 
 
         },[])
  
      
{/* <div onClick={()=>{
 window.location.href=`/pages/sendsmsattendanceregs/${registerParams.registrar}/${registerParams.id}`
     }}type="text" class="button1"><span class="fa fa-envelope"></span> Send SMS</div> */}
       
       //return statement
           /*    <div class='col-md-6'style={{padding:"30px"}}>  
  <form id="setAttendeeRegisterMessageForm" >
  <div style={{paddingBottom:"8px"}}><div class="formLabel">Set WhatsApp message</div></div>
     
     <div style={{paddingBottom:"5px"}}>This section is for the Register Admin, {registrarName} </div><div style={{fontSize:"10px", color:"grey",paddingBottom:"5px"}}><span style={{color:"red"}}>Warning: </span>Do not use '#' in your message  because it will interfere with your message!<br></br>To create a paragraph, use %0A%0A i.e. percentage sign, digit zero then capital letter A, twice. For a new line use only %0A.<br></br><span style={{color:"red"}}>Please endeavor to use the normal whatsapp messenger to send messages but not TM whatsapp and others.</span>
     <br></br><span style={{color:"red"}}>Do not use apostrophes in your message for example, do not write "don't", instead write in full as "do not", for a word like "you're", write in full as "you are"</span>
     </div>
   <div style={{textAlign:"right",paddingBottom:"3px"}}><div class="btn btn-warning btn-sm"
       onClick={()=>{document.getElementById("setAttendeeRegisterMessageForm").message.value=''}}>Clear message</div></div>
     
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="contact" defaultValue={registrarContact} ></input>
 <textArea rows="5" type="text" class="form-control" autoComplete="off" name="message" placeholder='Enter your message here'></textArea><br></br>
 <input type="password" class="form-control" autoComplete="off" name="pin" placeholder='Enter your PIN' ></input>  
      </div>
     <div style={{padding:"5px",fontSize:"20px"}} dangerouslySetInnerHTML={{__html:attendeeRegisterMessageStatus}}/>
     <div style={{borderRadius:"18px"}} onClick={()=>{
 
 if(Array.from(document.getElementById('setAttendeeRegisterMessageForm').contact.value).length<9||Array.from(document.getElementById('setAttendeeRegisterMessageForm').contact.value).length>10){
   setAttendeeRegisterMessageStatus("<div style='color:red;'>Enter contact of 10 digits ......</div>")
 
 }
 else if(Array.from(document.getElementById('setAttendeeRegisterMessageForm').pin.value).length<5||Array.from(document.getElementById('setAttendeeRegisterMessageForm').pin.value).length>5){
   setAttendeeRegisterMessageStatus("<div style='color:red;'>Enter 5 digits PIN</div>")
 }else{
   fetch('/verifyUser',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
 contact:document.getElementById("setAttendeeRegisterMessageForm").contact.value,
 pin:document.getElementById("setAttendeeRegisterMessageForm").pin.value,
     }) 
 }).then(res=>res.json()).then((resp)=>{
          
     if(resp.registered===false){
      
       setAttendeeRegisterMessageStatus("<div style='color:red;'>You are not registered with Kayas, please register with Kayas.</div>")
     }
      else{
         if(resp.registered===true&&resp.pin===false){
           setAttendeeRegisterMessageStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
 
         }else{
           setAttendeeRegisterMessageStatus("<div style='color:green;'>Setting, please wait ...........</div>")
           fetch('/setAttendeeRegisterMessagee',{
             method:"post",
             headers:{'Content-type':'application/json'},
             body:JSON.stringify({
               registrarContact:parseInt(document.getElementById("setAttendeeRegisterMessageForm").contact.value),
        message:document.getElementById("setAttendeeRegisterMessageForm").message.value,
        registerId:parseInt(registerParams.id)
       
             }) 
         }).then(res=>res.json()).then(resp=>{
           setAttendeeRegisterMessageStatus(resp[0])
         })
 
 
 
         }
         
       
     }
    
 }
     
 
 )
 
 
 }
     }}type="text" class="btn btn-success hovereffect">Set/save message</div>
     </form>
     
     </div>*/
      
    
     function DisplayContacts(registerParams){
      
      if(IsLoggedIn(cookies)===true){
     
      if(parseInt(cookies.user.contact)==parseInt(registerParams.registrar)){
        setStatus('Fetching contacts, please wait......')
        fetch(`/attendeesMessage/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
       
 
 
 fetch(`/attendees/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
 let responseDoc=res,position=1,registerDoc=responseDoc.registerDoc
 
 contactsReceivedFlag=1
          setMessageesNumb(responseDoc.registerDoc.attendees.length)
          let num=1
        
 if(responseDoc.closed===true){
 ToastAlert('toastAlert2','Register closed. Contact Kayas',3000)
 }else{
 
 
 registerDoc.attendees.forEach(attendeeObj=>{
  attendeeObj.position=position
  position++
 })
 
 
 setMessagees(
 registerDoc.attendees.map(attendeeObj=>{
  return (
  
  <div style={{padding:"0px"}}>
   <div class="contactsRegisterContactRecordContainer">
   <div class="row " >
     <div class="col-6">{attendeeObj.position}. {attendeeObj.name}</div>
     
     <div class="col-5" style={{textAlign:"right"}}>
 <a  onClick={()=>{
 window.location.href=`tel:0${attendeeObj.contact}`
 }}><span class="hovereffect"><span class="fa fa-phone"></span> Call: 0{attendeeObj.contact}</span></a></div>
    
    
     <div class="col-1" style={{textAlign:"center"}}>
 <a  onClick={()=>{
 
 
 if(window.confirm(`Select "OK" to delete 0${attendeeObj.contact}`)==true){
   
   ToastAlert('toastAlert1',`Deleting 0${attendeeObj.contact}, wait for confirmation message.....`,3000)
   fetch('/removeFromAttendeesRegister',{
     method:"post",
     headers:{"Content-type":"application/json"},
     body:JSON.stringify({contact:parseInt(attendeeObj.contact),registrarContact:registrarContact,registerId:parseInt(registerParams.id)})
   }).then(res=>res.json()).then(res=>{
 if(res.registerPresent===0){
   
   ToastAlert('toastAlert1',`You can not proceed with the action because the Regsiter is not present`,2000)
 }else{
   
  if(res.attendeeInList===0){
   ToastAlert('toastAlert2','Contact is not in the list',3000)
 }else{
 if(res.success===1){
   ToastAlert('toastAlert1','Deleted Successfully',3000)
   setMessageesNumb(messageesNumb-1)
   DisplayContacts(registerParams)
 
   
 }else{
   ToastAlert('toastAlert1','Error occured, try again',3000)
   
 
 }
 
 
 }
 
 }
 
   })
 
   
 }else{}
 
 
 }}><span class="hovereffect"><span class="fa fa-trash"></span></span></a></div>
 
 
 
 </div>
 
   </div>
 
 
 
 
 
  </div>)
 }))
 setNumberOfContacts(`${registerDoc.attendees.length} contacts`)
 setStatus('Successful. Scroll to see')
 
 }
 
 
 
 
          })
 
 
        })
      }else{
        ToastAlert('toastAlert2','Not allowed. You are not the owner',4000)
      }
      
      
      
      
       }else{;}
    }


          return(
              
             <div style={{padding:"3px"}}>
             
           
                         
        
        <div style={{padding:"5px"}}>         
           <div class="row">
            <div class="col-md-3"></div>
            <div class='col-md-6' >
            <AttendenceRegisterNav/><p></p>
            <div class="pageLabel" >{registerTitle}</div>
            <div style={{fontSize:"15px"}}>{messageesNumb} contacts <span style={{paddingLeft:"10px"}}>ID: {registerParams.id}</span></div>
          
                         
                    
                         
              <div  style={{paddingTop:"20px"}}>  
            
    <form id="messengingForm" >
    <div class="bold">Save a contact</div>
    <div class="light">Enter a name (optional) and contact then save.</div>
    <p></p>
     
     <div class="mb-3">
     <div class="formInputLabel">Name (optional)</div>
     <textarea row="2" type="text" class="form-control" autoComplete="off" name="name" ></textarea><br></br>
     <div class="formInputLabel">Contact</div>
 <input type="text" class="form-control" autoComplete="off" name="contact"></input>
   </div>
  <div class="row">
  
   <div>
   
   <div class="status">{status}</div>
   <div style={{padding:"3px"}}>
     <div onClick={()=>{
 let name;
 if(Array.from(document.getElementById('messengingForm').contact.value.trim()).length<10||Array.from(document.getElementById('messengingForm').contact.value.trim()).length>10){
 ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
 document.getElementById('messengingForm').contact.value=""
 }
 else{
   if(Array.from(document.getElementById('messengingForm').name.value).length<2){
 name=""
   }else{
 name=document.getElementById('messengingForm').name.value.trim()
   }
   setStatus('Saving.......')
   fetch(`/getTradingDetails/${registrarContact}`).then(res=>res.json()).then(resp=>{
     let traderDetailsObj=resp[0]
   fetch(`/addToAttendeesRegister`,{
     method:"post",
     headers:{"Content-type":"application/json"},
     body:JSON.stringify({name:name,contact:parseInt(document.getElementById('messengingForm').contact.value.trim()),registrarContact:registrarContact,registerId:parseInt(registerParams.id)})
   }).then(res=>res.json()).then(res=>{
 
  if(res.registerPresent===0){
   ToastAlert('toastAlert2','Register does not exist',3000)
 
  
 }
 else{
   if(res.success===1){
     ToastAlert('toastAlert1','Saved',1200)
     setStatus('')
     document.getElementById('messengingForm').contact.value=""
     document.getElementById('messengingForm').name.value=""
     setMessageesNumb(res.attendees.length)
   }else if(res.success==='memberPresent'){
     ToastAlert('toastAlert2','Contact already exists',3000)
     document.getElementById('messengingForm').contact.value=""
     document.getElementById('messengingForm').name.value=""
 
   }else {
     ToastAlert('toastAlert2','Error occured, try again',3000)
   }
  }
    
 
 
 
 })
 
 
 
 
 
 
 
 
 
 
            })
 
 
 
 
 
 
 
 
 
 }
 
 
     }}type="text" class="btn btn-success fullButtonWidth"><span class="fa fa-save"></span> Save</div>
     </div>


     <div style={{padding:"3px"}}>
  <Link to={`/pages/sendsmsattendanceregs/${registerParams.registrar}/${registerParams.id}`}>
  <div class="btn btn-success fullButtonWidth">Send SMS <span class="fa fa-paper-plane"></span></div>
  </Link>
  

</div>
<p></p>
<div style={{display:"flex",flexWrap:"wrap"}}>
    
     <div style={{padding:"3px"}}>
<div onClick={()=>{
  DisplayContacts(registerParams)
}}type="text" class="button1"><span class="fa fa-eye"></span> Display contacts</div>
</div>

<div style={{padding:"3px"}}>
<div onClick={()=>{
 
 if(Array.from(document.getElementById('messengingForm').contact.value.trim()).length<10||Array.from(document.getElementById('messengingForm').contact.value.trim()).length>10){
 ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
 document.getElementById('messengingForm').contact.value=""
 }else{
  setStatus('Deleting...........')
   fetch('/removeFromAttendeesRegister',{
     method:"post",
     headers:{"Content-type":"application/json"},
     body:JSON.stringify({contact:parseInt(document.getElementById('messengingForm').contact.value.trim()),registrarContact:registrarContact,registerId:parseInt(registerParams.id)})
   }).then(res=>res.json()).then(res=>{
 if(res.registerPresent===0){
   setStatus2(`<div style='color:red;'>You can not proceed with the action because the Regsiter is not present</div>`)
 
 }else{
   
  if(res.attendeeInList===0){
   ToastAlert('toastAlert2','not in the list',3000)
 }else{
 if(res.success===1){
   ToastAlert('toastAlert1','Deleted',1200)
  setStatus('')
   document.getElementById('messengingForm').contact.value=''
   setMessageesNumb(messageesNumb-1)
 }else{
   ToastAlert('toastAlert1','Error occured, try again',3000)
   document.getElementById('messengingForm').contact.value=''
 
 }
 
 
 }
 
 }
 
   })
 }
     }}type="text" class="button1"><span class="fa fa-trash"></span> Delete contact</div>
</div>
<div style={{padding:"3px"}}>
     <div onClick={()=>{
 if(Array.from(document.getElementById('messengingForm').contact.value.trim()).length<10||Array.from(document.getElementById('messengingForm').contact.value.trim()).length>10){
   ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
 document.getElementById('messengingForm').contact.value=""
 }
 else{
   
   if(arrayOfAttendees.length===0){
     ToastAlert('toastAlert2','Register not ready, try again',3000)
   }else{
     let index=0,position,details,contact=parseInt(document.getElementById('messengingForm').contact.value)
     arrayOfAttendees.forEach(attendeeDoc=>{
     
       if(attendeeDoc.contact===contact){
       
         position=index+1
         details=attendeeDoc
       }else{
 
       }
 
       index++
     })
 if(position===undefined){
   ToastAlert('toastAlert2','Not in the list',3000)
 }else{
   ToastAlert('toastAlert1',`${details.name} at position ${position} in the list`,4000)
   
 }
  
 
   }
 }
 
 
     }}type="text" class="button1"> Get details</div>
     </div>


 
 </div>
 </div>
     
     </div>
     </form>
     
     <div style={{background:"#e9e8e8",paddingTop:"5px"}}>
     <div style={{fontSize:"17px",textAlign:"center",color:"black",fontWeight:"600",background:"white"}} dangerouslySetInnerHTML={{__html:numberOfContacts}}/>
   
   <div>{messagees}</div>
   
    </div>
    
     </div>
     
     </div>
     <div class="col-md-3"></div>
        
     <div class="col-md-3"></div>
     {/* <div class='col-md-6'>  
     <div style={{padding:"10px"}}><div style={{color:"red",fontSize:"20px",textAlign:"center",paddingTop:"20px",borderBottom:"1px solid red"}}>Below is for only the Admin</div></div>
     <div class="pageLabel">Share a contact to another register</div>
     <div class="pageDescription">Send a contact from this register to another register. To send, enter the ID of the register to send to and enter the position that contact holds in this register</div><p></p>
  <form id="sendContactToRegister" >
  <div style={{paddingBottom:"8px"}}><div class="formLabel">Share a contact to another register</div></div>
     <div style={{paddingBottom:"5px"}}>Only for the Register Admin, {registrarName} </div>
     <div style={{paddingTop:"5px"}}>Sending to: <span style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:sendToContactRegisterName}}/> </div>
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="registrarContact" defaultValue={registrarContact} ></input>
 <div class="formInputLabel">Enter the ID of the register to send to:</div>
 <input type="text" class="form-control" autoComplete="off" name="registerId"  
 onChange={
   ()=>{
     
   setSendToContactRegisterName('Searching for register.........')
   fetch('/getAttendanceRegDetails',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
      registrarContact:registrarContact,
      registerId:parseInt(document.getElementById("sendContactToRegister").registerId.value),
      
      
     }) 
 }).then(res=>res.json()).then(resp=>{
   if(resp.length===0){
     ToastAlert('toastAlert2','You have no register with that ID',3000)
   }else{
     setSendToContactRegisterName(`${resp[0].registerTitle}`)
     ToastAlert('toastAlert1',`Sending to ${resp[0].registerTitle} `,4000)
 
   }
 })
   }
 }></input> <br></br>
 <div class="formInputLabel">Position of the contact in this register (e.g. 1,2,3,...)</div>
 <input type="text" class="form-control" autoComplete="off" name="contactPosition" ></input> 
      </div>
     
     <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:sendToContactRegisterStatus}}/>
     
     <div onClick={()=>{
       
 if(IsLoggedIn(cookies)===true){
  if(parseInt(document.getElementById("sendContactToRegister").contactPosition.value)==='NaN'){
    ToastAlert('toastAlert2','Enter a position corresponding to a contact e.g 1,2,3,....',3000)
  }else{

  let contactPosition=parseInt(document.getElementById("sendContactToRegister").contactPosition.value)
  if(contactPosition<1){
    ToastAlert('toastAlert2','Position can not be less than 1',3000)
  }else{

    let attendeeDoc=arrayOfAttendees[contactPosition-1]
           
           if(attendeeDoc===undefined){
            ToastAlert('toastAlert2',`Refresh the page to update OR position ${document.getElementById("sendContactToRegister").contactPosition.value} does not exist in this register`,7000)
            
           }else{
            fetch(`/addToAttendeesRegister`,{
              method:"post",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify({name:attendeeDoc.name,contact:attendeeDoc.contact,registrarContact:registrarContact,registerId:parseInt(document.getElementById("sendContactToRegister").registerId.value)})
            }).then(res=>res.json()).then(resp=>{
              
              if(resp.success===1){
                ToastAlert('toastAlert1','Successful',3000)
                document.getElementById("sendContactToRegister").contactPosition.value=''
              }else if(resp.success==='memberPresent'){
                ToastAlert('toastAlert2','Contact is already in the register you are sending to',4000)
                document.getElementById("sendContactToRegister").contactPosition.value=''
              } else if(resp.registerPresent===0){
                ToastAlert('toastAlert2','Register does not exist',3000)
                document.getElementById("sendContactToRegister").contactPosition.value=''
              }
              else{
    
              }
            })
            
           }
    

  }


  }

 }else{;}
       
       }}type="text"  style={{width:"100%"}} class="btn btn-success">Send</div>
     </form>
     
     </div> */}
     <div class="col-md-3"></div>
     
             </div>
            
 </div>
 
     <p></p>
     
  
      
           <div class="row"style={{textAlign:"center",padding:"20px",fontSize:"15px"}}>
           
          <div class="col-md-3"></div>
          <div class="col-md-6">
               
               <div style={{padding:"3px"}}>Share to WhatsApp friends or Groups <br></br> <a style={{color:"green"}} href={whatsappAttendanceRegisterShareLink}><span  class="button1"><span class='fa fa-whatsapp'></span> Share this Register</span></a></div>
               
               </div>
           
               <div class="col-md-3"></div>
     
           </div>
            
             </div>
               
              
             );
             
             
        //return statement
       
       
       }
 
       
       export default AttendanceRegister