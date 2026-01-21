import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn } from '../Functions';
import {useCookies} from 'react-cookie'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import { kayasDomainUrl } from '../../Variables';
import { Link } from 'react-router-dom';

export function SendSms(){

    let registerParams=useParams(),charactersPerSms=150
    
     const[status,setStatus]=useState('')
     const [cookies]=useCookies(['user'])
     const[status2,setStatus2]=useState('')
     const[sendSmsTokens,setSendSmsTokens]=useState('')
   
     const[retrieveStatus,setRetrieveStatus]=useState('')
       let formActionUrl=`/pages/attendanceregs/article/`
       const[registrarName,setRegistrarName]=useState('')
       const[messageesNumb,setMessageesNumb]=useState('')
       const[arrayOfAttendees,setArrayOfAttendees]=useState([])
       const[sendToContactRegisterStatus,setSendToContactRegisterStatus]=useState('')
       const[sendToContactRegisterName,setSendToContactRegisterName]=useState('')
       const[clickCharge,setClickCharge]=useState('10000')
       const[clickNumb,setClickNumb]=useState('10000')
       const[clickRate,setClickRate]=useState('100')
       const[messagees,setMessagees]=useState('')
       const[registrarContact,setRegistrarContact]=useState('')
       const[institution,setInstitution]=useState('')
       const[registerTitle,setRegisterTitle]=useState('')
       const[accBal,setAccBal]=useState('calculating......')
       const[charLength,setCharLength]=useState('')
       const[noOfSms,setNoOfSms]=useState('')
       const[smsUnitCost,setSmsUnitCost]=useState('')
       const[smsCost,setSmsCost]=useState('')
       const[smsTagAlert,setSmsTagAlert]=useState('')
     
       const [attendeeRegisterMessageStatus,setAttendeeRegisterMessageStatus]=useState('')
       
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
       
       let data="",whatsappAttendanceRegisterShareLink=`whatsapp://send?text=*${registerTitle}*%0A%0ATap link below to register:%0A${kayasDomainUrl}/pages/attendanceregs/${registerParams.registrar}/${registerParams.id}%0A%0A*Thank you.*`,
       kayasWhatsappGroupLink='https://chat.whatsapp.com/BU6aMsNR6jL5x11rcWc9HZ'
      useEffect(()=>{
        window.location.href="#"
         fetch(`/attendanceregs/${registerParams.registrarContact}/${registerParams.registerId}`).then(res=>res.json()).then(registerDataDoc=>{
                
           if(registerDataDoc.presence===0){
          
             setRegisterTitle("This Register does not exist. Please try another or create your own register too for free")
             setRegistrarName("Kayas 0703852178-WhatsApp")
           }else{
            
             setRegistrarName(registerDataDoc.name)
             setInstitution(registerDataDoc.institution)
             setRegisterTitle(`Send SMS to ${registerDataDoc.registerTitle}`)
             setRegistrarContact(registerDataDoc.contact)
         

  /*
             fetch(`/attendeesMessage/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
         
               setSmsUnitCost(res.smsUnitCost)
               let noDelaySmsUnitCost=res.smsUnitCost
               setNoOfSms(NoOfSmsCalculator(Array.from(res.smsmessage).length))
               setCharLength(Array.from(res.smsmessage).length)
             //  document.getElementById("setAttendeeRegisterMessageForm").message.value=res.message
            document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=res.smsmessage
          
            setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value).length)*noDelaySmsUnitCost*res.attendees.length)
 
         
                
         }) 
           */


             fetch(`/attendeesMessage/${registerParams.registrarContact}/${registerParams.registerId}`).then(res=>res.json()).then(res=>{
         
               setSmsUnitCost(res.smsUnitCost)
               let noDelaySmsUnitCost=res.smsUnitCost
               setNoOfSms(NoOfSmsCalculator(Array.from(res.smsmessage).length))
               setCharLength(Array.from(res.smsmessage).length)
             
            document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=res.smsmessage
          
            setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value).length)*noDelaySmsUnitCost*res.attendees.length)
 
         
                
         }) 
           
          
         
           }
          
           
         })
 
 
         fetch(`/attendees/${registerParams.registrarContact}/${registerParams.registerId}`).then(res=>res.json()).then(res=>{
            
           setMessageesNumb(res.registerDoc.attendees.length)
           setArrayOfAttendees(res.registerDoc.attendees)
 
            
         })

 
 fetch(`/getTradingDetails/${registerParams.registrarContact}`).then(res=>res.json()).then((resp)=>{
 setAccBal(resp[0].accBal)
 setSendSmsTokens(resp[0].permissionTokensObj.sendSmsTokens)
 
 resp[0].permissionTokensObj.sendSmsWithoutTag==false? setSmsTagAlert('The tag "#KayasSMS" will automatically be appended at the end of the SMS'): setSmsTagAlert('')
 
         })
 
 
         },[])
  
 



    return (<div style={{padding:"3px"}}>
<div class="row">
<div class="col-md-3"></div>
<div class='col-md-6'style={{padding:"15px"}}>  
<div class="pageLabel">{registerTitle}</div>
  <div class="pageDescription" style={{textAlign:"left"}}>{messageesNumb} contacts</div><p></p>
 

  <form id="setAttendeeRegisterSmsForm" >
   
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="contact" defaultValue={registrarContact} ></input>
 <div style={{textAlign:"left",fontSize:"18px"}}>Cost: <span style={{color:"red"}}>{smsCost} Shs.</span> 
 <div class="light">Between 0 - 150 message characters. More characters double or tripple the cost.</div></div>
  <p></p>
 <div class="bold">Type message:</div>
 <div>Number of typed message characters: <span style={{color:"red"}}>{charLength}</span> <span><span style={{textAlign:"right",paddingLeft:"20px"}}>
    <div class="btn btn-danger btn-sm"
       onClick={()=>{document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=''}}>Clear message</div></span>
     
 </span></div><p></p>

 <textarea rows="10" type="text" class="form-control" autoComplete="off" name="smsmessage" onChange={()=>{
   setCharLength(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length)
   setNoOfSms(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length))
   setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length)*smsUnitCost*messageesNumb)
 }} ></textarea>
