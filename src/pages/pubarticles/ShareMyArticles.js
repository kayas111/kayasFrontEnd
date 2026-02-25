import { GetTradingDetails,DebitTraderAccountBalance,ToastAlert,LogIn, ListArticles, SuspenseComponent,IsLoggedIn, VerifyRegistrationAndPin, MessageComponent } from '../Functions';
import firebase from 'firebase/compat/app';
import { getStorage, ref, deleteObject } from "firebase/storage";
import { LoginAlert,CreateAccountAlert } from '../Functions';
import 'firebase/compat/storage';
import { articleViewCost } from '../../Variables';
import { useCookies } from 'react-cookie';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';



export function ShareMyArticles(props){
    let componentParams=useParams(),articleAuthorContact
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[authorName,setAuthorName]=useState('')
    const[myArticles,setMyArticles]=useState((()=>{
      return(<div style={{paddingTop:"120px"}}><MessageComponent message="Please wait....."/> </div>)
    })())
    const [showLoginAlert, setShowLoginAlert] = useState(true);
    const [showCreateAccountAlert, setShowCreateAccountAlert] = useState(true);
    const [trader, setTrader] = useState();
    

        
    function FetchArticles(articleAuthorContact){ 
      
      fetch('/getMyArticles',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
          contact:parseInt(articleAuthorContact),
        })
      }).then(resp=>{
      
        return resp.json()}).then(resp=>{
         
          if(resp.length===0){
           
            ToastAlert('toastAlert2','This information does not exist',3000)
          
          }else{
            let firstArticle=resp[0]
            setAuthorName(`Stories by ${firstArticle.author}`)
          resp.reverse()
          
          //setMyArticles(ListArticles(resp))
         
          
              
          
          }
          
        })
    }
    
    
    useEffect(async ()=>{
      
       
       
      if(componentParams.articleAuthorContact===undefined){
        //check this code, this condition is not significant
            articleAuthorContact=props.articleAuthorContact
            FetchArticles(articleAuthorContact)
      
          
            }else{
              articleAuthorContact=componentParams.articleAuthorContact
              FetchArticles(articleAuthorContact)
      
      
              GetTradingDetails(parseInt(articleAuthorContact)).then(resp=>{
                let trader=resp
                setTrader(resp)
                try{ if(trader.permissionTokensObj.displayArticlesAtFreeCost==true){
                ;
                }else{
                 if(cookies.user!=undefined){
                GetTradingDetails(cookies.user.contact).then(resp=>{
                let user=resp
                if(user.accBal<articleViewCost && user.contact!=parseInt(articleAuthorContact)){
                
                  if(window.confirm(`Your Kayas account balance is low. Click "OK" to deposit atleast ${articleViewCost}/= in order to read this information.`)==true){
                  window.location.href=`/pages/deposit`
                 }else{
                   window.location.href='/pages/pubarticles/allarticles'
                   
                 }
                 }else{
                   
                  if(user.contact==parseInt(articleAuthorContact)){;
                  //Do nothing since author is accessing own information.
                  }else{
                    DebitTraderAccountBalance(user.contact,articleViewCost)
                    
                  }
                  
                 }
                })
                
                
                          }else{
                        ;
      
      
                          }
                
                
                
                }}catch(error){
                window.alert('This information does not exist')
                window.location.href='/pages/pubarticles/allarticles'
               }
      
                })
                
      
            }
      





    },[])
   
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
          
          {myArticles}
          
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
          
  }


  export default ShareMyArticles