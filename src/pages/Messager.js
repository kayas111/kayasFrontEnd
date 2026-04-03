import { useState,useEffect } from "react"
import { MessageComponent } from "./Functions"
export function Messager(){
    let data='',whatsAppMessengerText1=`*Good morning*, hope you are *fine*%0A%0A*From:* Aswa Stephen Thomas❗%0A*To:* You%0A*Thru*: Kayas%0A%0A*Aswa T-shirts at 10,000/= Register yourself for one here below if you dont mind:*%0A%0A
    Tap this link to register:%0A
    https://kayas-mak.herokuapp.com/pages/attendanceregs/783989317/3%0A*Lets Keep It Kayas. I will always update you*`
      const[status,setStatus]=useState('')
  
      const[status2,setStatus2]=useState('')
      const[messageesNumb,setMessageesNumb]=useState('')
      const[messagees,setMessagees]=useState()
      const[messagerIntroStatementSetStatus,setMessagerIntroStatementSetStatus]=useState('')
      const[messagerIntroStatement,setMessagerIntroStatement]=useState('')
      const[clearanceStatus,setClearanceStatus]=useState('')
      const[pushToAttendanceRegisterStatus,setPushToAttendanceRegisterStatus]=useState('')
      useEffect(()=>{
           
        fetch(`/messagees`).then(res=>res.json()).then(resp=>{
          setMessageesNumb(resp.length)
      
    
            
            setMessagees(resp)
          })
          
        
        },[status])
    
      return (<div class="componentPadding">
        <div class="pageLabel">Messager</div><p></p>
        
      
       <div class='row'>
      
      
        <div class='col-md-6'>  
        
        
       <form id="pushToAttendanceregisterForm" >
       <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Send to Attendance Register</div>
        <div class="mb-3">
    <textArea rows="1" type="text" class="form-control" autoComplete="off" name="contact" placeholder="Enter Registrar's Contact" ></textArea>
    <br></br>
    <textArea rows="1" type="text" class="form-control" autoComplete="off" name="registerId" placeholder='Enter Register ID' ></textArea>
    
    <br></br>
    <textArea rows="1" type="text" class="form-control" autoComplete="off" name="property" placeholder='Enter property e.g Year of entry' ></textArea>
    
    <br></br>
    <textArea rows="1" type="text" class="form-control" autoComplete="off" name="propertyValue" placeholder='Property value' ></textArea>
    
        </div>
        <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:pushToAttendanceRegisterStatus}}/>
        <div class="row">
          <div class="col-6">
        <div  type="text" class="btn btn-success hovereffect" onClick={()=>{
          setPushToAttendanceRegisterStatus("<div style='color:green;'>Pushing.............</div>")
          fetch('/pushToAttendanceRegister',{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({registrarContact:parseInt(document.getElementById('pushToAttendanceregisterForm').contact.value),registerId:parseInt(document.getElementById('pushToAttendanceregisterForm').registerId.value)})
          }).then(res=>res.json()).then(resp=>{
            setPushToAttendanceRegisterStatus(resp[0])
          })
        }}>Send</div> 
        </div>
        <div class="col-6">
        <div type="text" class="btn btn-success hovereffect" onClick={()=>{
    
          
          let arrayStringToJoin=[],joinedArrayString,flag=0
          document.getElementById('pushToAttendanceregisterForm').property.value.trim().split(' ').forEach(string=>{
           if(flag===0){
            arrayStringToJoin.push(string)
           }else{
            arrayStringToJoin.push(string.replace(string.charAt(0),string.charAt(0).toUpperCase()))
           }
            
            flag++
            
            
            
          })
    
          joinedArrayString=arrayStringToJoin.join('')
          console.log(joinedArrayString)
    
          setPushToAttendanceRegisterStatus("<div style='color:green;'>Categorizing.........</div>")
          fetch('/categorizeMessagerContacts',{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({property:joinedArrayString,propertyValue:document.getElementById('pushToAttendanceregisterForm').propertyValue.value.trim()})
          }).then(res=>res.json()).then(resp=>{
            setPushToAttendanceRegisterStatus(resp[0])
            document.getElementById('pushToAttendanceregisterForm').property.value=""
            document.getElementById('pushToAttendanceregisterForm').propertyValue.value=""
    
          })
        }}>Add property</div>
        </div>
        </div>
        </form>
        
        </div>
    
     
    
    
    
       </div>
      <p></p>
   
      <div style={{fontSize:"15px"}}>
          
          {
            (()=>{
              if(messagees){
                if(messagees.length==0){
                  return(<MessageComponent message="No messagees"/>)
                }else{
                  let count=1
                  return(
                    <div>
                      <div style={{textAlign:"left"}}> 
                      
                      
                      <br></br>
                      <span style={{padding:"5px",fontSize:"30px"}}> {messagees.length}</span>
                    <span> 
                      <button onClick={()=>{
    
    setStatus("Deleting......")
    fetch('/deleteMessageesList').then(res=>res.json()).then(res=>{
   if(res.success==0){
    setStatus("Message list is empty")
   }else if(res.success==1){
    setStatus("Deleted successfully")

    
   }else{
    setStatus("Error occured")
    
   }
    })
  
      }}type="text" class="btn btn-danger hovereffect">Delete</button></span> <span class="status">{status}</span></div>
                      <p></p>
                    <div class="row">
                    
                      {(()=>{
                       return( messagees.map(messagee=>{
                          return(
                            <div class="col-md-3">
                              <div class="messagerCont1">
                              <div class="messagerCont2">
                              <div class="messagerName">{count++}. {messagee.name}</div>
                            <div class="messagerContact">Contact: 0{messagee.contact}</div>
                              </div>
                              </div>
                            </div>
                          )
                        }))
                      })()}
                    </div></div>
                  )
                }
              }else{
                return(<MessageComponent message="Loading information....."/>)
              }
            })()
          }
          
           </div>
    
    
    
      </div>)
    }
    
    export default Messager