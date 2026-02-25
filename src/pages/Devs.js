import {CarousItem} from './Home';
import React, {useEffect,useState} from 'react'
import s1 from './imgs/s1.jpg';
import { RegistrationForm } from './Home';
import { LoginAlert, VerifyRegistrationAndPin } from './Functions';
import s3 from './imgs/s3.jpg';
import s4 from './imgs/s4.jpg';
import s5 from './imgs/s5.jpg';
import s6 from './imgs/s6.jpg';
import s7 from './imgs/s7.jpg';
import s8 from './imgs/s8.jpg';
import wp5 from './imgs/wp5.jpg';
import ny from './imgs/ny.jpg';



export function Controls(){
  
  const [showAlert, setShowAlert] = useState(false);


return(

  <div>

    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Development page</div>

    <LoginAlert
        showAlert={showAlert}
      
        closeAlert={() => setShowAlert(false)}

      code={async (arguement)=>{
        

      return({msg:'working....'})
      }}
        
      />

    <button onClick={() => {
      
      setShowAlert(true)}}>
        Open Custom Alert
      </button>

 

  </div>
);


}












export function Carousele(){
  let caroushght="350px";
  return (
       <div id="carouselExampleControls" class="carousel slide carousel-slide col-md-12" data-bs-ride="carousel">
       <div class="nega"><strong>Keep It Kayas</strong></div>
      <div class="carousel-inner">
      <div className="row"> 
         <div className="col-1"></div>
         <div class="col-10">
      <div class="carousel-item active">
<img src={wp5} class=" d-block w-100" alt="..." height={caroushght} /><div class="carousel-caption caption-four  d-md-block">
<br></br><br></br><br></br><div><div class="carmsgcolor">Please ask the person who shared the opportunity to you to send your contact to us</div></div>

 </div>
   </div>
   <CarousItem hght={caroushght} img={s6} msg="Please ask the person who shared the opportunity to you to send your contact to us" />
   <CarousItem hght={caroushght} img={s6} msg="Thank you Julia for your support" />
   <CarousItem hght={caroushght} img={s3} msg="Mubs we got you covered" />
      <CarousItem hght={caroushght} img={s1} msg="Muk you are sorted" />
   <CarousItem hght={caroushght} img={s5} msg="" />
   <CarousItem hght={caroushght} img={s3} msg="Kyu at your service" />
   <CarousItem hght={caroushght} img={s4} msg="Wishing you the best of 2022" />
   <CarousItem hght={caroushght} img={s7} msg="Delicious" />
   <CarousItem hght={caroushght} img={s8} msg="Discount for students" />
   
   <CarousItem hght={caroushght} img={ny} msg="Dont forget to buy some for yourself" />
   <CarousItem hght={caroushght} img={ny} msg="Is it a birthday party? Contact us" />

   
  <CarousItem hght={caroushght} img={ny} msg="Happy New 2022" />
  
  </div>
     <div className="col-1"></div>
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
  </div>
  );
}
export default Controls