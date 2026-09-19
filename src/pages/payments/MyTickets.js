
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post, MessageComponent} from '../Functions';
import {LoginPage} from '../LoginPage'
import {useCookies} from 'react-cookie'
import { PaymentsNav } from './PaymentsNav';
import {Link} from 'react-router-dom';

export function MyTickets(){
    const [cookies]=useCookies(['user'])
    
    let [myTickets,setMyTickets]=useState()
  
useEffect(()=>{

if(cookies.user){
    Post('/getMyTickets',{contact:cookies.user.contact}).then(resp=>{
        let tickets=resp.reverse()
        setMyTickets(resp)
    })
}




},[])


return(<div class="componentPadding">
    {(()=>{
         if(cookies.user){
    
            return(
            
            <div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="pageLabel">Tickets you created for sale</div>
                <div class="pageDescription"> Select a ticket to confirm payments made for it.</div>
               <PaymentsNav/>
               <p></p>
    
    
    
        <div>{(()=>{
    
    if(myTickets){
    if(myTickets.length==0){
    return (<MessageComponent message="You have no tickets. Please create some."/>)
    
    }else{
    
    return(<>
    
    {(()=>{
      
      
      return (myTickets.map((ticketDetail)=>(
        <div class="divContainer1">
            <Link to={`/pages/payments/approvepayment/${ticketDetail.ticketId}`}>
    <div class="divContainer1Inner">
    <div style={{fontSize:"12px",fontWeight:"600"}}>{ticketDetail.ticketId}</div>
    <div>Tickets sold: {ticketDetail.payments.length}</div>
    <div>Amount per ticket: {ticketDetail.amount} shs</div>
    
    </div>
    </Link>
        </div>
       )))
    
    
    
    
    })()}
    
    
    </>)
    
    
    
    
    }
    
    
    
    
    }else{
        return(
            <>
            <MessageComponent message="Loading please wait......"/>
            </>
        )
    }
    
    
    
    
        })()}</div>
        
         </div>
            <div class="col-md-3"></div>
        </div>
            </div>)
    
     }else{
    return (
        <div>
           <MessageComponent message="Use the login button on top at first login."/>
        </div>
    )
     }
    })()}
</div>)





}

export default MyTickets