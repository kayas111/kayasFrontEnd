import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
import { MessageComponent, ToastAlert } from '../Functions'
export function Requests(){
  const [requests,setRequests]=useState()
 
 
  
  const [requestManagementFormStatus,setRequestManagementFormStatus]=useState('')
 
      useEffect(()=>{
       
                   fetch('/collection_requests_requests').then(res=>res.json()).then(resp=>{
                                resp=resp.reverse()
                      setRequests(resp);
                        })    

      },[requestManagementFormStatus])


return(

  <div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Requests</div>
    <ControlsNav/>

  

 <div class="row" style={{padding:"13px"}}>

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

<div><div class="btn btn-sm btn-danger" onClick={()=>{

  if(window.confirm(`Delete ${request.serviceType}`)==true){
    setRequestManagementFormStatus('Deleting...')
    fetch('/clearRequest',{
      method:"post",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({requestId:request._id})
    }).then(res=>res.json()).then(res=>{
      setRequestManagementFormStatus(res[0])
      ToastAlert('toastAlert1',`${res[0]}`,2000)
      
    })

  }else{
    ;
  }
}}>Delete</div></div>
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
);
}

export default Requests