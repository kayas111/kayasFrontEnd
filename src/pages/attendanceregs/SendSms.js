import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post } from '../Functions';
import {useCookies} from 'react-cookie'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import { kayasDomainUrl } from '../../Variables';
import { Link } from 'react-router-dom';

export function SendSms(){

    let registerParams=useParams(),charactersPerSms=160
    
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
       const[baseCost,setBaseCost]=useState('')
       
     
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
       
   
      useEffect(()=>{
        window.location.href="#"
         fetch(`/attendanceregs/${registerParams.registrarContact}/${registerParams.registerId}`).then(res=>res.json()).then(resp=>{
                
           if(resp.length==0){
          
             setRegisterTitle("This Register does not exist. Please try another or create your own register too for free")
             setRegistrarName("Kayas 0703852178-WhatsApp")
           }else{
            let registerDataDoc=resp[0]
             setRegistrarName(registerDataDoc.name)
             setInstitution(registerDataDoc.institution)
             setRegisterTitle(`${registerDataDoc.registerTitle}`)
             setRegistrarContact(registerDataDoc.contact)
         

             setMessageesNumb(registerDataDoc.attendees.length)
             setArrayOfAttendees(registerDataDoc.attendees)
   setBaseCost(registerDataDoc.attendees.length*30)



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


 
 fetch(`/getTradingDetails/${registerParams.registrarContact}`).then(res=>res.json()).then((resp)=>{
 setAccBal(resp[0].accBal)
 setSendSmsTokens(resp[0].permissionTokensObj.sendSmsTokens)
 
 
 
         })
 
 
         },[])
  
 



    return (<div class="componentPadding">
<div class="row">
<div class="col-md-3"></div>
<div class='col-md-6'>  

<div style={{paddingBottom:"2px"}}class="pageLabel">Send SMS</div>

 <div class="row"> 
 
 <div class="col-8">
  
 <div class="background1">
  <div ><span class="bold">To:</span> {registerTitle}</div>
  <div><span class="bold">Contacts:</span> {messageesNumb} </div>
 </div>
  
  </div>


 <div class="col-4"> <div style={{textAlign:"right"}}>
     

     <Link to={`/pages/attendanceregs/${parseInt(registerParams.registrarContact)}/${registerParams.registerId}`
           }><div type="text" class="btn btn-sm btn-warning">Add contacts</div></Link>
 </div></div>
 
 
 
 
 
 </div>
<p></p>
  <form id="setAttendeeRegisterSmsForm" >
   
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="contact" defaultValue={registrarContact} ></input>
 <div class="bold" style={{paddingBottom:"10px"}}>Type message</div>

 <div style={{paddingBottom:"7px"}}>
  <div>0 - 160 message characters: {(()=>{
  return(`${baseCost} shs`)
 })()}</div>
  <div>161 - 320 message characters: {(()=>{
  return(`${baseCost*2} shs`)
 })()}.</div>
 <div>321 - 480 message characters: {(()=>{
  return(`${baseCost*3} shs`)
 })()}</div>
 <div>481 - 640 message characters: {(()=>{
  return(`${baseCost*4} shs`)
 })()}</div>
  </div>
  
 
 
 <div class="row">
  <div class='col-6'><div style={{textAlign:"left",fontSize:"18px",paddingBottom:"8px"}} >Cost: <span style={{color:"red"}}>{smsCost} Shs</span> </div></div>
  
 </div>

<div class="row">
  <div class="col-6"> <div  style={{paddingBottom:"10px"}}>Message characters: <span style={{color:"red",fontSize:"18px"}}>{charLength}</span></div></div>
  <div  class='col-6'> 
  
  <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent: "right" }}>


  <div class="btn btn-danger btn-sm"
       onClick={()=>{document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=''
       setCharLength(0)
       }}>Clear</div>
      


     <div  onClick={()=>{
     if(IsLoggedIn(cookies)==true){
      if(parseInt(cookies.user.contact)!=parseInt(registerParams.registrarContact)){
        ToastAlert('toastAlert2',`Not allowed. You do not own this contacts register`,3000)
      }else{  ToastAlert('toastAlert1','Saving, please wait......',2000)
      fetch('/setAttendeeRegisterSms',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
          registrarContact:parseInt(cookies.user.contact),
   smsmessage:document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value,
   registerId:parseInt(registerParams.registerId)
  
        }) 
    }).then(res=>res.json()).then(resp=>{
      
      ToastAlert('toastAlert1',`${resp[0]}`,1500)

    })
}
    

     }else{

     }

     }}type="text" class="btn btn-sm btn-warning">Save</div>


 </div>
 
 </div>
</div>


 <textarea rows="15" type="text" class="form-control" autoComplete="off" name="smsmessage" onChange={()=>{
   setCharLength(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length)
   setNoOfSms(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length))
   setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length)*smsUnitCost*messageesNumb)
 }} ></textarea>

      </div>
      
    
    
    <div class="flexDisplayWithGap">

    <div onClick={()=>{
      
      if(IsLoggedIn(cookies)==true){
        if(parseInt(accBal)<parseInt(smsCost)){
          ToastAlert('toastAlert2','Low account balance. Contact Kayas 0703852178',6000)
        }else{
          let contact=window.prompt('Enter contact to receive test SMS')


          if(contact==null){

          } else
 if(Array.from(contact).length!=10){

  ToastAlert('toastAlert2','Contact must be 10 digits',3000)

 }
 
 
 else{
      if(window.confirm(`Test SMS will be sent to only ${contact}`)===true){
            
          
          ToastAlert('toastAlert1','Sending. Wait for confirmation message.....',5000)
            
            
      
        fetch(`/getTradingDetails/${registerParams.registrarContact}`).then(res=>res.json()).then((resp)=>{
      let traderDetails=resp[0],smsMessage=document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value,
      payLoad={
        registrarContact:parseInt(cookies.user.contact),
    smsmessage:smsMessage,
    registerId:parseInt(registerParams.registerId),
    smsCost:smsCost,
    receipient:parseInt(contact)
    
      }
      
      Post('/sendAttendeeRegisterTestSms',payLoad).then(resp=>{
      
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
 

        }
      
      }else{}
      
           }}type="text"  class="btn btn-success">Test SMS (1)</div>
        
          
           <div onClick={()=>{
            
      if(IsLoggedIn(cookies)==true){
        if(parseInt(accBal)<parseInt(smsCost)){
          ToastAlert('toastAlert2','Low account balance. Contact Kayas 0703852178',6000)
        }else{
          if(window.confirm("Press OK to confirm")===true){
            
          
          ToastAlert('toastAlert1','Sending. Wait for confirmation message.....',5000)
            
                  
         
      
      
        fetch(`/getTradingDetails/${registerParams.registrarContact}`).then(res=>res.json()).then((resp)=>{
      let traderDetails=resp[0],smsMessage=document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value
      
      
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
      
           }}type="text"  class="btn btn-warning">Send to all <span class="fa fa-paper-plane"></span></div>
      

    </div>
 
 
     </form>
     
     </div>



<div class="col-md-3"></div>

</div>



    </div>)
}

export default SendSms