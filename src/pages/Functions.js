import { ArticlesNav } from "./pubarticles/PubArticleHome";
import { kayasDomainUrl } from "../Variables";
import {useCookies} from 'react-cookie'
import { setCookieOptionsObj,AppContext,user } from "../Variables";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState, useEffect, useRef,useMemo } from "react";
import {AutoSizer} from "react-virtualized-auto-sizer";
//import { List } from "react-window";
import { FixedSizeList,VariableSizeList } from "react-window";
import { Virtuoso } from "react-virtuoso";
import { Link } from "react-router-dom/cjs/react-router-dom.min";






export async function Post(url,payLoad){
 return (await fetch(url,{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(payLoad) 
}).then(res=>res.json()).then(resp=>{return resp}))
}

export function DisplayPreMessage(props){
  
    return(<div style={{paddingTop:"10px"}}><MessageComponent message={props.message}/> </div>)
  
}

export function SuspenseComponent(){
 
  return(
    <div class="SuspenseContainer">
      
    <div><span style={{fontSize:"5px"}} class="spinner-border" role="status"></span></div>
 <div>Please wait....</div> 
  </div>
  )
}

export function IsLoggedIn(cookies){
if(cookies.user===undefined){
 ToastAlert('toastAlert2','You are not logged in, please log in',2000);

return false;
}else{
 return true; 
}



}

export function TrimExtraSpaces(str){
  return str.replace(/\s+/g, ' ').trim();
}

export async function ListOtherAuthorArticles(ArrayOfArticles,currentArticleId,cookies){
  
  let authorContact= ArrayOfArticles.filter(article=>article.id===parseInt(currentArticleId))[0].contact
  
    let otherAuthorArticles=ArrayOfArticles.filter(article=>(article.contact===authorContact && article.id!==parseInt(currentArticleId))).reverse()
   
   

 
   return (ListArticles(otherAuthorArticles,cookies))
  
    
    }


  
    export function ListOtherArticles(ArrayOfArticles,currentArticleId){
        
      let authorContact= ArrayOfArticles.filter(article=>article.id===parseInt(currentArticleId))[0].contact
    let otherArticles=ArrayOfArticles.filter(article=>article.contact!==authorContact).reverse()
 return (ListArticles(otherArticles))
      
        
        }
      


export function ListAuthorArticlesPlusOthers(ArrayOfArticles,currentArticleId){
let authorContact= ArrayOfArticles.filter(article=>article.id===parseInt(currentArticleId))[0].contact

  let otherAuthorArticles=ArrayOfArticles.filter(article=>(article.contact===authorContact && article.id!==parseInt(currentArticleId))).reverse()
  let otherArticles=ArrayOfArticles.filter(article=>article.contact!==authorContact).reverse()
  return (ListArticles(otherAuthorArticles.concat(otherArticles)))

  
  }
  
export function DebitTraderAccountBalance(contact,amount){
  fetch('/debitTraderAccountBalance',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
  contact:parseInt(contact),
  amount:amount,
    }) 
  }).then(res=>res.json()).then(resp=>{
    ;
  })

}

export function LogIn(cookies,setCookie){
 if(cookies.user===undefined){
  let contact=window.prompt('Enter the contact that you created an account with on Kayas. Enter "0" if you have no account with Kayas.')

  if(contact===null){
      
      window.location.href='/pages/pubarticles/allarticles'
    }else {

      if(Array.from(contact.trim()).length>0){
        
        contact=contact.trim()
        
            }
        
            if(contact==="0" || contact.toLowerCase() ==="o"){
              window.location.href='/pages/register' 
            } else
      
      
      if(Array.from(contact.trim()).length<10){
      
      window.alert('Contact must be 10 digits e.g 0703852178')
      window.location.href=window.location.href
    }else{
      let pin=window.prompt("Enter your Kayas password")
      if(pin===null){
        window.location.href=window.location.href
      }else if(Array.from(pin.trim()).length<5){
        
        ToastAlert('toastAlert2','Password must be atleast 5 digits',4000)
        window.location.href=window.location.href
      } else{
        
        VerifyRegistrationAndPin(contact.trim(),pin.trim()).then(resp=>{
        if(resp.registered===false){
           window.alert('The contact you provided has no account with Kayas. Select "OK" to create an account and then log in.')
           window.location.href='/pages/register'
          }else
          
             if(resp.pin===false){
               
               window.alert('Incorrect password. Try again or contact Kayas on 0703852178 (WhatsApp)')
               window.location.href=window.location.href
             }else{
               let user={name:resp.details.name,contact:resp.details.contact,role:'user'}
               setCookie('user',user,setCookieOptionsObj)
             
             window.alert("Login successful")
             window.location.href=window.location.href
         
             }
           })
      }


    }}
   
    
    }else{
   
    }

    return 0;
}

