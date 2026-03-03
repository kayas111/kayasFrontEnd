import React, {useEffect,useState} from 'react'
import {ToastAlert } from './Functions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';











import isaac2 from './imgs/isaac2.jpg';


import kahu from './imgs/kahu.jpg';






export function CarousItem(props){
     
    return(
        <div class="carousel-item ">
        <img src={props.img} class=" d-block w-100" alt="..."  height={props.hght} /><div class="carousel-caption   d-md-block">
        <br></br><br></br><br></br><div class="carmsg"><div class="carmsgcolor"><br></br><br></br>{props.msg}</div></div>
        
      
          </div>
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



  
// export default Home
