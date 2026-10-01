import React, { useEffect, useState } from 'react'
import { CreditTraderAccountBalance, DebitTraderAccountBalance, DepositPopupAlert, GetAccountBalance, GetControlVariables, GetTradingDetails, LogFrontEndActivity, LoginAlert, MessageComponent, VerifyRegistrationAndPin } from "../Functions"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useCookies } from 'react-cookie';

import mp1 from './makererePostersImgs/mp1.jpeg'
import mp2 from './makererePostersImgs/mp2.jpg'
import mp3 from './makererePostersImgs/mp3.jpg'
import mp4 from './makererePostersImgs/mp4.jpg'
import mp5 from './makererePostersImgs/mp5.jpeg'
import mp6 from './makererePostersImgs/mp6.jpeg'
import mp7 from './makererePostersImgs/mp7.jpeg'
import mp8 from './makererePostersImgs/mp8.jpeg'
import mp9 from './makererePostersImgs/mp9.jpeg'
import mp10 from './makererePostersImgs/mp10.jpeg'
import mp11 from './makererePostersImgs/mp11.jpeg'
import mp12 from './makererePostersImgs/mp12.jpeg'
import mp13 from './makererePostersImgs/mp13.jpeg'
import mp14 from './makererePostersImgs/mp14.jpeg'
import mp15 from './makererePostersImgs/mp15.jpg'
import mp16 from './makererePostersImgs/mp16.jpg'
import mp17 from './makererePostersImgs/mp17.jpg'
import mp18 from './makererePostersImgs/mp18.jpg'
import mp19 from './makererePostersImgs/mp19.jpg'
import mp20 from './makererePostersImgs/mp20.jpg'
import mp21 from './makererePostersImgs/mp21.jpg'
import mp22 from './makererePostersImgs/mp22.jpg'
import mp23 from './makererePostersImgs/mp23.jpg'
import mp24 from './makererePostersImgs/mp24.jpg'
import mp25 from './makererePostersImgs/mp25.jpg'
import mp26 from './makererePostersImgs/mp26.jpg'
import mp27 from './makererePostersImgs/mp27.jpg'
import mp28 from './makererePostersImgs/mp28.jpg'
import mp29 from './makererePostersImgs/mp29.jpg'
import mp30 from './makererePostersImgs/mp30.jpg'
import mp31 from './makererePostersImgs/mp31.jpg'
import mp32 from './makererePostersImgs/mp32.jpg'
import mp33 from './makererePostersImgs/mp33.jpg'
import mp34 from './makererePostersImgs/mp34.jpg'
import mp35 from './makererePostersImgs/mp35.jpg'
import mp36 from './makererePostersImgs/mp36.jpg'
import mp37 from './makererePostersImgs/mp37.jpg'
import mp38 from './makererePostersImgs/mp38.jpg'
import mp39 from './makererePostersImgs/mp39.jpg'
import mp40 from './makererePostersImgs/mp40.jpg'
import mp41 from './makererePostersImgs/mp41.jpg'
import mp42 from './makererePostersImgs/mp42.jpg'
import mp43 from './makererePostersImgs/mp43.jpg'
import mp44 from './makererePostersImgs/mp44.jpg'
import mp45 from './makererePostersImgs/mp45.jpg'
import mp46 from './makererePostersImgs/mp46.jpg'
import mp47 from './makererePostersImgs/mp47.jpg'
import mp48 from './makererePostersImgs/mp48.jpg'
import mp49 from './makererePostersImgs/mp49.jpg'
import mp50 from './makererePostersImgs/mp50.jpg'
import mp51 from './makererePostersImgs/mp51.jpg'
import mp52 from './makererePostersImgs/mp52.jpg'
import mp53 from './makererePostersImgs/mp53.jpg'
import mp54 from './makererePostersImgs/mp54.jpg'
import mp55 from './makererePostersImgs/mp55.jpg'
import mp56 from './makererePostersImgs/mp56.jpg'
import mp57 from './makererePostersImgs/mp57.jpg'
import mp58 from './makererePostersImgs/mp58.jpg'
import mp59 from './makererePostersImgs/mp59.jpg'
import mp60 from './makererePostersImgs/mp60.jpg'
import mp61 from './makererePostersImgs/mp61.jpg'
import mp62 from './makererePostersImgs/mp62.jpg'
import mp63 from './makererePostersImgs/mp63.jpg'
import mp64 from './makererePostersImgs/mp64.jpg'
import mp65 from './makererePostersImgs/mp65.jpg'
import mp66 from './makererePostersImgs/mp66.jpg'
import mp67 from './makererePostersImgs/mp67.jpg'
import mp68 from './makererePostersImgs/mp68.jpg'
import mp69 from './makererePostersImgs/mp69.jpg'
import mp70 from './makererePostersImgs/mp70.jpg'
import mp71 from './makererePostersImgs/mp71.jpg'
import mp72 from './makererePostersImgs/mp72.jpg'
import mp73 from './makererePostersImgs/mp73.jpg'
import mp74 from './makererePostersImgs/mp74.jpg'
import mp75 from './makererePostersImgs/mp75.jpg'
import mp76 from './makererePostersImgs/mp76.jpg'
import mp77 from './makererePostersImgs/mp77.jpg'
import mp78 from './makererePostersImgs/mp78.jpg'
import mp79 from './makererePostersImgs/mp79.jpg'
import mp80 from './makererePostersImgs/mp80.jpg'
import mp81 from './makererePostersImgs/mp81.jpg'
import mp82 from './makererePostersImgs/mp82.jpg'
import mp83 from './makererePostersImgs/mp83.jpg'
import mp84 from './makererePostersImgs/mp84.jpg'
import mp85 from './makererePostersImgs/mp85.jpg'
import mp86 from './makererePostersImgs/mp86.jpg'
import mp87 from './makererePostersImgs/mp87.jpg'
import mp88 from './makererePostersImgs/mp88.jpg'
import mp89 from './makererePostersImgs/mp89.jpg'
import mp90 from './makererePostersImgs/mp90.jpg'
import mp91 from './makererePostersImgs/mp91.jpg'
import mp92 from './makererePostersImgs/mp92.jpg'
import mp93 from './makererePostersImgs/mp93.jpg'
import mp94 from './makererePostersImgs/mp94.jpg'
import mp95 from './makererePostersImgs/mp95.jpg'
import mp96 from './makererePostersImgs/mp96.jpg'
import mp97 from './makererePostersImgs/mp97.jpg'
import mp98 from './makererePostersImgs/mp98.jpg'

