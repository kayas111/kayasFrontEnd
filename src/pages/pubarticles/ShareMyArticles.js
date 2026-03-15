import { GetTradingDetails,DebitTraderAccountBalance,ToastAlert,LogIn, ListArticles, SuspenseComponent,IsLoggedIn, VerifyRegistrationAndPin, MessageComponent, DisplayPreMessage } from '../Functions';
import firebase from 'firebase/compat/app';
import { getStorage, ref, deleteObject } from "firebase/storage";
import { LoginAlert,CreateAccountAlert } from '../Functions';
import 'firebase/compat/storage';
import { articleViewCost } from '../../Variables';
import { useCookies } from 'react-cookie';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState,useMemo} from 'react';



export function ShareMyArticles(props){
    let componentParams=useParams(),articleAuthorContact
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[authorName,setAuthorName]=useState('')
    const[myArticles,setMyArticles]=useState(<DisplayPreMessage message="Loading information....."/>)
    const [showLoginAlert, setShowLoginAlert] = useState(true);
    const [showCreateAccountAlert, setShowCreateAccountAlert] = useState(true);
    
    
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
          
          setMyArticles(ListArticles(resp,cookies))
         
                      
          
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
      
      
                          
      
            }
      





    },[])
   
  try{ return(<div class="componentPadding" >
   
          <div class="row">
          
          {myArticles}
          
          </div>
          
        
         </div>)}catch(error){
          console.log(error)
          return(
            <div style={{paddingTop:"50px"}}><MessageComponent message="An error occured. Refresh the page to try again"/></div>
          )
         }
          
  }


  export default ShareMyArticles