export async function GetAccountBalance(contact){
 return ( GetTradingDetails(parseInt(contact)).then(resp=>{
    
    return(resp.accBal)
  }))
}

export function ListArticlesTest(ArrayOfArticles){

console.log(ArrayOfArticles)


let style={padding:"5px"},verificationTick
  //  return (
  //   ArrayOfArticles.map(article=>{
  //     let whatsappPublicArticleShareLink=`whatsapp://send?text=*${article.headline1.trim()}*%0ASee details below. Tap the link:%0A%0A${kayasDomainUrl}/pages/pubarticles/article/${article.id}%0A%0A_Created by: ${article.author}_`
      
  //     return(
  //           <div key={article.id} class="col-md-4">
  //       <div  class="articleContainer">
  //       <div class="articleContainer2">

  //       <div>
  //           <span style={{color:"grey",fontSize:"11px",fontWeight:""}}>Article {article.id} | {article.visits} views</span>  
  //         </div> 
               
  //         <a class="ListArticleHeadlineAndOthers" href={`/pages/pubarticles/article/${article.id}`}>
              
  //         <div class="ListArticleHeadline" >{article.headline1}</div>
                
  //       <div style={{paddingBottom:"3px"}}>
  //      <div style={{paddingTop:"4px"}}>
  //       <div class="light" style={{fontSize:"12px"}}> 
  //       Created by {article.author} (0{article.contact}) 
  //       <span dangerouslySetInnerHTML={{__html:verificationTick}}/>
  //       <div >{article.institution} </div>
  //       </div>
  //      </div>
  //       </div>  
     
  //       </a>
       
  // <ArticlesNav articleAuthorContact={article.contact}  articleId={article.id}/>
     
           
    
  //       </div>
  //      </div>


        
  //       </div>
      
          


 
    
  //   )})
  // )


  }

export function IsMixedNumbersAndCharacters(variable){
  return /^(?=.*\d)(?=.*\D).+$/.test(variable)
}


export async function FetchMyArticles(articleAuthorContact){ 
      
  return (fetch('/getMyArticles',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
      contact:parseInt(articleAuthorContact),
    })
  }).then(resp=>{
  
    return resp.json()}).then(resp=>{
     
     return resp
      
    }))



}

export function ListArticles(ArrayOfArticles,cookies){

try{


   
  return (

   ArrayOfArticles.map(article=>{
 return(
       
                       
             <div  key={article.id} class="col-md-4">
                          
             
            <div class="listArticleContainer">
             <div class="listArticleContainer2">
             <div  >
           
       <span class="articleId">Article {article.id}/{article.visits}</span>  
        
     </div>  
     <a href={`/pages/pubarticles/article/${article.id}`}>
     <div class="listArticlesHeadline">{article.headline1}</div>
     </a>
              
     {(()=>{
      
      if(cookies.user){
        if(parseInt(cookies.user.contact)==parseInt(article.contact)){
          return(<ArticlesNav articleAuthorContact={article.contact} articleId={article.id}/>  )
        }else{return null}
      }else{;}
     })()}
        
             </div>


       
             
            </div>
 
          


             
             </div>
           


   
   )})


 )}catch(error){
  console.log(error)
  return(
    <div>
      <MessageComponent message="Try again, an error occured"/>
    </div>
  )
 }
  }
