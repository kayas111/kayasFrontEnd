import React, {useEffect,useState} from 'react'
import {ToastAlert,GetTradingDetails,DebitTraderAccountBalance,MessageComponent } from './Functions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import it1 from './imgs/it1.jpg';
import it2 from './imgs/it2.jpg';
import soapdish from './imgs/soapdish.jpg';
import plasticholder from './imgs/plasticholder.jpg';
import cutlery from './imgs/cutlery.jpg';
import katasa from './imgs/katasa.jpg';
import slippers from './imgs/slippers.jpg';
import pegs from './imgs/pegs.jpg';
import metallicwadrobe from './imgs/metallicwadrobe.jpg';
import ceramiccups from './imgs/ceramiccups.jpg';


import bedsheets from './imgs/bedsheets.jpg';
import rolex from './imgs/rolex.jpg';

import mosquitonet from './imgs/mosquitonet.jpg';
import umbrella from './imgs/umbrella.jpg';
import jerrycan from './imgs/jerrycan.jpg';
import dishtowel from './imgs/dishtowel.jpg';
import pantpeg from './imgs/pantpeg.jpg';


import it3 from './imgs/it3.jpg';
import it4 from './imgs/it4.jpg';
import it5 from './imgs/it5.jpg';
import it6 from './imgs/it6.jpg';
import it7 from './imgs/it7.jpg';
import it8 from './imgs/it8.jpg';
import it9 from './imgs/it9.jpg';
import it10 from './imgs/it10.jpg';
import it11 from './imgs/it11.jpg';
import it12 from './imgs/it12.jpg';
import it13 from './imgs/it13.jpg';


import it14 from './imgs/it14.jpg';
import it15 from './imgs/it15.jpg';
import it16 from './imgs/it16.jpg';
import it17 from './imgs/it17.jpg';

import it18 from './imgs/it18.jpg';
import it19 from './imgs/it19.jpg';
import it20 from './imgs/it20.jpg';

import it21 from './imgs/it21.jpg';
import it22 from './imgs/it22.jpg';
import it23 from './imgs/it23.jpg';
import it24 from './imgs/it24.jpg';
import it25 from './imgs/it25.jpg';
import it26 from './imgs/it26.jpg';
import it27 from './imgs/it27.jpg';
import it28 from './imgs/it28.jpg';
import it29 from './imgs/it29.jpg';
import it30 from './imgs/it30.jpg';
import it31 from './imgs/it31.jpg';
import it32 from './imgs/it32.jpg';
import it33 from './imgs/it33.jpg';
import it34 from './imgs/it34.jpg';
import it35 from './imgs/it35.jpg';
import it36 from './imgs/it36.jpg';
import it37 from './imgs/it37.jpg';
import it38 from './imgs/it38.jpg';
import it39 from './imgs/it39.jpg';
import it40 from './imgs/it40.jpg';
import it41 from './imgs/it41.jpg';
import it42 from './imgs/it42.jpg';


import lights from './imgs/lights.jpg';

import ad from './imgs/ad.jpg';
import pant1 from './imgs/pant1.jpg';
import ip1 from './imgs/ip1.jpg';

import alert from './imgs/alert.jpg';
import isaac1 from './imgs/isaac1.jpg';
import isaac2 from './imgs/isaac2.jpg';

import isaac3 from './imgs/isaac3.jpg';
import kahu from './imgs/kahu.jpg';
import rogers from './imgs/rogers.jpg';
import wobu from './imgs/wobu.jpg';
import msg1 from './imgs/msg1.jpg';





import craft7 from './imgs/craft7.jpg';

import wp5 from './imgs/wp5.jpg';




import s1 from './imgs/s1.jpg';
import s2 from './imgs/s2.jpg';
import s3 from './imgs/s3.jpg';
import s4 from './imgs/s4.jpg';


import s6 from './imgs/s6.jpg';




import parco from './imgs/parco.jpg';
import fan from './imgs/fan.jpg';



import flatiron from './imgs/flatiron.jpg';


import woofer from './imgs/woofer.jpg';

import cake2 from './imgs/cake2.jpg';



import ClientBusinesses from './ClientBusinesses'
import About from './About';

import {useCookies} from 'react-cookie'
import LoginPage from './LoginPage';




export function Home(){
  let componentParams=useParams(),CreateOwnPageUrl='/advertise/items',viewCost=0
  const [cookies]=useCookies(['user'])

useEffect(()=>{
  if(cookies.user!=undefined){
    GetTradingDetails(cookies.user.contact).then(resp=>{
      let user=resp
      if(user.accBal<viewCost){
      
        if(window.confirm(`Low account balance. Deposit atleast ${viewCost}/= on your Kayas account. Would you love to top up?`)==true){
        window.location.href=`/pages/deposit`
       }else{
         window.location.href='/pages/homepage'
       }
       }else{
        
        DebitTraderAccountBalance(user.contact,viewCost)
        
       }
    })
  } 


},[])



return(
  <div>
  

  <Itemsele style={{border:"1px solid red"}} componentParams={componentParams} />
  

  </div>

)

} 


