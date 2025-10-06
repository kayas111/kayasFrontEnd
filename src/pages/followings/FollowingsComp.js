
export function FollowingsComp(){
    let {contact,categoryId}=useParams(),payLoad={contact:parseInt(contact),categoryId:parseInt(categoryId)}
  let [categoryName,setCategoryName]=useState(''),[followerDoc,setFollowersDoc]=useState({}),
  [noOfFollowers,setNoOfFollowers]=useState(''),[updateFollowersStatus,setUpdateFollowersStatus]=useState('')
  const[charLength,setCharLength]=useState('0'),maxCharLength=132
  
  useEffect(()=>{
  
    fetch('/followingsPostRequest',{
      method:"post",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({method:"getFollowersCategory",args:payLoad}) 
  }).then(res=>res.json()).then(resp=>{
    if(resp.length==0){
      setCategoryName('This category does not exit.')
      setNoOfFollowers('No')
    }else{
  let categoryDoc=resp[0]
  
      setCategoryName(categoryDoc.categoryName)
      setNoOfFollowers(categoryDoc.followers.length)
  
  
  
    }
  })
  
  
  
  },[])
  
    return(<div style={{padding:"3px"}}>
      
  <div style={{background:"#dfdfdf"}} class="row">
    <div class="col-md-3"></div>
    <div style={{background:"white"}} class="col-md-6">
    <div style={{color:"red",fontSize:"20px"}}>{categoryName}</div>
      <div style={{fontSize:"11px",color:"grey",paddingBottom:"5px"}}>{noOfFollowers} followers, Category ID: {categoryId}</div>
  <FollowingsNav/>
  <p></p>
         <div style={{padding:"5px"}}>  
         <form id="updateFollowersForm" method="post" onSubmit={(e)=>{
          
          let FormObject=getFormData(e)
          VerifyRegistrationAndPin(contact,FormObject.pin).then(resp=>{
         setKayaserVerificationStatus(resp,setUpdateFollowersStatus,()=>{
          setUpdateFollowersStatus('Please wait...........')
          payLoad.msg=FormObject.msg.trim()
  if(Array.from(payLoad.msg).length>maxCharLength){
    setUpdateFollowersStatus(`<div style="color:red;">Message is longer than ${maxCharLength} characters, please reduce</div>`)
  }else{
    fetch('/followingsPostRequest',{
      method:"post",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({method:"updateFollowers",args:payLoad}) 
    }).then(res=>res.json()).then(resp=>{
      setUpdateFollowersStatus(resp.msg)
    })
    
  }
  
  })}
         
         )}}>
         <div style={{paddingBottom:"8px"}}><div class="formLabel">Update your followers ({noOfFollowers}) </div></div>
         
         <div class="mb-3">
         <div style={{fontSize:"12px",paddingTop:"5px",paddingBottom:"5px"}}>Maximum message length = <span style={{color:"red",fontSize:"15px"}}>{maxCharLength}</span> characters.<br></br>You've typed <span style={{color:"red",fontSize:"15px"}}>{charLength}</span> characters.</div>
         <textArea type="text" class="form-control" autoComplete="off" name="msg" required minLength={3} rows="6" placeholder='Type message here' onChange={()=>{
    setCharLength(Array.from(document.getElementById("updateFollowersForm").msg.value.trim()).length)
  }}></textArea>
         <br></br>
         <input type="text" class="form-control" autoComplete="off" name="pin" required minLength={5} placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
         
         </div>
         <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:updateFollowersStatus}}/>
         
         <button  type="submit"  class="btn btn-sm btn-success backgroundColorHovereffect">Update followers</button><p></p>
         
         </form></div>
         
         <p></p>
         
          </div>
         
    <div class="col-md-3"></div>
  </div>
  <p></p>
  
  
  {/* <FollowingsHome/> */}
  
  
    </div>)
  }
  

  export default FollowingsComp