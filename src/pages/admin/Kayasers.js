import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
import { MessageComponent } from '../Functions'
export function Kayasers(){
  let data=""
  
  const [kayasers,setKayasers]=useState()
 
      useEffect(()=>{
      
                   fetch('/collection_kayasers_kayasers').then(res=>res.json()).then(resp=>{
                    
                    resp.reverse()

                      
                      
                     setKayasers(resp)
                     

                      
                      
                        })    

      },[])


return(

  <div>
    <div class="pageLabel" style={{textAlign:"center"}}>Kayasers</div>
  
       <ControlsNav/>
       

<div style={{padding:"17px"}}>

<div class="row">
{(()=>{
  if(kayasers){
if(kayasers.length==0){
  return(<MessageComponent message="No Kayasers available"/>)
}else{
  let count=kayasers.length
return(kayasers.map(kayaser=>{



  return(<div class="col-md-3 kayaserContainer1">

<div class="kayaserContainer2">
  
<div class="kayaserName">{count--}. {kayaser.name}</div>
<div>Contact: 0{kayaser.contact}</div>
<div>Email: {kayaser.email}</div>


</div>


  </div>)
}))

}
  }else{
    return(<MessageComponent message="Loading information......."/>)
  }
})()}

</div>


</div>
  
  </div>
);
}
export default Kayasers