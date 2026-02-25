import { VerifyRegistrationAndPin,ToastAlert,MessageComponent,ListArticles,ListOtherAuthorArticles,ListOtherArticles, IsLoggedIn, LogIn,LoginAlert, GetTradingDetails, DebitTraderAccountBalance, SuspenseComponent} from '../Functions';
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

export function PubArticleComp(){
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
      const [article,setArticle]=useState((()=>{
        return(<div style={{paddingTop:"120px"}}><MessageComponent message="Please wait....."/> </div>)
      })())
      const [showLoginAlert, setShowLoginAlert] = useState(true);
      const [trader, setTrader] = useState();
      
      

      const[authorArticles,setAuthorArticles]=useState(SuspenseComponent)

const[otherArticles,setOtherArticles]=useState('')
      const[verificationTick,setVerificationTick]=useState('')
     const[imageDownLoadUrl,setImageDownLoadUrl]=useState('')
      
      let opinionsReceivedFlag=0,whatsappPublicArticleShareLink=`whatsapp://send?text=*${encodeURIComponent(articleHeadline1.trim())}*%0ASee details below. Tap the link:%0A%0A${window.location.origin}/pages/pubarticles/article/${articleParams.id}%0A%0A${articleAuthor}`,style={padding:"5px"}
     
      
     
      
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
setTrader(resp)

if(trader.permissionTokensObj.displayArticlesAtFreeCost==true){
  UpdateNumberOfArticleVisits(articleDocument.id,1)
  ;
}else{
 if(cookies.user){
  
GetTradingDetails(cookies.user.contact).then(resp=>{
let user=resp
if(user.accBal<articleViewCost && user.contact!=articleDocument.contact ){

  if(window.confirm(`Your Kayas account balance is low. Click "OK" to deposit atleast ${articleViewCost}/= in order to read this information.`)==true){
  window.location.href=`/pages/deposit`
 }else{
   window.location.href='/pages/pubarticles/allarticles'
   
 }
 }else{
   
  if(user.contact==articleDocument.contact){;
  //Do nothing since owner is viewing own information
  }else{
    DebitTraderAccountBalance(user.contact,articleViewCost)
    UpdateNumberOfArticleVisits(articleDocument.id,1)
  }
  
 }
})


          }else{
        ;
          }



}
})


      
        }
       
        
      })
       
    


     



      
      },[articleParams.id])
    
 }catch(error){
  
 }
     
 try{ return(<div class="componentPadding" >
 {
(()=>{
if(!trader){
 ;
}else{
 
if(trader.permissionTokensObj.displayArticlesAtFreeCost==true){
       
;
       }else{

         if(cookies.user==undefined){
           return (<LoginAlert
             showLoginAlert={showLoginAlert}
           message="Login to access this information"
             closeLoginAlert={() => {
               window.location.href='/pages/pubarticles/allarticles'
               setShowLoginAlert(false)}
             }
       
           code={async (arguement)=>{
           
          return await VerifyRegistrationAndPin(arguement.contact,arguement.pin).then(resp=>{
           if(resp.registered===false){
          return({msg:'Your contact has no account with Kayas. Click "Create account"'}) 
       
             }else
             
                if(resp.pin===false){
                 return({msg:'Incorrect password. Try again or contact Kayas'})
                }else{
                 return({user:resp.details,success:true})
       
                  
                
            
                }
              })
           }}
             
           />)
         }else{

                 
         }

       }

       return(
         <div class="row">
         
         {article}
         
         </div>
         
       )  


}


})()
}
        </div>)}catch(error){
         console.log(error)
         return(
           <div style={{paddingTop:"50px"}}><MessageComponent message="An error occured. Refresh the page to try again"/></div>
         )
        }
            
            
            
           
          
        
      
       //return statement
      
      
      }
    
     export default PubArticleComp