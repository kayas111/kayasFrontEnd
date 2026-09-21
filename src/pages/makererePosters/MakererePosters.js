import { MessageComponent } from "../Functions"

import mp1 from './makererePostersImgs/mp1.jpg'
import mp2 from './makererePostersImgs/mp2.jpg'
import mp3 from './makererePostersImgs/mp3.jpg'


export function MakererePosters(){


let makererePosters=[
    {src:mp1,text:"Moses Ssebuliba - CEDAT"},
    {src:mp3},
    {src:mp2}
    
]



return(<>
<div class="componentPadding">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="pageLabel">Makerere posters {(()=>{
                if(makererePosters){return(<span>({makererePosters.length})</span>)}
            })()}</div>
            <div class="pageDescription">Updates are made daily. Keep visiting this page to stay updated.</div>
            
            <p></p>

{(()=>{
    if(makererePosters){
        let numberOfMakererePosters=makererePosters.length

if(makererePosters.length==0){
    return(<MessageComponent message="No poster available."/>)
}else{

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
                return(<img alt='Loading image....' loading='lazy' src={makererePoster.src} class="makererePostersCardImg d-block w-100" />)
            }
          })()}
          <div class="makererePostersIndex">{numberOfMakererePosters--} - {fileName} </div>
          {(()=>{
            if(makererePoster.text){
              return(<div class="makererePostersCardText">{makererePoster.text}
        </div>)
            }
            
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