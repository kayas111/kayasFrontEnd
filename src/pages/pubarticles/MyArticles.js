


import 'firebase/compat/storage';

import {useCookies} from 'react-cookie'
import React, {useState,useEffect} from 'react';
import { IsLoggedIn,ListArticles,MessageComponent,SuspenseComponent,ToastAlert } from '../Functions';
import { kayasDomainUrl } from '../../Variables';
import LoginPage from '../LoginPage';
export function MyArticles(){
    const[status,setStatus]=useState('')
    const [cookies]=useCookies(['user'])
    
    const[myArticles,setMyArticles]=useState(<SuspenseComponent/>)
    useEffect(()=>{
if(cookies.user==undefined){

   ;

}else{
    fetch('/getMyArticles',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
          contact:parseInt(cookies.user.contact),
        })
    }).then(resp=>{
        
        return resp.json()}).then(async (resp)=>{
    if(resp.length===0){
        
        setMyArticles(resp)
    
    }else{
    resp.reverse()
    let  articles= await ListArticles(resp)
    setMyArticles(articles)
    
     
    }
    
          
         
          })
}


    },[])

   
            return(<div class="componentPadding">
                <p></p>
              
          
    {(()=>{
        if(cookies.user==undefined){
            return(
                <LoginPage/>
            )
        }else{
return(<div>
   
                               
    
<div class="pageLabel">My articles</div>
    <p></p>
    <div style={{display:"flex",flexWrap:"wrap"}}>
                
                  <div class="button1" onClick={()=>{
                    
                        window.location.href=`whatsapp://send?text=*Trending stories*%0A%0ATap the link below for details:%0A%0A${window.location.origin}/pages/pubarticles/sharemyarticles/${cookies.user.contact}`
                    }}><span class="fa fa-whatsapp"></span> Share all</div>
                               </div>




                              
                               
                               
                               <p></p>
    {
        (()=>{
            if(myArticles.length==0){
                return(
                    <div style={{paddingTop:"30px"}}><MessageComponent message="You have no articles. Please create some."/></div>
                )
            }else{
                return(
<div class="row">{myArticles}</div>
                )
            }
        })()
    }
                
                
                
</div>)
        }
    })()}


            </div>)
          
  }

  export default MyArticles