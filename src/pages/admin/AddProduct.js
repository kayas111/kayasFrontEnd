import { Post, ToastAlert } from "../Functions"
import { useState } from "react"

export function AddProduct(){
    const [status,setStatus]=useState('')
let p={color:"pink"}
return(
    <div class="componentPadding">
       <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">

        <div class="pageLabel">Add product</div>

       
    <form method="post" id="addProductForm">
   
     <div class="mb-3">
     
   <div class="formInputLabel">Description, word or phrase (Optional)</div>
   <textArea rows="3" type="text" class="form-control" autoComplete="off" name="description"  ></textArea>
   <br></br><div class="formInputLabel">Price</div>
   <input type="text" class="form-control" autoComplete="off" name="price" ></input>
  
     </div>
      <div class="status">{status}</div>

     <div style={{width:"100%"}} onClick={
      ()=>{
  let form=document.getElementById("addProductForm")

        if(Array.from(form.description.value).length<1){

ToastAlert('toastAlert2','Enter a description',3000)


}
      else  if(Array.from(form.price.value).length<1){

ToastAlert('toastAlert2','Enter price',3000)


}

else{
  setStatus('Adding.....')
  let payLoad={description:form.description.value,price:form.price.value}
  console.log(payLoad)
  Post('/addProduct',payLoad).then(resp=>{
    
    if(resp.success==true){
        setStatus('Added successfully')
        form.description.value=''
        form.price.value=''
    }else{
        setStatus('Try again')
    }
  })
  
 
}
      } 

     } class="btn btn-success"><span class="fa fa-user-plus"></span> Add</div><p></p>
    
     </form>





        </div>
        <div class="col-md-3"></div>
       </div>
    </div>
)
}
export default AddProduct