import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
import { Post, ToastAlert } from '../Functions'

export function ControlsHome(){
    
    const [reqNumb,setReqNumb]=useState('')
    const [ordersNumb,setOrdersNumb]=useState('')
    
    const [recomNumb,setRecomNumb]=useState('')
    const [tradersNumb,setTradersNumb]=useState('')
    const [kayasersNumb,setKayasersNumb]=useState('')
    const [visits,setVisits]=useState('')
    const [dndStatus,setDndStatus]=useState('')
    const [status,setStatus]=useState('')
    const[addMessageeStatus,setAddMessageeStatus]=useState('')
    const [tradingStatus,setTradingStatus]=useState('')
    const [saveLinkStatus,setSaveLinkStatus]=useState('')
    const [mapFromCategoryStatus,setMapFromCategoryStatus]=useState('')
    const [deleteArticleStatus,setDeleteArticleStatus]=useState('')
    const [removeMessageeStatus,setRemoveMessageeStatus]=useState('')
    const [pushNotificationStatus,setPushNotificationStatus]=useState('')
    const [deleteAllBidsStatus,setDeleteAllBidsStatus]=useState('')
    const [setBiddingPriceStatus,setSetBiddingPriceStatus]=useState('')
    const [setBiddingHeadlineStatus,setSetBiddingHeadlineStatus]=useState('')
    const [setBiddingMessageStatus,setSetBiddingMessageStatus]=useState('')
  
    let classCols='col-md-3'
   
        useEffect(()=>{
          
          fetch('/collection_controls').then(res=>res.json()).then(res=>{
        
            setVisits(res[0].noOfVisits)
          })
          fetch('/collection_requests_number').then(res=>res.json()).then(res=>{
            setReqNumb(res.length)
              })
              fetch('/collection_orders_number').then(res=>res.json()).then(res=>{
                setOrdersNumb(res.length)
                  })
              fetch('/collection_recommendations_number').then(res=>res.json()).then(res=>{
                setRecomNumb(res.length)
                  })
        fetch('/collection_kayasers_number').then(res=>res.json()).then(res=>{
                    setKayasersNumb(res.length)
                      })
    fetch('/collection_traders_number').then(res=>res.json()).then(res=>{
                        setTradersNumb(res.length)
                          })
                       
  
        },[])    
  
  
    return(
  
      <div>
      
        <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Controls</div>
    
    <ControlsNav/>
    <div class='row'>
    <div class={classCols} style={{textAlign:"center",padding:"20px"}}> 
              
              
               <form method="post" id='saveLinkForm' >
               <div style={{paddingBottom:"8px"}}><div class="formLabel">Save links</div></div>
           <div class="mb-3">
           
           <input type="text" class="form-control" autoComplete="off" name="desc" placeholder='Enter description'   ></input>
           <br></br>
           <input type="text" class="form-control" autoComplete="off" name="linkUrl" placeholder='Enter link'  ></input>
         
             
           </div>
          
           
           <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:saveLinkStatus}}/>
           
           <div onClick={()=>{
  let desc=document.getElementById('saveLinkForm').desc.value.trim(),linkUrl=document.getElementById('saveLinkForm').linkUrl.value.trim()
  
          if(Array.from(linkUrl).length<1){
              setSaveLinkStatus('Enter a link......')
              
                        }
            
            else{
              setSaveLinkStatus('Saving......')
  
              if(Array.from(desc).length<1){
             desc='No description'
                
                          }else{}
  
  
  
              let payLoad={desc:desc,linkUrl:linkUrl}
  
  
              fetch('/saveLink',{method:"post",
              headers: { 'Content-type': 'application/json' },
            body:JSON.stringify(payLoad)
          }).then(resp=>resp.json()).then(resp=>{
            setSaveLinkStatus(resp.msg)
            document.getElementById('saveLinkForm').linkUrl.value=''
  
  
          })
  
            }
            }} class="button1">Save</div><p></p>
          
           </form>
               
               
           </div>
           
         
  
    <div class={classCols} style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>DELETE ARTICLE</div>
      <div  dangerouslySetInnerHTML={{__html:deleteArticleStatus}}/>
      <form  id="deleteArticleForm">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off"  name="articleId" placeholder='Enter Article ID' ></input>
       
      </div>
     <div> <span type="submit" class="button1" onClick={()=>{
     setDeleteArticleStatus("deleting.................")
      
        fetch('/deleteArticle',{method:"post",headers:{"Content-type":"application/json"},
      body:JSON.stringify({articleId:parseInt(document.getElementById('deleteArticleForm').articleId.value)})}).then(res=>res.json()).then(resp=>{
     if(resp.presence===1){
  
      setDeleteArticleStatus("Successful")
      document.getElementById('deleteArticleForm').articleId.value=""
     }else{
      setDeleteArticleStatus("Article does not exist")
  
     }
       
      }) 
          
    
        }}>DELETE</span></div>
      </form></div>
      <div class={classCols} style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>DND ADD/REMOVE</div>
      <div  dangerouslySetInnerHTML={{__html:dndStatus}}/>
      <form  id="dndForm">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Enter contact' ></input>
       
      </div><div class='row'>
  
     <div class='col-6'> <span type="submit" class="button1" onClick={()=>{
     if(Array.from(document.getElementById('dndForm').contact.value).length<10||Array.from(document.getElementById('dndForm').contact.value).length>10){
      setDndStatus("Enter 10 digits contact ..........")
     }else{
      setDndStatus("Adding.................")
      fetch('/updateDndList',{method:"post",headers:{"Content-type":"application/json"},
     body:JSON.stringify({contact:parseInt(document.getElementById('dndForm').contact.value),action:'add'})}).then(res=>res.json()).then(resp=>{
       setDndStatus(resp[0])
       document.getElementById('dndForm').contact.value=""
     }) 
         
     }
    
        }}>ADD</span></div>
  <div class='col-6'> <span type="submit" class="button1" onClick={()=>{
     if(Array.from(document.getElementById('dndForm').contact.value).length<10||Array.from(document.getElementById('dndForm').contact.value).length>10){
      setDndStatus("Enter 10 digits contact ..........")
     }else{
      setDndStatus("Removing.................")
      
      fetch('/updateDndList',{method:"post",headers:{"Content-type":"application/json"},
    body:JSON.stringify({contact:parseInt(document.getElementById('dndForm').contact.value),action:'remove'})}).then(res=>res.json()).then(resp=>{
  
  
      setDndStatus(resp[0])
    
    }) 
        
  
     }
    
        }}>REMOVE</span></div>
        </div>
      </form></div>
      <div class={classCols} style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>MAP FROM CATEGORY TO MESSAGER</div>
      <div  dangerouslySetInnerHTML={{__html:mapFromCategoryStatus}}/>
      <form  id="mapFromCategoryForm">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off"  name="category" placeholder='Enter Category Description' ></input>
       
      </div>
     <div> <span type="submit" class="button1" onClick={()=>{
     setMapFromCategoryStatus("Maping.................")
      
        fetch('/mapFromCategoryToMessager',{method:"post",headers:{"Content-type":"application/json"},
      body:JSON.stringify({category:document.getElementById('mapFromCategoryForm').category.value})}).then(res=>res.json()).then(resp=>{
        setMapFromCategoryStatus(resp[0])
       
      }) 
          
    
        }}>MAP CATEGORY</span></div>
      </form></div>
      <div class={classCols} style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>REMOVE MESSAGEE FROM CONTACTS BASE</div>
      <div  dangerouslySetInnerHTML={{__html:removeMessageeStatus}}/>
      <form  id="removeMessageeForm">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off"  name="desc" placeholder='Description value' ></input><br></br>
      <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Contact' ></input>
       
      </div>
     <div> <span type="submit" class="button1" onClick={()=>{
    setRemoveMessageeStatus("Removing.................")
      
        fetch('/removeMessagee',{method:"post",headers:{"Content-type":"application/json"},
      body:JSON.stringify({desc:document.getElementById('removeMessageeForm').desc.value,
     contact:parseInt(document.getElementById('removeMessageeForm').contact.value)})}).then(res=>res.json()).then(resp=>{
       setRemoveMessageeStatus(resp[0])
       document.getElementById('removeMessageeForm').contact.value=""
  
       
      }) 
          
    
        }}>REMOVE MESSAGEE</span></div>
      </form></div>  
      <div class={classCols} style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>GET TRADE DETAILS</div>
      <div  dangerouslySetInnerHTML={{__html:tradingStatus}}/>
      <form  id="GetTradingDetails" action="">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off"  id="contact" placeholder='Contact' minLength={10} required></input>
     
    
      </div>
     <div> <span type="submit" class="button1" onClick={()=>{
     
      setTradingStatus("Please wait ......")
      
           
           let url='/admin_getTradingDetails/'+document.getElementById("GetTradingDetails")[0].value
           fetch(url).then(res=>res.json()).then(res=>{
           if(res.length===1){
            setTradingStatus(res[0])
           }else{
            
            setTradingStatus(`Name: ${res[1].name}<div>Student No: ${res[1].stdNo}</div><div>Email: ${res[1].email}</div><div>Contact: ${res[1].contact}</div>`)
           }
    
                    })
    
    
        }}>GET DETAILS</span></div>
      </form></div>
      <div class={classCols} style={{padding:"5px"}}>
        <div class='row'>
        <div class="col-md-6"><div style={{padding:"10px"}}>
      <form method="post" action="/deleteAllOrders">
     
    
     <input type="hidden" class="form-control" autoComplete="off" name="subject" placeholder='Subject' ></input><br></br>
    
     <button type="submit" class="button1">Clear orders</button>
     </form></div></div>
    <div class="col-md-6"><div style={{padding:"10px"}}>
      <form method="post" action="/deleteAllRequests">
     
    
     <input type="hidden" class="form-control" autoComplete="off" name="subject" placeholder='Subject' ></input><br></br>
    
     <button type="submit" class="button1">Clear requests</button>
     </form></div></div>
  
        </div>
   
     
     
    
    
    </div>
    <div class={classCols} style={{padding:"20px"}}>
     <div style={{color:"red", fontSize:"15px"}}>DELETE DOCUMENTS</div>
      <form method="post" action="/deleteAllDocuments">
     
    
     <input type="text" class="form-control" autoComplete="off" name="collection" placeholder='Enter Collection Name' ></input><br></br>
    
     <button type="submit"  class="button1">Delete documents</button>
     </form></div>
     <div class={classCols} style={{padding:"20px"}}>
     <div style={{color:"red", fontSize:"15px"}}> RESET VISITS</div>
      <form method="post" action="/collection_controls_resetVisits">
     
    
     <input type="" class="form-control" autoComplete="off" name="value" placeholder='Enter value' ></input><br></br>
    
     <button type="submit" class="button1">Reset</button>
     </form></div>
     <div class={classCols} style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}> QUOTES</div>
      <form method="post" action="/collection_quotes_quote">
      <div class="mb-3">
    
      <textArea rows="4" type="text" class="form-control" name="quote" placeholder='Quote To Post' required></textArea>
    
     
    
      </div>
      <button type="submit" class="button1">Post</button>
      </form></div>
  
      <div class={classCols} style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>SET PUSH NOTIFICATION</div>
      <form id="setPushNotificationForm">
      <div class="mb-3">
      <textArea rows="1" type="text" class="form-control" name="title" placeholder='Title' ></textArea><br></br>
      <textArea rows="3" type="text" class="form-control" name="body" placeholder='Message'></textArea>
    
     
    
      </div>
      <div  dangerouslySetInnerHTML={{__html:pushNotificationStatus}}/>
     
  <div class='row'>
  <div class='col-6 col-md-6'>
  <div  class="button1" onClick={()=>{
    setPushNotificationStatus("Setting.................")
      
        fetch('/setPushNotification',{method:"post",headers:{"Content-type":"application/json"},
      body:JSON.stringify({title:document.getElementById('setPushNotificationForm').title.value,
     body:document.getElementById('setPushNotificationForm').body.value})}).then(res=>res.json()).then(resp=>{
      setPushNotificationStatus(resp[0])
     
  
       
      }) 
          
    
        }} >Set</div>
  </div>
  <div class='col-6 col-md-6 hovereffect'>
  <div  class="button1" onClick={()=>{
   fetch('/sendPushNotifications').then(res=>res.json()).then(resp=>{
  ;
       
      }) 
          
    
        }} >Notify</div>
  </div>
  </div>
  
      </form></div>
      <div class='col-md-6' style={{padding:"20px"}}> 
      <div style={{color:"red", fontSize:"25px"}}>BIDS CONTROL</div>
  <div class='row'>
  
  <div class='col-md-4'>
  <form id='deleteAllBidsForm'>
      
     <div dangerouslySetInnerHTML={{__html:deleteAllBidsStatus}}></div>
    
     <div  class="button1" onClick={()=>{
      setDeleteAllBidsStatus('Deleting bids.........')
  
  fetch('/deleteAllBids').then(resp=>{
    setDeleteAllBidsStatus('successfull!')
  
  })
  
     }}>Delete All Bids</div>
     </form>
  
     <div  style={{paddingTop:"10px",paddingBottom:"10px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>SET PRICE</div>
      <form id='setBiddingPriceForm'>
     
    
      <input type="text" class="form-control" autoComplete="off" name="price" placeholder='Enter price'></input><br></br>
     <div dangerouslySetInnerHTML={{__html:setBiddingPriceStatus}}></div>
      <div  class="button1" onClick={()=>{
  setSetBiddingPriceStatus('Setting........')
  
  fetch('/collection_controls_setBiddingPrice',{
    method:'post', headers:{'content-type':'application/json'},body:JSON.stringify({biddingPrice:parseInt(document.getElementById('setBiddingPriceForm').price.value)})
  }).then(resp=>resp.json()).then(resp=>{
    setSetBiddingPriceStatus(resp[0])
  
  })
  
  
      }} >Set price</div>
      </form></div>
  
  
  </div>
  
  
  <div class='col-md-8'>
  <div style={{paddingBottom:"10px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>BIDDING HEADLINE</div>
      <form id='setBiddingHeadlineForm' >
      <div class="mb-3">
    
      <textArea rows="2" type="text" class="form-control" name="biddingHeadline" placeholder='Enter bidding Headline'></textArea>
    
      </div>
      <div dangerouslySetInnerHTML={{__html:setBiddingHeadlineStatus}}></div>
      <div class="button1" onClick={()=>{
  setSetBiddingHeadlineStatus('Setting........')
  
  fetch('/collection_controls_setBiddingHeadline',{
    method:'post', headers:{'content-type':'application/json'},body:JSON.stringify({biddingHeadline:document.getElementById('setBiddingHeadlineForm').biddingHeadline.value})
  }).then(resp=>resp.json()).then(resp=>{
    setSetBiddingHeadlineStatus(resp[0])
  
  })
  
  
      }} >Set Bidding Headline</div>
      </form></div>
    
      <div style={{padding:""}}>  
      <div style={{color:"red", fontSize:"15px"}}>BIDDING MESSAGE</div>
      <form id='setBiddingMessageForm' >
      <div class="mb-3">
    
      <textArea rows="3" type="text" class="form-control" name="biddingMsg" placeholder='Enter bidding Message'  required></textArea>
    
      </div>
      <div dangerouslySetInnerHTML={{__html:setBiddingMessageStatus}}></div>
      <div class="button1" onClick={()=>{
  setSetBiddingMessageStatus('Setting........')
  
  fetch('/collection_controls_biddingMsg',{
    method:'post', headers:{'content-type':'application/json'},body:JSON.stringify({biddingMessage:document.getElementById('setBiddingMessageForm').biddingMsg.value})
  }).then(resp=>resp.json()).then(resp=>{
    setSetBiddingMessageStatus(resp[0])
  
  })
  
  
      }} >Set Bidding Message</div>
      </form></div>
  
  
  
  
  
  </div>
  
  
  
  
  
  
  </div>
      
      </div>
  
  
  
  
  
  
  
    </div>
    
     
    
    
    
     
    
     
    
    
   
  
     
    
     
    
    
     
    
      <div style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>KAYAS URL</div>
      <form method="post" action="/collection_controls_kayasurl">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off" name="kayas" placeholder='Contact To Display'  required></input><br></br>
      <input type="text" class="form-control" autoComplete="off" name="kayasurl" placeholder='Link To Visit' required></input>
    
     
    
      </div>
      <button type="submit" class="button1">Post</button>
      </form></div>
    
      <div style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>MESSAGE WISH</div>
      <form method="post" action="/collection_controls_wish">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off" name="refName" placeholder='To Who?'  required></input><br></br>
      <input type="text" class="form-control" autoComplete="off" name="writersName" placeholder='Sender Name' required></input><br></br>
      <textArea rows="5" type="text" class="form-control" name="writersMsg" placeholder='Sender Message' required></textArea>
     
    
      </div>
      <button type="submit" class="button1">Post</button>
      </form></div>
    
    
      <div style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>TOP NAVIGATION QUOTES</div>
      <form method="post" action="/collection_controls_topNavQuote">
      <div class="mb-3">
    
      <textArea rows="3" type="text" class="form-control" name="topNavQuote" placeholder='Top Nav Quote 1'  required></textArea>
    
     
    
      </div>
      <button type="submit" class="button1">Post</button>
      </form></div>
    
      <div style={{padding:"20px"}}>  
      
      <form method="post" action="/collection_controls_topNavQuote2">
      <div class="mb-3">
    
      <textArea rows="3" type="text" class="form-control" name="topNavQuote2" placeholder='Top Nav Quote 2'  required></textArea>
    
     
    
      </div>
      <button type="submit" class="button1">Post</button>
      </form></div>
    
      <div style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>BROADCAST EMAIL</div>
      <form method="post" action="/broadcastEmail">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off" name="subject" placeholder='Subject'  required></input><br></br>
     
      <textArea rows="7" type="text" class="form-control" name="msg" placeholder=' Message' required></textArea>
     
    
      </div>
      <button type="submit" class="button1">Send</button>
      </form></div>
    
      <div style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>ADD WHATSAPP GROUP JOINING LINK</div>
      <ol>
        <li>Makerere University</li>
        <li>Kyambogo University</li>
        <li>Mubs</li>
        
      </ol>
      <form method="post" action="/link_to_whatsapp_group">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off" name="campusId" placeholder='Campus Id' maxLength={1} required></input><br></br>
      <input type="text" class="form-control" autoComplete="off" name="groupName" placeholder='Group Name' required></input><br></br>
      <input type="text" class="form-control" autoComplete="off" name="groupAdmin" placeholder='Group Admin contact' required></input><br></br>
      <input type="text" class="form-control" autoComplete="off" name="description" placeholder='Description' required></input><br></br>
      <input type="text" class="form-control" autoComplete="off" name="link" placeholder='Enter the link' required></input><br></br>
     
     
     
    
      </div>
      <button type="submit" class="button1">Add</button>
      </form></div>
    
    
    
    
     
    
      <div style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"25px"}}>TOP PHOTO MSGS</div>
      <form method="post" action="/collection_controls_topPhotoMsgs">
      <div class="mb-3">
    
      <textArea rows="3" type="text" class="form-control" name="topPhotoMsg1" placeholder='Enter Message 1'  required></textArea><br></br>
      <textArea rows="3" type="text" class="form-control" name="topPhotoMsg2" placeholder='Enter Message 2'  required></textArea><br></br>
      <textArea rows="3" type="text" class="form-control" name="topPhotoMsg3" placeholder='Enter Message 3'  required></textArea><br></br>
      <textArea rows="3" type="text" class="form-control" name="topPhotoMsg4" placeholder='Enter Message 4'  required></textArea><br></br>
      <textArea rows="3" type="text" class="form-control" name="topPhotoMsg5" placeholder='Enter Message 5'  required></textArea><br></br>
    
      </div>
      <button type="submit" class="button1">Post Messages</button>
      </form></div>
    
      
      <div style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>RESET TRADING CODE</div>
      <form method="post" action="/admin_setTradingCode">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off"  name="tradingId" placeholder='Contact' maxLength={10} minLength={10} required></input><br></br>
      <input  type="text" class="form-control" autoComplete="off"  name="tradingCode" placeholder='Enter new trading code' minLength={4} maxLength={4} required></input>
    
     
    
      </div>
      <button type="submit" class="button1">RESET CODE</button>
      </form></div>
      <div style={{padding:"20px"}}>
     <div style={{color:"red", fontSize:"15px"}}> RESET ADMIN REGISTRATION CODE</div>
      <form method="post" action="/collection_controls_resetAdminRegCode">
     
    
     <input type="" class="form-control" autoComplete="off" name="adminRegCode" placeholder='Enter new admin Reg code' ></input><br></br>
    
     <button type="submit" class="button1">Reset</button>
     </form></div>
     <div style={{padding:"20px"}}>  
      
      <div  dangerouslySetInnerHTML={{__html:addMessageeStatus}}/>
      <form  id="addMessagee">
      <div style={{color:"green", textAlign:"center", fontWeight:"bold",fontSize:"15px"}}>Add contacts to Kayas messager</div>
      <div style={{color:"red",textAlign:"center", fontSize:"12px"}}>Supports top up</div>
      <div class="mb-3">
    
      <textArea rows="10" type="text" class="form-control" autoComplete="off"  name="messagees" placeholder='Enter array of messagees' ></textArea>
     
    
      </div>
     <div> <span type="submit" class="button1" onClick={()=>{
      //  fetch('/addToMessagingQueueThroughAdmin',{method:"post",headers:{"Content-type":"application/json"},
      //  body:document.getElementById('addMessagee').messagees.value.trim().split(",")})
      setAddMessageeStatus("Please wait ...")

Post('/addToMessagingQueueThroughAdmin',document.getElementById('addMessagee').messagees.value.trim().split(","))
      .then(resp=>{
      
        if(resp.statusOk===0){
          setAddMessageeStatus(`<div style='color:red;'>${resp.messagees.length} invalid: ${resp.messagees} </div>`)
        }else{
          setAddMessageeStatus(`<div style='color:green;'>${resp.message}. </div>`)
        }
      }) 
          
    
        }}>ADD</span></div>
      </form></div>
      </div>
    );
  }

  export default ControlsHome