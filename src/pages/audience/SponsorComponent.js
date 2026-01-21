import kayaslogo from '../imgs/logo.png'

export function SponsorComponent(props){
return(
  
     <div style={{paddingBottom:"10px"}}>
        <div style={{background:"white",padding:"8px"}}>
        <div class="row">
            <div class="col-4" style={{width:"130px"}}><img src={props.img} style={{borderRadius:"2%",objectFit:"contain"}} class=" d-block w-100" /></div>
            <div class="col-8 ">
                <div class="bold" style={{paddingTop:"5px"}}>{props.label}</div>
                <div class="light">{props.description}</div>
            </div>
        </div>
        </div>
    </div>
   
)
} export default SponsorComponent