


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
    
    
    // resp.forEach(articleObject=>{
    
    // let newComments;
    // if(articleObject.newCommentsNumb===undefined){
    // newComments=0
    // }else{
    // newComments=articleObject.newCommentsNumb
    // }
    
    // data+=`<div class='col-sm-6 col-md-4' style='background:#E3E3E3;border:4px solid white;border-radius:20px;padding:10px;' onclick=fetch('/resetPubArticlesNewCommentsNumb',{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:${articleObject.id}})}) ><div><a  style='color:black;' href='/pages/pubarticles/article/${articleObject.id}'><span class="hoverEffectUnderline"><div  style='padding-bottom:10px;'><div style='color:black;font-size:18px;'>${articleObject.headline1}</div><div style='font-size:12px;color:grey;'>Article ${articleObject.id}</div><div style='color:grey;padding-top:5px;'><span style='color:red;'>${newComments}</span> new comments | <span style='color:red;'>${articleObject.visits}</span> views | <span style='color:red;'>${articleObject.pubArticleOpinions.length}</span> comments</div></div> </span></a></div></div>`
    // })
    // setMyArticles('<div style="text-align:center;font-size:20px;color:red;">Your Articles below:</div>'+data)
    // setStatus(`<div style='color:green;'>Done, scroll down to see your Articles. <span class='fa fa-check'></span></div>`) 
    
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
    <div class="pageDescription">All articles created by you</div><p></p>
    <div style={{display:"flex",flexWrap:"wrap"}}>
                
                  <div class="button1" onClick={()=>{
                    
                        window.location.href=`whatsapp://send?text=*Trending stories*%0A%0ATap the link below for details:%0A%0A${window.location.origin}/pages/pubarticles/sharemyarticles/${cookies.user.contact}`
                    }}><span class="fa fa-whatsapp"></span> Share all</div>
                               </div><p></p>
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