export function CarousItem(props){
     
    return(
        <div class="carousel-item ">
        <img src={props.img} class=" d-block w-100" alt="..."  height={props.hght} /><div class="carousel-caption   d-md-block">
        <br></br><br></br><br></br><div class="carmsg"><div class="carmsgcolor"><br></br><br></br>{props.msg}</div></div>
        
      
          </div>
            </div>
  
    ); 
  }
  export function Carousele(){
    let caroushght="400px";
   
    return (
    
         <div id="carouselExampleControls" class="carousel slide carousel-fade col-md-12" data-bs-ride="carousel">
        <div class="nega"><marquee direction="left" behavior="scroll">Kayas Makerere University wishes to present to you, as a student of Makerere University, a proposal concerning 1,000/= shillings interest loans. Please read through the proposal presented to you by part of our team by clicking the loans button above and post your view and comment about the proposal. Thank you.</marquee></div>
  
        <div class="carousel-inner">
         <div className="row">  
         <div className="col-1"></div>
         <div class="col-10">
        <div class="carousel-item active">
  <div class="carousel-caption caption-four  d-md-block">
  <br></br><br></br><br></br><br></br><br></br><div class="carmsgcolor"><span >Scroll down for contact details</span></div>
   
   </div> 
     </div>
    
    
     
     <CarousItem hght={caroushght} img={ad} msg="" />
          <CarousItem hght={caroushght} img={wp5} msg="What is KAYAS Makerere University? Scroll down for details." />
         <CarousItem hght={caroushght} img={msg1} msg="" />
     <CarousItem hght={caroushght} img={wp5} msg="Earn with KAYAS Makerere University. It's free WhatsApp Isaac on 0755643774" />
          <CarousItem hght={caroushght} img={isaac3} msg="" />
         <CarousItem hght={caroushght} img={wp5} msg="What is Kayas all about? Did you know? ....." />
     <CarousItem hght={caroushght} img={wp5} msg="We buy items from you as a student" />
     <CarousItem hght={caroushght} img={wp5} msg="We provide  items to students at affordable prices" />
     <CarousItem hght={caroushght} img={wp5} msg="#Keep it Kayas" />
      <CarousItem hght={caroushght} img={kahu} msg="" />
     
     <CarousItem hght={caroushght} img={wp5} msg="Take care of con men and con women" />
     <CarousItem hght={caroushght} img={wp5} msg="Read brief details about con men towards the bottom of the page" />
       
     <CarousItem hght={caroushght} img={s1} msg="students' pride" />
     
    
     <CarousItem hght={caroushght} img={s2} msg="Makerere we got you covered" />
  

  <CarousItem hght={caroushght} img={s6} msg="" />
 
  <CarousItem hght={caroushght} img={s3} msg="" />
  <CarousItem hght={caroushght} img={s4} msg="" />
  
    
     </div>
     <ClientBusinesses/>
     </div>
         
     
    
     
     
    
     
     
     </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    
  <p></p>
    </div>

    
    );
  }

 
export function Items(props){
  let componentParams=useParams();
  
  let name,contact;
  /* original contact button
  
   <a  href={props.url}> 
       <div style={{paddingRight:"5px"}}>
        <div style={{background:"green",borderRadius:"8px",color:"white",fontSize:"10px"}} class="btn btn-sm"><span class="hovereffect"><span class="fa fa-whatsapp"></span> {props.contact}</span></div>
        </div>
       </a>
  */
    return (
        <div class="item">
            <div class ="photo">
              
                <img  src={props.img} alt="kayas"  class="d-block w-100" />
           
               </div>
            <div class="infor"> <div class="item-id">{props.id}</div>
   <div class="item-desc" >{props.des}</div>
   
   <div class="item-price">Updating new price.....</div>
     
       <div onClick={()=>{
//         name=window.prompt("Your name")
// if(name===null){
//   ;
// }else{
// contact=window.prompt("Your contact")
// if(contact===null){;}else{
// fetch('/submitMessage',{
//   method:"post",
//   headers:{'content-type':'application/json'},
//   body:JSON.stringify({name:name,contact:parseInt(contact),serviceType:`${props.id}, ${props.des} of shs ${props.price} ordered by ${name} (${contact}). Recommended by 0${parseInt(componentParams.recommender)}`,recommender:parseInt(componentParams.recommender)})
// }).then(resp=>resp.json()).then(resp=>{
// window.alert("Message sent.");
// })
// }
// }


ToastAlert('toastAlert1','Write down all the items you need with their prices and send to Kayas through WhatsApp on 0703852178',10000)

       
       }} class="button1"><div class="hovereffect">Order | <span style={{fontSize:"10px"}}>Pay on delivery</span></div></div>
       
      

   </div>
   
        </div>
    );
  }
 export async function GetRequestsThroughRecommender(recommender){
          
  return await fetch(`/requestsThroughRecommender/${recommender}`).then(res=>res.json()).then(res=>{
  
    return res.length

    })
  }
  export function ContactCapture(props){
    useEffect(()=>{
      if(props.recommender===undefined){
        window.alert('Recommder prop absent in ContactCapture Comp')
      }else{
        ;
      }
    },[])
    return(<div>
      <div onClick={()=>{
         let contact=window.prompt('Enter WhatsApp contact',""),recommender=props.recommender

         if(contact!=null){
if(Array.from(contact).length<10 || Array.from(contact).length>10){
  window.alert('Enter 10 digits contact')
}else{
if(recommender===undefined){

recommender=703852178
}else{
;
}


let requestBody={name:'Client',contact:parseInt(contact),recommender:parseInt(recommender),serviceType:props.reason}



  fetch('/submitMessageFromContactCapture',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(requestBody) 
}).then(res=>res.json()).then((resp)=>{
   
   window.alert("Your request has been received")
}
    

) 

}

         }else{
;
         }



      }} class={props.class} style={props.style}>{props.buttonLabel}</div>
    </div>)
  }
