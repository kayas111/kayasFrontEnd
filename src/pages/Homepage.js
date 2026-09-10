
import React, { useEffect, useState } from 'react'
import { GetControlVariables, MessageComponent } from './Functions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export function Homepage(){
    const [milegeWhatsAppGroupLink,setMilegeWhatsAppGroupLink]=useState()
    const [makerereUpdatesWhatsAppGroupLink,setMakerereUpdatesWhatsAppGroupLink]=useState()

useEffect(()=>{
    GetControlVariables(['milegeWhatsAppGroupLink','makerereUpdatesWhatsAppGroupLink']).then(resp=>{
        console.log(resp)
        setMilegeWhatsAppGroupLink(resp.milegeWhatsAppGroupLink)
        setMakerereUpdatesWhatsAppGroupLink(resp.makerereUpdatesWhatsAppGroupLink)  
    })
},[])


    return(
        <div class="componentPadding">
            <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
               
             <div style={{paddingTop:"80px"}}>  
                
             <div style={{textAlign:"center"}}>
                <div style={{padding:"20px"}}><div class="pageLabel" style={{textAlign:"center"}}>Welcome</div>
             <div class='light'>Select your choice</div></div>
          
            
             
             </div>

<div class="flexDisplayWithGap" style={{justifyContent:"center"}}>

<Link to={'/pages/hookups/hookupdesires'}><div class="btn btn-sm btn-success">Hookups</div></Link>
<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Makerere Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-success">Makerere updates</div></Link>
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