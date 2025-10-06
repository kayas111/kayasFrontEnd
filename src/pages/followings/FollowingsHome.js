
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getFormDataOnClick,getFormData,VerifyRegistrationAndPin,setKayaserVerificationStatus } from '../Functions'
import {Link} from 'react-router-dom';
export function FollowingsNav(){
  let style={color:"white"}
  return (<div >
  <div style={{display:"flex",flexWrap:"wrap",borderRadius:"8px",padding:"3px"}}>
  <div class="followingsNavItem"><a style={style} href="#createCategory"><div class="button1 hovereffect">
    
    
    New category</div></a></div>

<div class="followingsNavItem" ><a style={style} href="#followSomeone"><div  class="button1 hovereffect">Follow</div></a></div>
<div class="followingsNavItem"><a style={style} href="#categoriesSubscribedTo"><div  class="button1 hovereffect">My followings</div></a></div>
<div class="followingsNavItem" ><a style={style} href="#displayYourCategories"><div  class="button1 hovereffect">My categories</div></a></div>


</div>


</div>)
}


export function FollowingsHome(){
    

    let [submitStatus,setSubmitStatus]=useState('')
    let [followCategory,setFollowCategory]=useState('')
    let [createFollowCategoryStatus,setCreateFollowCategoryStatus]=useState('')
    let [seeCategoriesStatus,setSeeCategoriesStatus]=useState(''),[categoriesSubscribedToStatus,setCategoriesSubscribedToStatus]=useState(''),[categoriesSubscribedTo,setCategoriesSubscribedTo]=useState('')
    let [followersCategories,setFollowersCategories]=useState('')
return(
    <div class="componentPadding">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <div class="pageLabel">Followings</div>
         <div class="pageDescription">
         Follow any category and even when you have no data or when your data is turned off, you will immediately recieve an instant SMS each time a POST is made to that category.
          </div><p></p>
       <div class="btn btn-success btn-sm fullButtonWidth">Follow</div><p></p>
       <div class="btn btn-success btn-sm fullButtonWidth">My followings</div><p></p>
       <Link to="/pages/followings/createfollowingscategory"><div class="btn btn-success btn-sm fullButtonWidth">New category</div></Link>
       <p></p>
       <div class="btn btn-success btn-sm fullButtonWidth">My categories</div>
       
       
       
       
        </div>





        <div class="col-md-3"></div>
      </div>
        
       <p></p>

       <div class="row">
        <div class="col-md-6"><FollowingsNav/></div>
       </div>
            

       <p></p>

       <div class="row" >
       

        <div class="col-md-6">

            
       <div style={{padding:"5px"}}>  
      <form method="post" onSubmit={(e)=>{
        
        let FormObject=getFormData(e)
           
        VerifyRegistrationAndPin(FormObject.contact.trim(),FormObject.pin.trim()).then(resp=>{
setKayaserVerificationStatus(resp,setCategoriesSubscribedToStatus,()=>{
  let payLoad={contact:resp.details.contact}
               fetch('/followingsPostRequest',{
                    method:"post",
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify({method:"getCategoriesSubscribedTo",args:payLoad}) 
                }).then(res=>res.json()).then(resp=>{
                  
  if(resp.length==0){
  setCategoriesSubscribedToStatus(`<div style='color:green;'><span style='color:red;'>You don't subscribe to any categories.</span></div>`)
  
  }else{
  setCategoriesSubscribedTo(resp.map(categoryDoc=>{
    return(
   <div onClick={()=>{
    //window.location.href=`/pages/following/${categoryDoc.contact}/${categoryDoc.categoryId}`
   }} style={{padding:"5px"}} class="col-md-4">
  
     <div class="followersCategory backgroundColorHovereffect">
      <div style={{padding:"10px"}}>
        <div style={{fontSize:"15px",color:"green"}}>{categoryDoc.categoryName}</div>
        <div style={{fontSize:"11px"}}>{categoryDoc.followers.length} followers, Category ID: {categoryDoc.categoryId}</div>
        <div style={{paddingTop:"5px"}}><span style={{background:"black",padding:"5px",borderRadius:"10px",color:"orange",fontSize:"11px"}}>You subscribe to this category</span></div>
      </div>
    </div>
   </div>
    
    )
  }))
  setCategoriesSubscribedToStatus(`<div style='color:green;'>Done, scroll down to see.</div>`)
  }
        })
  
  





})
        })



       }}>
    
      <div id="categoriesSubscribedTo" style={{paddingBottom:"8px"}}><div class="formLabel">See categories you've subscribed to
      
      </div>
      
      </div>

       <div class="mb-3">
     <input type="text" class="form-control" autoComplete="off" name="contact" required minLength={10} placeholder='Enter your contact e.g 0703852178'></input>
    <br></br>
       <input type="text" class="form-control" autoComplete="off" name="pin" required minLength={5} placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
    
       </div>
       <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:categoriesSubscribedToStatus}}/>
    
       <button  type="submit"  class="btn btn-sm btn-success backgroundColorHovereffect"> Display</button><p></p>
      
       </form></div>
       
