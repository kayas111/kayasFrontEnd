
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getFormDataOnClick,getFormData,VerifyRegistrationAndPin,setKayaserVerificationStatus } from '../Functions'
import {Link} from 'react-router-dom';
import { audienceSmsCost } from '../../Variables';
import SponsorComponent from './SponsorComponent';
import moses from '../imgs/moses.jpg'
import logo from '../imgs/logo.png'
import claveri from '../imgs/claveri.jpg'
import user from '../imgs/user.jpg'

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


export function AudienceHome(){
  

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
        <div class="pageLabel">Audience</div>
         <div class="pageDescription">
         Create an audience and let others search for your audience and follow it. 
       You will be able to send an SMS message to all the followers even when they have no data bundles (offline). They only need to have credited their Kayas accounts each with atleast {audienceSmsCost} shillings.
          </div><p></p>
          <Link to="/pages/audience/searchforaudience"><div class="btn btn-success btn-sm fullButtonWidth">Search</div></Link><p></p>
       
       <Link to="/pages/audience/createaudience"><div class="btn btn-success btn-sm fullButtonWidth">Create new audience</div></Link><p></p>
       <div class="btn btn-success btn-sm fullButtonWidth">My audiences</div><p></p>
       
       <div>
        <div style={{paddingTop:"10px",paddingBottom:"8px"}} class="pageLabel">Did you know?</div>
       </div>
       <div>
        <SponsorComponent label="Keith Moses Ssebuliba" img={moses} description="Student from CEDAT persuing BELE 3 and has aspirations for Makerere Leadership. (0762153083)"/>
        <SponsorComponent label="Claveri Peter Kyajja" img={claveri} description="Student and has aspirations for Makerere Leadership. (0775176379)"/>
        <SponsorComponent label="Kayas" img={logo} description="Student service provider focussed on improving student learning experiences and providing other services to non students too. (0703852178)"/>
        <SponsorComponent label="Add your photo/business" img={user} description="To add your photo/business, WhatsApp Kayas on 0703852178"/>
        
       </div>
       
        </div>


        <div class="col-md-3"></div>
      </div>
        
  

       

    
    </div>
)
}







export default AudienceHome