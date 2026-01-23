import { ArticlesNav } from "./pubarticles/PubArticleHome";
import { kayasDomainUrl } from "../Variables";
import {useCookies} from 'react-cookie'
import { setCookieOptionsObj,AppContext,user } from "../Variables";

import React, { useState, useEffect, useRef,useMemo } from "react";
import {AutoSizer} from "react-virtualized-auto-sizer";
//import { List } from "react-window";
import { FixedSizeList,VariableSizeList } from "react-window";
import { Virtuoso } from "react-virtuoso";






export async function Post(url,payLoad){
 return (await fetch(url,{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(payLoad) 
}).then(res=>res.json()).then(resp=>{return resp}))
}

export function SuspenseComponent(){
  return(
    <div class="SuspenseContainer">
      
    <div><span style={{fontSize:"5px"}} class="spinner-border" role="status"></span></div>
 <div>Please wait.....</div> 
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
export async function ListOtherAuthorArticles(ArrayOfArticles,currentArticleId){
  let authorContact= ArrayOfArticles.filter(article=>article.id===parseInt(currentArticleId))[0].contact
  
    let otherAuthorArticles=ArrayOfArticles.filter(article=>(article.contact===authorContact && article.id!==parseInt(currentArticleId))).reverse()
   
   let currentArticle=ArrayOfArticles.filter(article=>(article.contact===authorContact && article.id==parseInt(currentArticleId)))[0]

 
   return (ListArticles([currentArticle,...otherAuthorArticles]))
  
    
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
    let contact=window.prompt("Enter your contact that is registered on Kayas")
    
    if(contact===null){
      
      window.location.href=window.location.href
    }else if(Array.from(contact.trim()).length<10){
      
      ToastAlert('toastAlert2','Contact must be 10 digits e.g. 0703852178',4000)
      window.location.href=window.location.href
    }else{
      let pin=window.prompt("Enter your Kayas PIN")
      if(pin===null){
        window.location.href=window.location.href
      }else if(Array.from(pin.trim()).length<5){
        
        ToastAlert('toastAlert2','PIN must be 5 digits',4000)
        window.location.href=window.location.href
      } else{
        
        VerifyRegistrationAndPin(contact.trim(),pin.trim()).then(resp=>{
        if(resp.registered===false){
           window.alert('Your contact is not registered with Kayas. Select "OK" to register and then proceed with logging in.')
           window.location.href='/pages/register'
          }else
          
             if(resp.pin===false){
               
               window.alert('Incorrect PIN. Try again')
               window.location.href='/pages/about'
             }else{
               let user={name:resp.details.name,contact:resp.details.contact,role:'user'}
               setCookie('user',user,setCookieOptionsObj)
             
             window.alert("Login successful")
             window.location.href=window.location.href
         
             }
           })
      }


    }
   
    
    }else{
   
    }

    return 0;
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


export function ListArticles(ArrayOfArticles){

   return (
    ArrayOfArticles.map(article=>{
      let whatsappPublicArticleShareLink=`whatsapp://send?text=*${article.headline1.trim()}*%0ASee details below. Tap the link:%0A%0A${window.location.origin}/pages/pubarticles/article/${article.id}%0A%0A_Created by: ${article.author}_`
      
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
  )


  }


export function ListArticles1(ArrayOfArticles){
  let verificationTick,whatsappPublicArticleShareLink
  
  const rowHeights = useRef({});
  
  const Row = ({ index, style, data }) => {
    const { ArrayOfArticles, heightsRef } = data;
  
    return (
      <div
        style={style}
        ref={el => {
          if (!el) return;
  
          const height = el.getBoundingClientRect().height;
  
          // store once (or update if changed)
          if (heightsRef.current[index] !== height) {
            heightsRef.current[index] = height;
            console.log(`Row ${index} height:`, height);
          }
        }}
      >
        {ArrayOfArticles[index]}
      </div>
    );
  };
  




return(
 
<VariableSizeList
 height={500}
 width={400}
 itemCount={ArrayOfArticles.length}
 itemSize={index => rowHeights.current[index] || 50}
 itemData={{
  ArrayOfArticles,
   heightsRef: rowHeights
 }}
    >
      {Row}
    </VariableSizeList>
  

)



//    return (
//     ArrayOfArticles.map(article=>{
//       let whatsappPublicArticleShareLink=`whatsapp://send?text=*${article.headline1.trim()}*%0ASee details below. Tap the link:%0A%0A${window.location.origin}/pages/pubarticles/article/${article.id}%0A%0A_Created by: ${article.author}_`
      
 
//       return(
//         <div key={article.id} class="componentPadding">
                            
                     
//         <div class="row">
//               <div class="col-md-3"></div>
              
//               <div  class="col-md-6">
              
              
//              <div class="articleContainer">
//               <div class="articleContainer2">
//               <div  style={{paddingBottom:"0px",textAlign:"left"}}>
//         <span style={{color:"grey",fontSize:"11px"}}>Article {article.id}/{article.visits}</span>  
//       </div>  
      
//          <ArticlesNav articleAuthorContact={article.contact} articleId={article.id}/>
             
      
//       <div class="articleHeadline">{article.headline1}</div>
//                        <div style={{paddingBottom:"3px"}}>
//                        <div style={{display:"flex",flexWrap:"wrap"}}>
//                        <div style={style}>
//                          <div class="button1"  onClick={
//                        ()=>{
//                          window.location.href=whatsappPublicArticleShareLink
//                        }}><span class="fa fa-whatsapp"></span> Share article</div>
                                        
//                          </div>
                         
//                          </div> 
                         
//                          <div style={{padding:"5px"}}>
//     <div class="light">  {article.articleAuthor}  {article.cContact} <span dangerouslySetInnerHTML={{__html:verificationTick}}/>
//     <div >{article.institution}</div>
//     </div>


// </div>
//                          </div>     
                                                
                   
                     
//          <div style={{paddingTop:"2px"}}><img loading='lazy' src={article.imageDownLoadUrl} class=" d-block w-100" /></div>
//                    <div style={{paddingTop:"5px",fontSize:"14px"}}>
//                     <div  dangerouslySetInnerHTML={{__html:article.body}}/>
//                     <div>Always keep it Kayas.
                      
//                      </div><p></p>
//                     </div>
       
         
//               </div>
//              </div>
  



              
//               </div>
//               <div class="col-md-3"></div>
              

//               </div>  
             
               
      
                  
      
  
//         </div>
 
    
//     )})
//   )


  





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
    handlerFunction (`<div style='color:red;'>${verificationDetailsObj.details.name}, your PIN is incorrect.</div>`)
  }
  else if(verificationDetailsObj.registered===true&&verificationDetailsObj.pin===true){
    handlerFunction(`<div style='color:green;'>Plese wait.......</div>`)
    nextFunction()
  }
  
  else{
    
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
  
