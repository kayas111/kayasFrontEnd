import React, {useEffect,useState,useMemo} from 'react';
import { MessageComponent, Post, ToastAlert } from '../Functions';
import {useCookies} from 'react-cookie'

export function Productslist(){
  const [products,setProducts]  = useState()
  const [status,setStatus]  = useState()
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
  let [refresh,setRefresh]=useState(0)

useEffect(()=>{
    fetch('/getProducts').then(resp=>{
        return resp.json()}).then(resp=>{
        
        resp.reverse()
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
        ;
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
                  if(cookies.user && cookies.user.contact==703852178){
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