
import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom"

export function AttendenceRegisterNav(){
  let style2={padding:"3px"}
    return(
  <div style={{paddingTop:"4px"}}>
      <div class='flexDisplayWithGap'>
       
   
        <Link to='/pages/attendanceregs/myregisters'>  <div class="btn btn-sm btn-success">
     
     <span class="fa fa-list"></span> My registers
</div></Link>
     




      <Link to='/pages/attendanceregs/createattendanceregister'>
      <div class="btn btn-sm btn-warning" ><span ><span class="fa fa-plus"></span> New register</span></div>
      </Link>
       
            
            </div>



  </div>
    )
  }
export function RegistrationHome(){
    return(
        <div>
            <div style={{color:"red",fontSize:"25px",textAlign:"center"}}>Kayas Attendance Registers</div>
            
            <AttendenceRegisterNav/>
   
        </div>
        )
}





     