export function ListArticlesOriginal(ArrayOfArticles){

  

try{
  return (

   ArrayOfArticles.map(article=>{
     let message=`*${article.headline1.trim()}*

Tap the link below for details:
${window.location.origin}/pages/pubarticles/article/${article.id}

_Created by: ${article.author}_`, whatsappPublicArticleShareLink=`whatsapp://send?text=${encodeURIComponent(message)}`
     
     return(
       <div key={article.id} class="componentPadding">
           
                    
       <div class="row">
             <div class="col-md-3"></div>
             
             <div  class="col-md-6">
             
             
            <div class="articleContainer">
             <div class="articleContainer2">
             <div  >
             <span> <div class="button1 articleShareButton"  onClick={
                      ()=>{
                        window.location.href=whatsappPublicArticleShareLink
                      }}><span class="fa fa-whatsapp"></span> Share article</div></span> 
       <span class="articleId">Article {article.id}/{article.visits}</span>  
        
     </div>  
     
        <ArticlesNav articleAuthorContact={article.contact} articleId={article.id}/>
     <div class="articleHeadline">{article.headline1}</div>
                      
                   
                    
        <div class="articleImg" ><img loading='lazy' src={article.imageDownLoadUrl} class=" d-block w-100" /></div>
                  <div class="articleBody">
                   <div  dangerouslySetInnerHTML={{__html:article.body}}/>
                   <div>Always keep it Kayas.
                     
                    </div><p></p>
                   </div>
      
        
             </div>
            </div>
 



             
             </div>
             <div class="col-md-3"></div>
             

             </div>  
            
              
     
                 
     
 
       </div>

   
   )})


 )}catch(error){
  return(
    <div>
      <MessageComponent message="Try again, an error occured"/>
    </div>
  )
 }
  }




export function ListArticlesVirtuoso(ArrayOfArticles){  
  let style={padding:"5px"},verificationTick
    return (


      <div>
        <Virtuoso
      
      style={{ height: "900px" }}
      data={ArrayOfArticles}
      increaseViewportBy={{ top: 50, bottom: 50 }}
        totalCount={ArrayOfArticles.length}
        itemContent={
          
          (index,article) => {
let whatsappPublicArticleShareLink=`whatsapp://send?text=*${article.headline1.trim()}*%0ASee details below. Tap the link:%0A%0A${window.location.origin}/pages/pubarticles/article/${article.id}%0A%0A_Created by: ${article.author}_`
            return(
            <div >
            <div  key={article.id} >
                            
                     
                            <div class="row">
                                  <div class="col-md-3"></div>
                                  
                                  <div  class="col-md-6">
                                  
                                  
                                 <div class="articleContainer">
                                  <div class="articleContainer2">
                                  <div  style={{paddingBottom:"0px",textAlign:"left"}}>
                            <span style={{color:"grey",fontSize:"11px"}}>Article {article.id}/{article.visits}</span>  
                          </div>  
                          
                             <ArticlesNav articleAuthorContact={article.contact} articleId={article.id}/>
                                 
                          
                          <div class="articleHeadline">{article.headline1}</div>
                                           <div style={{paddingBottom:"3px"}}>
                                           <div style={{display:"flex",flexWrap:"wrap"}}>
                                           <div style={style}>
                                             <div class="button1"  onClick={
                                           ()=>{
                                             window.location.href=whatsappPublicArticleShareLink
                                           }}><span class="fa fa-whatsapp"></span> Share article
                                           
                                           
                                           </div>
                                                            
                                             </div>
                                             
                                             </div> 
                                             
                                             <div style={{padding:"5px"}}>
                        <div class="light">  {article.articleAuthor}  {article.cContact} <span dangerouslySetInnerHTML={{__html:verificationTick}}/>
                        <div >{article.institution}</div>
                        </div>
                    
                    
                    </div>
                                             </div>     
                                                                    
                                       
                                         
                             <div style={{paddingTop:"2px"}}><img  src={article.imageDownLoadUrl} class=" d-block w-100" /></div>
                                       <div style={{paddingTop:"5px",fontSize:"14px"}}>
                                        <div  dangerouslySetInnerHTML={{__html:article.body}}/>
                                        <div>Always keep it Kayas.
                                        
                                         </div><p></p>
                                        </div>
                           
                             
                                  </div>
                                 </div>
                      
                    
                    
                    
                                  
                                  </div>
                                  <div class="col-md-3"></div>
                                  
                    
                                  </div>  
                                 
                                   
                          
                                      
                          
                      
                            </div>
    
          </div>
          
          )
          }
          
       
        }

      />
      </div>
      
    );
  


}


