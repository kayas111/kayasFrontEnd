
import React from 'react'
import { MessageComponent } from './Functions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export function Homepage(){
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

<Link to={'/pages/products/productslist'}><div class="btn btn-sm btn-success">Phones & Laptops</div></Link>
<div class="btn btn-sm btn-warning" onClick={()=>{
              window.location.href="https://wa.me/256703852178?text=Kindly%20share%20with%20me%20the%20campus%20shopping%20guide"
            }}>Campus shopping guide</div>
<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Makerere Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-warning">Freshers information portal</div></Link>
<Link to={'/pages/attendanceregs/myregisters'}><div class="btn btn-sm btn-success">Bulk SMS</div></Link>


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