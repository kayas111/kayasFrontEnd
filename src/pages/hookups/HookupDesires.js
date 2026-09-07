import { AddYourDesirePopupAlert, MessageComponent } from "../Functions"
import { useEffect, useState } from "react"
import {useCookies} from 'react-cookie'

export function HookupDesires(){
    const [cookies,removeCookie]=useCookies(['user'])
const [showAddYourDesirePopupAlert,setShowAddYourDesirePopupAlert]=useState(false)
const [hookupDesires,setHookupDesires]=useState()

useEffect(()=>{
    fetch('/getHookupDesires').then(resp=>resp.json()).then(resp=>{
        setHookupDesires(resp)
    })
},[])

    return(
    <div class="componentPadding">
        <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          
                
                
        <div class="pageLabel">Hookup desires         
            </div> 
            <div class="pageDescription">Add your desire. Some one interested in your desire will contact you. </div>
            
                   
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
    return(<>

        {(()=>{
          return ( hookupDesires.map(hookupDesire=>{
                return(<>
                
               <div class="hookupDesireContainer1">
               <div class="hookupDesireContainer2">
               <div class="flexDisplayWithGap"><div class="hookupDesireName">{hookupDesire.name} </div> <div class="hookupDesireGenderDiv">{(()=>{
                if(hookupDesire.gender=='female'){
                    return(<span class="hookupDesireFemaleGender">Female</span>)
                } else if(hookupDesire.gender=='male'){
                    return(<span class="hookupDesireMaleGender">Male</span>)
                }
             else{;}
               })()}</div></div>
                <div class="hookupDesire">{hookupDesire.hookupDesire}</div>
                <div> <span class="hookupDesireContact">0{hookupDesire.contact}</span></div>
               
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