export function getFormData(event){
  event.preventDefault();
  return (Object.fromEntries(new FormData(event.currentTarget)))

}

export function getFormDataOnClick(formElement){
  return (Object.fromEntries(new FormData(formElement)))
  }

export function setKayaserVerificationStatus(verificationDetailsObj,handlerFunction,nextFunction){
  if(verificationDetailsObj.registered===false){
    handlerFunction ("<div style='color:red;'>You are not registered with Kayas, please register.</div>")
   
  }else if(verificationDetailsObj.registered===true&&verificationDetailsObj.pin===false){
    handlerFunction (`<div style='color:red;'>${verificationDetailsObj.details.name}, your password is incorrect.</div>`)
  }
  else if(verificationDetailsObj.registered===true&&verificationDetailsObj.pin===true){
    handlerFunction(`<div style='color:green;'>Plese wait.......</div>`)
    nextFunction()
  }
  
  else{
    
  }

 }

 export function CreateAccountAlert({
  showCreateAccountAlert,
  closeCreateAccountAlert,
message
  
}) {
 const [status,setStatus]=useState("")

  if (!showCreateAccountAlert) {
    
    
    document.body.style.overflow = "auto";
    return null
  
  }else{
    document.body.style.overflow = "hidden"; 
    
    return (
      
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-3">
        <div class="overlayCreateAccount">
        <div  class="alertContainer">
          <div class="alertTitle">Create account</div>
          <p>{message}</p>
  
          
<p></p> <form method="post" id="freeRegistrationForm">
   
   <div class="mb-3">
   <div class="formInputLabel">Your name</div>
   <input type="text" class="form-control" autoComplete="off" name="name"  ></input>
 <br></br>
 <div class="formInputLabel">Description, word or phrase (Optional)</div>
 <textArea rows="2" type="text" class="form-control" autoComplete="off" name="institution"  ></textArea>
 <br></br><div class="formInputLabel">WhatsApp contact</div>
 <input type="text" class="form-control" autoComplete="off" name="contact" ></input>
 <br></br> 
 
 <div class="formInputLabel">Email</div>
 <input type="text" class="form-control" autoComplete="off" name="email" ></input>

 <br></br>
 <div class="formInputLabel">Password (atleast 5 characters)</div>
 <div style={{color:"red"}}>Capital letters and small letters can be mixed but please remember how you mix them.</div>
   <input type="text" class="form-control" autoComplete="off" name="pin" ></input>

   </div>
    <div class="status">{status}</div>
   <div style={{width:"100%"}} onClick={
    ()=>{


      if(Array.from(document.getElementById("freeRegistrationForm").name.value).length<2){

ToastAlert('toastAlert2','Enter a correct name',3000)

}
else if(Array.from(document.getElementById("freeRegistrationForm").contact.value.trim()).length<10||Array.from(document.getElementById("freeRegistrationForm").contact.value.trim()).length>10)
      {
        ToastAlert('toastAlert2','Enter contact of 10 digits e.g 0703852178',3000)
      }else if((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("freeRegistrationForm").email.value.trim()))==false)
      
      {
         
         ToastAlert('toastAlert2','Enter correct email address',3000)
      }
      else if(Array.from(document.getElementById("freeRegistrationForm").pin.value.trim()).length<5)
      {
        ToastAlert('toastAlert2','Password should be atleast 5 characters',3000)
      }
else{
if(Array.from(document.getElementById("freeRegistrationForm").institution.value.trim()).length==0)
{
  
  document.getElementById("freeRegistrationForm").institution.value=""
}else{}
setStatus("Please wait.......")

 fetch('/verifyUser',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
contact:document.getElementById("freeRegistrationForm").contact.value,
pin:document.getElementById("freeRegistrationForm").pin.value.trim()       }) 
 }).then(res=>res.json()).then((resp)=>{
     if(resp.registered===false){
let payLoad={
name:document.getElementById("freeRegistrationForm").name.value.trim(),
institution:document.getElementById("freeRegistrationForm").institution.value.trim(),
contact:document.getElementById("freeRegistrationForm").contact.value.trim(),
email:document.getElementById("freeRegistrationForm").email.value.trim(),
pin:document.getElementById("freeRegistrationForm").pin.value.trim()

}



 fetch('/collection_kayasers_registerFree',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify(payLoad)
 }) .then(resp=>{
     
 
     return resp.json()}).then(res=>{
      
   let kayaserDetailsObj=res
   setStatus("")
   
   window.alert('Account created')

   //window.location.href=window.location.href
   document.getElementById("freeRegistrationForm").name.value=""
   document.getElementById("freeRegistrationForm").institution.value=""
 
 document.getElementById("freeRegistrationForm").contact.value=""
     document.getElementById("freeRegistrationForm").email.value=""
   document.getElementById("freeRegistrationForm").pin.value=""
   fetch(`/getTradingDetails/${kayaserDetailsObj.contact}`).then(res=>res.json()).then(resp=>{
;


   })
    
    
    
    
        })
    
    

     } else if(resp.registered===true){
      setStatus("You already have an account with Kayas.")
  } 
      else{
        setStatus("An error has occured as you tried to register. Please try again")
       
        }
    
 }
     

 )


}
    } 

   } class="btn btn-success"><span class="fa fa-user-plus"></span> Create account</div><p></p>
  
   </form>
            
  
          <div style={{paddingTop:"5px"}}>
  
         
            <button onClick={CreateAccountAlert} class="btn btn-warning fullButtonWidth">
              Create account
            </button><p></p>
            <button onClick={closeCreateAccountAlert} class="btn btn-danger fullButtonWidth">
              Cancel
            </button>
  
        
  
          
          </div>
        </div>
      </div>

        </div>
        <div class="col-md-3"></div>
      </div>
    );
  }

 
}
 export function PubArticleDepositAlert({
  showPubArticleDepositAlert,
  closePubArticleDepositAlert,
message
  
}) {
 

  if (!showPubArticleDepositAlert) {
        
    document.body.style.overflow = "auto";
    return null
  
  }else{
    
    document.body.style.overflow = "hidden";
    return (
      
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-3">
        <div class="overlayCreateAccount">
        <div  class="alertContainer">
          <div class="alertTitle">Deposit</div>
          <p>{message}</p>

            
  
          <div style={{paddingTop:"5px"}}>
  
         
            <a href="/pages/deposit">
            <button class="btn btn-warning fullButtonWidth">
             Deposit
            </button>
              </a><p></p>
            <button onClick={closePubArticleDepositAlert} class="btn btn-danger fullButtonWidth">
              Cancel
            </button>
  
        
  
          
          </div>
        </div>
      </div>

        </div>
        <div class="col-md-3"></div>
      </div>
    );
  }

 
}


 export function LoginAlert({
  showLoginAlert,
  closeLoginAlert,
code,
message
  
}) {

   const [status, setStatus] = useState("");
   const [cookies,setCookie,removeCookie]=useCookies(['user'])
   let [showCreateAccountAlert, setShowCreateAccountAlert]=useState(false)

  if (!showLoginAlert) {
    
    document.body.style.overflow = "auto";
    return null
  
  }else{
    document.body.style.overflow = "hidden";
    return (
      
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-3">
        <div class="overlay">
        <div  class="alertContainer">
          <div class="alertTitle">Log in</div>
          <p>{message}</p>
  
          <input
            type="text"
            placeholder="Enter your contact"
            class="form-control" autoComplete="off" id="contact" /><p></p>
          <input
            type="text"
            placeholder="Enter your password"
            class="form-control" autoComplete="off" id="password" />
<p></p>
            <div class="status">{status}</div>
  
          <div style={{paddingTop:"5px"}}>
  
          <button
              onClick={() => {

                let contact=document.getElementById('contact').value.trim(),password=document.getElementById('password').value.trim()

                if(Array.from(contact).length<10 || Array.from(contact).length>10 ){
setStatus('Contact must be exaclty 10 digits')
                }
                
                else   if(Array.from(password).length<1){
                  setStatus('Enter a password')
                                  }
                
                else{
setStatus('Please wait......')

                  let payLoad={
                    contact:parseInt(contact), pin:password
                  }
                  
                  code(payLoad).then(resp=>{
                 
                    setStatus(resp.msg)
                    

if(resp.success==true){
  let user={name:resp.user.name,contact:resp.user.contact,role:'user'}
            
  setCookie('user',user,setCookieOptionsObj)
  setStatus('Log in successful')
  window.location.reload()
             
}


else{;}
                    
                   })
                  // closeAlert()

                  

                }



               
              }}
              class="btn btn-success fullButtonWidth"
            >
              Login
            </button><p></p>
            <a href="/pages/register">
            <button class="btn btn-warning fullButtonWidth">
              Create account
            </button></a><p></p>
            {/* {<div style={{padding:"40px"}}>
            <CreateAccountAlert message="Create an account then log in." showCreateAccountAlert={showCreateAccountAlert} closeCreateAccountAlert={()=>{
              setShowCreateAccountAlert(false)
            }}/>
              </div>} */}
            <button onClick={closeLoginAlert} class="btn btn-danger fullButtonWidth">
              Cancel
            </button>
  
        
  
          
          </div>
        </div>
      </div>

        </div>
        <div class="col-md-3"></div>
      </div>
    );
  }

 
}
 export function SendMessage({
  displaySendMessage,
  closeSendMessage,
code,
message
  
}) {



   const [status, setStatus] = useState("");
   const [cookies,setCookie,removeCookie]=useCookies(['user'])
   let [showCreateAccountAlert, setShowCreateAccountAlert]=useState(false)
   

  if (!displaySendMessage) {
    
    document.body.style.overflow = "auto";
    return null
  
  }else{
    document.body.style.overflow = "hidden";
    return (
      
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-3">
        <div class="overlay">
        <div  class="alertContainer">
          <div class="alertTitle">Send message</div>
          <p>{message}</p>

          

{(()=>{
  if(cookies.user){
return null;
  }else{
return (<div>
  <input
            type="text"
            placeholder="Enter your name"
            class="form-control" autoComplete="off" id="name" /><p></p>
          <input
            type="text"
            placeholder="Enter your contact"
            class="form-control" autoComplete="off" id="contact" /><p></p>
</div>)
  }
})()}




          <textarea rows={5}
            type="text"
            placeholder="Type message"
            class="form-control" autoComplete="off" id="message" />
<p></p>
            <div class="status">{status}</div>
  
          <div style={{paddingTop:"5px"}}>
  
          <button
              onClick={() => {
let contact,name,message

if(cookies.user){
contact=`0${cookies.user.contact}`;
name=cookies.user.name;
message=document.getElementById('message').value
}

else {
  contact=document.getElementById('contact').value;
  name=document.getElementById('name').value;
  message=document.getElementById('message').value
}


               


                if(Array.from(name).length<1){
                  setStatus('Enter your name')
                  } else 
                     if(Array.from(contact).length<10 || Array.from(contact).length>10 ){
setStatus('Contact must be exaclty 10 digits')
                }
                
                else   if(Array.from(message).length<1){
                  setStatus('Enter a message')
                                  }
                
                else{
setStatus('Sending......')

                  let payLoad={
                   name:name.trim(),contact:parseInt(contact), serviceType:message.trim()
                  }
                  
                  Post('/submitMessage',payLoad).then(resp=>{
                    if(resp.success==1){
                      setStatus("Sent")
                      setTimeout(()=>{
                        closeSendMessage()
                      },1500)
                    }else{
                      setStatus("Not sent")
                    }
                  })
                  
//                   code(payLoad).then(resp=>{
                 
//                     setStatus(resp.msg)
                    

// if(resp.success==true){
//   let user={name:resp.user.name,contact:resp.user.contact,role:'user'}
            
//   setCookie('user',user,setCookieOptionsObj)
//   setStatus('Log in successful')
//   window.location.reload()
             
// }


// else{;}
                    
//                    })
                  // closeAlert()

                  

                }



               
              }}
              class="btn btn-success fullButtonWidth"
           
           >
              Send
            
            </button><p></p>
          
            <button onClick={closeSendMessage} class="btn btn-danger fullButtonWidth">
              Cancel
            </button>
  
        
  
          
          </div>
        </div>
      </div>

        </div>
        <div class="col-md-3"></div>
      </div>
    );
  }

 
}


