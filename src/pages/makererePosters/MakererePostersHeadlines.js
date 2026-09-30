import React, { useEffect, useState } from 'react'
import { CreditTraderAccountBalance, DebitTraderAccountBalance, DepositPopupAlert, GetAccountBalance, GetControlVariables, GetTradingDetails, LoginAlert, MessageComponent, Post, VerifyRegistrationAndPin } from "../Functions"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useCookies } from 'react-cookie';


export function MakererePostersHeadlines(){
    let parameters=useParams()


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
    <div class="pageDescription">Know what will happen at campus.</div>
    <p></p>
    


<div style={{paddingTop:"3px",paddingBottom:"10px"}}>
{(()=>{
    if(traderDetails){
       if(traderDetails.contact!=703852178 && traderDetails.permissionTokensObj.allowedToEarnFromKayas==true){
        return(<>
            <div>
                <div style={{fontSize:"13px"}}><span style={{background:"black",padding:"6px",color:"white"}}>Kayas in partnership with {traderDetails.name}</span> </div>
               
            </div>
            </>)
       }
    }
})()}
</div>
             
  
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
    <Link to={`/pages/makerereposters/makerereposters`}><div class="btn btn-sm btn-success">Details</div></Link>
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
</div>

<div style={{textAlign:"center",paddingTop:"20px"}}>
                <div class="bold">Groups you may wish to join:</div>
            <div style={{justifyContent:"center",paddingTop:"6px",paddingBottom:"20px"}} class="flexDisplayWithGap">
            {/* <a href="https://wa.me/256703852178?text=Hello%20Kayas,%20I%20wish%20to%20add%20a%20poster."><div class="btn btn-sm btn-warning">Add poster</div></a>
<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-success">Makerere updates</div></Link> */}
<a href={makerereUpdatesWhatsAppGroupLink}><div class="btn btn-sm btn-success">Makerere updates</div></a>
<a href={cheaperCampusItemsWhatsAppGroupLink}><div class="btn btn-sm btn-success">Cheaper campus items</div></a>

            </div>


            <div class="bold">Other WhatsApp groups:</div>
            <div style={{justifyContent:"center",paddingTop:"6px",paddingBottom:"20px"}} class="flexDisplayWithGap">

<a href="https://chat.whatsapp.com/KoZsQ4Ua0uWLMfMufTbCAT?s=cl&p=i&mlu=4&ilr=4"><div class="btn btn-sm btn-warning">Nova Gadgets</div></a>
            </div>
            <div style={{fontSize:"14px"}} class="light">Advertise your group with us</div><p></p>



                <div  class="bold" style={{borderTop:"1px solid orange",paddingTop:"3px"}}>NOTE:</div>
            <div>Updates are done every day. Regularly visit this page to stay updated.
            <p></p>
            You can also access this information by searching for "always Kayas" in your browser (Google chrome or safari) then select "Makerere posters"
            <p></p>
            <MessageComponent message="Interested in sharing information too? WhatsApp Kayas (0703852178) NOW." />

           
            
            </div><p></p>
            
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