
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post, GetTradingDetails, MessageComponent, DepositPopupAlert } from '../Functions';
import {LoginPage} from '../LoginPage'
import {useCookies} from 'react-cookie'
import { PaymentsNav } from './PaymentsNav';

export function MakePayment(){
    const [cookies]=useCookies(['user'])
    let [ticket,setTicket]=useState('')
    let [ticketDetails,setTicketDetails]=useState('')
    let [searchStatus,setSearchStatus]=useState('')
    let [payStatus,setPayStatus]=useState('')
    let [searchSuccessful,setSearchSuccessful]=useState(false)
    let paymentDetails={}
    const [showDepositPopupAlert, setShowDepositPopupAlert] = useState(false); 



return(<>


<div class="componentPadding">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        {(()=>{
    if(cookies.user){

        return(
        
        <div>
            <div class="pageLabel">Buy a ticket</div>
            <div class="pageDescription">Search for tickets and pay</div>  
          
        <PaymentsNav/>
          <p></p>
    
            <form  method="post" id="makePaymentForm" action="#">
          
            <div class="bold formInputLabel">Search for a ticket</div>
          <input type="text" name='ticketId' class="form-control" placeholder='Ticket name' autoComplete="off" /><p></p>
          
          
          
    
    
    <div class="status">{searchStatus}</div>
    
          <div style={{width:"100%"}} class="btn btn-success"
          
          onClick={()=>{
            let form=document.getElementById('makePaymentForm'),ticketId=form.ticketId.value.trim()
            
            if(Array.from(ticketId).length<1){
    
        
                ToastAlert('toastAlert2','Enter a ticket name then search',3000)
            } else{
                setSearchStatus('Please wait...')
            Post('/getTicketDetails',{ticketId:ticketId}).then(resp=>{
                
                if(resp.length==0){
                    setSearchStatus('Ticket name does not exist')
                }else{
                    setSearchStatus('')
    let ticketDetails=resp
    setTicketDetails(resp[0])
    setTicket(ticketDetails.map((ticket)=>(
    <div>
    
    <div>
    <div style={{fontSize:"20px",fontWeight:"600"}}>{ticket.ticketId}</div>
    <div style={{fontSize:"14px"}}>Amount: {ticket.amount +' shs'}</div>
    <div style={{fontSize:"14px"}}>Tickets left: {ticket.noOfTickets - ticket.payments.length}</div>
    <div style={{fontSize:"14px"}}>Contact: 0{ticket.ticketOwner}</div>
    </div>
    
    </div>
    )))
    setSearchSuccessful(true)
    
                }
    
    
            })
            }
            
           
    
    
    
          }}
          >Search</div>
                            
                 <div style={{paddingTop:"5px",paddingBottom:"3px"}}> {ticket} </div>
    <p></p>
    <div class="bold formInputLabel">Create a payment secret (Any word)</div>
    <div class="light">Don't forget the payment secret. You will be asked for it to confirm your payment.</div>
                 <input type="text" name='paymentSecretCode' class="form-control" autoComplete="off" /><p></p>
    <div class="status">{payStatus}</div>
           <div  style={{width:"100%"}} class="btn btn-success"
           onClick={()=>{
         
                
            let form=document.getElementById('makePaymentForm'),paymentSecretCode=form.paymentSecretCode.value.trim()
            if(searchSuccessful===false){
                ToastAlert('toastAlert2','Search before making a payment',3000)
            }else{
    
    paymentDetails.ticketId=ticketDetails.ticketId
    paymentDetails.amount=ticketDetails.amount
    paymentDetails.name=cookies.user.name
    paymentDetails.paymentApproved=false
    paymentDetails.paymentSettled=false
    paymentDetails.contact=cookies.user.contact
    if(Array.from(paymentSecretCode).length<3){
        ToastAlert('toastAlert2','Create a payment secret code of atleast 3 characters',4000)
    }else{
        setPayStatus('Please wait......')
        paymentDetails.paymentSecretCode=paymentSecretCode
        
        GetTradingDetails(cookies.user.contact).then(traderDetails=>{
            
            if(traderDetails.accBal<paymentDetails.amount){
    
                setShowDepositPopupAlert(true)  
            }else{
    
                setPayStatus('Paying........')
                Post('/payForTicket',paymentDetails).then(resp=>{
                    setPayStatus(resp.msg)
                })
    
            }
           


        })
    }
            }
           
            
           }}
           
           >Buy now</div><p></p>
          
           </form>
    
         
    
        </div>
       
   
        )

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
    <DepositPopupAlert alertHeading={`Low account balance. Deposit what's enough for this ticket.`} showDepositPopupAlert={showDepositPopupAlert} closeDepositPopupAlert={()=>{setShowDepositPopupAlert(false)}} message="" />
</div>

</>)



}

export default MakePayment