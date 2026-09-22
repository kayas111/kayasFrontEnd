import React, { useEffect, useState } from 'react'
import { GetControlVariables, MessageComponent } from "../Functions"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

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






export function MakererePosters(){
    const [makerereUpdatesWhatsAppGroupLink,setMakerereUpdatesWhatsAppGroupLink]=useState()
    useEffect(()=>{
        GetControlVariables(['makerereUpdatesWhatsAppGroupLink']).then(resp=>{
            setMakerereUpdatesWhatsAppGroupLink(resp.makerereUpdatesWhatsAppGroupLink)  
        })
    },[])

    

let makererePosters=[
    {text:"The Makerere Know Your Policy campaign on this page is being facilitated by Opio Emmanuel"},
    {src:mp7,text:"Candidate"},
    {src:mp16},
    {src:mp15,text:"From College of Humanities and Social Sciences"},
    {src:mp8},
   
    {src:mp9},
    {src:mp1},
    {text:"The Makerere Know Your Policy campaign on this page is being facilitated by Opio Emmanuel"},
    {src:mp4},
    {src:mp3},
    {src:mp2},
    {src:mp10},
    {src:mp11},
    {src:mp12},
    {src:mp13},
    {src:mp5},
    {src:mp6},
    {src:mp14}
    
]



return(<>
<div class="componentPadding">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="pageLabel">Makerere posters {(()=>{
                if(makererePosters){return(<span>({makererePosters.filter(makererePoster => 'src' in makererePoster).length})</span>)}
            })()}</div>
            <div class="pageDescription">Updates are made daily. Keep visiting this page to stay updated.</div>
            
            <p></p>
            <div class="flexDisplayWithGap">
            <a href="https://wa.me/256703852178?text=Hello%20Kayas,%20I%20wish%20to%20add%20a%20poster."><div class="btn btn-sm btn-warning">Add poster</div></a>
<Link to={'/pages/hostels/hostelslist'}><div class="btn btn-sm btn-success">Hostels</div></Link>
<Link to={'/pages/pubarticles/sharemyarticles/773367078'}><div class="btn btn-sm btn-success">Makerere updates</div></Link>
<a href={makerereUpdatesWhatsAppGroupLink}><div class="btn btn-sm btn-success">Makerere WhatsApp group</div></a>

            </div>
            <p></p>

{(()=>{
    if(makererePosters){
      //  let numberOfMakererePosters=makererePosters.length

// if(makererePosters.length==0){
//     return(<MessageComponent message="No poster available."/>)
// }else{

//     return(makererePosters.map((makererePoster,index)=>{
//         let fileName
//         if(makererePoster.src){
//             fileName=(makererePoster.src.split('/').pop()).split('.')[0]
//         }
        
        
//         return (
         

//           <div class="makererePostersCardContainer1">
//              <div class="makererePostersCard">
          
//           {/* {(()=>{
//             if(makererePoster.src){
//                 console.log('src available')
//                 return(<img alt='Loading image....' loading='lazy' src={makererePoster.src} class="makererePostersCardImg d-block w-100" />)
//             }
//           })()}


//           <div class="makererePostersIndex">{numberOfMakererePosters--} - {fileName} </div>
//           {(()=>{
//             if(makererePoster.text){
//                 console.log('txt available')
//               return(<div class="makererePostersCardText">{makererePoster.text}
//         </div>)
//             }
            
//           })()} */}

// {(()=>{
//     if(makererePoster.src && makererePoster.text){

// return(<>
// <img alt='Loading image....' loading='lazy' src={makererePoster.src} class="makererePostersCardImg d-block w-100" />
// <div class="makererePostersIndex">{numberOfMakererePosters--} - {fileName} </div>
// <div class="makererePostersCardText">{makererePoster.text}</div>
// </>)
//     } else if(makererePoster.src){
        

//         return(<>
//         <img alt='Loading image....' loading='lazy' src={makererePoster.src} class="makererePostersCardImg d-block w-100" />
//         <div class="makererePostersIndex">{numberOfMakererePosters--} - {fileName} </div>
//         </>)
//             } if(makererePoster.text){
                
//                 return(<>
               
//                 <div class="makererePostersCardTextOnly">{makererePoster.text}</div>
                
//                 </>)
//                     }else {;}

// })()}


         
//           </div>
//           </div>
//         )
//       }))



// }  


let makererePostersWithSrc=makererePosters.filter(makererePoster => 'src' in makererePoster)

if (makererePostersWithSrc.length==0){
    return(<MessageComponent message="No posters available."/>)
}else{
let numberOfMakererePosters=makererePostersWithSrc.length


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
    <div class="makererePosterIndexBagdgeContainer"><div class="makererePosterIndexBagdge">{numberOfMakererePosters--}</div></div>
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




}




    }else{
        return(<MessageComponent message="Loading, please wait ......."/>)
    }
})()}
<p></p>
<MessageComponent message="Updates are made daily. Keep visiting this page to stay updated."/>

        
        
        
        </div>
        <div class="col-md-4"></div>
    </div>
</div>
</>)


}export default MakererePosters