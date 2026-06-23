
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

<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-warning">Vacists 2026</div></Link>
<Link to={'/pages/attendanceregs/myregisters'}><div class="btn btn-sm btn-success">Bulk SMS</div></Link>


</div>
             <p></p>
               <MessageComponent  message="Use the menu at the top to explore more products and services. Incase a page is not responsive, it means it is undergoing maintenance"/>
               {/* <MessageComponent  message="Tap menu or look at the menu above and select an option"/> */}
                </div>
               </div>
               <div class="col-md-3"></div>
            </div>
        </div>
    )
}

export default Homepage