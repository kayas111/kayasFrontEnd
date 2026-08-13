import { VerifyRegistrationAndPin,ToastAlert,MessageComponent,ListArticles,ListOtherAuthorArticles,ListOtherArticles, IsLoggedIn, LogIn,LoginAlert, GetTradingDetails, DebitTraderAccountBalance, SuspenseComponent, DisplayPreMessage, FetchMyArticles, SendMessage, DepositPopupAlert, LogFrontEndActivity} from '../Functions';
import firebase from 'firebase/compat/app';
import { useCookies } from 'react-cookie';
import 'firebase/compat/storage';
import {Redirect} from 'react-router-dom';

import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';
import { ArticlesNav} from './PubArticleHome';
import odoi from '../imgs/odoi.jpg'
import snacks from '../imgs/snacks.jpg'
import ovon2 from '../imgs/ovon2.jpg'
import themeetup from '../imgs/themeetup.jpg'
import edwin from '../imgs/edwin.jpg'
import conas from '../imgs/conas.jpg'
import discount from '../imgs/discount.jpg'
import laptop from '../imgs/laptop.webp'
import micheal from '../imgs/micheal.jpg'
import chosen from '../imgs/chosen.jpg'



import {kayasDomainUrl,articleViewCost, kayasUnlockMessage} from '../../Variables'

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
      const [showDepositPopupAlert, setShowDepositPopupAlert] = useState(false); 
      

      const[authorArticles,setAuthorArticles]=useState(SuspenseComponent)


      const[verificationTick,setVerificationTick]=useState('')
     const[imageDownLoadUrl,setImageDownLoadUrl]=useState('')
      
      let opinionsReceivedFlag=0;

        let message=`*${articleHeadline1.trim()}*: ${window.location.origin}/pages/pubarticles/article/${articleParams.id}`, whatsappPublicArticleShareLink=`whatsapp://send?text=${encodeURIComponent(message)}`
          
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








      function LoadInformation(){
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

FetchMyArticles(articleDocument.contact).then(resp=>{
  
  const otherAuthorArticles = resp.filter(article =>parseInt(article.id) != parseInt(articleParams.id))
  otherAuthorArticles.reverse()
  setOtherAuthorArticles(otherAuthorArticles)
})
      }
    




GetTradingDetails(articleDocument.contact).then(resp=>{
  
  let trader=resp
  setTrader(resp)
  
  if(trader.permissionTokensObj.displayArticlesAtFreeCost==true){
  UpdateNumberOfArticleVisits(articleDocument.id,1)
  LoadInformation()
  // LogFrontEndActivity(`Free article view. Article: ${articleDocument.headline1}`)
  }else{
  if(cookies.user){
  
  GetTradingDetails(cookies.user.contact).then(resp=>{
  let user=resp
  if(user.accBal<articleViewCost && user.contact!=articleDocument.contact ){
    LogFrontEndActivity(`${cookies.user.name} (0${cookies.user.contact}) tried to view an article with low balance. Article: ${articleDocument.headline1}`)
  
 setShowDepositPopupAlert(true)

  }else{
    LoadInformation()
   
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
     
      if(cookies.user){
          
       
        
        
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


              <div style={{paddingTop:"8px"}}>
              <div class="flexDisplayWithGap">


<div class="btn btn-sm btn-warning"
onClick={()=>{
if(article.contact!=773367078){
 window.alert('Questions are not yet allowed for this information account')
}else{
 setDisplaySendMessage(true)
}





}}

>Ask a question.</div>
<Link to={"/pages/products/productslist"}><div class="btn btn-sm btn-success">Campus items/products</div></Link>

<Link to={"/pages/hostels/hostelslist"}><div class="btn btn-sm btn-warning">Makerere hostels</div></Link>
<div class="btn btn-sm btn-success" onClick={()=>{
window.location.href='https://chat.whatsapp.com/KZcdwmHMGVG6vbm2o5waU4?s=cl&p=a&ilr=0'
}}><span class="fa fa-whatsapp"></span> Makerere group</div>


</div>
              </div>
               
               
               </div>
            
     
   
         
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
        

   <div style={{paddingTop:"10px"}}>


      <div style={{color:"orange",background:"black",padding:"3px",textAlign:"center",borderRadius:"12px 12px 0px 0px"}}> Scroll right <i class="fas fa-arrow-right"></i> for more </div>

      <div class="pubArticleCarousel">
  <div class="pubArticleCarousel-track">
  <div class="pubArticleCarouselCard">
    <img  loading='lazy' src={themeetup} class="pubArticleCarouselCardImg d-block w-100" />
    
   
    </div>

    <div class="pubArticleCarouselCard"><img loading='lazy' src={micheal} class="pubArticleCarouselCardImg d-block w-100" />
    
    <div class="pubArticleCarouselCardText">Arinda Micheal Rwabyooma - CAES (0747482888)</div>
    
    </div>
    <div class="pubArticleCarouselCard"><img loading='lazy' src={chosen} class="pubArticleCarouselCardImg d-block w-100" />
    
    
    
    </div>


    <div class="pubArticleCarouselCard"><img loading='lazy' src={odoi} class="pubArticleCarouselCardImg d-block w-100" />
    
    <div class="pubArticleCarouselCardText">Odoi Joram - College of Computing and Information Science</div>
    
    </div>


    <div class="pubArticleCarouselCard"><img loading='lazy' src={conas} class="pubArticleCarouselCardImg d-block w-100" />
    
   
    </div>

    <div class="pubArticleCarouselCard"><img loading='lazy' src={discount} class="pubArticleCarouselCardImg d-block w-100" />
 
    </div>
    <div class="pubArticleCarouselCard"><img loading='lazy' src={laptop} class="pubArticleCarouselCardImg d-block w-100" />
    
    <div class="pubArticleCarouselCardText">800,000 - 1,400,000 (0703852178)</div>
    
    </div>
    
    <div class="pubArticleCarouselCard"><img loading='lazy' src={ovon2} class="pubArticleCarouselCardImg d-block w-100" />
    
    <div class="pubArticleCarouselCardText">Ovon Sutherland: Friend to Kayas</div>
    
    </div>

    <div class="pubArticleCarouselCard"><img loading='lazy' src={edwin} class="pubArticleCarouselCardImg d-block w-100" />
    
    <div class="pubArticleCarouselCardText">Edwin: Friend to Kayas</div>
    
    </div>
    
  </div>
</div>
      </div>



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
  


  
<DepositPopupAlert alertHeading='Low account balance' showDepositPopupAlert={showDepositPopupAlert} closeDepositPopupAlert={()=>{window.location.href='/pages/pubarticles/allarticles'}} message={kayasUnlockMessage}  />
        </div>)}catch(error){
         
         return(
           <div style={{paddingTop:"50px"}}><MessageComponent message="An error occured. Refresh the page to try again"/></div>
         )
        }
            
            
            
           
          
        
      
       //return statement
      
      
      }
    
     export default PubArticleComp