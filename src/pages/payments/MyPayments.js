
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post, GetTradingDetails, MessageComponent } from '../Functions';
import {LoginPage} from '../LoginPage'
import {useCookies} from 'react-cookie'
import { PaymentsNav } from './PaymentsNav';

export function MyPayments(){
    const [cookies]=useCookies(['user'])
    let [myPayments,setMyPayments]=useState()
    
 useEffect(()=>{
   if(cookies.user){
    Post('/getMyPayments',{contact:cookies.user.contact}).then(resp=>{
        let myPayments=resp.reverse()
        setMyPayments(myPayments)
    }) 
   }
 },[])


return(<>
<div class="componentPadding">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            {(()=>{
 if(cookies.user){
    return(<>
        {(()=>{
            if(myPayments){
                if(myPayments.length==0){
                    return (
          
                        <MessageComponent message="No payments made."/>
                     
                    )
                }else{
        return(<> 
         <div class="pageLabel">Tickets bought</div>
                    <div class="pageDescription">A list of all your payments both valid and expired</div>
                    
               <PaymentsNav/>
            
                    <p></p>
        
        {(()=>{
         return(myPayments.map((paymentDetail)=>(
            <div class="divContainer1">
        <div class="divContainer1Inner">
        <div style={{fontSize:"15px",fontWeight:"600"}}>{paymentDetail.ticketId} </div>
        <div>Payment secret: {paymentDetail.paymentSecretCode}</div>
        <div>Amount paid: {paymentDetail.amount} shs</div>
        
        <div style={{paddingTop:"3px"}}>
        
        {(()=>{
        if(paymentDetail.paymentApproved==true){
        return(<span style={{background:"red",borderRadius:"2px",padding:"3px",color:"white"}}>Expired</span>)
        }else{
        return(<span style={{background:"green",borderRadius:"2px",padding:"3px",color:"white"}}>Valid</span>)
        }
        })()}
        
        
        
        
        
        </div>
        </div>
        
            </div>
           )))
        
        })()}
        
        
        </>)
                  
        
        
                }
        
        
        
            }else{
                return (
          
                    <MessageComponent message="Loading please wait ......"/>
                 
                )
            }
        })()}
        </>)
 }else{
return (
  
    <MessageComponent message="Use the login button at the top and login first"/>
 
)
 }
            })()}
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
</>)



}

export default MyPayments