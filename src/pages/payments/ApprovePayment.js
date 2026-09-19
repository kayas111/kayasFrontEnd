
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post, GetTradingDetails, MessageComponent } from '../Functions';
import {LoginPage} from '../LoginPage'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {useCookies} from 'react-cookie'
import { PaymentsNav } from './PaymentsNav';

export function ApprovePayment(){
    const [cookies]=useCookies(['user'])
    let [ticketId,setTicketId]=useState()
    let [status,setStatus]=useState('')
   let params=useParams()
    
    useEffect(()=>{
        
    Post('/getTicketDetails',{ticketId:params.ticketId}).then(resp=>{

setTicketId(resp)


        

    })


    },[])

return(<>

<div class="componentPadding">

<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
    {(()=>{

if(cookies.user){
       

    if(ticketId){

       

if(ticketId.length==0){
    return(<MessageComponent message="This ticket does not exist."/>)
}else{

let ticket=ticketId[0]

    return(
    
       
        <div >
            <div class="pageLabel">Confirm payment</div>
            <div class="pageDescription">Verify and confirm whether a ticket was paid for</div>
           <PaymentsNav/>
    
    <p></p>
          <div>

{(()=>{

return(<>
 <div style={{paddingTop:"10px",paddingBottom:"10px"}}>
        
           <div id="ticketId" style={{padding:"3px",color:"black",fontSize:"15px",fontWeight:"600",paddingBottom:"4px"}}>{ticket.ticketId}</div>
              
                    <input type="text" id="contact" class="form-control" placeholder='Enter contact of buyer' autoComplete='off' />
               
             <p></p>
           <input type="text" id="paymentSecretCode" class="form-control" placeholder='Payment secret code of buyer' autoComplete='off' />
               
                 </div>

</>)
})()}



          </div>
  
 <div class="status">{status}</div>
    <div class="flexDisplayWithGap">
        <div class="btn btn-sm btn-success"
                    onClick={()=>{
                        
                        let paymentSecretCode=document.getElementById("paymentSecretCode").value.trim(),
                         contact=document.getElementById("contact").value.trim()
                        
                        if(Array.from(contact).length<10 || Array.from(contact).length>10){
                            ToastAlert('toastAlert2','Enter contact of 10 digits starting with zero',3000)
                        } else
                        if(Array.from(paymentSecretCode).length<1){
                            ToastAlert('toastAlert2','Enter a payment secret code to verify',3000)
                        }else{
                            setStatus('Please wait........')
let payLoad={ticketId:document.getElementById('ticketId').innerText.trim(),paymentSecretCode:paymentSecretCode,contact:contact}

Post('/approveticketpayment',payLoad).then(resp=>{
  
    setStatus(resp.msg)
})
                        }
                    }}
                    
                    >Confirm payment</div>  <div class="btn btn-sm btn-danger">Delete tickets</div>
                    </div>
   <div style={{paddingBottom:"100px"}}></div>
   
        </div>
   
        )
}


    }else{
        return(<MessageComponent message="Loading please wait ......."/>)
    }
        
 }else{
    return (
        <div>
        <MessageComponent message="Use the login button on top and first login."/>
        </div>
    )
     }

})()}


        
    </div>
    <div class="col-md-3"></div>
</div>



</div>


</>)





}

export default ApprovePayment