import {CarousItem} from './Home';
import React, {useEffect,useState} from 'react'

import { LoginAlert} from './Functions';



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













export default Controls