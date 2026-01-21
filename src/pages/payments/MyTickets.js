
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post} from '../Functions';
import {LoginPage} from '../LoginPage'
import {useCookies} from 'react-cookie'
import { PaymentsNav } from './PaymentsNav';
import {Link} from 'react-router-dom';

export function MyTickets(){
    const [cookies]=useCookies(['user'])
    
    let [myTickets,setMyTickets]=useState('')
  

 if(IsLoggedIn(cookies)==true){
    Post('/getMyTickets',{contact:cookies.user.contact}).then(resp=>{
        
        if(resp.length==0){
            setMyTickets(
                <div style={{paddingTop:"70px",paddingBottom:"70px"}}>
                    <div class="divContainer1">
                    <div class="divContainer1Inner">

                        <div style={{textAlign:"center"}}>You havent created any tickets</div>
                        
                    </div>
                </div>
               

         </div>
            )
        }else{

let ticketDetails=resp.reverse()

          setMyTickets( ticketDetails.map((ticketDetail)=>(
            <div class="divContainer1">
<div class="divContainer1Inner">
<div style={{fontSize:"15px",fontWeight:"600"}}>Ticket ID: {ticketDetail.ticketId}</div>
<div>Number of tickets sold: {ticketDetail.payments.length}</div>
<div>Amount per ticket: {ticketDetail.amount} shs</div>
<Link to={`/pages/payments/approvepayment/${ticketDetail.ticketId}`}><div style={{paddingTop:"3px"}}><div class="button1">Approve a payment</div></div></Link>
</div>

            </div>
           )))



        }
    })
        return(
        
        <div style={{padding:"5px"}}>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="pageLabel">My tickets</div>
            <div class="pageDescription"> Select a ticket to approve a payment made for it.</div>
           <PaymentsNav/>
    
      
            <p></p>
    <div>{myTickets}</div>
    
     </div>
        <div class="col-md-3"></div>
    </div>
        </div>)

 }else{
return (
    <div>
        <LoginPage/>
    </div>
)
 }





}

export default MyTickets