export async function VerifyRegistrationAndPin(contact,pin){
      

  
 return await fetch('/verifyUser',{
  method:"post",
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({
contact:parseInt(contact),
pin:pin.trim(),
  }) 
}).then(res=>res.json()).then((resp)=>{
 
 if(resp.registered===false || resp.registered===true&&resp.pin===false || resp.registered===true&&resp.pin===true){
  
    return(resp)
  }
    else{
      return({msg:'Error'})
    }
    
    
    
    })


}
export function ConvertFileToBase64(file){
    return new Promise((resolve,reject)=>{
      let fileReader=new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload=()=>{
        resolve(fileReader)
      }
      fileReader.onerror=(error)=>{
        reject(error)
      }
    })
  }
  
  export function ReadFileAsArrayBuffer(file){
    return new Promise((resolve,reject)=>{
      let fileReader=new FileReader()
      fileReader.readAsArrayBuffer(file)
      fileReader.onload=()=>{
        resolve(fileReader)
      }
      fileReader.onerror=(error)=>{
        reject(error)
      }
    })
  }
  export async function GetTradingDetails(contact){
   let tradingDetails= await fetch(`/getTradingDetails/${contact}`).then(resp=>{
    
      return resp.json()}).then(resp=>{ return resp[0]})
      return tradingDetails

  }