<p></p>

        </div>


<div  style={{padding:"20px"}}>
<div class="row">{categoriesSubscribedTo}</div>

</div>
      
        <div class="col-md-6">

            
       <div style={{padding:"5px"}}>  
      <form method="post" onSubmit={(e)=>{
        setSeeCategoriesStatus('Please wait.....')
        let FormObject=getFormData(e)
           
        fetch('/verifyUser',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({
  contact:FormObject.contact.trim(),
  pin:FormObject.pin.trim(),
          }) 
      }).then(res=>res.json()).then((resp)=>{
         
          
          if(resp.registered==false){
            setSeeCategoriesStatus("<div style='color:red;'>You are not registered with Kayas, please register.</div>")
          }
           else{
              if(resp.registered==true&&resp.pin==false){
                setSeeCategoriesStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
      
              }else{
                setSeeCategoriesStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> please be patient as we retrieve your categories.....</div>`)
  
let payLoad={contact:resp.details.contact}
             fetch('/followingsPostRequest',{
                  method:"post",
                  headers:{'Content-type':'application/json'},
                  body:JSON.stringify({method:"getFollowersCategories",args:payLoad}) 
              }).then(res=>res.json()).then(resp=>{
if(resp.length==0){

  setSeeCategoriesStatus(`<div style='color:green;'><span style='color:red;'>You don't have any categories. Please create some.</span></div>`)

}else{
setFollowersCategories(resp.map(categoryDoc=>{
  return(
 <div onClick={()=>{
  window.location.href=`/pages/following/${categoryDoc.contact}/${categoryDoc.categoryId}`
 }} style={{padding:"5px"}} class="col-md-4">

   <div class="followersCategory backgroundColorHovereffect">
    <div style={{padding:"10px"}}>
      <div style={{fontSize:"15px",color:"green"}}>{categoryDoc.categoryName}</div>
      <div style={{fontSize:"11px"}}>{categoryDoc.followers.length} followers, Category ID: {categoryDoc.categoryId}</div>
      
    </div>
  </div>
 </div>
  
  )
}))
setSeeCategoriesStatus(`<div style='color:green;'>Done, scroll down to see.</div>`)
}
              })


              }
              
            
          }
         
      }
          
  
      )
      


       }}>
      <div id="displayYourCategories" style={{paddingBottom:"8px"}}><div class="formLabel">See your categories
      
      </div>
      
      </div>

       <div class="mb-3">
     <input type="text" class="form-control" autoComplete="off" name="contact" required minLength={10} placeholder='Enter your contact e.g 0703852178'></input>
    <br></br>
       <input type="text" class="form-control" autoComplete="off" name="pin" required minLength={5} placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
    
       </div>
       <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:seeCategoriesStatus}}/>
    
       <button  type="submit"  class="btn btn-sm btn-success backgroundColorHovereffect"> Display</button><p></p>
      
       </form></div>
       