export  function AdComponent(props){
  let componentParams=props.componentParams
const [advertiserName,setAdvertiserName]=useState('Please wait.....')
    const [initiateAdStatus,setInitiateAdStatus]=useState('')
 
    const [requestsThroughRecommenderNumb,setRequestsThroughRecommenderNumb]=useState('Please wait.....')
    const [websiteVisits,setWebsiteVisits]=useState('calculating.....')
   

    const [advertiserContact,setAdvertiserContact]=useState('')

   
        useEffect(()=>{
          fetch(`/getTradingDetails/${componentParams.recommender}`).then(res=>res.json()).then(resp=>{
         
      if(resp.length===0){
       setWebsiteVisits(`No details for advertiser`)

      }else{
setWebsiteVisits(resp[0].pagesVisitsNo)
      }
          
             
                 })

         
if(componentParams.recommender===undefined || componentParams.recommender==="undefined"){

fetch('/collection_controls').then(res=>res.json()).then(res=>{
    setAdvertiserName(`<div><div style='font-size:15px;'>Advertised by: Kayas</div></div>`)
    setAdvertiserContact('0703852178')
    GetRequestsThroughRecommender('0703852178').then(resp=>{
    
      setRequestsThroughRecommenderNumb(resp)
    
     })
     

  })

}else{


  fetch(`/admin_getDetails/${componentParams.recommender}`).then(res=>res.json()).then(res=>{
  
  
   if(res[1]===undefined){
  
    setAdvertiserName(`<div><div style='font-size:15px;'>Advertised by: Kayas</div></div>`)
    setAdvertiserContact('0703852178')
   
    GetRequestsThroughRecommender('0703852178').then(resp=>{
    
      setRequestsThroughRecommenderNumb(resp)
    
     })
     

   }else{
 
    setAdvertiserName(`<div><div >Advertised by: ${res[1].name}</div></div>`)
    setAdvertiserContact(res[1].contact)
   
 
  GetRequestsThroughRecommender(res[1].contact).then(resp=>{
    
   setRequestsThroughRecommenderNumb(resp)
 
  })
  
   }
   })
}

fetch('/registerPageVisitOfTrader',{
  method:"post",
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({
recommender:parseInt(componentParams.recommender)

  }) 
}).then(res=>res.json()).then(res=>{})


 },[])


  return(<div style={{padding:"18px"}}>
    <div class="row AdComponentDiv">
      <div class="col-md-3"></div>
        <div class="col-md-6" >
        <div style={{fontSize:"12px",color:"orange",paddingBottom:"10px",textAlign:"center"}} dangerouslySetInnerHTML={{__html:advertiserName}}/>
        <div class="label">{props.businessName}</div>
        <div class="description"> <span style={{fontSize:"12px"}}>Views: {websiteVisits}</span> 
      {/* {  <div style={{display:"flex",flexWrap:"wrap",color:"green"}}>
          
          <div style={{padding:"5px",textDecoration:"underline"}}>
            <div style={{paddingTop:"10px"}}><div style={{fontSize:"13px"}} class="hovereffect hoverEffectUnderline" onClick={()=>{
          window.location.href=`/pages/message/throughrecommender/${advertiserContact}`
        }}><span class='fa fa-envelope'></span> Send message</div></div></div>

          <div style={{padding:"5px",textDecoration:"underline"}}><div style={{paddingTop:"10px"}}><div style={{fontSize:"13px"}} class="hovereffect hoverEffectUnderline" onClick={()=>{
          window.location.href=`${props.AdvertiseUrl}/${advertiserContact}`
        }}> Share page</div></div></div>
                        
        <div style={{padding:"5px",textDecoration:"underline"}} >  <div style={{borderRadius:"5px",fontSize:"13px",paddingTop:"10px"}} 
onClick={()=>{
    
      fetch('/verifyUser',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
contact:window.prompt('Enter your contact'),
pin:'11111'
        }) 
    }).then(res=>res.json()).then((resp)=>{
      
        if(resp.registered===false){
          window.alert("You are not registered with Kayas, please register to proceed!")
       

        } else if(resp.registered===true){
          
          window.location.href=`${props.CreateOwnPageUrl}/${resp.details.contact}`

        } 
         else{
          window.alert("An error has occured. Please try again")
          
           }
       
    }
        

    )  

  

  }} class="hovereffect"> Create your page </div></div>

</div>} */} 
        </div>
        
     

        </div>
       
        <div class="col-md-3"></div>
        
    
       </div>
  </div>)
 }







 export function BusinessClientAdComponent(props){

  let componentParams=useParams(),CreateOwnPageUrl=`/advertise/${props.id}`,AdvertiseUrl=`whatsapp://send?text=*🔥${props.businessName}.*%0A%0AVisit the website below:%0Ahttps://kayas-mak.herokuapp.com/advertise/${props.id}`
 
 
     return(<div >
 <AdComponent businessName={props.businessName} CreateOwnPageUrl={CreateOwnPageUrl} AdvertiseUrl={AdvertiseUrl}   componentParams={componentParams} />
 
     </div>)
 }
 export async function SetKayasAndKayasUrlDetails(recommender){
 

  return  await fetch(`/admin_getDetails/${recommender}`).then(res=>res.json()).then((res)=>{
        if(res[1]===undefined){
         return {kayasurl:`/pages/message/throughrecommender/0703852178`}
         }else{
          return {kayasurl:`/pages/message/throughrecommender/${res[1].contact}`}
     
         
          }
          })
  
     
   


  
      
 }
export function NotFound(){
  return(<div>
<div style={{fontSize:"20px",paddingTop:"10px",paddingLeft:"30px",color:"red",textAlign:"center"}}>How can I help you?</div>
<div class='row'>
  <div class='col-md-2'></div>
  <div class='col-md-8'>
Page not found

  </div>
  <div class='col-md-2'></div>
</div>

  </div>)
}

  export function Itemsele(props){
    let componentParams=useParams()
  
  let recommender=componentParams.recommender
  
   
    const [kayasurl,setKayasurl]=useState('')
    const [kayas,setKayas]=useState('Please wait....')
    const [fresherShoppingClickValue,setfresherShoppingClickValue]=useState('Tap here to get started')

useEffect(async ()=>{
 let result=await SetKayasAndKayasUrlDetails(recommender)
 
 setKayasurl(result.kayasurl)
 setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
return resp[0].kayas 
  }))


},[])
   //  <GeneralComp />
   //<GeneralComp1 />
