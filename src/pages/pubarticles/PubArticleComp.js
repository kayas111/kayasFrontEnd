import { VerifyRegistrationAndPin,ToastAlert,MessageComponent,ListArticles,ListOtherAuthorArticles,ListOtherArticles, IsLoggedIn, LogIn,LoginAlert, GetTradingDetails, DebitTraderAccountBalance, SuspenseComponent, DisplayPreMessage, FetchMyArticles, SendMessage, DepositPopupAlert, LogFrontEndActivity} from '../Functions';
import firebase from 'firebase/compat/app';
import { useCookies } from 'react-cookie';
import 'firebase/compat/storage';
import {Redirect} from 'react-router-dom';

import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';
import { ArticlesNav} from './PubArticleHome';
import c1 from './pubArticleCarouselImgs/c1.jpg'
import c2 from './pubArticleCarouselImgs/c2.jpg'
import c3 from './pubArticleCarouselImgs/c3.jpg'
import c4 from './pubArticleCarouselImgs/c4.jpg'
import c5 from './pubArticleCarouselImgs/c5.webp'
import c6 from './pubArticleCarouselImgs/c6.jpg'
import c7 from './pubArticleCarouselImgs/c7.jpg'
import c8 from './pubArticleCarouselImgs/c8.jpg'
import c9 from './pubArticleCarouselImgs/c9.jpg'
import c10 from './pubArticleCarouselImgs/c10.jpg'
import c11 from './pubArticleCarouselImgs/c11.jpeg'
import c12 from './pubArticleCarouselImgs/c12.jpeg'
import c13 from './pubArticleCarouselImgs/c13.jpeg'
import c14 from './pubArticleCarouselImgs/c14.jpeg'
import c15 from './pubArticleCarouselImgs/c15.jpeg'
import c16 from './pubArticleCarouselImgs/c16.jpeg'
import c17 from './pubArticleCarouselImgs/c17.jpeg'
import c18 from './pubArticleCarouselImgs/c18.jpeg'
import c19 from './pubArticleCarouselImgs/c19.jpeg'
import c20 from './pubArticleCarouselImgs/c20.jpeg'
import c21 from './pubArticleCarouselImgs/c21.jpeg'
import c22 from './pubArticleCarouselImgs/c22.jpeg'
import c23 from './pubArticleCarouselImgs/c23.jpeg'
import c24 from './pubArticleCarouselImgs/c24.jpeg'
import c25 from './pubArticleCarouselImgs/c25.jpeg'
import c26 from './pubArticleCarouselImgs/c26.jpeg'
import c27 from './pubArticleCarouselImgs/c27.jpeg'
import c28 from './pubArticleCarouselImgs/c28.jpeg'
import c29 from './pubArticleCarouselImgs/c29.jpeg'
import c30 from './pubArticleCarouselImgs/c30.jpeg'
import c31 from './pubArticleCarouselImgs/c31.jpeg'
import c32 from './pubArticleCarouselImgs/c32.jpeg'
import c33 from './pubArticleCarouselImgs/c33.jpeg'
import c34 from './pubArticleCarouselImgs/c34.jpeg'
import c35 from './pubArticleCarouselImgs/c35.jpeg'
import c36 from './pubArticleCarouselImgs/c36.jpeg'
import c37 from './pubArticleCarouselImgs/c37.jpeg'
import c38 from './pubArticleCarouselImgs/c38.jpeg'
import c39 from './pubArticleCarouselImgs/c39.jpeg'
import c40 from './pubArticleCarouselImgs/c40.jpeg'




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
          

        let pubArticleCarouselImages=[
          {src:c9},
          {src:c6,text:"Arinda Micheal Rwabyooma - CAES (0747482888)"},
          {src:c2,text:'Kirabo Jennifer Gorreti - CAES (0708350226)'},
          {src:c10},
          {src:c1,text:"Chosen Jonan - CHUSS (0741750663)"},
          
          {src:c3},
          {src:c4,text:'Edwin: Friend to Kayas'},
          {src:c5,text:"800,000 - 1,400,000 (0703852178)"},
        
          {src:c7,text:"Odoi Joram - College of Computing and Information Science"},
          {src:c8,text:"Ovon: Friend to Kayas"},
          {src:c11},
          {src:c12},
          {src:c13},
          {src:c14},
          {src:c15},
          {src:c16},
          {src:c17},
          {src:c18},
          {src:c19},
          {src:c20},
          {src:c21},
          {src:c22},
          {src:c23},
          {src:c24},
          {src:c25},
          {src:c26},
          {src:c27},
          {src:c28},
          {src:c29},
          {src:c30},
          {src:c31},
          {src:c32},
          {src:c33},
          {src:c34},
          {src:c35},
          {src:c36},
          {src:c37},
          {src:c38},
          {src:c39},
          {src:c40}
         
        
        
        ]



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
               }}><span class="fa-brands fa-whatsapp"></span> Share article</div></span> 
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
}}><span class="fa-brands fa-whatsapp"></span> Makerere group</div>


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

{(()=>{
  
  if(pubArticleCarouselImages){
    let numberOfCarouselImages=pubArticleCarouselImages.length

    return(pubArticleCarouselImages.map((pubArticleCarouselImage,index)=>{
      let fileName=(pubArticleCarouselImage.src.split('/').pop()).split('.')[0]
      
      return (
        <div class="pubArticleCarouselCard">
        <img alt='Loading image....' loading='lazy' src={pubArticleCarouselImage.src} class="pubArticleCarouselCardImg d-block w-100" />
        <div class="pubArticleCarouselIndex">{numberOfCarouselImages--} - {fileName} </div>
        {(()=>{
          if(pubArticleCarouselImage.text){
            return(<div class="pubArticleCarouselCardText">{pubArticleCarouselImage.text}</div>)
          }
          
        })()}
       
        </div>
      )
    }))
  }
})()}

 

    
  </div>
</div>
      </div>



          </div>
          <div class="col-md-3"></div>
          
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