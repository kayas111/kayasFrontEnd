
import React from 'react'
import { MessageComponent } from './Functions'

export function Homepage(){
    return(
        <div class="componentPadding">
            <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
               
             <div style={{paddingTop:"120px"}}>  
                
             <div class="pageLabel">This page is unavailable due to ongoing maintenance</div><p></p>
               
               <MessageComponent  message="Use the menu at the top to explore other active pages. We are working hard to see that all pages are restored. Apologies for the inconvenience"/>
               {/* <MessageComponent  message="Tap menu or look at the menu above and select an option"/> */}
                </div>
               </div>
               <div class="col-md-3"></div>
            </div>
        </div>
    )
}

export default Homepage