let v= "col-6 col-md-2 bod";
//items
    return (
        <div>
      <BusinessClientAdComponent businessName="Freshers' Online shop by Kayas" id='items' />
      
        <div class="itemse">
        
            <div class="row">

            <div class={v}><Items id="Ceramic cup" des="Brand new" price="5k/6k and 7k" img={ceramiccups} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex watch" des="Brand new" price="40,000/=" img={rolex} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Slippers" des="Brand new" price="5,000/=" img={slippers} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Soap dish" des="Brand new" price="2k and 3k" img={soapdish} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Plastic holder" des="Brand new" price="3,000/=" img={plasticholder} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cutlery" des="Brand new" price="Updating price...." img={cutlery} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Plastic bowl (Katasa)" des="Brand new" price="5,000/=" img={katasa} url={kayasurl} contact={kayas} /></div>
            
            <div class={v}><Items id="Mosquito net" des="Brand new" price="30,000/=" img={mosquitonet} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Umbrella" des="Brand new" price="Small 13k & Big 22k" img={umbrella} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Jerry can" des="Brand new" price="4k, 5k and 6k" img={jerrycan} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Dish towel" des="Brand new" price="5,000/=" img={dishtowel} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Pant pegs" des="Brand new" price="20,000/=" img={pantpeg} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Pegs" des="Brand new" price="2k and 3k" img={pegs} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Metallic wadrobe" des="Brand new" price="115,000/=" img={metallicwadrobe} url={kayasurl} contact={kayas} /></div>
            
            <div class={v}><Items id="Dust pan" des="Brand new" price="6,000/=" img={it35} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Mattress" des="Brand new, strong and durable" price="120,000/=" img={it9} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Bedcover comes with 2 pillow covers + 1 bedsheet" des="Brand new" price="55,000 and 25,000" img={it22} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Pair of bedsheets" des="Brand new" price="25k/30k and 60k" img={bedsheets} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Pillow" des="It is a fiber pillow and lasts longer" price="15,000/=" img={it23} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Adjustable Reading table" des="Brand new" price="75,000/=" img={it7} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Seat (stool)" des="Brand new" price="15,000/=" img={it10} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Reading seat with armrest" des="Brand new" price="20,000/=" img={it24} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Reading seat without armrest" des="Brand new" price="20,000/=" img={it25} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Door mat" des="Brand new" price="10k/15k/18k" img={it36} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="USB stick (flash) 8GB/16 GB" des="Brand new" price="20,000 and 25,000" img={it26} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Laptops" des="Brand new" price="900,000 and above" img={it27} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Shoe rack" des="Brand new" price="22k/25k/30k" img={it37} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Shoe rack-fully metallic 5 layers" des="Brand new" price="35,000/=" img={it41} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Plastic storage can" des="Store food and other items" price="15k/20k/25k" img={it39} url={kayasurl} contact={kayas} /></div>
            
            <div class={v}><Items id="Laptop bag" des="Brand new" price="35,000 to 60,000" img={it8} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Basin" des="Brand new"  price="5,000/=" img={it20} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Stabex Gas cylinder, 6kgs" des="Brand new"  price="150,000/=" img={it11} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Scarlet Percolator" des="Brand new" price="35,000/=" img={parco} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="PTL Percolator" des="Brand new" price="30,000/=" img={it29} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Square shaped plate rack" des="Brand new"  price="22,000/=" img={it12} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Circular shaped plate rack" des="Brand new"  price="15,000/=" img={it30} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Wall dressing mirror" des="Brand new"  price="13k/15k/20k" img={it31} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Dressing mirror" des="Brand new"  price="170,000/=" img={it40} url={kayasurl} contact={kayas} /></div>
          <div class={v}><Items id="Fan" des="Brand new"  price="70,000/=" img={fan} url={kayasurl} contact={kayas} /></div>
          <div class={v}><Items id="Plastic storage trolley" des="Store a variety of items like food, etc" price="55,000/=" img={it13} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Suit case" des="Brand new" price="110,000 and 120,000" img={it2} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Go Tv full set" des="Brand new"  price="80,000/=" img={it17} url={kayasurl} contact={kayas} /></div>
            
            <div class={v}><Items id="Woolen carpets" des="Pleasant colors" price="70k and 100k" img={ip1} url={kayasurl} contact="See more" /></div>
                       
             <div class={v}><Items id="Sweeping broom" des="On sale" price="6,000/=" img={it1} url={kayasurl} contact={kayas} /></div>
           
             
             <div class={v}><Items id="10 metallic cloth hangers" des="brand new"  price="10,000/=" img={it33} url={kayasurl} contact={kayas} /></div>
             <div class={v}><Items id="6 plastic cloth hangers" des="brand new"  price="7,000/=" img={it34} url={kayasurl} contact={kayas} /></div>
        
            <div class={v}><Items id="Ladies & Gents crafts" des="On sale" price="35,000/=" img={craft7} url="/pages/part4/part4home" contact="See more" /></div>
            
            <div class={v}><Items id="Juice blender" des="Brand new"  price="100,000/=" img={it6} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Woofers" des="brand new"  price="130k and 150k" img={woofer} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Hot coil" des="Brand new" price="Not allowed in hostel" img={it4} url={kayasurl} contact={kayas}/></div>
            
            <div class={v}><Items id="Hot plate" des="Brand new" price="Not allowed in hostel" img={it3} url={kayasurl} contact={kayas}/></div>
            <div class={v}><Items id="Double Hot plate" des="Brand new" price="Not allowed in hostel" img={it18} url={kayasurl} contact={kayas}/></div>
            
            <div class={v}><Items id="Bucket" des="Strong and durable" price="10,000/=" img={it28} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Laundry basket" des="On sale" price="15,000/=" img={it15} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Saachi flat iron" des="Brand new" price="40,000/=" img={flatiron} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Phillips flat iron" des="Brand new" price="65,000/=" img={flatiron} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Extension cable 4 or 6 ports" des="Brand new" price="20k/22k" img={it16} url={kayasurl} contact={kayas} /></div>
            
          
            
            
            <div class={v}><Items id="Cakes" des="Birth days, etc"  price="Negotiable" img={cake2} url={kayasurl} contact={kayas} /></div>
            <div style={{padding:"10px",textAlign:"center",background:"white"}}>
      <div><span style={{fontSize:"8px"}} class="spinner-border" role="status"></span></div>
   <div style={{fontSize:"20px"}}>More items being uploaded......</div> 
    </div>
            
            </div>
           
        </div>
      
        <div style={{backgroundColor:"black",padding:"5px",paddingBottom:"40px"}}>
<div class="row">
<div class="col-12 col-sm-12 col-md-6">
<div style={{fontSize:"20px",color:"orange"}}>Advice to freshers</div>
<div style={{color:"white"}}>Kayas welcomes all freshers to Makerere University, a very proud environment to be in.  Kayas is a student service that aids students acquire hostel items at very much affordable prices.<p></p> We also wish to inform you as a fresher not to trust any stranger around the University setting. Very many con men and con women will be taking advantage of your ignorance about campus life and will encourage you to leave your tuition with them such that they help you pay on your behalf butdont accept that.<br></br> Con men will always come with information claiming to know you and and  will convince you that they are in the same class groups with you. Please take kin attention about such people around you. Feel free to make inquiries through Kayas, a trusted student service. Contact us on our Whats App number 0703852178.<p></p></div>
</div>
<div class="col-12 col-sm-12 col-md-6">
<div style={{fontSize:"20px",color:"orange"}}>Do you have any Hostel item to sell?</div>
<div style={{color:"white"}}>Please let us know about any item ranging from woofers, television screens, woofers, flat irons, carpets, gas cylinders and many more.</div>
<p></p></div>




</div>
               
            </div>
        </div>
    );
  }

  export function ContactLabel (props){
    return(<span>
      {props.labelValue}
    </span>)
  }
   export function Profile(props){
      let v="col-12 col-sm-12 col-md-12",link="#"
      return (
    
    <div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}>
      <div className="row"> <div class="col-3 col-sm-4 col-md-5"></div> 
      <div class="col-6 col-sm-4  col-md-2"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img}
       alt="kayas"/></div> <div class="col-3 col-sm-4 col-md-5"></div><div style={{textAlign:"center",paddingTop:"30px"}}>
        <div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}
        </div><div style={{textAlign:"center",fontSize:"15px", color:"red"}}>{props.post}</div>
        <div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"green"}}>{props.campus}</div>  
        <div> <a href={props.contactLabelHref}><button type="button" class="btn btn-sm btn1 btn-success">{props.contactLabel}</button></a></div> </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",borderBottom:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:""}}>{props.msg}</div>    </div></div>
    
      );
    }
 
