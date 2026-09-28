
import React, { useEffect, useState } from 'react'
import { CreditTraderAccountBalance, GetControlVariables, GetTradingDetails, MessageComponent } from './Functions'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'

export function Homepage(){
    let parameters=useParams()
    const [traderDetails,setTraderDetails]=useState()
    const [milegeWhatsAppGroupLink,setMilegeWhatsAppGroupLink]=useState()
    const [makerereUpdatesWhatsAppGroupLink,setMakerereUpdatesWhatsAppGroupLink]=useState()
    let homepageAdvertPaymentAmmount=1

useEffect(()=>{
    GetControlVariables(['milegeWhatsAppGroupLink','makerereUpdatesWhatsAppGroupLink']).then(resp=>{
        
        setMilegeWhatsAppGroupLink(resp.milegeWhatsAppGroupLink)
        setMakerereUpdatesWhatsAppGroupLink(resp.makerereUpdatesWhatsAppGroupLink)  
    })



    if(parameters){
      
        let contact=parameters.contact



if(contact){
if(Array.from(contact).length <9 || Array.from(contact).length > 10){
    ;
} else {

 
contact=parseInt(contact)
GetTradingDetails(contact).then(resp=>{
if(resp.length==0){
    ;
}else{
    
    
setTraderDetails(resp)



if(resp.permissionTokensObj.allowedToEarnFromKayas==true) {
 
CreditTraderAccountBalance(contact,homepageAdvertPaymentAmmount).then(resp=>{
    ;
})






}else{;}



}
})





}
}


       
        
    }
    



},[])


    return(
        <div class="componentPadding">
            <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
               
             <div style={{paddingTop:"20px"}}>  

{(()=>{
    if(traderDetails){
       if(traderDetails.contact!=703852178 && traderDetails.permissionTokensObj.allowedToEarnFromKayas==true){
        return(<>
            <div style={{textAlign:"center"}}>
                <div style={{fontSize:"13px"}}><span style={{border:"1px solid orange",padding:"4px"}}>Kayas in partnership with {traderDetails.name}</span> </div>
               
            </div>
            </>)
       }
    }
})()}
<div style={{paddingTop:"30px"}}></div>
                
             <div style={{textAlign:"center"}}>
                <div style={{padding:"20px"}}>
                    
                <div class='light'>Welcome!</div>
                    <div class="pageLabel" style={{textAlign:"center"}}>Select an option</div>
             </div>
          
            
             
             </div>

<div class="flexDisplayWithGap" style={{justifyContent:"center"}}>
<Link to={'/pages/makerereposters/makerereposters'}><div class="btn btn-sm btn-warning">Makerere posters</div></Link>
<Link to={'/pages/hookups/hookupdesires'}><div class="btn btn-sm btn-success">Hookups</div></Link>
<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Makerere Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-success">Makerere updates</div></Link>

<Link to={'/pages/payments/paymentshomepage'}><div class="btn btn-sm btn-success">Tickets</div></Link>
<Link to={'/pages/attendanceregs/myregisters'}><div class="btn btn-sm btn-success">Bulk SMS</div></Link>
<Link to={'/pages/airbnbs/airbnbshome'}><div class="btn btn-sm btn-success">Short term accommodation <div style={{fontSize:"12px"}}>
   (Air BnBs)</div></div></Link>
{/* <Link to={'/pages/hookups/hookupdesires'}><div class="btn btn-sm btn-success">Hookups</div></Link> */}
<a href={milegeWhatsAppGroupLink}><div class="btn btn-sm btn-success">Milege WhatsApp group</div></a>
<a href={makerereUpdatesWhatsAppGroupLink}><div class="btn btn-sm btn-success">Makerere WhatsApp group</div></a>
</div>
      
               <div style={{paddingTop:"40px"}}><MessageComponent  message="Use the menu at the top to explore more products and services. Incase a page is not responsive, it means it is undergoing maintenance"/></div>
               
                </div>
               </div>
               <div class="col-md-3"></div>
            </div>
        </div>
    )
}

export default Homepage