import React, {useEffect,useState,useMemo} from 'react';
import { MessageComponent, Post, ToastAlert,LoginAlert, VerifyRegistrationAndPin, DebitTraderAccountBalance, GetTradingDetails } from '../Functions';
import {useCookies} from 'react-cookie'

function RefreshHostelsList(refresh,setRefresh)
{
  
    setRefresh(()=>(refresh++))
    
  
}

export function AddHostel({
    displayAddHostel,
    closeAddHostel,
    refreshHostelsList,
    refresh,setRefresh,
  code,
  message
    
  }) {
  
  
  
     const [status, setStatus] = useState("");
     
  
    if (!displayAddHostel) {
      
      document.body.style.overflow = "";
      return null
    
    }else{
      document.body.style.overflow = "hidden";
      return (
        
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
          <div class="overlay">
          <div  class="alertContainer">
            <div class="alertTitle">Add new hostel</div>
            <p>{message}</p>
  
            <textarea rows={4}
              type="text"
              placeholder="Hostel description"
              class="form-control" autoComplete="off" id="description" />
  <p></p>
  <input
              type="text"
              placeholder="contact"
              class="form-control" autoComplete="off" id="contact" />
  
              <div class="status">{status}</div>
    
            <div style={{paddingTop:"5px"}}>
    
            <button
                onClick={() => {
  let description=document.getElementById('description').value.trim(),contact=document.getElementById('contact').value.trim()
  
  
  if(Array.from(description).length<1){
    setStatus('Enter hostel description')
  }else if(Array.from(contact).length<1){
    setStatus('Enter contact')
  }else{
    setStatus('Adding hostel....')
    let payLoad={description:description,contact:contact}
     Post('/AddHostel',payLoad).then(resp=>{
                      if(resp.success==true){
                        setStatus("Hostel added")
                        closeAddHostel()
                        document.body.style.overflow = "";
                        
                        
                        setTimeout(()=>{
                         
                          ToastAlert('toastAlert1','Added successfully',2000)
                          RefreshHostelsList(refresh,setRefresh)
                        },1000)
                      }else{
                        setStatus("Not added")
                      }
                    })
  }
  
  
      
                                
  
                 
                }}
                class="btn btn-success fullButtonWidth"
             
             >
                Add hostel
              
              </button><p></p>
            
              <button onClick={closeAddHostel} class="btn btn-danger fullButtonWidth">
                Cancel
              </button>
    
          
    
            
            </div>
          </div>
        </div>
  
          </div>
          <div class="col-md-3"></div>
        </div>
      );
    }
  
   
  }

export function HostelsList(){

    const [hostels,setHostels]  = useState()
    const [status,setStatus]  = useState()
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const [displayAddHostel,setDisplayAddHostel] =useState(false)
    let [refresh,setRefresh]=useState(0)
  let hostelViewCost=200
    const [showLoginAlert, setShowLoginAlert] = useState(true); 
  
useEffect(()=>{
    fetch('/getHostels').then(resp=>{
        return resp.json()}).then(resp=>{
    
        setHostels(resp)
    })
},[refresh]) 


useEffect(()=>{
    if(cookies.user){

        GetTradingDetails(cookies.user.contact).then(resp=>{
        let user=resp
        if(user.accBal<hostelViewCost && user.contact!=703852178 ){
        
        if(window.confirm(`To unlock access to this information, click "OK" then deposit atleast 1000 shs to your Kayas account then come back.`)==true){
        window.location.href=`/pages/deposit`
        }else{
         window.location.href='/pages/homepage'
         
        }
        }else{
            
         
        if(user.contact==703852178){;
        //Do nothing since admin is viewing own information
        }else{
          DebitTraderAccountBalance(user.contact,hostelViewCost)
          
        }
        
        }
        })
        
        
                }
},[])


    return(<div class="componentPadding">
        <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="pageLabel">Makerere University Hostels</div>
          <AddHostel displayAddHostel={displayAddHostel} closeAddHostel={()=>{
  setDisplayAddHostel(false)
}} refreshHostelsList={RefreshHostelsList} refresh={refresh} setRefresh={setRefresh} />


{(()=>{
  if(cookies.user && parseInt(cookies.user.contact)==703852178){
    return (
      <div>
 <div class="btn btn-sm btn-success" onClick={()=>{
setDisplayAddHostel(true)
  }}
  >Add hostel</div>
</div>
    )
  }
})()}

<div style={{paddingTop:"8px"}}>
   
{(()=>{
    if(hostels){

      if(hostels.length==0){
        return(<MessageComponent message="No hostels available" />)
      }else{
        return(
          <div>


          {(()=>{
            return( hostels.map((hostel)=>{
              return (
              
                 <div class="hostelContainer">
                 <div class="hostelContainer2">
     
  
  
  <div class="light" style={{paddingBottom:"5px",fontSize:"14px"}}>{hostel.description}</div>
  
  
  <div class="flexDisplayWithGap">
  <a href={`tel:${hostel.contact}`}><div class="btn btn-sm btn-warning"><span class="fa fa-phone"></span> Contact</div> </a>
      <div>{(()=>{
                    if(cookies.user && parseInt(cookies.user.contact)==703852178){
                      return(<div onClick={()=>{
                        
                        if(window.confirm(`Delete ${hostel.description}`)==true){
                          
                        
                          Post(`/deleteHostel`,{id:hostel._id}).then(resp=>{
                           if(resp.success==true){ 
                            ToastAlert('toastAlert1','Deleted successfully',2000)
                            
                           setRefresh(()=>refresh++)
                          }else{
                            window.alert('Failed')
                           }
                          })
                        }else{
                          ;
                        }
                      }} class="btn btn-sm btn-danger">
                        Delete
                      </div>)
                    }else{;}
                  })()}</div></div>
  
  <div style={{fontSize:"10px",textAlign:"right",color:"green"}}>Compiled by Kayas (0703852178)</div>
  
                 </div>
      
                 </div>
              )}))
          })()}
          

<p></p>
      <MessageComponent message="More hostels together with hostels located in Kikumi Kikumi, Wandegeya and Kagugube will be uploaded by Friday 19th June, 2026."/><p></p>
      <MessageComponent message="Freshers' shopping guide by Kayas will be released soon."/><p></p>
      <MessageComponent message="Freshers/vacists who are not in the Kayas vacists groups should send the word 'vacist' through WhatsApp to 0703852178."/>
      
           

            </div>
            
            
            
            
            )
      }

    



    }else{
        return(
            <MessageComponent message="Loading hostels. Please wait....."/>
        )
    }
})()}

</div>


{(()=>{

if(!cookies.user){
    return (
    
    <LoginAlert
    
      showLoginAlert={showLoginAlert}
    message="Login to access this information"
      closeLoginAlert={() => {
        window.location.href='/pages/homepage'
        setShowLoginAlert(false)}
      }

    code={async (arguement)=>{
      
    
   return await VerifyRegistrationAndPin(arguement.contact,arguement.pin).then(resp=>{
    if(resp.registered===false){
   return({msg:arguement.notRegisteredMessage}) 

      }else
      
         if(resp.pin===false){
          return({msg:arguement.incorrectPasswordMessage})
         }else{
          return({user:resp.details,success:true})

           
         
     
         }
       })
    }}
      
    />)
  }else{

          
  }

})()}

        </div>
        <div class="col-md-3"></div></div>
    </div>)
} export default HostelsList