export function RegistrationForm(props){
  /*<form method="post" id="registrationForm" action={props.actionUrl}>
   <div class="mb-3">
   <input type="text" class="form-control" autoComplete="off" name="name" value="isaac test" placeholder='Your Name e.g. Charles Kahuma' required></input>
 <br></br>
 <input type="text" class="form-control" autoComplete="off" name="stdNo" value="1900717809" placeholder='Student Number e.g. 1900717809' maxLength={10} minLength={10} required></input><br></br>
   <input type="text" class="form-control" autoComplete="off" name="contact" value="0782675558"placeholder='WhatsApp Contact e.g 0703852178' maxLength={10} minLength={10} required></input>
 <br></br> 
 <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>Enter an Airtel number where a registration fee of {props.registrationFee} will be charged.</div>
 <textArea rows="2" type="text" class="form-control" autoComplete="off" name="payerNo" placeholder='Number to make payment. Must be an Airtel number' maxLength={10} minLength={10} required></textArea>
 <br></br>
 <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>You will receive some quick sale updates through your E-mail</div>
 <input type="text" class="form-control" autoComplete="off" name="email"value="kayas.makerere@gmail.com"placeholder='Your E-mail address' required></input>

 <br></br>
   <input type="text" class="form-control" autoComplete="off" name="pin" value="12345" placeholder='Create your PIN e.g. 12345 (5 digits)' maxLength={5} minLength={5} required></input>

 
 
   </div>
   <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>Make sure you have saved the Kayas Business Number 0703852178 before registering.</div>
   <div style={{color:"red",fontSize:"20px"}}>{status}<p></p></div>
   <button style={{borderRadius:"18px"}} type="submit" onClick={
     ()=>{
       document.getElementById("registrationForm").addEventListener("submit",(submit)=>{
        
          
           setStatus("Please wait as we try to register you .....")
        
       
       })
     }
   } class="btn btn-success hovereffect"><span class="fa fa-user-circle"></span> Register</button><p></p>
  
   </form>
   
   */

const[status,setStatus]=useState('')


  return (<div><div style={{padding:"30px"}}>  
  <div style={{color:"green", fontSize:"15px",fontWeight:"bold"}}>Registration form </div>
  
   <div>You are unable to register apparently, please contact Kayas on 0703852178 for any inquiries</div>
   </div>
  
   </div>)
}


//   export function FreeRegistrationForm(props){
  

//     const[status,setStatus]=useState('')
    
    
//       return (<div>
//         <div class='row'>
//           <div class='col-md-3'></div>
//           <div class='col-md-6'>

//           <div style={{padding:"10px"}}>  
//       <form method="post" id="freeRegistrationForm">
//       <div style={{paddingBottom:"8px"}}><div class="formLabel">Register</div></div>

//        <div class="mb-3">
//        <div class="formInputLabel">Your name</div>
//        <input type="text" class="form-control" autoComplete="off" name="name"  ></input>
//      <br></br>
//      <div class="formInputLabel">Institution/brand/organization</div>
//      <textArea rows="2" type="text" class="form-control" autoComplete="off" name="institution"  ></textArea>
//      <br></br><div class="formInputLabel">WhatsApp contact</div>
//      <input type="text" class="form-control" autoComplete="off" name="contact" ></input>
//      <br></br> 
     
//      <div class="formInputLabel">Email</div>
//      <input type="text" class="form-control" autoComplete="off" name="email" ></input>
    
