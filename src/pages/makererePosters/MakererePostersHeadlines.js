import React, { useEffect, useState } from 'react'
import { CreditTraderAccountBalance, DebitTraderAccountBalance, DepositPopupAlert, GetAccountBalance, GetControlVariables, GetTradingDetails, LoginAlert, MessageComponent, Post, VerifyRegistrationAndPin } from "../Functions"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useCookies } from 'react-cookie';


export function MakererePostersHeadlines(){
    let parameters=useParams()


    const [cookies]=useCookies(['user'])
    const [makerereUpdatesWhatsAppGroupLink,setMakerereUpdatesWhatsAppGroupLink]=useState()
    const [traderDetails,setTraderDetails]=useState()
    let makererePostersHeadlinesAdvertPaymentAmount=5
    const [makererePostersHeadlines,setMakererePostersHeadlines]=useState()
    const [status,setStatus]=useState()
    const [updateHeadlines,setUpdateHeadlines]=useState()
    
   

    useEffect(()=>{

        GetControlVariables(['makerereUpdatesWhatsAppGroupLink','makererePostersVisits']).then(resp=>{
            setMakerereUpdatesWhatsAppGroupLink(resp.makerereUpdatesWhatsAppGroupLink)  
                 
           
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
        <div class="col-md-3"></div>
        <div class="col-md-6">
            


    <div class="pageLabel">Makerere posters headlines {(()=>{
       if(makererePostersHeadlines){
        return(<>
        ({makererePostersHeadlines.length})
        </>)
       }
    })()}</div>
    


<div style={{paddingTop:"5px"}}>
{(()=>{
    if(traderDetails){
       if(traderDetails.contact!=703852178 && traderDetails.permissionTokensObj.allowedToEarnFromKayas==true){
        return(<>
            <div>
                <div style={{fontSize:"13px"}}><span style={{border:"1px solid orange",padding:"4px"}}>Kayas in partnership with {traderDetails.name}</span> </div>
               
            </div>
            </>)
       }
    }
})()}
</div>
<div style={{paddingTop:"20px",paddingBottom:"10px"}}>To get details of the information below, vist <a style={{fontWeight:"bold",color:"orange",fontSize:"15px"}} href='/pages/homepage'>HERE</a> and select "Makerere posters"</div>
                 
  
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

{(()=>{
    if(makererePostersHeadlines){
        
if(makererePostersHeadlines.length==0){
    return(<>
        <MessageComponent message="No headlines available. Try again later"/>
        </>)
}else{
return(<>
<div class="makererepostersHeadlineContainer3">
{(()=>{
    return   ( makererePostersHeadlines.map(headline=>{
        return(<>
    
        
        <div class="makererepostersHeadlineContainer1">
      
       <div class="makererepostersHeadlineContainer2">
       <div class="flexDisplayWithGap">
       
       <div> {headline.headline}</div> 
      


       
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
    <div onClick={()=>{
            window.alert('To get details of all the headlines, visit the menu at the top and select "Makerere posters"')
           }}><div class="btn btn-sm btn-success">Details</div></div>
    </>)
        }
    })()}
</div>)

 
 })()}




           
       </div> 
      
       
       
       
       </div>
      

        </div>
 
        </>)
    }))
})()}
</div>
</>)
 
}

    }else{
        return(<>
        <MessageComponent message="Loading please wait....."/>
        </>)
    }
})()}


            <div style={{textAlign:"center",paddingTop:"20px"}}>
            <div style={{justifyContent:"center"}} class="flexDisplayWithGap">
            {/* <a href="https://wa.me/256703852178?text=Hello%20Kayas,%20I%20wish%20to%20add%20a%20poster."><div class="btn btn-sm btn-warning">Add poster</div></a>
<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-success">Makerere updates</div></Link> */}
<a href={makerereUpdatesWhatsAppGroupLink}><div class="btn btn-sm btn-success">Join Makerere updates group</div></a>

            </div><p></p>
                <div  class="bold">NOTE:</div>
            <div>Updates are done every after 3 hours from midday till 9pm daily. Keep visiting this link at your conevenient time.
            <p></p>
            You can also access this information by searching for "always Kayas" in your browser (Google chrome or safari) then select "Makerere posters"
            <p></p>
            <MessageComponent message="Interested in being an information distributor too? WhatsApp Kayas (0703852178) NOW." />

           
            
            </div><p></p>
            
           </div>
        
        </div>
        <div class="col-md-3"></div>
    </div>


   
</div>
</>)


}export default MakererePostersHeadlines