import { GetTradingDetails,DebitTraderAccountBalance,ToastAlert,LogIn, ListArticles, SuspenseComponent,IsLoggedIn } from '../Functions';
import firebase from 'firebase/compat/app';
import { getStorage, ref, deleteObject } from "firebase/storage";
import 'firebase/compat/storage';
import { articleViewCost } from '../../Variables';
import { useCookies } from 'react-cookie';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';
export function ShareMyArticles(props){
    let componentParams=useParams(),articleAuthorContact
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[authorName,setAuthorName]=useState('')
    const[myArticles,setMyArticles]=useState(SuspenseComponent)

    

   
    
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
           
            ToastAlert('toastAlert2','These Articles do not exist',3000)
          
          }else{
            let firstArticle=resp[0]
            setAuthorName(`Stories by ${firstArticle.author}`)
          resp.reverse()
          setMyArticles(ListArticles(resp))
         
          
              
          
          }
          
        })
    }
    
    
    useEffect(()=>{
      
       
      if(componentParams.articleAuthorContact===undefined){
  //check this code, this condition is not significant
      articleAuthorContact=props.articleAuthorContact
      FetchArticles(articleAuthorContact)

    
      }else{
        articleAuthorContact=componentParams.articleAuthorContact
        FetchArticles(articleAuthorContact)


        GetTradingDetails(parseInt(articleAuthorContact)).then(resp=>{
          let trader=resp
          
          if(trader.permissionTokensObj.displayArticlesAtFreeCost==true){
          ;
          }else{
           if(cookies.user!=undefined){
          GetTradingDetails(cookies.user.contact).then(resp=>{
          let user=resp
          if(user.accBal<articleViewCost){
          
            if(window.confirm(`Your Kayas account balance is low. Click "OK" to top up atleast ${articleViewCost}/= and be able to read this information.`)==true){
            window.location.href=`/pages/deposit`
           }else{
             window.location.href='/pages/pubarticles/allarticles'
             
           }
           }else{
             
            if(user.contact==parseInt(articleAuthorContact)){;
            //Dont add article visits when article author views own article
            }else{
              DebitTraderAccountBalance(user.contact,articleViewCost)
              
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






    },[])
   
            return(<div class="componentPadding" >
      
<div class="row">
   
  {myArticles}
  
  </div>

  
   
    
            </div>)
          
  }


  export default ShareMyArticles