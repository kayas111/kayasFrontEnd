import { AddYourDesirePopupAlert, MessageComponent, Post, ToastAlert } from "../Functions"
import { useEffect, useState } from "react"
import {useCookies} from 'react-cookie'

export function HookupDesires(){
    const [cookies,removeCookie]=useCookies(['user'])
const [showAddYourDesirePopupAlert,setShowAddYourDesirePopupAlert]=useState(false)
let [hookupDesires,setHookupDesires]=useState()
const [userHookupDesire,setUserHookupDesire]=useState()
const [refresh,setRefresh]=useState('')

useEffect(()=>{
    fetch('/getHookupDesires').then(resp=>resp.json()).then(resp=>{
        let hookupDesires=resp
        hookupDesires.reverse()

if(cookies.user){
   
    setUserHookupDesire(hookupDesires.filter(hookupDesire=>hookupDesire.contact==cookies.user.contact))
    
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
 
            {/* <div style={{marginLeft:"auto"}}> <div class="btn btn-sm btn-warning" onClick={()=>{
                setShowAddYourDesirePopupAlert(true)
            }}>Add your desire</div> </div>  <p></p> */}




           
            {
                (()=>{
                    if(cookies.user){

                        return(
                            <div>
    

{(()=>{
    if(hookupDesires){


if(hookupDesires.find(hookupDesire=>hookupDesire.contact==cookies.user.contact)==undefined && cookies.user.contact!=703852178){
    return (
        <div class="pointerOnHover" onClick={()=>{
            setShowAddYourDesirePopupAlert(true)
        }}><MessageComponent message="Add your desire before seeing others' desires"/></div>
        
    )

}else{
   
    hookupDesires=[
        ...userHookupDesire,...hookupDesires.filter(hookupDesire=>(hookupDesire.contact==undefined)),...hookupDesires.filter(hookupDesire=>(hookupDesire.contact!=cookies.user.contact && hookupDesire.contact!=undefined ))
    ]
    return(<>
<div class="flexDisplayWithGap">

{(()=>{
    if(hookupDesires.find(hookupDesire=>hookupDesire.contact==cookies.user.contact)==undefined && cookies.user.contact==703852178){
        return(<>
        <div>

        <div class="btn btn-sm btn-warning" onClick={()=>{
            setShowAddYourDesirePopupAlert(true)
        }}>Add your desire</div>


        </div>
        </>)
    }
})()}

<div class="btn btn-sm btn-danger" onClick={()=>{
    if(window.confirm('Delete your hookup desire?')==true){
        ToastAlert('toastAlert2','Deleting desire.....',3000)
    let payLoad={contact:cookies.user.contact}

    Post('/deleteHookupDesire',payLoad).then(resp=>{
    
    if(resp.deletedCount>0){
        ToastAlert('toastAlert2','Deleted successfully',3000)
        setRefresh('refreshAfterDeletion')
    }else{
        ToastAlert('toastAlert2','Try again',3000)
    }
    
    
    
    })
    
}else{;}
}}>Delete your desire</div>

</div>
<p></p>
        {(()=>{
          return ( hookupDesires.map(hookupDesire=>{
                return(<>
                
               <div class="hookupDesireContainer1">
               <div onClick={()=>{
               if(hookupDesire.contact==undefined){
                window.alert(`This contact has an error and is not available`)
               }else{
                window.alert(`Contact is: 0${hookupDesire.contact}`)
               }
               }} class="hookupDesireContainer2 pointerOnHover">
                {(()=>{
                    if(hookupDesire.contact==cookies.user.contact){
                        return(<>
                        <span class="hookupDesireName">You</span>
                      
                        </>)
                    }
                })()}


<div class="row">   <div class="col-2 hookupDesireGenderDiv">{(()=>{
                if(hookupDesire.gender=='female'){
                    return(<div class="hookupDesireFemaleGender"> Female</div>)
                } else if(hookupDesire.gender=='male'){
                    return(<div class="hookupDesireMaleGender"> Male</div>)
                }
             else{;}
               })()} </div>
               
               
               <div class="col-10 hookupDesire">{hookupDesire.hookupDesire}</div>
              
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
                            <MessageComponent message="Please login first. Use the login button at the top."/>
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