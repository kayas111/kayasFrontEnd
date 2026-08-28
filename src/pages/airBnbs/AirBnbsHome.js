import { MessageComponent } from '../Functions'
import img1 from './airBnbImages/img1.jpg'
import img2 from './airBnbImages/img2.jpg'
import img3 from './airBnbImages/img3.jpg'
import img4 from './airBnbImages/img4.jpg'
import img5 from './airBnbImages/img5.jpg'
import img6 from './airBnbImages/img6.jpg'
import img7 from './airBnbImages/img7.jpg'
import img8 from './airBnbImages/img8.jpg'
import img9 from './airBnbImages/img9.jpg'
import img10 from './airBnbImages/img10.jpg'
import img11 from './airBnbImages/img11.jpg'
import img12 from './airBnbImages/img12.jpg'
import img13 from './airBnbImages/img13.jpg'


export function AirBnbsHome (){

    let airBnbs=[

{description:'Block A H4: Studio room (bed space, bathroom & kitchen area)',location:"Makerere Kikoni",price:"90,000 UGX per 24 hours",imgs:[img10,img11,img12,img13]},
{description:'Block B H14: Sitting room, bedroom, bathroom & kitchen area',location:"Makerere Kikoni",price:"100,000 UGX per 24 hours",imgs:[img1,img2,img3,img4]},
{description:'Block A H20: Sitting room, bedroom, bathroom & Kitchen area',location:"Makerere Kikoni",price:"100,000 UGX per 24 hours",imgs:[img5,img6]},
{description:'Block A H1: Studio room (bed space, bathroom & kitchen area)',location:"Makerere Kikoni",price:"90,000 UGX per 24 hours",imgs:[img7,img9,img8]}


    ]



    return (
        <div class="componentPadding">

<div class="row">
<div class="col-md-3"></div>
<div class="col-md-6">
    <div class="pageLabel">Air Bnbs</div>
    <div class="PageDescription">Short term accommodation</div><p></p>

    <div class="btn btn-sm btn-success" onClick={()=>{
        window.alert('WhatsApp or Call 0703852178 (Kayas)')
    }}>Book NOW</div><p></p>

{(()=>{

if(airBnbs.length!=0){


return(
    airBnbs.map(airBnb=>{

    return(
       
         <div class="airBnbContainer1">

<div class="airBnbContainer2">
        <div class="flexDisplayWithGap">
       {(()=>{
        if(airBnb.imgs && airBnb.imgs.length != 0){
           return (
            airBnb.imgs.map(imgVariableName=>{
                return ( <img loading='lazy' src={imgVariableName} class="airBnbImg d-block w-100" />)
            })
           )
        }else
        return('No images')
       })()}
      
        </div>
 
        <div class="airBnbDescription">
{airBnb.description}
        </div>
        <div class="airBnbLocation">
Location: {airBnb.location}
        </div>


        <div>
         <span class="airBnbPrice">{airBnb.price}</span> <span style={{paddingLeft:"5px"}}><a href="https://wa.me/256703852178"><span class="btn btn-sm btn-success"> <span class="fa-brands fa-whatsapp"></span> / <span class="fa fa-phone"></span> 0703852178</span></a></span>
 
        </div>
         
         
         </div>


         </div>
    )
    })
)



}else{
    return(
        <MessageComponent message='No rooms available'/>
    )
}


})()}



</div>
<div class="col-md-3"></div>

</div>


        </div>
    )
} export default AirBnbsHome