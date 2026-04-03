
import React from 'react'
import { MessageComponent } from './Functions'

export function Homepage(){
    return(
        <div class="componentPadding">
            <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
               
             <div style={{paddingTop:"120px"}}>  
                
             <div class="pageLabel">Allowed users only</div><p></p>
               
               <MessageComponent  message="Only those permitted to use the system are allowed because the system is undergoing recovery maintenace."/>
               {/* <MessageComponent  message="Tap menu or look at the menu above and select an option"/> */}
                </div>
               </div>
               <div class="col-md-3"></div>
            </div>
        </div>
    )
}

export default Homepage