import React, {useEffect,useState,useMemo} from 'react';
import { MessageComponent } from '../Functions';

export function ActivityLogs(){
    const [activityLogs,setActivityLogs]=useState()
    useEffect(()=>{
        fetch('/getActivityLogs').then(resp=>{
            return resp.json()}).then(resp=>{
        resp.reverse()
            
            setActivityLogs(resp)
        })
    },[]) 
    
    return(<div class="componentPadding">
<div  class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="pageLabel">
            Activity logs
        </div>

{(()=>{
    if(activityLogs){

if(activityLogs.length==0){

    return(<MessageComponent message="No activity logs."/>)
}else{
    
    
return(
    
    <div>
{(()=>{
    return(activityLogs.map((activity)=>{
        return(
         <div>
             
         <div>{activity.message}</div>
         </div>
        )
     }))
})()}


    </div>
)


}


    }else{
        return(
            <MessageComponent message="Loading......"/>
        )
    }
})()}


    </div>
    <div class="col-md-3"></div>
</div>
    </div>)
} export default ActivityLogs