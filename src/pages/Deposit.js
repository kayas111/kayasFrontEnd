import { useEffect, useState } from "react"
import { IsLoggedIn, IsMixedNumbersAndCharacters, ToastAlert } from "./Functions"
import { useCookies } from "react-cookie"

export function Deposit(){
const [status,setStatus]=useState('')
const [charge,setCharge]=useState(515)
const [tcharges,setTCharges]=useState(15)
const [cookies,setCookie, removeCookie]=useCookies(['user'])
const [message,setMessage]=useState('')
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
     <div class="formInputLabel">Enter any number to deposit from</div>
     <div style={{color:"green",fontSize:"12px"}}>You will approve with a mobile money PIN from the number you enter. Incase of poor network, it takes about 5 minutes for the money to reflect on your Kayas account.</div>
     
     <input type="text" class="form-control" autoComplete="off" name="contact"  ></input>
   <br></br>
  <div class="formInputLabel">Amount (Minimum 1000/=)</div>
   
  {(()=>{
       
      
       if(document.getElementById("depositForm")){

                      if(parseInt(document.getElementById("depositForm").amount.value.trim().replace(/,/g, ''))){
            if(parseInt(document.getElementById("depositForm").amount.value.trim().replace(/,/g, ''))==NaN){return null}else{
                return (<div>
    <div style={{paddingTop:"3px",fontSize:"15px",color:"green"}}>{message}</div><p></p>
                </div>)
            }
 
           }else{
            return null
           }


       }else{
        ;
       }
    })()}
    
   <input type="text" class="form-control" autoComplete="off" name="amount" onChange={()=>{

     if(IsMixedNumbersAndCharacters(document.getElementById("depositForm").amount.value.trim())==true){
        ToastAlert('toastAlert2','Enter correct amount',3000)
        document.getElementById("depositForm").amount.value=null
        setMessage('')
        
       } else 
    
  {
    let charge=parseInt(document.getElementById("depositForm").amount.value.trim().replace(/,/g, ''))*1.03
    
    setTCharges(charge-parseInt(document.getElementById("depositForm").amount.value.trim().replace(/,/g, '')))
    
    
 setMessage(`Have atleast ${Math.round(charge)}/= on mobile money because transaction charges will be atleast ${Math.round(charge-parseInt(document.getElementById("depositForm").amount.value.trim().replace(/,/g, '')))}/=`)
    
  }
   
   }} ></input>
 
   
  
     </div>
     
     
     
    
     
     
     <div style={{paddingTop:"3px",fontSize:"15px"}}>Incase of any payment challenges, WhatsApp Kayas on 0703852178</div><p></p>

      <div class="status">{status}</div>
     <div onClick={
      ()=>{

  
if(IsLoggedIn(cookies)==true){
    let beneficiary={}
    beneficiary.name=cookies.user.name
    beneficiary.contact=cookies.user.contact
    
    let form=document.getElementById("depositForm"), contact=form.contact.value.trim(), amount=parseInt(form.amount.value.trim().replace(/,/g, ''))
        
    
    
    if(Array.from(contact).length<10 || Array.from(contact).length>10){

ToastAlert('toastAlert2','Enter contact of 10 digits',3000)

} 
else if(parseInt(cookies.user.contact)!=703852178 && parseInt(contact)==703852178){
    ToastAlert('toastAlert2',"Enter any other contact that has mobile money but not Kayas' contact",5000)
}

else if (Number.isNaN(amount)==true){
    ToastAlert('toastAlert2','Enter correct amount',3000)
}

 else if(amount<1000){

        ToastAlert('toastAlert2','Minimum deposit is 1000/=',3000)
        
        
        
        }
    

   
else{



setStatus('Initating payment, please wait.....')
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

if(resp.redirect==false){
    ToastAlert('toastAlert2','Payment could not complete, WhatsApp Kayas on 0703852178',10000)
}else{
    window.location.href=resp.redirectUrl
}

     
   }
       

   )
 
 
}


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