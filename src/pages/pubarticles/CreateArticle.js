import {ToastAlert,IsLoggedIn } from '../Functions';
import firebase from 'firebase/compat/app';
import { ArticlesNav} from './PubArticleHome';
import {useCookies} from 'react-cookie'
import React, {useState,useEffect} from 'react';
import 'firebase/compat/storage';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
firebase.initializeApp({
  apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
  authDomain: "kayas-42321.firebaseapp.com",
  projectId: "kayas-42321",
  storageBucket: "kayas-42321.appspot.com"

})
const storage=firebase.storage()
const bucket=storage.ref()

export function CreateArticle(){
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[status,setStatus]=useState('')
    const[body,setBody]=useState('')
    const[progressBarValue,setProgressBarValue]=useState(0)
    const[imagePreview,setImagePreview]=useState('Image appears here')
    
useEffect(()=>{
 if(IsLoggedIn(cookies)===true){;}else{;}

},[])
   
async function  CreateArticle(){   
  
  setStatus("Initializing.........")
  setTimeout(()=>{
    setStatus("Gathering requirements..............")
    setTimeout(()=>{
      setStatus("Creating.......................")
  
    },5000)
  },5000)
  
  
   
  let traderDetailsObj=await fetch(`/getTradingDetails/${parseInt(cookies.user.contact)}`).then(res=>res.json()).then(resp=>{
  return resp[0]
            })
 
if(traderDetailsObj.permissionTokensObj.createPubArticleTokens<1 || 
              traderDetailsObj.permissionTokensObj.createPubArticleTokens>1){
                        let payLoad={
                          headline1:document.getElementById("articleCreateForm")[0].value.trim(),
                          institution:traderDetailsObj.institution.trim(),
                          author:traderDetailsObj.name.trim(),
                          contact:parseInt(traderDetailsObj.contact),
                          body:body.trim()
                          
                                }  
   
  let responseObject= await fetch('/createArticle',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(payLoad)
      }).then(resp=>{
          
          return resp.json()}).then(res=>{
            return res
              })

    
              
            
  if(responseObject.limitReached===1){
    
    ToastAlert('toastAlert2','Maximum number of articles reached. Delete some',5000)
    }else{
                               
    let imageFile= await document.querySelector('#pubArticleImageInputElement').files[0]  
    document.getElementById("articleCreateForm").articleHeadline1.value=""
        
    if(imageFile===undefined){
      window.location.href=`/pages/pubarticles/article/${responseObject.id}`
      setStatus(`Finalizing.......`) 
      }else{

        setStatus(`Uploading image..........`) 


        let value=0;
        setInterval(()=>{
          if(value!==94){
            value+=1
            setProgressBarValue(value)
        
          }else{;}
         
        },450)
        
    
      let imageName=`pubArticleImage_${responseObject.id}`
       let imageRef= bucket.child(`pubArticleImages/${imageName}`)
     await  imageRef.put(imageFile).then(async (resp)=>{

      setStatus(`Getting image URL ..........`)      
let imageDownLoadUrl=await imageRef.getDownloadURL({
        orderBy:'generation',limitTo:1
       }).then(resp=>{
       return resp;
        })

fetch('/addPubArticleImageUrlToArticle',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({contact:parseInt(responseObject.contact),articleId:responseObject.id,imageDownLoadUrl:imageDownLoadUrl})
    }).then(resp=>{
        setStatus(`Image saved`) 
        window.location.href=`/pages/pubarticles/article/${responseObject.id}`
        ToastAlert('toastAlert1','Finalizing......',5000)
     })




       })
       
      }
       
         
    }
            
        
              
              
          





             }
            else if(traderDetailsObj.permissionTokensObj.createPubArticleTokens===0) {
              ToastAlert('toastAlert2','Maximum number of articles reached. Delete some',4000)
            }
            else{
              ToastAlert('toastAlert2','Error, try again',3000)
            }            




          
          }

    return (<div style={{padding:"3px"}}>
           

      <div className ="row">
<div class='col-md-3'></div>
<div class='col-md-6'>
  <div class="pageLabel">Create article</div>
  <div class="pageDescription">Create information that people can read online. Attach a photo where necessary</div>
<div style={{paddingBottom:"5px",paddingTop:"10px"}}><ArticlesNav/></div>
  
    <form method="post" id="articleCreateForm" action="#">

    
       <div class="mb-3">
     <div class="formInputLabel">Type headline</div>
     <textarea rows="3" type="text" class="form-control" autoComplete="off" name="articleHeadline1"></textarea>
   
   <br></br>
   <div class="formInputLabel">Add photo <span style={{fontSize:"12px"}}> <input type="file" id="pubArticleImageInputElement" name="file" onChange={(event)=>{
  let file=document.querySelector('#pubArticleImageInputElement').files[0]
  let fileTypeCharacterArray=Array.from(file.type)
  if(fileTypeCharacterArray[0]==='i'&&fileTypeCharacterArray[1]==='m'&&fileTypeCharacterArray[2]==='a'&&fileTypeCharacterArray[3]==='g'&&fileTypeCharacterArray[4]==='e'){
    setImagePreview(URL.createObjectURL(file))
  }else{
        
    ToastAlert('toastAlert2',`Image format ${file.type} not supported. Change image`,5000)
    setTimeout(()=>{
      window.location.href='/pages/pubarticles/createarticle'
    },5000)
  }
  
 
}}></input></span></div>

   <div style={{paddingTop:"4px"}}><img src={imagePreview} class=" d-block w-100" alt=""/></div>
  <br></br>
  <div class="formInputLabel">Type/Paste your message here:</div>
  
  <CKEditor config={{toolbar:['Bold','Italic','Link','NumberedList','BulletedList']}}
        editor={ ClassicEditor }
        onChange={ ( event, editor ) => {
        
          const data = editor.getData();
          setBody(data);
          


        } }
      />
   
   
    </div>
     
   <div class="status">{status}</div>
     <progress value={progressBarValue} max="100"  style={{width:"100%"}}/>
     <div   onClick={
     
       ()=>{
      
                 
          
         if(Array.from(document.getElementById("articleCreateForm").articleHeadline1.value.trim()).length<1){
          ToastAlert('toastAlert2','Enter a headline',3000)

}else {
  if(Array.from(body).length<1){
    
          let imageFile=document.querySelector('#pubArticleImageInputElement').files[0] 
          if(imageFile===undefined) {
            ToastAlert('toastAlert2','Type or paste some information in the body section',3000)
            
          }else{
            CreateArticle()
          }
            
         } else{
        
          CreateArticle()
          
          
        }
        }

       }
     } class="btn btn-success" style={{width:"100%"}}>Create Article</div><p></p>
    
     </form>
     
     
     
     
     
     
     
     </div>
<div class='col-md-3'></div>


      </div>
         

    
  
     </div>)
}

export default CreateArticle