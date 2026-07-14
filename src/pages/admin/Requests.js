import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
import { MessageComponent } from '../Functions'
export function Requests(){
  const [requests,setRequests]=useState()
 
 
  
  const [requestManagementFormStatus,setRequestManagementFormStatus]=useState('')
 
      useEffect(()=>{
       
                   fetch('/collection_requests_requests').then(res=>res.json()).then(resp=>{
                                
                      setRequests(resp);
                        })    

      },[])


return(

  <div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Requests</div>
    <ControlsNav/>
<div class="row">
  <div class="col-md-4">
  <div style={{padding:"30px"}}>  
    
    <form id="requestManagementForm" >
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Request management</div></div>
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="requestId" placeholder='Enter request ID' ></input>
 
    </div>
    <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:requestManagementFormStatus}}/>
    <div style={{borderRadius:"18px"}} onClick={()=>{
      
      if(Array.from(document.getElementById('requestManagementForm').requestId.value.trim()).length<24||Array.from(document.getElementById('requestManagementForm').requestId.value.trim()).length>24){
        setRequestManagementFormStatus('<div style="color:red;">Enter correct ID</div>')
      }else{
        setRequestManagementFormStatus('Clearing......')
        fetch('/clearRequest',{
    method:"post",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({requestId:document.getElementById('requestManagementForm').requestId.value})
  }).then(res=>res.json()).then(res=>{
    setRequestManagementFormStatus(res[0])
    document.getElementById('requestManagementForm').requestId.value=""
    
  })
      }
      
      
      
  

    }}type="text" class="btn btn-success hovereffect">Clear request</div>
    </form>
    </div>
 

  </div>

 <div class="row" style={{padding:"25px"}}>

{(()=>{
  if(requests){

if(requests.length==0){
  return (<MessageComponent message={`No infomation available`}/>)
}else{

return (requests.map(request=>{
  return(
    <div class="requestContainer1 col-md-4">
<div class="requestContainer2">
<div>Name: {request.name}</div>
<div>Contact: 0{request.contact}</div>
<div>Message: {request.serviceType}</div>
<div>Receipient: {request.receipient}</div>
<div>Id: {request._id}</div>
</div>


    </div>
  )
}))

}

  }else{
    return(
      <MessageComponent message={`Please wait.....`}/>
    )
  }
})()}


 </div>
  </div>      



  
  </div>
);
}

export default Requests