import { FetchMyArticles,GetTradingDetails,DebitTraderAccountBalance,ToastAlert,LogIn, ListArticles, SuspenseComponent,IsLoggedIn, VerifyRegistrationAndPin, MessageComponent, DisplayPreMessage, SendMessage } from '../Functions';
import firebase from 'firebase/compat/app';
import { getStorage, ref, deleteObject } from "firebase/storage";
import { LoginAlert,CreateAccountAlert } from '../Functions';
import 'firebase/compat/storage';
import { articleViewCost } from '../../Variables';
import { useCookies } from 'react-cookie';
// import { Link } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState,useMemo} from 'react';



export function ShareMyArticles(props){
    let componentParams=useParams(),articleAuthorContact
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[authorName,setAuthorName]=useState('')
    const[myArticles,setMyArticles]=useState()
    const [showLoginAlert, setShowLoginAlert] = useState(true);
    const [showCreateAccountAlert, setShowCreateAccountAlert] = useState(true);  
    const [displaySendMessage, setDisplaySendMessage] = useState(false);
    
    useEffect(()=>{
      
       
       
      (async ()=>{
        if(componentParams.articleAuthorContact===undefined){
          //check this code, this condition is not significant
              articleAuthorContact=props.articleAuthorContact
              FetchMyArticles(articleAuthorContact).then(resp=>{
                resp.reverse()
                setMyArticles(resp)
              })
        
            
              }else{
                articleAuthorContact=componentParams.articleAuthorContact
                FetchMyArticles(articleAuthorContact).then(resp=>{
                  resp.reverse()
                  setMyArticles(resp)
                })
        
        
                            
        
              }
      })()
      





    },[])
   
  try{ return(<div class="componentPadding" >
   


   <div style={{paddingTop:"3px"}}>
    
    {(()=>{
      
             if(displaySendMessage){
               return(

                 
                <SendMessage displaySendMessage={displaySendMessage} closeSendMessage ={()=>{
                  setDisplaySendMessage(false)
                  document.body.style.overflow = "";
                  
                }}/>
              
               
               
               )
             }else{
              
             }
             
            })()}

               <div class="flexDisplayWithGap">
               <div class="btn btn-sm btn-warning"
             onClick={()=>{
               
               setDisplaySendMessage(true)
               
               
             
             }}
            
            >Ask a question.</div>
            
            <Link to={"/pages/hostels/hostelslist"}>
<div class="btn  btn-sm btn-success"
            >Hostels</div></Link>

            <div style={{padding:"3px",color:"green"}}><span class="fa fa-whatsapp"></span> Any challenges accessing information? WhatsApp 0703852178</div>

               </div>
            
            </div>
<p></p>
          <div class="row">
          
    {
      (()=>{
        if(myArticles){
          
if(myArticles.length==0){
  return(<MessageComponent message="No articles available."/>)
}else{
return (ListArticles(myArticles,cookies))
}

          
        }else{
          return(<MessageComponent message="Loading information......."/>)
        }
      })()
    }
          
          </div>
          
        
         </div>)}catch(error){
          console.log(error)
          return(
            <div style={{paddingTop:"50px"}}><MessageComponent message="An error occured. Refresh the page to try again"/></div>
          )
         }
          
  }


  export default ShareMyArticles