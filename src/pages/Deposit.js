import { useState } from "react"
import { IsLoggedIn, ToastAlert } from "./Functions"
import { useCookies } from "react-cookie"

export function Deposit(){
const [status,setStatus]=useState('')
const [cookies,setCookie, removeCookie]=useCookies(['user'])
return(
    <div style={{padding:"5px"}}>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            <div class="pageLabel">Deposit</div>
            <div class="pageDescription">Deposit money to your Kayas account</div>
      

<p></p>
            <form method="post" id="depositForm">
   

     <div class="mb-3">
     <div class="formInputLabel">Any number to deposit from</div>
     <div style={{color:"green",fontSize:"12px"}}>You will approve with a mobile money PIN from the number you enter</div>
     
     <input type="text" class="form-control" autoComplete="off" name="contact"  ></input>
   <br></br>
  <div class="formInputLabel">Amount</div>
   <input type="text" class="form-control" autoComplete="off" name="amount" ></input>
 
   
  
     </div>
      <div class="status">{status}</div>
     <div onClick={
      ()=>{

        
  
if(IsLoggedIn(cookies)==true){
    let beneficiary={}
    beneficiary.name=cookies.user.name
    beneficiary.contact=cookies.user.contact
    
    let form=document.getElementById("depositForm"), contact=form.contact.value.trim(), amount=parseInt(form.amount.value.trim().replace(/,/g, ''))
        if(Array.from(contact).length<10 || Array.from(contact).length>10){
console.log(amount)
ToastAlert('toastAlert2','Enter contact of 10 digits',3000)

} 
 else if(amount<500){

        ToastAlert('toastAlert2','Minimum deposit is 500/=',4000)
        
        
        
        }
    
    //if (Array.from(contact)[2]==0 || Array.from(contact)[2]==4 || Array.from(contact)[2]==5 )
   
else {



setStatus('Please wait.....')
let payLoad={
    payerNo:parseInt(document.getElementById("depositForm").contact.value.trim()),
    amount:amount,
    beneficiary:beneficiary,
    paymentReason:'depositToKayasAccount'
           }
  
           
   fetch('/makePayment',{
       method:"post",
       headers:{'Content-type':'application/json'},
       body:JSON.stringify(payLoad) 
   }).then(res=>res.json()).then((resp)=>{
     window.location.href=resp.redirectUrl
   }
       

   )
 
 
}

// else{
//     ToastAlert('toastAlert2','The contact must be an airtel number.',4000)  
// }
}else{
    ;
}
      } 

     } class="btn btn-success" style={{width:"100%"}}><span class="fa fa-money"></span> Deposit</div><p></p>
    
     </form>


            </div>
            <div class="col-md-3"></div>
        </div>
        
    </div>
)



}export default Deposit