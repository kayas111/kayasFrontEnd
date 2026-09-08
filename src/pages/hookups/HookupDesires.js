import { AddYourDesirePopupAlert, MessageComponent, Post, ToastAlert } from "../Functions"
import { useEffect, useState } from "react"
import {useCookies} from 'react-cookie'

export function HookupDesires(){
    const [cookies,removeCookie]=useCookies(['user'])
const [showAddYourDesirePopupAlert,setShowAddYourDesirePopupAlert]=useState(false)
let [hookupDesires,setHookupDesires]=useState()
const [userHookupDesires,setUserHookupDesires]=useState()
const [refresh,setRefresh]=useState('')

useEffect(()=>{
    fetch('/getHookupDesires').then(resp=>resp.json()).then(resp=>{
        let hookupDesires=resp
        hookupDesires.reverse()

if(cookies.user){
   
    setUserHookupDesires(hookupDesires.filter(hookupDesire=>hookupDesire.contact==cookies.user.contact))
    
}


        setHookupDesires(resp)
    })
},[refresh])

    return(
    <div class="componentPadding">
        <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          
                
                
        <div class="pageLabel">Hookup desires <span>{(()=>{
           
            if(hookupDesires){
                return(<>
                ({hookupDesires.length})</>)
            }
        })()}</span> </div> 
            <div class="pageDescription">Add your desire. Some one interested in your desire will contact you and connect with you. </div>
            
                   
            <p></p>
 
            <div style={{marginLeft:"auto"}}> <div class="btn btn-sm btn-warning" onClick={()=>{
                setShowAddYourDesirePopupAlert(true)
            }}>Add your desire</div></div>  <p></p>




           
            {
                (()=>{
                    if(cookies.user){

                        return(
                            <div>
    

{(()=>{
    if(hookupDesires){


if(hookupDesires.find(hookupDesire=>hookupDesire.contact==cookies.user.contact)==undefined){
    return (
        <MessageComponent message="Add your desire before seeing others' desires"/>
    )

}else{
   
    hookupDesires=[
        ...userHookupDesires,...hookupDesires.filter(hookupDesire=>hookupDesire.contact!=cookies.user.contact)
    ]
    return(<>

        {(()=>{
          return ( hookupDesires.map(hookupDesire=>{
                return(<>
                
               <div class="hookupDesireContainer1">
               <div class="hookupDesireContainer2">
                {(()=>{
                    if(hookupDesire.contact==cookies.user.contact){
                        return(<>
                        <div class="hookupDesireName">You</div>
                      
                        </>)
                    }
                })()}


<div class="flexDisplayWithGap">   <div class="hookupDesireGenderDiv">{(()=>{
                if(hookupDesire.gender=='female'){
                    return(<span class="hookupDesireFemaleGender"> <i class="fa-solid fa-venus"></i> Female</span>)
                } else if(hookupDesire.gender=='male'){
                    return(<span class="hookupDesireMaleGender"> <i class="fa-solid fa-mars"></i> Male</span>)
                }
             else{;}
               })()} </div> <div> <span class="hookupDesireContact">0{hookupDesire.contact}</span></div>    </div>
               <div class="hookupDesire">{hookupDesire.hookupDesire}</div>
               <div>
               {(()=>{
                if(hookupDesire.contact==cookies.user.contact){
                    return(<>
                    <div class="btn btn-sm btn-danger" onClick={()=>{


if(window.confirm('Delete your hookup desire?')==true){
    let payLoad={contact:cookies.user.contact}

    Post('/deleteHookupDesire',payLoad).then(resp=>{
    
    if(resp.deletedCount>0){
        setRefresh('refreshAfterDeletion')
    }else{
        ToastAlert('toastAlert2','Try again',3000)
    }
    
    
    
    })
    
}else{;}





  

                    }}>Delete</div>
                  
                    </>)
                }
            })()}
               </div>

               
              
                
               
               </div>
               </div>
               
                </>)
            }))
        })()}
    
    </>)
}


    }else{
        return(
            <MessageComponent message="Please wait......"/>
        )
    }
})()}






                            </div>
                        )

                    }else{
                        return(
                            <MessageComponent message="Please login first."/>
                        )
                    }
                })()
            }





        </div>
        <div class="col-md-3"></div>
        </div>

<AddYourDesirePopupAlert alertHeading="Add your desire" message="Some one interested in your desire will contact you." showAddYourDesirePopupAlert={showAddYourDesirePopupAlert} closeAddYourDesirePopupAlert={()=>{
    setShowAddYourDesirePopupAlert(false)
}} />

    </div>
    )
}export default HookupDesires