//      <br></br>
//      <div class="formInputLabel">PIN e.g. 12345</div>
//        <input type="text" class="form-control" autoComplete="off" name="pin" ></input>
    
//        </div>
//         <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:status}}/>
//        <div onClick={
//         ()=>{
    

//           if(Array.from(document.getElementById("freeRegistrationForm").name.value).length<2){
 
//  ToastAlert('toastAlert2','Enter a correct name',3000)
 
//  }else if(Array.from(document.getElementById("freeRegistrationForm").institution.value).length<11)
//  {
    
//     ToastAlert('toastAlert2','Enter a valid institution name',3000)
//  }
//  else if(Array.from(document.getElementById("freeRegistrationForm").contact.value).length<10||Array.from(document.getElementById("freeRegistrationForm").contact.value).length>10)
//           {
//             ToastAlert('toastAlert2','Enter correct contact format e.g 0703852178',3000)
//           }else if(Array.from(document.getElementById("freeRegistrationForm").email.value).length<11)
//           {
             
//              ToastAlert('toastAlert2','Enter correct email address',3000)
//           }
//           else if(Array.from(document.getElementById("freeRegistrationForm").pin.value).length<5||Array.from(document.getElementById("freeRegistrationForm").pin.value).length>5)
//           {
//             ToastAlert('toastAlert2','Create 5 digits PIN e.g. 12345',3000)
//           }
//  else{
  
//   ToastAlert('toastAlert1','Please wait ......',3000)
    
//      fetch('/verifyUser',{
//          method:"post",
//          headers:{'Content-type':'application/json'},
//          body:JSON.stringify({
//  contact:document.getElementById("freeRegistrationForm").contact.value,
//  pin:document.getElementById("freeRegistrationForm").pin.value
//          }) 
//      }).then(res=>res.json()).then((resp)=>{
//          if(resp.registered===false){
//           fetch('/collection_kayasers_registerFree',{
//          method:"post",
//          headers:{'Content-type':'application/json'},
//          body:JSON.stringify({
//           name:document.getElementById("freeRegistrationForm").name.value.trim(),
//           institution:document.getElementById("freeRegistrationForm").institution.value.trim(),
//           contact:document.getElementById("freeRegistrationForm").contact.value.trim(),
//           email:document.getElementById("freeRegistrationForm").email.value.trim(),
//           pin:document.getElementById("freeRegistrationForm").pin.value.trim()
 
//          })
//      }) .then(resp=>{
         
     
//          return resp.json()}).then(res=>{
          
//        let kayaserDetailsObj=res
//        ToastAlert('toastAlert1',`Successfully registered as ${kayaserDetailsObj.name}`,3000)
       
//        document.getElementById("freeRegistrationForm").name.value=""
//        document.getElementById("freeRegistrationForm").institution.value=""
     
//      document.getElementById("freeRegistrationForm").contact.value=""
//          document.getElementById("freeRegistrationForm").email.value=""
//        document.getElementById("freeRegistrationForm").pin.value=""
//        fetch(`/getTradingDetails/${kayaserDetailsObj.contact}`).then(res=>res.json()).then(resp=>{
// let traderDetailsObj=resp[0]


// setStatus(`<div style='color:green;'>You have registered succesfully as ${traderDetailsObj.name}. <span style='color:red;'>Thank you.</span></div>`)

//        })
        
        
        
        
//             })
        
        

//          } else if(resp.registered===true){
//           setStatus("<div style='color:red;'>You already registered with Kayas. You don't need to register again</div>")
//       } 
//           else{
//             setStatus("<div style='color:red;'>We appologize, an error has occured as you tried to register. Please try again</div>")
           
//             }
        
//      }
         
 
//      )
   
   
//  }
//         } 

//        } class="form-submit-btn backgroundColorHovereffect"><span class="fa fa-user-circle"></span> Register</div><p></p>
      
//        </form></div>


//           </div>
//           <div class='col-md-3'></div>
//         </div>
       
      
//        </div>)
//     }
    

