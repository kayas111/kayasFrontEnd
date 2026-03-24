


import 'firebase/compat/storage';

import {useCookies} from 'react-cookie'
import React, {useState,useEffect} from 'react';
import { FetchMyArticles, IsLoggedIn,ListArticles,MessageComponent,SuspenseComponent,ToastAlert } from '../Functions';
import { kayasDomainUrl } from '../../Variables';
import LoginPage from '../LoginPage';
export function MyArticles(){
    const[status,setStatus]=useState('')
    const [cookies]=useCookies(['user'])
    
    const[myArticles,setMyArticles]=useState()
    useEffect(()=>{
if(cookies.user==undefined){

   ;

}else{
FetchMyArticles(cookies.user.contact).then(resp=>{
    resp.reverse()
    setMyArticles(resp)
})
}


    },[])

   
            return(<div class="componentPadding">
              {(()=>{
                if(cookies.user){
                  return(
                    <div>
                      
             

<div style={{display:"flex",flexWrap:"wrap",gap:"5px"}}><div class="pageLabel">My articles</div>
     <p></p>
     <div style={{display:"flex",flexWrap:"wrap"}}>
                 
                   <div class="button1" onClick={()=>{
                     
                         window.location.href=`whatsapp://send?text=*Trending stories*%0A%0ATap the link below for details:%0A%0A${window.location.origin}/pages/pubarticles/sharemyarticles/${cookies.user.contact}`
                     }}><span class="fa fa-whatsapp"></span> Share all</div>
                                </div></div>
   
                          
                                  <p></p>
      <div class="row">
      {
            (()=>{
                if(myArticles){
                  
        if(myArticles.length==0){
          return(<MessageComponent message="You have no articles. Please create one"/>)
        }else{
        return (ListArticles(myArticles,cookies))
        }
        
                  
                }else{
                  return(<MessageComponent message="Loading information......."/>)
                }
              })()
       }
      </div>
                   
                   
                   
   
    


            
                    </div>
                  )
                }else{return (<MessageComponent message="You need to be logged in. Please login"/>)}
              })()}
            </div>)
          
  }

  export default MyArticles