import React, {useEffect,useState,useMemo} from 'react';
import { MessageComponent } from '../Functions';
export function Productslist(){
  const [products,setProducts]  = useState()
  const [status,setStatus]  = useState()

useEffect(()=>{
    fetch('/getProducts').then(resp=>{
        return resp.json()}).then(resp=>{
        
        resp.reverse()
        setProducts(resp)
    })
},[])



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
            setProducts()
             
             console.log(searchValue)
            
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
               <div class="light col-8">{product.description}</div>
                <div class="bold col-4">{product.price}</div>
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