export function HookupRegistrationPage(){
  return(<div>
    <RegistrationForm registrationFee="10,000/=" actionUrl="/collection_kayasers_registerToHookup"/>
  </div>)
}



  export function Alert(){
    let v="col-12 col-sm-12 col-md-6";
    return (
  
    <div style={{background:"white",textAlign:"center"}}>
    <div  class="row">
      <div class=" col-sm-6 col-md-6"><img src={alert} class=" d-block w-100" alt="..."  /></div>
    
      <div style={{textAlign:"left",padding:"30px"}}class="row col-sm-6 col-md-6"> 
      <div style={{padding:"10px"}}class="col-sm-12 col-md-12"><a href="https://kayas-mak.herokuapp.com/pages/brocode"><span class="btn btn-danger hovereffect"> Get to Know Kayas</span></a></div>
      <div style={{padding:"10px"}} class="col-sm-12 col-md-12"><a href="https://kayas-mak.herokuapp.com/pages/quotes"><span class="btn btn-success hovereffect"> Do you feel depressed? Tap Here</span></a></div>
      </div>
    </div>
    
    </div>
  
    );
  }

 
  export function MugArtComp(props){
    let v="col-12 col-sm-12 col-md-6";
    return (
  
  <div class={v} style={{paddingBottom:"10px"}}><p></p><div className="row"><div class="col-3"></div><img style={{borderRadius:"90px"}} class=" d-block w-50" src={props.img} alt="kayas"/><div class="col-3"></div></div><div style={{textAlign:"center"}}><div style={{fontWeight:"bold",textAlign:"center",fontSize:"20px", color:"green"}}>{props.name}</div><div> <a href="https://api.whatsapp.com/send?phone=256703852178&text=Hello,%20I%20would%20love%20to%20comment%20about%20the%20Don't%20Sleep%20Hungry%20Campaign."><button type="button" class="btn btn1 btn-success">Share Your Comment</button></a></div><div style={{fontWeight:"bold",textAlign:"center",fontSize:"", color:"rgb(187, 9, 9)"}}>{props.post}</div> <div  style={{color:"grey",fontSize:"",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>
  
    );
  }


  function Art(){
   //let kayas=256703852178;
    
    return (
        <div style={{background:"white"}}class="row">
          <div style={{textAlign:"center"}}>  <div style={{textAlign:"center",fontFamily:"charm", fontWeight:"bold",fontSize:"25px",color:"red"}}>Hostel Room Items </div> <div></div></div>
          <div style={{textAlign:"center"}}>  <div style={{textAlign:"center",fontFamily:"charm", fontWeight:"bold",fontSize:"20px",color:"red"}}></div> <div></div></div>
          
          
        <div style={{textAlign:"center"}}>  <div style={{textAlign:"center", fontWeight:"bold",fontSize:"25px",color:"red"}}> </div> <div></div></div>
       <p></p><p></p> 
     
      
       
     </div>
    );
  }

  export function ArtCompGuildHome(props){
    let v="col-12 col-sm-12 col-md-6",link="https://api.whatsapp.com/send?phone="+props.phone+"&text=Hello%20Kayas%20Makerere%20University,%20I%20wish%20to%20promise%20my%20vote%20too%20for%20"+props.name
    return (
  
  <div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"30px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}</div><div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"rgb(187, 9, 9)"}}>{props.post}</div> <div > <marquee><span style={{fontWeight:"bold",fontSize:"20px",color:"green"}}>370</span> <span style={{color:"green"}}>Promises</span></marquee></div> <div> <a href={link}><button type="button" class="btn btn-sm btn1 btn-success"> <span class="fa fa-whatsapp"> </span> Promise Your Vote</button></a></div> </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>
  
    );
  }
  export function ArtCompGrc(props){
    let v="col-12 col-sm-12 col-md-6",link="https://api.whatsapp.com/send?phone="+props.phone+"&text=Hello%20"+props.name+",%20I%20wish%20to%20promise%20my%20vote%20too%20for%20you%20through%20Kayas%20Makerere%20University."
    return (
  
  <div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"30px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}</div><div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"rgb(187, 9, 9)"}}>{props.post}</div>  <div> <a href={link}><button type="button" class="btn btn-sm btn1 btn-success"> <span class="fa fa-whatsapp"> </span> Promise Your Vote</button></a></div> </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>
  
    );
  }
  

export function ArtComp(props){
  let v="col-12 col-sm-12 col-md-6",phone=256772043895,link="https://api.whatsapp.com/send?phone="+phone+"&text=Hello%20Kayas%20Makerere%20University,%20my%20comment%20with%20msgID"+props.phone+"%20is:%20"
  return (

<div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"30px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}</div><div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"rgb(187, 9, 9)"}}>{props.post}</div>  <div> <a href={link}><button type="button" class="btn btn-sm btn1 btn-success"> <span class="fa fa-whatsapp"> </span> Join Me</button></a></div> </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>

  );
}

export function KayasTeam(){
  return(<div>
    <div style={{textAlign:"center"}}>  <p></p><div style={{fontWeight:"bold",fontSize:"20px",color:"red"}}>1k interest loans !!</div> <div style={{padding:"4px",textAlign:"center"}}>Kayas loaning service is now up and running. The service is eligible to only year one and year two students of Makerere University. Read the loaning details presented by part of the kayas Team below. </div></div>
       <div style={{textAlign:"center"}}>  <div style={{textAlign:"center",fontFamily:"charm", fontWeight:"bold",fontSize:"20px",color:"red"}}></div> <p></p></div> 
     
    <ArtCompKayas name="Isaac  Opio" phone="256755643774"social={<a style={{color:"green"}}href="https://twitter.com/isaacopiokayas"><span class="fa fa-twitter"> Follow on Twitter</span></a>} img={isaac2} post ="For Kayas Makerere University" msg="Kayas Makerere loaning service is now up and running to offer manageable loan amounts to year one and two students of Makerere University with a mission of abolishing the 'SLEEP HUNGRY MOMENTS' that are experienced by many of the students in the category shared  above. The loaning service offers you an opportunity to request for financial aid of only 20,000/= with a colateral of either a student ID or original National ID. The loan is expected to be paid back with an interest of 1,000/= only if paid back after a period of not more than 3 days that are counted starting from  the borrowing date. Any payments made after the 3 days period calls for an interest of 2,000/= which is levied per week. All you need to present as a collateral security is a University students ID or original National ID. It is a Don't Sleep Hungry Campaign. Please continue to read details from my collegue below." />
  <ArtCompKayas name="Charles  Kahuma" phone="256700411626" post ="For Kayas Makerere University" img={kahu} msg="A hungry man is an Angry man. Control the anger by controlling the hunger. Don't sleep hungry. To procceed to requesting  for a loan, click the 'Request For A Loan' button below this and you will be directed to a services page where you will need to read the requirements, meet them  and send your request thereafter. Thank you for Keeping it Kayas" />
  
     <div  style={{textAlign:"center"}}> <a style={{color:"green",fontSize:"20px"}}href="https://kayas-mak.herokuapp.com/pages/message"> <span class="fa fa-money hovereffect"> Request For A Loan</span> </a></div>
  </div>);
}

export function ArtCompKayas(props){
  let v="col-12 col-sm-12 col-md-6",phone=256703852178,link="https://api.whatsapp.com/send?phone="+props.phone+"&text=Hello%20"+props.name+",%20Kayas%20Makerere%20University."
  return (

<div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"30px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}</div><div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"rgb(187, 9, 9)"}}>{props.post}</div>  <div> <a href={link}><button type="button" class="btn btn-sm btn1 btn-success"> <span class="fa fa-whatsapp"> </span> Contact me</button></a></div> <div style={{color:"green",paddingTop:"5px"}}>{props.social}</div></div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>

  );
}
export function Anchor(props){
  return(<div style={{paddingBottom:"15px"}}>
  <a  style={{color:"black"}} href={props.href}>
  <span class="hoverEffectUnderline">
  <div style={{color:"green"}}>{props.heading1}</div>
    <div style={{color:"grey"}}>{props.heading2}</div>
   {props.caption}
  </span>
  </a>
  </div>)
}

function ArtComp1(props){
  let v="col-12 col-sm-12 col-md-6";
  return (

<div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"40px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"20px", color:"green"}}>{props.name}</div>   </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>

  );
}
  export function GeneralComp1(){
    let v=" col-sm-12 col-md-4 gencols";
    
    return (
        <div class="generale row">
       
            <div class={v}><div class="generaleH">KAYAS Makerere University</div>Kayas is a trade service that allows you as a University student acquire common hostel requirements/items. The service also gives an opportunity to any one who discovers "dead price" offers and immediately claims for it within a period of less than 48 hours. <div>
            <p></p>You can subscribe to our services in order to receive free updates on affordable items being sold by students. If you do have an insiprational message too, share with us through this link <a href="https://api.whatsapp.com/send?phone=256703852178&text=Hello,%20I%20would%20like%20to%20...."> SUBSCRIBE/MOTIVATE</a> 
            
            <hr style={{color:"green",height:"2px"}}></hr>
        </div> <p></p> | <span class="fa fa-whatsapp"> | <span class="fa fa-phone"></span> | 0703852178 </span><br></br>  </div>
        
            <div class={v}><div class="generaleH">Recognized Kayas Agents.</div>The Agents listed below are the only registered agents with the authority to inform you about our services and  reply to your inquiries as well.<br></br>Isaac-Makerere University-0755643774<br></br>Charles-Makerere University-0700411626 <p></p><strong>KAYAS #MAKERERE STUDENTS' TRUST</strong><div style={{background:"white"}}><span class="generaleH1">Reach out to Isaac incase of any inquiries or business through this link:</span> <a href="https://api.whatsapp.com/send?phone=256755643774&text=Hi,%20Isaac."> WHATSAPP</a></div>     </div>
            <div class={v}><div class="generaleH">The Benefits of Kayas.</div> With Kayas, students have the opportunity to earn from open products where a student is paid after every successful transaction of each of the open products. Participation is free of charge. </div>
            
        </div>
    );
  }
  
 

  export function GeneralComp(){
    let v="col-sm-12 col-md-4 gencols genPadTop";
    
    return (
        <div class="generale row">
          
          <div class={v}><img src={isaac1} class=" d-block w-100" alt="..."  /> <div><div class="generaleH1">An interview</div><div class="gen1"> An interview with one of the finalists  from the College of Computing who has also been our client showed a positive receipt of the service. Many of the finalists feel sad because they will miss the cheap offers from Kayas that they have always wanted ever since they joined Makerere University.<p></p> "Yes we all want to own, but we need affordable items. Kayas is really an opportunity to the year ones", one of the finalists also commented so.</div> </div>   </div>
          
        
        
                        
                        
                        <div class={v}><img src={isaac3} class=" d-block w-100" alt="..."  /> <div><div class="generaleH1">Keep it Kayas  - Isaac</div><div class="gen1">Having cheaper items delivered to you has always been your cry. We all want to own, but we need to own basing on our pockets.<br></br> As Kayas, we serve students of Makerere with all they may need at very reduced costs. Embrace Kayas <br></br>I remain, Isaac-Makerere University-<a href="https://api.whatsapp.com/send?phone=256755643774&text=Hi,%20Isaac"> WhatsApp</a></div> </div>   </div>
        </div>
    );
  }
  function Lights(){
   
    
    return (
      <div  style={{padding:"8px"}}class="row"><div class="col-6 col-sm-6 col-md-4"><img style={{borderRadius:"20px"}}src={lights} class=" d-block w-100" alt="..."  /></div> <div style={{borderRadius:"20px",color:"grey",fontFamily:"charm",fontSize:"20px",opacity:"0.7",background:"white",textAlign:"center"}}class="col-6 col-sm-6 col-md-4">Beautiful room light. Amazing and glitters like a flame burning besides you. Order one for yourself @80,000/=</div></div>
    )
  }

  export function ThemeWrap(props){
    let v="col-sm-12 col-lg-6 gencols";
  return(

  <div class="row"><div class="col-md-3"></div><div class={v} > 

  <div><img src={props.img} class=" d-block w-100" alt="..."  /> </div><div> 
     <div>
      <div style={{textAlign:"center", fontWeight:"bold",color:"red"}}>{props.headline}</div><div style={{textAlign:"center",paddingBottom:"5px"}}><span style={{border:"1px solid grey",padding:"3px",borderRadius:"10px",color:"grey",fontFamily:"charm",fontSize:"11px"}}>{props.date}</span></div></div>
      <div style={{textAlign:"center",padding:"2px",fontFamily:"charm",color:"grey"}}>{props.msg}</div></div><hr></hr>
      
      
      </div>
      <div class="col-md-3"></div>
      
      </div>
      
      )
  
  }


export function FamilyDetailsNav(){
  return(

<div style={{padding:"10px",background:"black",fontSize:"10px"}}>
<a style={{color:"white",paddingRight:"9px",}} href="/pages/recommend"><span class="hovereffect">ADD-CHILD/RECOMMEND</span></a> 
<a style={{color:"white",paddingRight:"9px",}} href="/pages/family/familydetails"><span class="hovereffect">SEE-YOUR-FAMILY</span></a>
        
       <a  style={{color:"white",paddingRight:"9px"}} href="/pages/family/familygroup"><span class="hovereffect"> JOIN-GROUP</span></a>
       <a style={{color:"white",paddingRight:"9px",}} href="/pages/family/familyhome"><span class="hovereffect">HOME</span></a> 
     </div>

  )
}



  
export default Home
