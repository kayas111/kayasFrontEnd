
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
<div class="followingsNavItem"><a style={style} href="#categoriesSubscribedTo"><div  class="button1 hovereffect">My audiences</div></a></div>
<div class="followingsNavItem" ><a style={style} href="#displayYourCategories"><div  class="button1 hovereffect">New audience</div></a></div>


</div>


</div>)
}


export function FollowingHome(){
    

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
        <div class="pageLabel">Following</div>
         <div class="pageDescription">
         Create an audience those have no data or have turned off their data will recieve an instant SMS message if they follow your audience.
          </div><p></p>
       <div class="btn btn-success btn-sm fullButtonWidth">Follow an audience</div><p></p>
       
       <Link to="/pages/following/createaudience"><div class="btn btn-success btn-sm fullButtonWidth">Create new audience</div></Link><p></p>
       <div class="btn btn-success btn-sm fullButtonWidth">My audiences</div><p></p>
       
       
       
       
        </div>


        <div class="col-md-3"></div>
      </div>
        
  

       

    
    </div>
)
}







export default FollowingHome