import React, {useEffect,useState,useMemo} from 'react';
import { ConfirmProductRequest, MessageComponent, Post, ToastAlert } from '../Functions';
import {useCookies} from 'react-cookie'
import snacks from '../imgs/bhazi.jpg'
import prod1 from './productsImages/prod1.jpg'
import prod2 from './productsImages/prod2.avif'
import prod3 from './productsImages/prod3.avif'
import prod4 from './productsImages/prod4.avif'
import prod5 from './productsImages/prod5.jpg'
import prod6 from './productsImages/prod6.webp'
import prod7 from './productsImages/prod7.jpg'
import prod8 from './productsImages/prod8.webp'
import prod9 from './productsImages/prod9.jpg'
import prod10 from './productsImages/prod10.jpg'
import prod11 from './productsImages/prod11.jpg'
import prod12 from './productsImages/prod12.jpg'
import prod13 from './productsImages/prod13.jpg'
import prod14 from './productsImages/prod14.jpg'
import prod15 from './productsImages/prod15.jpg'
import prod16 from './productsImages/prod16.jpg'
import prod17 from './productsImages/prod17.avif'
import prod18 from './productsImages/prod18.jpg'
import prod19 from './productsImages/prod19.jpg'
import prod20 from './productsImages/prod20.jpg'
import prod21 from './productsImages/prod21.jpg'
import prod22 from './productsImages/prod22.jpg'
import prod23 from './productsImages/prod23.jpg'
import prod24 from './productsImages/prod24.jpg'
import prod25 from './productsImages/prod25.jpg'
import prod26 from './productsImages/prod26.jpg'
import prod27 from './productsImages/prod27.jpg'
import prod28 from './productsImages/prod28.jpg'
import prod29 from './productsImages/prod29.jpg'
import prod30 from './productsImages/prod30.jpg'
import prod31 from './productsImages/prod31.jpg'
import prod32 from './productsImages/prod32.jpg'
import prod33 from './productsImages/prod33.avif'
import prod34 from './productsImages/prod34.webp'
import prod35 from './productsImages/prod35.jpg'
import prod36 from './productsImages/prod36.jpg'
import prod37 from './productsImages/prod37.jpg'
import prod38 from './productsImages/prod38.webp'
import prod39 from './productsImages/prod39.jpg'
import prod40 from './productsImages/prod40.jpg'
import prod41 from './productsImages/prod41.jpg'
import prod42 from './productsImages/prod42.jpg'
import prod43 from './productsImages/prod43.jpg'
import prod44 from './productsImages/prod44.jpg'
import prod45 from './productsImages/prod45.webp'
import prod46 from './productsImages/prod46.jpg'
import prod47 from './productsImages/prod47.jpg'
import prod48 from './productsImages/prod48.jpg'
import prod49 from './productsImages/prod49.jpg'
import prod50 from './productsImages/prod50.jpg'
import prod51 from './productsImages/prod51.jpg'
import prod52 from './productsImages/prod52.jpg'
import prod53 from './productsImages/prod53.jpg'
import prod54 from './productsImages/prod54.jpg'
import prod55 from './productsImages/prod55.jpg'
import prod56 from './productsImages/prod56.jpg'
import prod57 from './productsImages/prod57.avif'




