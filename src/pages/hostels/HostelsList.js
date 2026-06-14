import React, {useEffect,useState,useMemo} from 'react';
import { MessageComponent, Post, ToastAlert } from '../Functions';
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
  
      
      


    return(<div class="componentPadding">
        <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="pageLabel">Makerere University Hostels</div>
          <AddHostel displayAddHostel={displayAddHostel} closeAddHostel={()=>{
  setDisplayAddHostel(false)
}} refreshHostelsList={RefreshHostelsList} refresh={refresh} setRefresh={setRefresh} />
<p></p>
<div class="btn btn-sm btn-success" onClick={()=>{
setDisplayAddHostel(true)
  }}
  >Add hostel</div>
        </div>
        <div class="col-md-3"></div></div>
    </div>)
} export default HostelsList