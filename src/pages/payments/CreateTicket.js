
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post, MessageComponent } from '../Functions';
import {useCookies} from 'react-cookie'
import {LoginPage} from '../LoginPage'
import { PaymentsNav } from './PaymentsNav';
export function CreateTicket(){
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
let [status,setStatus]=useState(''), ticketServiceFee=1000



return(
    <div class="componentPadding">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
{(()=>{
if(cookies.user){
    
    return(
    
        <div>
        <div class="pageLabel">Create tickets</div>
            <div class="pageDescription">Create tickets that people will buy</div>
    
           <PaymentsNav/>
    
    <p></p>
            <form  method="post" id="createTicketForm" action="#">
          
            <div class="formInputLabel">Tickets name (word or statement to identify these tickets)</div>
          <input type="text" class="form-control" name='ticketId' autoComplete="off" /><p></p>
          <div class="formInputLabel">Number of tickets to be created</div>
          <input type="text" class="form-control" name='noOfTickets' autoComplete="off" /><p></p>
          
            <div class="formInputLabel">Amount to be paid for each ticket</div>
            <div style={{padding:"2px",color:"green",fontSize:"12px"}}>{ticketServiceFee} shs will  automatically be added as a service charge for every ticket</div>
          <input type="text"  name='amount' class="form-control" autoComplete="off" /><p></p>
          <div class="status">{status}</div>
    
          <div   class="btn btn-success" style={{width:"100%"}}  onClick={()=>{
            
            let form=document.getElementById('createTicketForm'), 
            ticketId=form.ticketId.value.trim(), 
            amount = form.amount.value.trim(),
            noOfTickets = form.noOfTickets.value.trim()
if(Array.from(ticketId).length<1){

    
    ToastAlert('toastAlert2','Enter a ticket Id',3000)
}

else if(Array.from(ticketId).includes("'")){
    ToastAlert('toastAlert2',"Do not use apostrophes when creating a ticket ID",3000)
} 

else if(Array.from(noOfTickets).includes(',')){
    
    ToastAlert('toastAlert2','Enter number of tickets without commas',3000)
}  else if((noOfTickets>0)===false) {
    ToastAlert('toastAlert2','Enter number of tickets greater than 0',3000)  
}

else if(Array.from(amount).includes(',')){
    ToastAlert('toastAlert2','Enter an amount without commas',3000)
}  else if((amount>0)===false) {
    ToastAlert('toastAlert2','Enter an amount greater than 0',3000)  
}
else {
setStatus('Please wait......')
   let payLoad={
ticketId:ticketId,
amount:parseInt(amount)+ticketServiceFee,
noOfTickets:parseInt(noOfTickets),
ticketOwner:cookies.user.contact,
payments:[]

   }
 
   Post('/createTicket',payLoad).then(resp=>{
        setStatus(resp.msg)
    })
}
        
          }}>Create</div><p></p>
          
           </form>
        </div>)
}else{
    return(<div>
     <MessageComponent message="Please log in first"/>
    </div>)
}
})()}

            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
)



}

export default CreateTicket