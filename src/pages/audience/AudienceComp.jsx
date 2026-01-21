
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useState, useEffect } from "react"

    import {useCookies} from 'react-cookie'
import { Post, TrimExtraSpaces, MessageComponent, ToastAlert } from "../Functions"
import { audienceSmsCost } from "../../Variables"
export function AudienceComp(){
  const [cookies]=useCookies(['user'])
  let Params=useParams()
  Params.audienceName=TrimExtraSpaces(Params.audienceName)
  let [viewFactors,setViewFactors]=useState({})
    let {contact,categoryId}=useParams(),payLoad={contact:parseInt(contact),categoryId:parseInt(categoryId)}
  let [audienceName,setAudienceName]=useState(''),[followerDoc,setFollowersDoc]=useState({}),
  [noOfFollowers,setNoOfFollowers]=useState(''),[updateFollowersStatus,setUpdateFollowersStatus]=useState('')
  const[charLength,setCharLength]=useState('0'),maxCharLength=150
  const [audience,setAudience]=useState('')
  const [refresh,setRefresh]=useState(0)
  const [status,setStatus]=useState('')
  
  
  
useEffect(()=>{
  
   
    let payLoad={method:'getAudience',args:{audienceName:Params.audienceName}}
    
  Post('/AudiencePostRequest',payLoad).then(resp=>{
    if(resp.length==0){
      viewFactors.audiencePresent=false
      setViewFactors(viewFactors)

    }else{
      let audience=resp[0]
      
      setAudience(audience)
      
      viewFactors.audiencePresent=true

setAudienceName(Params.audienceName)
setNoOfFollowers(`${audience.followers.length} followers`)


   
    }
  })
  
 
  
  },[refresh])


  return(
 
<div class="row">
  <div class="col-md-3"></div>
  <div class="col-md-6"> <div class="componentPadding">
    {
       (()=>{
        if(viewFactors.audiencePresent==true){
         return(<div>
 <div class="pageLabel">{audienceName}</div>
 

{(()=>{
 if(cookies.user!==undefined && parseInt(cookies.user.contact)==parseInt(audience.contact)){
  
  return(<div>
    <div class="light" style={{paddingTop:"3px"}}><span class="btn hoverEffect1" style={{padding:"3px",fontSize:"12px",color:"white",background:"black",borderRadius:"2px"}}>{noOfFollowers}</span></div>
        <p></p>
        
         <form id="audiencePostMessageForm" method="post">
         <div style={{paddingBottom:"5px"}}><div class="bold">Send message</div></div>
         
         <div class="mb-3">
         <div style={{fontSize:"12px",paddingTop:"5px",paddingBottom:"5px"}}>Maximum message length = <span style={{color:"red",fontSize:"15px"}}>{maxCharLength}</span> characters.<br></br><span style={{color:"red",fontSize:"15px"}}>{charLength}</span> characters typed.</div>
        <p></p> <textarea type="text" class="form-control" autoComplete="off" name="msg" required rows="6" placeholder='Type message' onChange={()=>{
    setCharLength(Array.from(document.getElementById("audiencePostMessageForm").msg.value.trim()).length)
  }}></textarea>
          </div>
         <div class="status">{status}</div>
         <div  class="btn btn-success fullButtonWidth" onClick={()=>{
let form=document.getElementById('audiencePostMessageForm'), message=TrimExtraSpaces(form.msg.value)

if(Array.from(message).length<1){
  ToastAlert('toastAlert2','Type a message',3000)
}else if(Array.from(message).length>maxCharLength){
  ToastAlert('toastAlert2',`Message is longer than ${maxCharLength} characters`,3000)
}else{
  
  if(window.confirm("Select 'OK' to confirm and send the message")==true){
    ToastAlert('toastAlert1','Please wait for confirmation message......',6000)
let payLoad={method:'sendMessageToAudience',args:{message:message+' #KayasSMS',audienceName:Params.audienceName,audienceSmsCost:audienceSmsCost}}

Post('/AudiencePostRequest',payLoad).then(resp=>{
  if(resp.NoEligibleReceipients==true){
    ToastAlert('toastAlert2','No follower has enough credit on their account to receive an SMS message.',7000)
    setStatus('')
  } else

  if(resp.NoFollowers==true){
    ToastAlert('toastAlert2',`Audience has no followers. First attain followers then try again`,6000)
    setStatus('')
  
  }
  
  
  else

if(resp.success==1){
  ToastAlert('toastAlert1',`Message sent to ${resp.NoOfReceipients} receipient(s)`,6000)
  setStatus('')

}else{
  ToastAlert('toastAlert2','Not sent. Try again or contact Kayas 0703852178',6000)
  setStatus('')
}
})
  }else{;}


}

         }}>Send</div>
         
         </form>
         <p></p>
         <div    class="btn btn-danger fullButtonWidth">Delete audience</div>
         
        
 
  
  
  
  
  
    </div>)
}else{
  
return(<div>



 
  {(()=>{
    
    if(cookies.user==undefined){return (
<div>
  <p></p>
  <MessageComponent message="You need to be logged in"/>
</div>

    )}
    else {


  return(<div>
    <div style={{paddingTop:"12px"}}>
      <div style={{border:"1px solid red",padding:"3px",color:"red"}}>Free trial ends on 31st October. After the free trial, only followers who have atleast 60/= on their Kayas accounts will continue to receive SMS messages on their phone numbers.</div>
    </div>
<div style={{paddingTop:"15px"}} class="light">Tap "Follow" to receive SMS messages from this audience to your phone number.
Each time an SMS reaches your phone number, {audienceSmsCost}/= will  be deducted automatically from your Kayas account. You won't receive any SMS message from any audience that you follow if your Kayas account balance is less than {audienceSmsCost}/=. Tap menu to deposit to your account if necessary.

</div>
 <p></p>

{
  (()=>{
    
return(<div>

  {
    (()=>{
      if(audience.followers.find(follower=>follower.contact==cookies.user.contact)==undefined){
          
          
        return(<div class="btn btn-success fullButtonWidth" onClick={()=>{
          ToastAlert('toastAlert1','Following......',2000)
          let {name,contact}=cookies.user
          Post('/AudiencePostRequest',{method:"followAnAudience",args:{audienceName:Params.audienceName,name:name,contact:contact}}).then(resp=>{
        if(resp.modifiedCount==1){
          
        setRefresh(prev=>prev+1)
        
        
        }else{;}
          })
          
        }}>Follow</div>)
        
              }else{
                
                return(<div class="btn btn-danger fullButtonWidth" onClick={()=>{
                  ToastAlert('toastAlert2','Unfollowing......',2000)
                  let {name,contact}=cookies.user
                  Post('/AudiencePostRequest',{method:"unfollowAnAudience",args:{audienceName:Params.audienceName,name:name,contact:contact}}).then(resp=>{
                if(resp.modifiedCount==1){
                  
                setRefresh(prev=>prev+1)
                
                }else{;}
                  })
                
                }}>Unfollow</div>)
                
              }
    })()
  }
  
  <div style={{paddingTop:"30px"}}>
  <MessageComponent message="Advise more friends of similar interests to follow this audience too"/>
  </div>
  </div>)
  })()
}






  </div>)  


    }
    
  })()}

<p></p>





</div>)
}
})()}
          

         </div>)
          
        
         }
      
         if(viewFactors.audiencePresent==false){
      return(
        <div><MessageComponent message="Audience does not exists"/></div>
      )
         }

         
       })()
    }
  </div></div>
  <div class="col-md-3"></div>
</div>

  )


}
  

  export default AudienceComp