<p></p>

        </div>

<div><div style={{padding:"10px"}} class="row">{followersCategories}</div></div>
        </div>
    </div>
)
}


export function FollowingComp(){
  let {contact,categoryId}=useParams(),payLoad={contact:parseInt(contact),categoryId:parseInt(categoryId)}
let [categoryName,setCategoryName]=useState(''),[followerDoc,setFollowersDoc]=useState({}),
[noOfFollowers,setNoOfFollowers]=useState(''),[updateFollowersStatus,setUpdateFollowersStatus]=useState('')
const[charLength,setCharLength]=useState('0'),maxCharLength=132

useEffect(()=>{

  fetch('/followingsPostRequest',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({method:"getFollowersCategory",args:payLoad}) 
}).then(res=>res.json()).then(resp=>{
  if(resp.length==0){
    setCategoryName('This category does not exit.')
    setNoOfFollowers('No')
  }else{
let categoryDoc=resp[0]

    setCategoryName(categoryDoc.categoryName)
    setNoOfFollowers(categoryDoc.followers.length)



  }
})



},[])

  return(<div style={{padding:"3px"}}>
    
<div style={{background:"#dfdfdf"}} class="row">
  <div class="col-md-3"></div>
  <div style={{background:"white"}} class="col-md-6">
  <div style={{color:"red",fontSize:"20px"}}>{categoryName}</div>
    <div style={{fontSize:"11px",color:"grey",paddingBottom:"5px"}}>{noOfFollowers} followers, Category ID: {categoryId}</div>
<FollowingsNav/>
<p></p>
       <div style={{padding:"5px"}}>  
       <form id="updateFollowersForm" method="post" onSubmit={(e)=>{
        
        let FormObject=getFormData(e)
        VerifyRegistrationAndPin(contact,FormObject.pin).then(resp=>{
       setKayaserVerificationStatus(resp,setUpdateFollowersStatus,()=>{
        setUpdateFollowersStatus('Please wait...........')
        payLoad.msg=FormObject.msg.trim()
if(Array.from(payLoad.msg).length>maxCharLength){
  setUpdateFollowersStatus(`<div style="color:red;">Message is longer than ${maxCharLength} characters, please reduce</div>`)
}else{
  fetch('/followingsPostRequest',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({method:"updateFollowers",args:payLoad}) 
  }).then(res=>res.json()).then(resp=>{
    setUpdateFollowersStatus(resp.msg)
  })
  
}

})}
       
       )}}>
       <div style={{paddingBottom:"8px"}}><div class="formLabel">Update your followers ({noOfFollowers}) </div></div>
       
       <div class="mb-3">
       <div style={{fontSize:"12px",paddingTop:"5px",paddingBottom:"5px"}}>Maximum message length = <span style={{color:"red",fontSize:"15px"}}>{maxCharLength}</span> characters.<br></br>You've typed <span style={{color:"red",fontSize:"15px"}}>{charLength}</span> characters.</div>
       <textArea type="text" class="form-control" autoComplete="off" name="msg" required minLength={3} rows="6" placeholder='Type message here' onChange={()=>{
  setCharLength(Array.from(document.getElementById("updateFollowersForm").msg.value.trim()).length)
}}></textArea>
       <br></br>
       <input type="text" class="form-control" autoComplete="off" name="pin" required minLength={5} placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
       
       </div>
       <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:updateFollowersStatus}}/>
       
       <button  type="submit"  class="btn btn-sm btn-success backgroundColorHovereffect">Update followers</button><p></p>
       
       </form></div>
       
       <p></p>
       
        </div>
       
  <div class="col-md-3"></div>
</div>
<p></p>


<FollowingsHome/>


  </div>)
}





export default FollowingsHome