import React, { useEffect, useState } from 'react'
import { CreditTraderAccountBalance, DebitTraderAccountBalance, DepositPopupAlert, GetAccountBalance, GetControlVariables, GetTradingDetails, LoginAlert, MessageComponent, Post, VerifyRegistrationAndPin } from "../Functions"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useCookies } from 'react-cookie';
import milege from './makerereHeadlinesImgs/milege.jpg'
import milege2 from './makerereHeadlinesImgs/milege2.jpg'
import milege3 from './makerereHeadlinesImgs/milege3.jpg'
import milege4 from './makerereHeadlinesImgs/milege4.jpg'
import milege5 from './makerereHeadlinesImgs/milege5.jpg'
import milege6 from './makerereHeadlinesImgs/milege6.jpg'
import milege7 from './makerereHeadlinesImgs/milege7.jpg'
import milege8 from './makerereHeadlinesImgs/milege8.jpg'

export function MakererePostersHeadlines(){
    let parameters=useParams(),milegeText='FREE live band entertainment very Thursdays at Makerere University Guest house gardens located near Makerere main gate and opposite college of Computing starting 6pm.', 
    milegeImgs=[
    {src:milege2,text:milegeText},
    {src:milege,text:milegeText},
    {src:milege3,text:milegeText},
    {src:milege4,text:milegeText},
    {src:milege5,text:milegeText},
    {src:milege6,text:milegeText},
    {src:milege7,text:milegeText},
    {src:milege8,text:milegeText},
]


    const [cookies]=useCookies(['user'])
    const [cheaperCampusItemsWhatsAppGroupLink,setCheaperCampusItemsWhatsAppGroupLink]=useState()
    const [makerereUpdatesWhatsAppGroupLink,setMakerereUpdatesWhatsAppGroupLink]=useState()
    const [traderDetails,setTraderDetails]=useState()
    let makererePostersHeadlinesAdvertPaymentAmount=5
    const [makererePostersHeadlines,setMakererePostersHeadlines]=useState()
    const [status,setStatus]=useState()
    const [updateHeadlines,setUpdateHeadlines]=useState()
    
   

    useEffect(()=>{

        GetControlVariables(['makerereUpdatesWhatsAppGroupLink','makererePostersVisits','cheaperCampusItemsWhatsAppGroupLink']).then(resp=>{
            setMakerereUpdatesWhatsAppGroupLink(resp.makerereUpdatesWhatsAppGroupLink)  
            setCheaperCampusItemsWhatsAppGroupLink(resp.cheaperCampusItemsWhatsAppGroupLink)
           
        })
    
       
        if(parameters){
      
            let contact=parameters.contact
    
    
    
    if(contact){
    if(Array.from(contact).length <9 || Array.from(contact).length > 10){
        ;
    } else {
    
     
    contact=parseInt(contact)
    GetTradingDetails(contact).then(resp=>{
    if(resp.length==0){
        ;
    }else{
        
        
    setTraderDetails(resp)
    
    
    
    if(resp.permissionTokensObj.allowedToEarnFromKayas==true) {

let traderAccBal=resp.accBal



if(traderAccBal <8000){
    makererePostersHeadlinesAdvertPaymentAmount=12 // 80
  }


  if(traderAccBal <7000){
    makererePostersHeadlinesAdvertPaymentAmount=14 // 70
  }


  if(traderAccBal <6000){
    makererePostersHeadlinesAdvertPaymentAmount=16  // 60
  }


  if(traderAccBal <5000){
    makererePostersHeadlinesAdvertPaymentAmount=20 // 50 
  }

  if(traderAccBal <4000){
    makererePostersHeadlinesAdvertPaymentAmount=25 // 40
  }
  
  if(traderAccBal <3000){
    makererePostersHeadlinesAdvertPaymentAmount=33  //30
  }

  if(traderAccBal <2000){
    makererePostersHeadlinesAdvertPaymentAmount=50  //20
  }

  if(traderAccBal <1000){
    makererePostersHeadlinesAdvertPaymentAmount=100 //10
  }



     
    CreditTraderAccountBalance(contact,makererePostersHeadlinesAdvertPaymentAmount).then(resp=>{
        ;
    })
    
    
    
    
    
    
    }else{;}
    
    
    
    }
    })
    
    
    
    
    
    }
    }
    
    
           
            
        }
             
    },[])

 useEffect(()=>{

fetch('/getMakererePostersHeadlines').then(resp=>resp.json()).then(resp=>{
    resp.reverse()
    setMakererePostersHeadlines(resp)
})

 },[updateHeadlines])   





return(<>
<div class="componentPadding">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            


       

{(()=>{
    if(makererePostersHeadlines){
        
if(makererePostersHeadlines.length==0){
    return(<>
        <MessageComponent message="No headlines available. Try again later"/>
        </>)
}else{
return(<>

<div class="pageLabel">Makerere posters headlines {(()=>{
       if(makererePostersHeadlines){
        return(<>
        ({makererePostersHeadlines.length})
        </>)
       }
    })()}</div>
    <div class="pageDescription">Know what will happen soon around campus.</div><p></p>

    



{(()=>{
    if(traderDetails){
       if(traderDetails.contact!=703852178 && traderDetails.permissionTokensObj.allowedToEarnFromKayas==true){
        return(<>
            <div  style={{paddingBottom:"18px"}}>
                <div style={{fontSize:"13px"}}><span style={{background:"black",padding:"6px",color:"orange"}}>Kayas in partnership with {traderDetails.name}</span> </div>
               
            </div>
            </>)
       }
    }
})()}

             


{(()=>{
    if(cookies.user && cookies.user.contact==703852178){
        return(<>
        <textarea type="text" class="form-control" autoComplete="off" row={4} id="addPosterHeadline" placeholder='Type headline'></textarea><p></p>
        <div class="status">{status}</div>
        <div class="btn btn-sm btn-success" onClick={()=>{
            let headline=document.getElementById('addPosterHeadline').value.trim()
            
            if(Array.from(headline).length<2){
                setStatus('Enter a reasonable headline')
            } else{
                setStatus('Adding, please wait .......')
let payLoad={headline:headline}
Post('/addMakererePostersHeadline',payLoad).then(resp=>{
    if(resp.headline){
        setStatus('Added successfully')
        setUpdateHeadlines('refreshAfterAddition')
        setUpdateHeadlines('')
        document.getElementById('addPosterHeadline').value=""
    }else{
        setStatus('Try again')     
    }
})


            }
        }}>Add headline</div> <p></p>
        </>)
    }
 })()} 


<div class="makererepostersHeadlineContainer3">
{(()=>{
    return   ( makererePostersHeadlines.map(headline=>{
        return(<>
    
        
        <div class="makererepostersHeadlineContainer1">
      
       <div class="makererepostersHeadlineContainer2">
       <div class="row">
       
      
       

<div class="col-9"> <div> {headline.headline}</div> </div>
<div class="col-3">  <div style={{textAlign:"right"}}>
{(()=>{
return(<div style={{marginLeft:"auto"}}>
    {(()=>{
           if(cookies.user && cookies.user.contact==703852178){
            return(<>
    
            <div class="btn btn-sm btn-danger" onClick={()=>{
    if(window.confirm(`Delete ${headline.headline}`)==true){
    
    Post('/deleteMakererePostersHeadline',{id:headline._id}).then(resp=>{
        if(resp.acknowledged==true && resp.deletedCount>0){
            setUpdateHeadlines('refreshAfterDeletion')
            setStatus('Deleted successfully')
            setUpdateHeadlines('')
          
        }else{
            setStatus('Try again')
        }
    
       
    })
    
    
    
    }else{
        ;
    }
    
           }}>Delete</div>  
            
            </>)
        }else{
    return(<>
    <Link to={`/pages/makerereposters/makerereposters`}><div class="btn btn-sm btn-link">Details</div></Link>
    </>)
        }
    })()}
</div>)

 
 })()}
    </div></div>




           
       </div> 
      
       
       
       
       </div>
      

        </div>
 
        </>)
    }))
})()}
</div><p></p>

{(()=>{
    if(milegeImgs){
        return(<>
        <div class="bold">Happening this Thursday 8th October, 2026 starting 6pm. It's FREE.</div>
        <div class="light">Makerere University Guest house gardens located near Makerere main gate and opposite College of Computing starting 6pm. It's FREE.</div><p></p>
        <div class="row">
    
 {(()=>{
    return(milegeImgs.map(img=>{
        return(<>
        <div style={{paddingBottom:"12px"}}>
        <div style={{padding:"0px"}}>
        <div className="col-12"><img loading='lazy' src={img.src} class=" d-block w-100" /></div>
        <div class="light">{img.text}</div>
        </div>
        </div>
        </>)
    }))
 })()}
</div>
        
        </>)
    }
})()}

<p></p>
<div class="section1" >
                <div class="bold">WhatsApp groups you may wish to join:</div>
            <div style={{paddingTop:"6px",paddingBottom:"20px"}} class="flexDisplayWithGap">
            {/* <a href="https://wa.me/256703852178?text=Hello%20Kayas,%20I%20wish%20to%20add%20a%20poster."><div class="btn btn-sm btn-warning">Add poster</div></a>
<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-success">Makerere updates</div></Link> */}
<a href={makerereUpdatesWhatsAppGroupLink}><div class="btn btn-sm btn-success">Makerere updates</div></a>
<a href={cheaperCampusItemsWhatsAppGroupLink}><div class="btn btn-sm btn-success">Cheaper campus items</div></a>
<a href="https://chat.whatsapp.com/BozcVyybJoH2I4zhTdaa4Y"><div class="btn btn-sm btn-success">Vetella - Campus jobs</div></a>
<a href="https://chat.whatsapp.com/KoZsQ4Ua0uWLMfMufTbCAT?s=cl&p=i&mlu=4&ilr=4"><div class="btn btn-sm btn-success">Nova Gadgets</div></a>
   
            </div>


           
            <div >Advertise your group with us</div>
   
            
           </div>
<p></p>
           <div className="section1">
           <div  class="bold">NOTE:</div>
            <div>Updates are done every day. Regularly visit this page to stay updated.
            <p></p>
            You can also access this information by searching for "always Kayas" in your browser (Google chrome or safari) then select "Makerere posters"
            <p></p>
            <MessageComponent message="Interested in sharing information too? WhatsApp Kayas (0703852178) NOW." />

           
            
            </div>
           </div>


</>)
 
}

    }else{
        return(<>
        <MessageComponent message="Loading please wait....."/>
        </>)
    }
})()}


           
        
        </div>
        <div class="col-md-4"></div>
    </div>


   
</div>
</>)


}export default MakererePostersHeadlines