export function ToastAlert(alertClass,message,delay){
  
let body=document.querySelector('body'),alertDiv=document.createElement('div')
alertDiv.textContent=message
alertDiv.classList.add(alertClass)
body.appendChild(alertDiv)
setTimeout(()=>{
  body.removeChild(alertDiv)
},delay)

  }

  export function PersistentToastAlert(alertClass,message){
  
    let body=document.querySelector('body'),alertDiv=document.createElement('div')
    alertDiv.id='toastAlertDiv'
    alertDiv.textContent=message
    alertDiv.classList.add(alertClass)
    body.appendChild(alertDiv)
  
    
      }
      export function closeToastAlert(){
        let body=document.querySelector('body'), alertDiv=document.getElementById('toastAlertDiv')
        //let body=document.querySelector('body'),alertDiv=document.createElement('div')
        //alertDiv.textContent=message
        //alertDiv.classList.add(alertClass)
        body.removeChild(alertDiv)
      

      }

  export function globalReducerFunction(state,action){
    console.log(state)
    console.log('--------')
    switch(action.type){
      case 'add1':{
state.value=state.value+1
        return(state)
        
      }
    }
  }

export function MessageComponent(props){
  return(
    <div>
      <div style={{textAlign:"center",fontSize:"16px",padding:"20px",border:"2px solid orange",
      borderRadius:"3px",
      backgroundColor:"orange"}}>{props.message}</div>
    </div>
  )
}
  
