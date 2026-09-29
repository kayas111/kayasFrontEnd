import { Link } from "react-router-dom/cjs/react-router-dom.min"

export function MakererePostersHome(){


return(<>
<div class="componentPadding">
    <div class="row">
       <div class="col-md-3"></div>
       <div class="col-md-6">
        <div class="pageLabel">Makerere posters</div>
        <div style={{paddingBottom:"40px"}}></div>
        
<div style={{padding:"50px",border:"1px solid orange"}}>




<div style={{margin:"auto"}}>
<div class="light" style={{textAlign:"center",paddingBottom:"8px"}}>Select your choice</div>
   
  <div style={{textAlign:"center"}}>
  <div><Link to={`/pages/makerereposters/makererepostersheadlines/703852178`}><div class="btn btn-sm btn-warning">See only headlines (FREE)</div></Link></div><p></p>
  
  <div><Link to={`/pages/makerereposters/makerereposters`}> <div class="btn btn-sm btn-success">See details of all posters</div> </Link></div>
    
  </div>

</div>






</div>


{/* Makerere posters is a list of all posters showing various events and activities that will happen around campus. <p></p>
Many students are always not informed about what will happen around campus because some posters never reach their WhatsApp groups. <p></p>
New posters are always posted/uploaded every after 3 hours starting from midday till 9pm daily. This is to ensure that students stay updated any time of their convenience. <p></p>


<div style={{textAlign:"center"}}><Link  to={'/pages/makerereposters/makerereposters'}>
<div className="btn btn-success">Access Makerere posters</div>

</Link></div> */}



<div style={{textAlign:"center",paddingTop:"20px"}}>
<div class="bold">NOTE:</div>

<div>You can also access Makerere posters through your browser (Google chrome or Safari) by searching for "always Kayas" and select "Makerere Posters"</div>

</div>




       </div>
       <div class="col-md-3"></div>
    </div>
    
    </div> 
</>)






}
 export default MakererePostersHome