import { useState } from "react"
import { GetTradingDetails, MessageComponent, ToastAlert,Post } from "../Functions"
import { useCookies } from "react-cookie"


export function Invite(){
    const [status,setStatus]=useState('')
    const [cookies,setCookie, removeCookie]=useCookies(['user'])
  

    if(cookies.user==undefined){
        return(
           <div style={{paddingTop:"80px"}} class="componentPadding">
            <MessageComponent  message="You need to log in"/>
           </div>
        )
    }else{  return(
        <div class="componentPadding">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="pageLabel">Recommend a person to Kayas</div><p></p>
                    <form method="post" id="inviteForm">
   

   <div class="mb-3">
   <div class="formInputLabel">Contact to recommend</div>
   
   
   <input type="text" class="form-control" autoComplete="off" name="contact"  ></input>
 <br></br>

 <div class="status">{status}</div>
 <div class="btn btn-success fullButtonWidth"
 onClick={()=>{
    let form=document.getElementById("inviteForm"), contact=form.contact.value.trim()
    if(Array.from(contact).length != 10){
        ToastAlert('toastAlert2',"Contact must be 10 digits",2000)
    }else{
        setStatus("Please wait.......")
GetTradingDetails(parseInt(contact)).then(resp=>{
    let recommendee=resp
    if(recommendee==undefined){
       let payLoad={
       
        recommenderName: cookies.user.name,
        recommenderContact: cookies.user.contact,
       recommendeeName:undefined,
        recommendeeContact:parseInt(contact)
      }



Post('/invite',payLoad).then(resp=>{
    
    if(resp.success==true){
        setStatus("Recommendation successful")
    }else{
        ToastAlert('toastAlert2',`${resp.msg}`,3000)
        setStatus("")
    }
})
        
     } else{
        ToastAlert("toastAlert2",`This person already has an account with Kayas. Recommend another person`,4000)
        setStatus("")
    }
})
    }
 }}
 >Invite</div>

 </div>
 </form>
                    
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
    )}
}

export default Invite