export function Productslist(){
  
  // const [products,setProducts]  = useState()
  const [status,setStatus]  = useState()
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
  const [displayAddProduct,setDisplayAddProduct] =useState(false)
  const [displayConfirmProductRequest,setDisplayConfirmProductRequest] =useState(false)
  let [refresh,setRefresh]=useState('')
  let [description,setDescription]=useState()
  let [price,setPrice]=useState()

  let products=[
    {description:'Wall dressing mirror',price:'35,000',img:prod56},
    {description:'Plastic room dust bin',price:'10,000',img:prod57},
    {description:'Metallic hangers',price:'17,000',img:prod1},
    {description:'Metallic hanger (With hooks)',price:'17,000',img:prod2},
    {description:'Extension cable - Power king 4 ports original',price:'30,000',img:prod3},
    {description:'Extension cable - Power king 6 ports original',price:'35,000',img:prod4},
    {description:'Extension cable - G & T 4 ports Heavy duty (Recommended for use with percolators)',price:'40,000',img:prod21},
    {description:'Extension cable - G & T 6 ports Heavy duty (Recommended for use with percolators)',price:'50,000',img:prod22},
    {description:'Promotion of Shell gas cylinder - 6kgs full set',price:'130,000',img:prod5},
    {description:'Plastic storage trolley with 5 drawers',price:'70,000',img:prod6},
    {description:'Stackable plastic storage basket',price:'10,000 each stack',img:prod7},
    {description:'Juice blender - 1.5 liters',price:'100,000',img:prod8},
    {description:'Fluffy carpet - Good for use as a room center carpet',price:'90,000',img:prod9},
    {description:'Rubber carpet',price:'18,000 per meter',img:prod10},
    {description:'Plastic carpet',price:'12,000 per meter',img:prod11},
    {description:'Woolen carpet (2 meters by 2 meters)',price:'85,000',img:prod12},
    {description:'Woolen carpet (2 meters by 3 meters)',price:'120,000',img:prod12},
    {description:'Broom',price:'12,000',img:prod13},
    {description:'Plate / utencils rack',price:'35,000',img:prod14},
    {description:'Flat iron - Phillips',price:'80,000',img:prod15},
    {description:'Flat iron - Saachi',price:'55,000',img:prod16},
    {description:'Percolator (Boils water and milk)',price:'75,000',img:prod17},
    {description:'Percolator - PTL (Metallic outside and inside)',price:'35,000',img:prod18},
    {description:'Percolator - PTL (Plastic outside and metallic inside)',price:'45,000',img:prod20},
    {description:'Percolator - Scarlet (Metallic outside and inside)',price:'40,000',img:prod19},
    {description:'Bed cover (Comes with 2 pillow cases and 1 bet sheet)',price:'65,000',img:prod23},

    {description:'Mattress (3 by 6 Grace foam)',price:'135,000',img:prod24},
    {description:'Mattress (3 by 6 Com foam deluxe)',price:'140,000',img:prod24},
    {description:'Mattress (3 by 6 QTE)',price:'145,000',img:prod24},
    
    {description:'Mattress (3.5 by 6 Grace foam)',price:'165,000',img:prod24},
    {description:'Mattress (3.5 by 6 Com foam deluxe)',price:'175,000',img:prod24},
    

    {description:'Mattress (4 by 6 Grace foam )',price:'170,000',img:prod24},
    {description:'Mattress (4 by 6 Com foam deluxe)',price:'180,000',img:prod24},
    {description:'Mattress (4 by 6 QTE)',price:'190,000',img:prod24},
    
    {description:'Wall hooks (Set with 12 hooks)',price:'20,000',img:prod25},
    {description:'Wall hooks (Set with 4 hooks)',price:'20,000',img:prod25},
    {description:'Wall hooks (Set with 4 hooks)',price:'15,000',img:prod25},
    {description:'Door mat',price:'23,000',img:prod26},
    {description:'Bucket',price:'15,000',img:prod27},
    {description:'Total Gas cylinder (6kgs full set)',price:'190,000',img:prod28},
    {description:'Stabex Gas cylinder (6kgs full set)',price:'170,000',img:prod29},
    {description:'Electric mosquito repellant',price:'25,000',img:prod30},
    {description:'Room LED lights',price:'45,000',img:prod31},
    {description:'Frying pan - small',price:'25,000',img:prod32},
    {description:'Frying pan - medium',price:'30,000',img:prod32},
    {description:'Frying pan - large',price:'35,000',img:prod32},
    {description:'Plastic fan',price:'80,000',img:prod33},
    {description:'Metallic fan',price:'110,000',img:prod34},
    {description:'Light bulb with in built fan',price:'55,000',img:prod35},
    {description:'Light bulb',price:'10,000',img:prod36},
    {description:'Rag / mopper',price:'10,000',img:prod37},
    {description:'Vacuum flask (Always 2 liters)',price:'50,000',img:prod38},
    {description:'Vacuum flask (Always 3 liters)',price:'70,000',img:prod38},
    {description:'Pillow',price:'20,000',img:prod39},
    {description:'Power bank -  Capacity: 30,000 mAh',price:'95,000',img:prod40},
    {description:'Power bank -  Capacity: 20,000 mAh',price:'75,000',img:prod40},
    {description:'Power bank -  Capacity: 10,000 mAh',price:'55,000',img:prod40},
    {description:'Plastic storage - small',price:'Small: 20,000/= Medium: 25,000/= Big: 30,000/=',img:prod41},
   
    {description:'Bowl (Katasa)',price:'10,000',img:prod42},
    {description:'Reading table',price:'95,000',img:prod43},
    {description:'Shoe rack',price:'60,000',img:prod44},
    {description:'Shoe rack',price:'45,000',img:prod45},
    {description:'Laundry basket',price:'25,000',img:prod46},
    {description:'Pant pegs - Double foldable',price:'30,000',img:prod47},
    {description:'Plastic stool',price:'25,000',img:prod48},
    {description:'Plastic seat',price:'25,000',img:prod52},
    {description:'Plastic seat',price:'30,000',img:prod49},
    {description:'Plastic seat',price:'45,000',img:prod50},
    {description:'Plastic seat',price:'45,000',img:prod51},
    {description:'Jerry can - 20 liters',price:'15,000',img:prod53},
    {description:'Basin',price:'15,000',img:prod54},
    {description:'Dust pan',price:'15,000',img:prod55},
    
    
    
  
  
  ]
let productDeliveryMessage="We deliver to you. Convenience matters!"
    return(
        <div class="componentPadding">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="pageLabel">Products ({(()=>{
                      if(products){
                        return(products.length)
                      }
                    })()})</div>
                    <div class="light" style={{paddingBottom:"7px"}}>Laptops, phones, mattresses, reading tables, etc</div>
                    
                    <div class="input-group">
  <input id="searchElement"
    type="text"
    class="form-control"
    placeholder="Search..."
    onChange={()=>{
        let searchValue=document.getElementById('searchElement').value.trim()


      // if (searchValue.trim() === "") {
      //   fetch('/getProducts').then(resp=>{
      //     return resp.json()}).then(resp=>{
          
         
      //     setProducts(resp)
      // })

      // } else{
      //   setTimeout(()=>{
         
             
            
      //       fetch(`/getProduct/${searchValue}`).then(resp=>resp.json()).then(resp=>{
                
      //           setProducts(resp)
            
      //       })
      //             },1000)  
            
      // }

    }}
  ></input>

  <button class="btn btn-outline-secondary" type="button">
    <i class="bi bi-search"></i>
  </button>

</div>
 <div class="status">{status}</div>


<div style={{textAlign:"",paddingTop:"8px"}}>
<div style={{paddingBottom:"5px",fontWeight:"bold"}}>{productDeliveryMessage}</div>
<div> <a href="https://wa.me/256703852178?text=Hello,%20I%20would%20love%20items%20to%20be%20delivered%20to%20me."><span class="btn btn-sm btn-warning"><span class="fa-brands fa-whatsapp"></span> Contact</span></a></div>


</div><p></p>


<ConfirmProductRequest description={description} price={price} message="You will be contacted after confirming your request" displayConfirmProductRequest={displayConfirmProductRequest} closeConfirmProductRequest={()=>{
  setDisplayConfirmProductRequest(false)

}} />


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
   

<div  class="row">


<div class="col-6 productsImgDiv"><img src={product.img} alt='Photo will be uploaded soon..' loading='lazy' class="productsImg d-block w-100" /></div>
 
  <div class="col-6 productDescriptionContainer" >
  <div>
  <div class="light productDescription">{product.description}</div>
  <div><span class="productPrice">{product.price}</span></div>
  </div>

<p></p>

<div>
  <div class="btn btn-sm btn-success fullButtonWidth" onClick={()=>{
    setDescription(product.description)
  setPrice(product.price)
  setDisplayConfirmProductRequest(true)
}}>Get</div>
<div class="productDeliveryMessage">{productDeliveryMessage}</div>
</div>





  </div>


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