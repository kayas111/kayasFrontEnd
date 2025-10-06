
export function SubcsribeToCategory(){
    return (
        <div>
             <div class="col-md-6">

            
<div style={{padding:"5px"}}>  
<form id="followSomeoneForm" method="post" >
<div id="followSomeone" style={{paddingBottom:"8px"}}><div class="formLabel">Subscribe/Unsubscribe to someone's category</div></div>

<div class="mb-3">

<input type="text" class="form-control" autoComplete="off" name="contactToFollow" placeholder='Enter contact of the person'></input>
<div style={{padding:"5px"}}><div style={{padding:"5px",background:"black",color:"orange",borderRadius:"5px"}}>{followCategory}</div></div>
<input type="text" class="form-control" autoComplete="off" name="categoryId" onChange={(e)=>{

if(Array.from(document.getElementById('followSomeoneForm').contactToFollow.value.trim()).length<10 || Array.from(document.getElementById('followSomeoneForm').contactToFollow.value.trim()).length>10){
setFollowCategory('Enter correct contact above of 10 digits')
document.getElementById('followSomeoneForm').categoryId.value=''
}else{
setFollowCategory('Searching.....')
let payLoad={contact:parseInt(document.getElementById('followSomeoneForm').contactToFollow.value.trim()),categoryId:parseInt(document.getElementById('followSomeoneForm').categoryId.value.trim())}
fetch('/followsPostRequest',{
method:"post",
headers:{'Content-type':'application/json'},
body:JSON.stringify({method:"getFollowersCategory",args:payLoad}) 
}).then(res=>res.json()).then(resp=>{
if(resp.length==0){
setFollowCategory(resp.msg)
document.getElementById('followSomeoneForm').categoryId.value=''

}else{
let categoryDoc=resp[0]

setFollowCategory(categoryDoc.categoryName)




}
})




}



}} placeholder='Category ID of category to subscribe to'></input>
<br></br> 
<input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter your contact e.g 0703852178'></input>
  
<br></br>
<input type="text" class="form-control" autoComplete="off" name="pin" placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>

</div>
<div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:submitStatus}}/>
<div style={{display:"flex"}}>
<div style={{padding:"5px"}}>
<div   onClick={()=>{
 let FormObject=getFormDataOnClick(document.getElementById('followSomeoneForm'))
 if(Array.from(FormObject.contactToFollow.trim()).length != 10){
   setSubmitStatus('<div style="color:red;">Enter 10 digits contact of the person</div>')

 } else
 if(Array.from(FormObject.categoryId.trim()).length<1){
   setSubmitStatus('<div style="color:red;">Enter ID of category</div>')

 } else
 if(Array.from(FormObject.contact.trim()).length!=10){
   setSubmitStatus('<div style="color:red;">Enter your contact of 10 digits</div>')

 } else
 if(Array.from(FormObject.pin.trim()).length!=5){
   setSubmitStatus('<div style="color:red;">Enter PIN of 5 digits</div>')

 }
 
 else{
   VerifyRegistrationAndPin(parseInt(FormObject.contact),FormObject.pin).then(resp=>{
     setKayaserVerificationStatus(resp,setSubmitStatus,()=>{
       let payLoad={contactToFollow:parseInt(FormObject.contactToFollow),categoryId:parseInt(FormObject.categoryId),follower:{name:resp.details.name,contact:resp.details.contact}}
       fetch('/followsPostRequest',{
         method:"post",
         headers:{'Content-type':'application/json'},
         body:JSON.stringify({method:"subscribeToACategory",args:payLoad}) 
     }).then(res=>res.json()).then(resp=>{
     setSubmitStatus(resp.msg)
       
     })

     })
   })

 }






}} class="btn btn-success btn-sm backgroundColorHovereffect"><span class="fa fa-plus"></span> Subscribe</div>

</div>

<div style={{padding:"5px"}}>
<div   onClick={()=>{
 let FormObject=getFormDataOnClick(document.getElementById('followSomeoneForm'))
 if(Array.from(FormObject.contactToFollow.trim()).length != 10){
   setSubmitStatus('<div style="color:red;">Enter contact to follow of 10 digits</div>')

 } else
 if(Array.from(FormObject.categoryId.trim()).length<1){
   setSubmitStatus('<div style="color:red;">Enter ID of category</div>')

 } else
 if(Array.from(FormObject.contact.trim()).length!=10){
   setSubmitStatus('<div style="color:red;">Enter your contact of 10 digits</div>')

 } else
 if(Array.from(FormObject.pin.trim()).length!=5){
   setSubmitStatus('<div style="color:red;">Enter PIN of 5 digits</div>')

 }
 
 else{
   VerifyRegistrationAndPin(parseInt(FormObject.contact),FormObject.pin).then(resp=>{
     setKayaserVerificationStatus(resp,setSubmitStatus,()=>{
       let payLoad={contactToFollow:parseInt(FormObject.contactToFollow),categoryId:parseInt(FormObject.categoryId),follower:{name:resp.details.name,contact:resp.details.contact}}
       fetch('/followsPostRequest',{
         method:"post",
         headers:{'Content-type':'application/json'},
         body:JSON.stringify({method:"unsubscribeFromACategory",args:payLoad}) 
     }).then(res=>res.json()).then(resp=>{
     setSubmitStatus(resp.msg)
       
     })

     })
   })

 }






}} class="btn btn-danger btn-sm backgroundColorHovereffect"><span class="fa fa-minus"></span> Unsubscribe</div>

</div>





</div>

<p></p>

</form></div>
<p></p>

 </div>
        </div>
    )
}

export default SubcsribeToCategory