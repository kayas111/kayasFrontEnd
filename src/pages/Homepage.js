
import React from 'react'
import { MessageComponent } from './Functions'

export function Homepage(){
    return(
        <div class="componentPadding">
            <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
               
             <div style={{paddingTop:"120px"}}>  
                
             <div class="pageLabel">Welcome</div><p></p>
               
               <MessageComponent  message="Use the menu at the top to explore Kayas. Incase a page is not responsive, it means it is undergoing maintenance"/>
               {/* <MessageComponent  message="Tap menu or look at the menu above and select an option"/> */}
                </div>
               </div>
               <div class="col-md-3"></div>
            </div>
        </div>
    )
}

export default Homepage