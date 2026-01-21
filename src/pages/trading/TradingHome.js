
import React, {useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'
import {Itemsele} from '../Home';

import trade1 from '../imgs/trade1.png'

import { useCookies } from 'react-cookie';




import { ToastAlert } from '../Functions';


 

export function TradingHome(){
 
 
    
 

return(

  <div style={{color:"grey"}}>
      <p></p>
  <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Get started</div><p></p>
 
 <div class="row">

<div class="col-sm-12 col-md-6">  <img src={trade1} class=" d-block w-100" alt="..."  /></div>
<div class=" col-md-6"> <div style={{color:"grey",padding:"4px"}}>
 Use Kayas pages to earn you credit or payment. Below this, is a page of items. Use it to create your own page that will automatically come with items. To do so, tap the advertise button to produce your own page.<p></p>You are always able to see how many requests/orders have been made through your page. For every successful purchase, your account is credited<p></p>
 Use the "Your account button" to see your accout balance. 

</div> </div>


 </div>
 

  <div style={{padding:"20px"}}></div>    
  <Itemsele />

  </div>
);
}

export function TradingAccount(){
  let componentParams=useParams()
   componentParams.recommender=componentParams.trader
  let [updateTrigger,setUpdateTrigger]=useState(0)
  const[traderName,setTraderName]=useState('')
  const[traderContact,setTraderContact]=useState('')
  const[traderAccBal,setTraderAccBal]=useState('')
  const[traderCashOutBal,setTraderCashOutBal]=useState('')
  const[traderNotice,setTraderNotice]=useState('')
  const[deliveryServiceAvailabilityStatus,setDeliveryServiceAvailabilityStatus]=useState('')
  const[deliveryServiceAvailability,setDeliveryServiceAvailability]=useState('')
  
  const [cookies]=useCookies(['user'])
  
  const[allowPeopleToSendFreeSmsValue,setAllowPeopleToSendFreeSmsValue]=useState('')
  const[freeSmsNoticeValue,setFreeSmsNoticeValue]=useState('')
 
  


function UpdateTraderDetails(operationObj){

  fetch('/updateTraderDetails',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(operationObj) 
}).then(res=>res.json()).then(resp=>{

if(resp.success===1){
ToastAlert('toastAlert1','Successful',3000)
setUpdateTrigger(updateTrigger+=1)

}else{
  ToastAlert('toastAlert2','not successful',3000)
}



})


}

  useEffect(()=>{
    if(cookies.user===undefined){
ToastAlert('toastAlert2','Not logged in',3000)
window.location.href='/pages/about'

    }else{
      
      fetch(`/getTradingDetails/${cookies.user.contact}`).then(res=>res.json()).then((resp)=>{
  
        if(resp.length===0){
          
          setTraderAccBal(0)
          
        }else{

          let traderDetailsObj=resp[0]
          
          setTraderAccBal(traderDetailsObj.accBal)
          setTraderCashOutBal(traderDetailsObj.cashOutBal)
          setTraderContact(traderDetailsObj.contact)
          setTraderName(traderDetailsObj.name)
        if(traderDetailsObj.deliveryService.isAvailable==true){
          setDeliveryServiceAvailability('You are available, you will now receive orders')
        }else{
          setDeliveryServiceAvailability('You are not available, you will not receive orders')
        }
          
          if(traderDetailsObj.freeSmsObj.allowFreeSmsSending===1){
            setAllowPeopleToSendFreeSmsValue('Yes')
          }else{
            setAllowPeopleToSendFreeSmsValue('No')
          }
     setFreeSmsNoticeValue(traderDetailsObj.freeSmsObj.freeSmsNotice)
  
        }
  
  
    }
        
  
    )  
  
   
    
    fetch(`/collection_controls`).then(res=>res.json()).then(res=>{
       
      setTraderNotice(res[0].traderNotice)
  
    })
    
     
    
  
    }


},[updateTrigger])


  

return(
<div class="componentPadding">

<div class="row" >
<div class="col-md-3" ></div>
<div class="col-md-6" >
  <p></p>
  
<div class="row">
  <div class="col-7"><div style={{background:"white",padding:"7px"}}>{traderNotice}</div></div>
  <div style={{textAlign:"right"}} class="col-5"><div class="btn btn-warning" >
<span style={{fontSize:"12px"}}><span style={{fontSize:"15px", fontWeight:"bold"}}>Cash out:</span> <span>{traderCashOutBal} shs</span></span>
</div></div>
</div>






<p></p>


    {/* <form >
      
      <div class="bold">Delivery service</div>
      <div class="light">Turn on or off your visibility</div>
    <div style={{textAlign:"left",paddingTop:"5px",fontSize:"14px"}}>{deliveryServiceAvailability}</div>
    <div class="status">{deliveryServiceAvailabilityStatus}</div>
<div style={{width:"100%"}} class="btn btn-success"
onClick={()=>{
  setDeliveryServiceAvailabilityStatus('Changing.....')
  fetch('/updateTraderDetails',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({method:'updateAsKayaser',argsObj:{traderContact:parseInt(cookies.user.contact),fieldToUpdate:'isAvailable',updateValue:'notApplicable'}

    }) 
}).then(res=>res.json()).then(resp=>{
  if(resp.success==true){
    setDeliveryServiceAvailabilityStatus('Successful')
  }else{
    setDeliveryServiceAvailabilityStatus('Try again.')
  }
})
}}
>Change</div>
    </form> */}



    <div  >
     
<p></p>
     {/* <form id="traderSettingsForm">
     <div class="bold" >Free SMS settings</div>
         <div class="mb-3">
         <div style={{padding:"5px"}}>People can send free SMS through your account: <span style={{color:"red"}}>{allowPeopleToSendFreeSmsValue}</span> | <span  style={{color:"green"}} onClick={()=>{
                        
         if(allowPeopleToSendFreeSmsValue==='Yes'){
           UpdateTraderDetails({method:"updateAsKayaser",argsObj:{traderContact:parseInt(cookies.user.contact),fieldToUpdate:'allowFreeSmsSending',updateValue:0}})
         }else{
           UpdateTraderDetails({method:"updateAsKayaser",argsObj:{traderContact:parseInt(cookies.user.contact),fieldToUpdate:'allowFreeSmsSending',updateValue:1}})
         }
         
         
                  
       
         }}>Change</span>
       
         
         
         </div>
         <div style={{padding:"5px",paddingBottom:"8px"}}>Current Free SMS notice: <span style={{color:"red"}}>{freeSmsNoticeValue}</span> | <span  style={{color:"green"}} onClick={()=>{
     
     
     UpdateTraderDetails({method:"updateAsKayaser",argsObj:{traderContact:parseInt(cookies.user.contact),fieldToUpdate:'freeSmsNotice',updateValue:document.getElementById('traderSettingsForm').freeSmsNoticeMessage.value.trim()}})
     
     
     
     
     }}>Change</span>
     
     
     
     </div>
     <textarea rows="3" type="text" class="form-control" autoComplete="off" name="freeSmsNoticeMessage" placeholder='Type your new notice message here'></textarea>
     
     
     
     
     
       </div>
       
         </form>
          */}
     
     
     
     
         </div>

    </div>
    <div class="col-md-3" ></div>
    
</div>











<div>

</div>

</div>




)




}





export default TradingHome



