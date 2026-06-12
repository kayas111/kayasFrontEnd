import React, {useEffect,useState,useMemo} from 'react';
import { MessageComponent, Post, ToastAlert } from '../Functions';
import {useCookies} from 'react-cookie'



export function AddProduct({
  displayAddProduct,
  closeAddProduct,
  refreshProductList,
code,
message
  
}) {



   const [status, setStatus] = useState("");
   

  if (!displayAddProduct) {
    
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
          <div class="alertTitle">Add new product</div>
          <p>{message}</p>

          <textarea rows={4}
            type="text"
            placeholder="Product description"
            class="form-control" autoComplete="off" id="description" />
<p></p>
<input
            type="text"
            placeholder="Price"
            class="form-control" autoComplete="off" id="price" />

            <div class="status">{status}</div>
  
          <div style={{paddingTop:"5px"}}>
  
          <button
              onClick={() => {
let description=document.getElementById('description').value.trim(),price=document.getElementById('price').value.trim()


if(Array.from(description).length<1){
  setStatus('Enter product description')
}else if(Array.from(price).length<1){
  setStatus('Enter product price')
}else{
  setStatus('Adding product.....')
  let payLoad={description:description,price:price}
   Post('/addProduct',payLoad).then(resp=>{
                    if(resp.success==true){
                      setStatus("Product added")
                      closeAddProduct()
                      document.body.style.overflow = "";
                      
                      
                      setTimeout(()=>{
                        refreshProductList()
                        ToastAlert('toastAlert1','Added successfully',2000)
                      },1000)
                    }else{
                      setStatus("Not added")
                    }
                  })
}


    
                              

               
              }}
              class="btn btn-success fullButtonWidth"
           
           >
              Add product
            
            </button><p></p>
          
            <button onClick={closeAddProduct} class="btn btn-danger fullButtonWidth">
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






export function Productslist(){
  const [products,setProducts]  = useState()
  const [status,setStatus]  = useState()
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
  const [displayAddProduct,setDisplayAddProduct] =useState(false)
  let [refresh,setRefresh]=useState(0)

useEffect(()=>{
    fetch('/getProducts').then(resp=>{
        return resp.json()}).then(resp=>{
        
        
        setProducts(resp)
    })
},[refresh])



    return(
        <div class="componentPadding">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="pageLabel">Products</div>

                    
                    <div class="input-group">
  <input id="searchElement"
    type="text"
    class="form-control"
    placeholder="Search..."
    onChange={()=>{
        let searchValue=document.getElementById('searchElement').value.trim()


      if (searchValue.trim() === "") {
        fetch('/getProducts').then(resp=>{
          return resp.json()}).then(resp=>{
          
         
          setProducts(resp)
      })

      } else{
        setTimeout(()=>{
         
             
            
            fetch(`/getProduct/${searchValue}`).then(resp=>resp.json()).then(resp=>{
                
                setProducts(resp)
            
            })
                  },1000)  
            
      }

    }}
  ></input>

  <button class="btn btn-outline-secondary" type="button">
    <i class="bi bi-search"></i>
  </button>

</div>
 <div class="status">{status}</div>

<p></p>

{(()=>{
  if(cookies.user && parseInt(cookies.user.contact)==703852178){
    return (
      <div>
  <div class="btn btn-sm btn-success" onClick={()=>{
setDisplayAddProduct(true)
  }}
  >Add product</div>
</div>
    )
  }
})()}

<AddProduct displayAddProduct={displayAddProduct} closeAddProduct={()=>{
  setDisplayAddProduct(false)
}} refreshProductList={()=>{
  setRefresh(()=>(refresh++))
}} />
<p></p>

<div style={{paddingLeft:"0px"}}>
   
{(()=>{
    if(products){

      if(products.length==0){
        return(<MessageComponent message="No products available" />)
      }else{
        return( products.map((product)=>{
            return (
            
               <div class="productContainer">
               <div class="productContainer2">
   
<div class="row">

<div class="col-9"><div class="light">{product.description}</div>
<div class="bold">{product.price}</div></div>

<div class="col-3"><div>{(()=>{
                  if(cookies.user && parseInt(cookies.user.contact)==703852178){
                    return(<div onClick={()=>{
                      
                      if(window.confirm(`Delete ${product.description}`)==true){
                        
                      
                        Post(`/deleteProduct`,{id:product._id}).then(resp=>{
                         if(resp.success==true){ 
                          ToastAlert('toastAlert1','Deleted successfully',2000)
                          
                         setRefresh(()=>(refresh++))
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

</div>

               </div>
    
               </div>
            )}))
      }

        



    }else{
        return(
            <MessageComponent message="Loading products....."/>
        )
    }
})()}

</div>


                </div>
                <div class="col-md-3"></div>
            </div>

        </div>
    )

} export default Productslist