export let posters=[

    {src:mp97},
    {src:mp96},
    {src:mp98},
    
    {src:mp92},
    {src:mp95},
    {src:mp94},
    {src:mp93},
    {src:mp91},
    {src:mp70},
    {src:mp60},
    {src:mp61},
    {src:mp89},
    {src:mp64,text:"Students instead of paying 18k, there is an offer through Kayas at 10k. Only 50 tickets are offered weekly at 10k through Kayas. To reserve your ticket, tap the menu at the top and select tickets, select buy tickets, search for 'emt cinema' and proceed with buying. After purchasing, look for Claire at the cinema and she will verify your ticket. The cinema is located opposite makerere main gate at ham towers."},
    {src:mp71},
    {src:mp90},
    


    {src:mp69},
   
    {src:mp62},
    {src:mp63},
    
    {src:mp65},
    {src:mp66},
    {src:mp67},
    {src:mp68},
    {src:mp59},
    
    
    {src:mp58},
    {src:mp50},
    {src:mp51},
    {src:mp52},
    {src:mp53},
    {src:mp54},
    {src:mp55},
    {src:mp56},
    {src:mp57},
      
    {src:mp38},
    {src:mp39},
    {src:mp40},
    {src:mp41},
    {src:mp42},
    {src:mp43},
    {src:mp44},
    {src:mp45},

    {src:mp72},
    {src:mp73},
    {src:mp74},
    {src:mp75},
    {src:mp76},
    {src:mp77},
    {src:mp78},
    {src:mp79},
    {src:mp80},
    {src:mp81},
    {src:mp82},
    {src:mp83},
    {src:mp84},
    {src:mp85},
    {src:mp86},
    {src:mp87},
    {src:mp88},

    {src:mp46},
    {src:mp47},
    {src:mp48},
    {src:mp49},
     {src:mp32},
    {src:mp33},
    {src:mp34},
    {src:mp35},
    {src:mp36},
    {src:mp37},
    
    
    {src:mp24},
    
    {src:mp7},
    {src:mp16},
    
    {src:mp15,text:"Opio Emmanuel (College of Humanities and Social Sciences (0765068822))"},
    {src:mp17},
    
    {src:mp8},
    {src:mp18},
    
    {src:mp9},
    {src:mp19},
    {src:mp25},
    {src:mp30},
    {src:mp1},
    {src:mp20},
    {src:mp26},
    {src:mp4},
    {src:mp21},
    {src:mp27},
    {src:mp3},
    {src:mp22},
    {src:mp28},
    {src:mp2},
    {src:mp23},
    {src:mp29},
    {src:mp31},
    {src:mp10},
    {src:mp11},
    {src:mp12},
    {src:mp13},
    {src:mp5},
    {src:mp6},
    {src:mp14}
    
]