<div style={{paddingTop:"10px"}} class="bold">{smsTagAlert}</div>
      </div>
      <div style={{fontSize:"12px"}}>
    </div>
    <div style={{padding:"5px"}}>
     <div onClick={()=>{
      
if(IsLoggedIn(cookies)==true){
  if(parseInt(accBal)<parseInt(smsCost)){
    ToastAlert('toastAlert2','Low account balance. Contact Kayas 0703852178',6000)
  }else{
    if(window.confirm("Press OK to confirm")===true){
      
    
    ToastAlert('toastAlert1','Sending. Wait for confirmation message.....',5000)
      
            
   


  fetch(`/getTradingDetails/${registerParams.registrarContact}`).then(res=>res.json()).then((resp)=>{
let traderDetails=resp[0],smsMessage=document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value
if(traderDetails.permissionTokensObj.sendSmsWithoutTag==false){
  smsMessage=smsMessage+' #KayasSMS'
}else{
;
}

fetch('/sendAttendeeRegisterSms',{
  method:"post",
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({
    registrarContact:parseInt(cookies.user.contact),
smsmessage:smsMessage,
registerId:parseInt(registerParams.registerId),
smsCost:smsCost

  }) 

 
}).then(res=>res.json()).then(resp=>{

ToastAlert('toastAlert1',`${resp[0]}`,4000)
fetch(`/getTradingDetails/${registerParams.registrarContact}`).then(res=>res.json()).then((resp)=>{


  setAccBal(resp[0].accBal)
  setSendSmsTokens(resp[0].permissionTokensObj.sendSmsTokens)
          })


})



            })



  
    }else{
;
    }
  }

}else{}

     }}type="text" style={{width:"100%"}} class="btn btn-success">Send SMS</div>
 </div>
    
     <div style={{display:"flex",flexWrap:"wrap"}}>
       <div style={{padding:"5px"}}>
     <div onClick={()=>{
     if(IsLoggedIn(cookies)==true){
      if(parseInt(cookies.user.contact)!=parseInt(registerParams.registrarContact)){
        ToastAlert('toastAlert2',`Not allowed. You do not own this contacts register`,3000)
      }else{  ToastAlert('toastAlert1','Setting, please wait......',3000)
      fetch('/setAttendeeRegisterSms',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
          registrarContact:parseInt(cookies.user.contact),
   smsmessage:document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value,
   registerId:parseInt(registerParams.registerId)
  
        }) 
    }).then(res=>res.json()).then(resp=>{
      
      ToastAlert('toastAlert1',`${resp[0]}`,3000)

    })
}
    

     }else{

     }

     }}type="text" class="button1">Save SMS</div>
 </div>
 
 <div style={{padding:"5px"}}>
     

     <Link to={`/pages/attendanceregs/${parseInt(registerParams.registrarContact)}/${registerParams.registerId}`
           }><div type="text" class="button1">Back to register</div></Link>
 </div>
 </div>
 
 
     </form>
     
     </div>



<div class="col-md-3"></div>

</div>



    </div>)
}

export default SendSms