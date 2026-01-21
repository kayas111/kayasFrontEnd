import { TrimExtraSpaces,Post, MessageComponent, ToastAlert } from "../Functions"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
export function SearchForAudience(){
    let [result,setResult]=useState('')
    let [status,setStatus]=useState('')
    return(<div class="componentPadding">
<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
<div class="pageLabel">Search for an audience</div>
<div class="pageDescription">Search for an audience you wish to follow.</div>
<p></p>


<input type="text" class="form-control" autoComplete="off" id="searchInput" name="searchValue" ></input><p></p>
  <div class="status">{status}</div>
  
  <div class="btn btn-success fullButtonWidth" onClick={()=>{
let searchInput=TrimExtraSpaces(document.getElementById('searchInput').value)
if(Array.from(searchInput).length<1){
    ToastAlert('toastAlert2','Enter a search value',3000)
}else{
    setStatus('Searching......')
    Post('/AudiencePostRequest',{method:'getAudience',args:{audienceName:searchInput}}).then(resp=>{
       
        
        if(resp.length==0){
            ToastAlert('toastAlert2','Audience does not exist',3000)
    
    setStatus('')
        }else{
            let audience=resp[0]

            setResult(
                <Link  to={ `/pages/audience/audiencecomp/${audience.audienceName}`}>
                    
                    <div class="hoverEffect1" style={{border:"1px solid grey",borderRadius:"3px",padding:"3px",color:"black"}}>
                          <div class="bold">{audience.audienceName}</div> 
                <div class="light">Created by: {(()=>{
                 return (audience.name)
                })()} </div> 
             
             </div></Link>
            )
            setStatus('')
    
        }
    })
}



  }}>Search</div><p></p>
  <div>{result}</div>

    </div>
    <div class="col-md-3"></div>
</div>
    </div>)
} export default SearchForAudience