export function MakererePosters(){
    


    const [cookies]=useCookies(['user'])
    const [makerereUpdatesWhatsAppGroupLink,setMakerereUpdatesWhatsAppGroupLink]=useState()
    const [makererePostersVisits,setMakererePostersVisits]=useState()
    const [showLoginAlert, setShowLoginAlert] = useState(true);
    const [showDepositPopupAlert, setShowDepositPopupAlert] = useState(false); 
    const [makererePosters, setMakererePosters] = useState(); 
    const [minimumDepositAmount, setMinimumDepositAmount] = useState(''); 
    
    

    useEffect(()=>{

        GetControlVariables(['makerereUpdatesWhatsAppGroupLink','makererePostersVisits','minimumDepositAmount']).then(resp=>{
            
            setMakerereUpdatesWhatsAppGroupLink(resp.makerereUpdatesWhatsAppGroupLink)  
            setMakererePostersVisits(resp.makererePostersVisits)  
            setMinimumDepositAmount (`${resp.minimumDepositAmount} shs`)    
           
        })
    
       
        
        if(cookies.user){
            
            (async ()=>{
            
          let accountBalance=  await GetAccountBalance(cookies.user.contact).then(resp=>resp)
          if(accountBalance<50){
            setShowDepositPopupAlert(true)
            LogFrontEndActivity(`${cookies.user.name} tried viewing posters with less balance.`)
        } else{
        setMakererePosters(posters)
        
        
        if(cookies.user.contact==703852178){
            ;
        }else{
            fetch('/increaseMakererePostersVisits')
            DebitTraderAccountBalance(cookies.user.contact,50)
            LogFrontEndActivity(`${cookies.user.name} viewed posters and is eligible`)
            
        }
        
        
        
        }
        })()
        }
    
    







    },[])

    





return(<>
<div class="componentPadding">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            


          



{( ()=>{
    if(cookies.user){

       
       


return(<>


{(()=>{
 if(makererePosters){
    let makererePostersWithSrc=makererePosters.filter(makererePoster => 'src' in makererePoster)
    
    if (makererePostersWithSrc.length==0){
        return(<MessageComponent message="No posters available."/>)
    }else{
    let numberOfMakererePosters=makererePostersWithSrc.length
    
    
   
    
   return(<>
   <div class="row">
    <div class="col-9"><div class="pageLabel">Makerere posters {(()=>{
                if(posters){return(<span>({posters.filter(makererePoster => 'src' in makererePoster).length})</span>)}
            })()}</div></div>
    <div style={{textAlign:"right",opacity:"0.2"}} class="col-3">{makererePostersVisits}</div>
</div>

            <div class="pageDescription">Get details of what will happen at campus.</div>
            
            
             <p></p>

  <div class="flexDisplayWithGap">
            {/* <a href="https://wa.me/256703852178?text=Hello%20Kayas,%20I%20wish%20to%20add%20a%20poster."><div class="btn btn-sm btn-warning">Add poster</div></a>
<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-success">Makerere updates</div></Link> */}
<a href={makerereUpdatesWhatsAppGroupLink}><div class="btn btn-sm btn-success">Makerere updates group</div></a>

            </div>
            <p></p>
   {(()=>{
 return(makererePosters.map((makererePoster,index)=>{
    let fileName
    if(makererePoster.src){
        fileName=(makererePoster.src.split('/').pop()).split('.')[0]
    }
    
    
    return (
     

      <div class="makererePostersCardContainer1">
         <div class="makererePostersCard">
      
     

{(()=>{
 if(makererePoster.src){
    

    return(<>
    <div class="flexDisplayWithGap makererePosterIndexBagdgeContainer"><div class="makererePosterIndexBagdge">{numberOfMakererePosters--}</div> <div class="postersTimeUpdatemessage">New posters are added every day.</div></div>
    <img alt='Loading image....' loading='lazy' src={makererePoster.src} class="makererePostersCardImg d-block w-100" />
{(()=>{
    if(makererePoster.text){
            
        return(<>
       
        <div class="makererePostersCardText">{makererePoster.text}</div>
        
        </>)
            }
})()}

<div class="makererePostersIndex">{fileName} </div>

    </>)
        } if(makererePoster.text){
            
            return(<>
           
            <div class="makererePostersCardTextOnly">{makererePoster.text}</div>
            
            </>)
                }else {;}

})()}


     
      </div>
      </div>
    )
  }))
   })()}
   </>) 
    
    
    }
    
    
    
    
        }else{
            return(<MessageComponent message="Loading, please wait ......."/>)
        }

})()}



</>)


        
    }else{

        
        return (<LoginAlert
                
            showLoginAlert={showLoginAlert}
          message={`If your contact is not registered with Kayas, click "Register"`}
            closeLoginAlert={() => {
              window.location.href='/pages/makerereposters/makererepostershome'
              setShowLoginAlert(false)}
            }
      
          code={async (arguement)=>{
            
          
         return await VerifyRegistrationAndPin(arguement.contact,arguement.pin).then(resp=>{
          if(resp.registered===false){
         return({msg:arguement.notRegisteredMessage}) 
      
            }else
            
               if(resp.pin===false){
                return({msg:arguement.incorrectPasswordMessage})
               }else{
                return({user:resp.details,success:true})
      
                 
               
           
               }
             })
          }}
            
          />)
    }
})()}





        
        
        
        </div>
        <div class="col-md-4"></div>
    </div>


    <DepositPopupAlert alertHeading={`Deposit ${minimumDepositAmount} once to always get access to detailed Makerere posters every time they are shared.`} message={`New posters are always added every day.`} showDepositPopupAlert={showDepositPopupAlert} closeDepositPopupAlert={()=>{window.location.href='/pages/makerereposters/makererepostershome'}}  />
</div>
</>)


}export default MakererePosters