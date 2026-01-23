import { VerifyRegistrationAndPin,ToastAlert,ListArticles,ListOtherAuthorArticles,ListOtherArticles, IsLoggedIn, LogIn, GetTradingDetails, DebitTraderAccountBalance, SuspenseComponent} from '../Functions';
import firebase from 'firebase/compat/app';
import { useCookies } from 'react-cookie';
import 'firebase/compat/storage';
import {Redirect} from 'react-router-dom';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';
import { ArticlesNav} from './PubArticleHome';

import {kayasDomainUrl,articleViewCost} from '../../Variables'

firebase.initializeApp({
  apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
  authDomain: "kayas-42321.firebaseapp.com",
  projectId: "kayas-42321",
  storageBucket: "kayas-42321.appspot.com"

})
const storage=firebase.storage()
const bucket=storage.ref()


export function UpdateNumberOfArticleVisits(articleId,valueToAdd){
  fetch(`/updateNumberOfArticleVisits/${articleId}/${valueToAdd}`).then(res=>res.json()).then(resp=>{
    ;
  }) 

}

export function PubArticleComp(){//clientcomponent
    let articleParams=useParams()
    
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
      let formActionUrl=`/pages/pubarticles/article/${articleParams.id}`
      const[visits,setVisits]=useState('')
      const[opinions,setOpinions]=useState('')
      const[articleHeadline1,setArticleHeadline1]=useState('')
      const[articleAuthor,setArticleAuthor]=useState('')
      const[articleAuthorContact,setArticleAuthorContact]=useState('')
      const[articleBody,setArticleBody]=useState('<div style="font-size:18px;color:black;background:orange;padding:30px;text-align:center;">Please wait..........<p></p></div>')
      const[opinionsStatus,setOpinionsStatus]=useState('')
      const[submissionStatus,setSubmissionStatus]=useState('')
      const[opinionsNumb,setOpinionsNumb]=useState('')
      const[articleInstitution,setArticleInstitution]=useState('')
      const[articleDoc,setArticleDoc]=useState('')
      const [details,setDetails]=useState()
      const [article,setArticle]=useState()
      
      

      const[authorArticles,setAuthorArticles]=useState(SuspenseComponent)

const[otherArticles,setOtherArticles]=useState('')
      const[verificationTick,setVerificationTick]=useState('')
     const[imageDownLoadUrl,setImageDownLoadUrl]=useState('')
      
      let opinionsReceivedFlag=0,whatsappPublicArticleShareLink2=`whatsapp://send?text=*${articleHeadline1.trim()}*%0ASee details below. Tap the link:%0A%0A${window.location.origin}/pages/pubarticles/article/${articleParams.id}%0A%0A${articleAuthor}`,style={padding:"5px"},
      whatsappPublicArticleShareLink=`whatsapp://send?text=${encodeURIComponent(`*${articleHeadline1.trim()}*%0ASee details below. Tap the link:%0A%0A${window.location.origin}/pages/pubarticles/article/${articleParams.id}%0A%0A${articleAuthor}`)}`
      
     
      
      //return statement
 try{
  useEffect(async ()=>{
    
        
    await  fetch(`/pubarticle/${articleParams.id}`).then(res=>res.json()).then(articleDataArray=>{
               
               

        if(articleDataArray.length===0){
          setArticleHeadline1("This article does not exist or has been deleted.")
          ToastAlert('toastAlert2','Does not exit or has been deleted',3000)
          setArticleBody('<div style="font-size:20px;color:red;">This article does not exist or has been deleted.<p></p></div>')
        }else{
         

         fetch(`/pubarticle/${articleParams.id}`).then(res=>res.json()).then(async (articleDataArray)=>{
               
          if(articleDataArray.length===0){
           }else{
            await  fetch('/getAllArticles').then(resp=>{
          
              return resp.json()}).then(async (resp)=>{
                resp.reverse()
                if(resp.length===0){
                  setAuthorArticles(`<div style='color:red;text-align:center;'>These Articles do not exist.</div>`) 
                
                }else{
                  
                
                  setArticle(await ListOtherAuthorArticles(resp,articleParams.id) )

                setAuthorArticles()
    
                }
    
                
    
    
                
              })  
    
           }})







          let articleDocument=articleDataArray[0]
          setArticleDoc(articleDataArray[0])
          
          setOpinionsNumb(articleDataArray[0].pubArticleOpinions.length)
          
          opinionsReceivedFlag=1
          setArticleInstitution(articleDataArray[0].institution)
          setArticleHeadline1(articleDataArray[0].headline1)
        setArticleAuthor(`Created by ${articleDataArray[0].author}`)
        setArticleAuthorContact(`0${articleDataArray[0].contact}`)
        setArticleBody(articleDataArray[0].body)
          if(articleDataArray[0].verified==='true'){ 
            setVerificationTick('<span class="fa fa-check"></span>')
          }else{
            ;
          }

          if(articleDataArray[0].visits===undefined){
            setVisits(0)
          }else{
setVisits(articleDataArray[0].visits)

          }

          if(articleDocument.imageDownLoadUrl===undefined){;}else{
            setImageDownLoadUrl(articleDocument.imageDownLoadUrl)
          }
          
         
//            UpdateNumberOfArticleVisits(articleDocument.id,1) 

          
GetTradingDetails(articleDocument.contact).then(resp=>{
let trader=resp

if(trader.permissionTokensObj.displayArticlesAtFreeCost==true){
  UpdateNumberOfArticleVisits(articleDocument.id,1)
  ;
}else{
 if(cookies.user){
  
GetTradingDetails(cookies.user.contact).then(resp=>{
let user=resp
if(user.accBal<articleViewCost){

  if(window.confirm(`Your Kayas account balance is low. Click "OK" to top up atleast ${articleViewCost}/= and be able to read this information.`)==true){
  window.location.href=`/pages/deposit`
 }else{
   window.location.href='/pages/pubarticles/allarticles'
   
 }
 }else{
   
  if(user.contact==articleDocument.contact){;
  //Dont add article visits when article author views own article
  }else{
    DebitTraderAccountBalance(user.contact,articleViewCost)
    UpdateNumberOfArticleVisits(articleDocument.id,1)
  }
  
 }
})


          }else{
          setTimeout(()=>{
           if(window.confirm(`Click 'OK' to login and be able to read this information.`)==true){
             LogIn(cookies,setCookie)
           }else{
            window.location.href='/pages/pubarticles/allarticles'
           }
          },1000)
          }



}
})


      
        }
       
        
      })
       
    

  // await  fetch(`/pubarticle/${articleParams.id}`).then(res=>res.json()).then(async (articleDataArray)=>{
               
  //       if(articleDataArray.length===0){
  //        }else{
  //         await  fetch('/getAllArticles').then(resp=>{
        
  //           return resp.json()}).then(async (resp)=>{
  //             resp.reverse()
  //             if(resp.length===0){
  //               setAuthorArticles(`<div style='color:red;text-align:center;'>These Articles do not exist.</div>`) 
              
  //             }else{
                
              
  //          setAuthorArticles(
  //             await ListOtherAuthorArticles(resp,articleParams.id)
  //             )
  
  //             }
  
              
  
  
              
  //           })  
  
  //        }})


  

     



      
      },[articleParams.id])
    
 }catch(error){
  
 }
     
         return(
             
            <div class="componentPadding">
                                       
                                       {article}
            <div class="row">
                  <div class="col-md-3"></div>
                  
                  <div  class="col-md-6">
                  

                 {/* <div class="articleContainer">
                  <div class="articleContainer2">
                  <div  style={{paddingBottom:"0px",textAlign:"left"}}>
            <span style={{color:"grey",fontSize:"11px"}}>Article {articleParams.id}/{visits}</span>  
          </div>  
          
             <ArticlesNav articleAuthorContact={articleAuthorContact} articleId={articleParams.id}/>
                 
          
          <div class="articleHeadline">{articleHeadline1}</div>
                           <div style={{paddingBottom:"3px"}}>
                           <div style={{display:"flex",flexWrap:"wrap"}}>
                           <div style={style}>
                             <div class="button1"  onClick={
                           ()=>{
                            
                             window.location.href=whatsappPublicArticleShareLink
                            
                           }}><span class="fa fa-whatsapp"></span> Share article</div>
                                        
                             </div>
                                 <div  style={style}>
                               <div> 
                             </div> 
                             
                             </div>
             
                             
                  
             
             
                             </div> 
                             
                             <div style={{padding:"5px"}}>
        <div class="light">  {articleAuthor}  {articleAuthorContact} <span dangerouslySetInnerHTML={{__html:verificationTick}}/>
        <div >{articleInstitution}</div>
        </div>
    
    
    </div>
                             </div>     
                                                    
                       
                         
             <div style={{paddingTop:"2px"}}><img src={imageDownLoadUrl} class=" d-block w-100" /></div>
                       <div style={{paddingTop:"5px",fontSize:"14px"}}>
                        <div  dangerouslySetInnerHTML={{__html:articleBody}}/>
                        <div>Always keep it Kayas.
                         </div><p></p>
                          
                        </div>
                        
      
             
                  </div>
                 </div> */}
      



                  
                  
                  </div>
                  <div class="col-md-3"></div>
                  

                  </div>  
                 
                   <div class="row">
                   
                    {authorArticles}
                    
                    
                    </div>
          
                      
          
      
            </div>
              
             
            );
            
            
            
            
           
          
        
      
       //return statement
      
      
      }
    
     export default PubArticleComp