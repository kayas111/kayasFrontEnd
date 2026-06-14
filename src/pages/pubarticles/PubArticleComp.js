import { VerifyRegistrationAndPin,ToastAlert,MessageComponent,ListArticles,ListOtherAuthorArticles,ListOtherArticles, IsLoggedIn, LogIn,LoginAlert, GetTradingDetails, DebitTraderAccountBalance, SuspenseComponent, DisplayPreMessage, FetchMyArticles, SendMessage} from '../Functions';
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
      const[articleDataArray,setArticleDataArray]=useState()
      const [details,setDetails]=useState()
      const [article,setArticle]=useState(<DisplayPreMessage message="Loading information......"/>)
      const [OtherAuthorArticles,setOtherAuthorArticles]=useState()
      const [showLoginAlert, setShowLoginAlert] = useState(true);
      const [trader, setTrader] = useState();
      
      
      const [displaySendMessage, setDisplaySendMessage] = useState(false);
      
      

      const[authorArticles,setAuthorArticles]=useState(SuspenseComponent)


      const[verificationTick,setVerificationTick]=useState('')
     const[imageDownLoadUrl,setImageDownLoadUrl]=useState('')
      
      let opinionsReceivedFlag=0;

        let message=`*${articleHeadline1.trim()}*

        Tap the link below for details:
         ${window.location.origin}/pages/pubarticles/article/${articleParams.id}
        
        _Created by: ${article.author}_`, whatsappPublicArticleShareLink=`whatsapp://send?text=${encodeURIComponent(message)}`
          
      
      //whatsappPublicArticleShareLink=`whatsapp://send?text=*${encodeURIComponent(articleHeadline1.trim())}*%0ASee details below. Tap the link:%0A%0A${window.location.origin}/pages/pubarticles/article/${articleParams.id}%0A%0A${articleAuthor}`,style={padding:"5px"}
     
      
     
      
      //return statement
 try{
  useEffect( ()=>{
            
   ( async ()=>{
    await  fetch(`/pubarticle/${articleParams.id}`).then(res=>res.json()).then(articleDataArray=>{
      setArticleDataArray(articleDataArray)         
           
      
      if(articleDataArray.length===0){
        
        setArticleHeadline1("This article does not exist or has been deleted.")
        
        setArticleBody('<div style="font-size:20px;color:red;">This article does not exist or has been deleted.<p></p></div>')
      }else{
      
        let articleDocument=articleDataArray[0]
        setArticle(articleDataArray[0])
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

if(window.confirm(`To activate access, click "OK" then deposit atleast 1000 shs to your Kayas account.`)==true){
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


FetchMyArticles(articleDocument.contact).then(resp=>{
  
  const otherAuthorArticles = resp.filter(article =>parseInt(article.id) != parseInt(articleParams.id))
  otherAuthorArticles.reverse()
  setOtherAuthorArticles(otherAuthorArticles)
})
    
      }
     
      
    })
     
  

   })()

     



      
      },[articleParams.id])
    
 }catch(error){
  
 }
     
 try{ return(<div class="componentPadding" >
   
 {
(()=>{
if(articleDataArray){
  if(articleDataArray.length==0){
    return(<MessageComponent message="This information does not exist or has been deleted"/>)
  }else{
    if(!trader){
  
      return(<MessageComponent message="Loading information......."/>)
     }else{
      
     if(trader.permissionTokensObj.displayArticlesAtFreeCost==true){
            
     ;
            }else{
     
              if(cookies.user==undefined){
                return (<LoginAlert
                notRegisteredMessage ='j'
                  showLoginAlert={showLoginAlert}
                message="Login to access this information"
                  closeLoginAlert={() => {
                    window.location.href='/pages/pubarticles/allarticles'
                    setShowLoginAlert(false)}
                  }
            
                code={async (arguement)=>{
                  
                
               return await VerifyRegistrationAndPin(arguement.contact,arguement.pin).then(resp=>{
                if(resp.registered===false){
               return({msg:arguement.notRegisteredMessage}) 
            
                  }else
                  
                     if(resp.pin===false){
                      return({msg:arguement.incorrectPasswordMessage})
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
              
          <div class="col-md-3"></div>
          <div class="col-md-6">        
          {(()=>{
          if(articleDataArray){
    
            if(articleDataArray.length==0){
              return(<MessageComponent message="This information does not exist or has been deleted."/>)
            }else{
    return(
      <div class="articleContainer">
      <div class="articleContainer2">
      <div  >
      <span> <div class="button1 articleShareButton"  onClick={
               ()=>{
                 window.location.href=whatsappPublicArticleShareLink
               }}><span class="fa fa-whatsapp"></span> Share article</div></span> 
    <span class="articleId"> Article {article.id}/{visits}</span>  
    
    </div>  
    
    <ArticlesNav articleAuthorContact={article.contact} articleId={article.id}/>
    <div class="articleHeadline">{article.headline1}</div>
    <div class="articleImg" ><img loading='lazy' src={article.imageDownLoadUrl} class=" d-block w-100" /></div>
           <div class="articleBody">
            
            <div  dangerouslySetInnerHTML={{__html:article.body}}/>
            <div >
            <div>Always keep it Kayas.</div>

            <div style={{paddingTop:"3px"}}>{(()=>{
             if(displaySendMessage){
               return(<SendMessage displaySendMessage={displaySendMessage} closeSendMessage ={()=>{
                 setDisplaySendMessage(false)
                 document.body.style.overflow = "";
                 
               }}/>)
             }else{
              
             }
             
            })()}
               <div class="btn btn-warning"
             onClick={()=>{
               
               setDisplaySendMessage(true)
               
               
             
             }}
            
            >Ask a question.</div></div>
            
           
         
            </div>
            </div>
    
    
      </div>
     </div>
    )
            }
    
    
    
          }else{
            
            return(<MessageComponent message="Loading information........"/>)
          }
    
        })()}
        
          </div>
          <div class="col-md-3"></div>
            <p></p>
     {
       (()=>{
         if(OtherAuthorArticles){
           
     if(OtherAuthorArticles.length==0){
     return(null)
     }else{
     return (ListArticles(OtherAuthorArticles,cookies))
     }
     
           
         }else{
           return(<MessageComponent message="Loading more information......."/>)
         }
       })()
     }
     
              </div>
              
            )  
     
     
     }
  }
} else{
  return(<MessageComponent message="Loading information......"/>)
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