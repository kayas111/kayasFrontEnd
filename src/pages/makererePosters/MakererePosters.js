import React, { useEffect, useState } from 'react'
import { AddMakererePosterPopupAlert,ToastAlert, CreditTraderAccountBalance, DebitTraderAccountBalance, DepositPopupAlert, GetAccountBalance, GetControlVariables, GetTradingDetails, LogFrontEndActivity, LoginAlert, MessageComponent, Post, VerifyRegistrationAndPin } from "../Functions"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useCookies } from 'react-cookie';
import { getStorage, ref, deleteObject } from "firebase/storage";









export function MakererePosters(){
    


    const [cookies]=useCookies(['user'])
    const [makerereUpdatesWhatsAppGroupLink,setMakerereUpdatesWhatsAppGroupLink]=useState()
    const [makererePostersVisits,setMakererePostersVisits]=useState()
    const [showLoginAlert, setShowLoginAlert] = useState(true);
    const [showDepositPopupAlert, setShowDepositPopupAlert] = useState(false); 
    const [makererePosters, setMakererePosters] = useState(); 
    const [minimumDepositAmount, setMinimumDepositAmount] = useState(''); 
    const [showAddMakererePosterPopupAlert,setShowAddMakererePosterPopupAlert] =useState(false); 
    const [posters,setPosters] =useState(); 
    const[refresh,setRefresh]=useState('')

    useEffect(()=>{

        fetch('/getMakererePosters').then(resp=>resp.json()).then(resp=>{
            
            setPosters(resp)
           })

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

fetch('/getMakererePosters').then(resp=>resp.json()).then(resp=>{
    resp.reverse()
 setMakererePosters(resp)
})

       
        
        
        if(cookies.user.contact==703852178){
            ;
        }else{
            fetch('/increaseMakererePostersVisits')
            DebitTraderAccountBalance(cookies.user.contact,100)
            LogFrontEndActivity(`${cookies.user.name} viewed posters and is eligible`)
            
        }
        
        
        
        }
        })()
        }
    
    







    },[refresh])

    





return(<>
<div class="componentPadding">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            


          



{( ()=>{
    if(cookies.user){

       
       


return(<>

{(()=>{
    if(cookies.user && cookies.user.contact==703852178){
        return(<>
        <div>
        <div class="btn btn-sm btn-warning" onClick={()=>{
            setShowAddMakererePosterPopupAlert(true)
        }}>Add poster</div><p></p>
        </div>
        </>)
    }
})()}

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

{(()=>{
    if(cookies.user && cookies.user.contact==703852178){
        return(<>
        <div style={{paddingBottom:"8px",paddingLeft:"7px"}}>
        <div class="btn btn-sm btn-danger" onClick={()=>{
            if(window.confirm("Delete this poster ?")==true){
                


                const imageRef = ref(getStorage(), `makererePostersImages/makererePosterImage_${makererePoster._id}`);

                deleteObject(imageRef).then(() => {}).catch((error) => {
                 ;
                
                }).then(resp=>{
                
               Post('/deleteMakererePoster',makererePoster).then(resp=>{
                  if(resp.acknowledged==true && resp.deletedCount==1){
                    ToastAlert('toastAlert1',`Deleted sucessfully`,1500)
                    setRefresh('RefreshToUpdate')
                    setRefresh('')
                  }else{
                    ToastAlert('toastAlert2',`Not successful, try again`,1500)
                  }
                
                })
                
                })
                
                

            }
        }}>Delete</div>
        </div>
        </>)
    }
})()}

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

<AddMakererePosterPopupAlert code={(arguement)=>{
if(arguement.refresh==true){
    setRefresh('RefreshToUpdate')
    setRefresh('')

}
}} showAddMakererePosterPopupAlert={showAddMakererePosterPopupAlert} closeAddMakererePosterPopupAlert={()=>{
    setShowAddMakererePosterPopupAlert(false)
}}/>
    <DepositPopupAlert alertHeading={`Deposit ${minimumDepositAmount} once to always get access to all detailed Makerere posters every time they are shared.`} message={`New posters are always added every day.`} showDepositPopupAlert={showDepositPopupAlert} closeDepositPopupAlert={()=>{window.location.href='/pages/makerereposters/makererepostershome'}}  />
</div>
</>)


}export default MakererePosters