import { Link } from 'react-router-dom';
import React,{createContext,useContext,useEffect,useState,Suspense} from 'react'
import {useCookies} from 'react-cookie'
import {KyuOpinionPolls,OpinionPoll1,AcholiStudentsUnionPoll} from './pages/VoterOpinionPolls/VoterOpinionPollsHome';



import { GetTradingDetails, VerifyRegistrationAndPin,SuspenseComponent, GetAccountBalance, CreateAccountAlert, GetCurrentPage, DepositPopupAlert, LoginAlert } from './pages/Functions';
import Links from './pages/Links';
import Maintenance from './pages/Maintenance';  

import Brocode from './pages/Brocode';  

import Quotes from './pages/Quotes';
import logo from './logo.png';
import Devs from './pages/Devs';
import {TradingHome,TradingAccount} from './pages/trading/TradingHome';


import './App.css';
import  './index.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import { setCookieOptionsObj,user} from './Variables';

import { ToastAlert,IsLoggedIn } from './pages/Functions';

import {NotFound} from './pages/Home';


import {RegisterCare, AttendeeRegisters, SmsNotificationsCare} from './pages/admin/Controls';




const Homepage=React.lazy(()=>import('./pages/Homepage'));
const Itemsele=React.lazy(()=>import('./pages/Home'));
// const NotFound=React.lazy(()=>import('./pages/Home'));
const Model=React.lazy(()=>import('./pages/Model')); 
const ActivityLogs=React.lazy(()=>import('./pages/admin/ActivityLogs')); 
const PaymentsHomepage=React.lazy(()=>import('./pages/payments/PaymentsHomepage')); 
const CreateTicket=React.lazy(()=>import('./pages/payments/CreateTicket')); 
const MakePayment=React.lazy(()=>import('./pages/payments/MakePayment')); 
const MyPayments=React.lazy(()=>import('./pages/payments/MyPayments')); 
const ApprovePayment=React.lazy(()=>import('./pages/payments/ApprovePayment')); 
const MyTickets=React.lazy(()=>import('./pages/payments/MyTickets')); 
const QtoolHome=React.lazy(()=>import('./pages/qtool/QtoolHome')); 
const RequestForClient=React.lazy(()=>import('./pages/qtool/RequestForClient')); 
const BnplHome=React.lazy(()=>import('./pages/bnpl/BnplHome'));
const Confirm=React.lazy(()=>import('./pages/votingportal/Confirm'));
const Beneficiaries=React.lazy(()=>import('./pages/donations/Beneficiaries'));
const Donate=React.lazy(()=>import('./pages/donations/Donate'));
const DeliveryServiceHome=React.lazy(()=>import('./pages/deliveryservice/DeliveryServiceHome'));
const VotingPortalHome=React.lazy(()=>import('./pages/votingportal/VotingPortalHome'));
const Cat1=React.lazy(()=>import('./pages/votingportal/Cat1'));
const Cat2=React.lazy(()=>import('./pages/votingportal/Cat2'));
const SubmitStudentDetails=React.lazy(()=>import('./pages/bnpl/SubmitStudentDetails'));
const RequestForCredit=React.lazy(()=>import('./pages/bnpl/RequestForCredit'));
const ApproveCreditRequest=React.lazy(()=>import('./pages/bnpl/ApproveCreditRequest'));
const CompletePromotionTransaction=React.lazy(()=>import('./pages/bnpl/CompletePromotionTransaction'));
const FoodDeliveryHome = React.lazy(()=>import('./pages/fooddelivery/FoodDeliveryHome'));
const RequestFoodDelivery=React.lazy(()=>import('./pages/fooddelivery/RequestFoodDelivery'));
const FoodDeliveryRequests=React.lazy(()=>import('./pages/fooddelivery/FoodDeliveryRequests'));

const AddTeller=React.lazy(()=>import('./pages/admin/qtool/AddTeller'));
const BnplTransactions=React.lazy(()=>import('./pages/admin/bnpl/bnplTransactions'));
const DeliveryServiceControls=React.lazy(()=>import('./pages/admin/deliveryservice/DeliveryServiceControls'));
const FoodDeliveryControls=React.lazy(()=>import('./pages/admin/FoodDeliveryControls'));
const ClearBnplDebt=React.lazy(()=>import('./pages/admin/bnpl/ClearBnplDebt'));
const LoginPage=React.lazy(()=>import('./pages/LoginPage'));

const RegistrationPage=React.lazy(()=>import('./pages/RegistrationPage'));



const AirBnbsHome = React.lazy(()=>import('./pages/airBnbs/AirBnbsHome'));
const CreateAudience = React.lazy(()=>import('./pages/audience/CreateAudience'));
const AudienceComp = React.lazy(()=>import('./pages/audience/AudienceComp'));
const SearchForAudience = React.lazy(()=>import('./pages/audience/SearchForAudience'));

const AudienceHome=React.lazy(()=>import('./pages/audience/AudienceHome'));
const SendMessage=React.lazy(()=>import('./pages/SendMessage'));
const MarqueeNews=React.lazy(()=>import('./pages/admin/MarqueeNews'));
const UsedItems=React.lazy(()=>import('./pages/UsedItems'));
const Messager=React.lazy(()=>import('./pages/Messager'));
const Deposit=React.lazy(()=>import('./pages/Deposit'));
const Invite=React.lazy(()=>import('./pages/invite/Invite'));
const SendFreeSms=React.lazy(()=>import('./pages/SendFreeSms'));
const AllArticles=React.lazy(()=>import('./pages/pubarticles/AllArticles'));
const CreateArticle=React.lazy(()=>import('./pages/pubarticles/CreateArticle'));
const AssessMyArticles=React.lazy(()=>import('./pages/pubarticles/AssessMyArticles'));
const MyArticles=React.lazy(()=>import('./pages/pubarticles/MyArticles'));
const PubArticleComp=React.lazy(()=>import('./pages/pubarticles/PubArticleComp'));
const ShareMyArticles=React.lazy(()=>import('./pages/pubarticles/ShareMyArticles'));



const HostelsList=React.lazy(()=>import('./pages/hostels/HostelsList'));
const Productslist=React.lazy(()=>import('./pages/products/Productslist'));
const AttendanceRegister=React.lazy(()=>import('./pages/attendanceregs/AttendanceRegister'));
const CreateAttendanceRegister=React.lazy(()=>import('./pages/attendanceregs/CreateAttendanceRegister'));
const MyRegisters=React.lazy(()=>import('./pages/attendanceregs/MyRegisters'));
const SendSms=React.lazy(()=>import('./pages/attendanceregs/SendSms'));
const EditRegister=React.lazy(()=>import('./pages/attendanceregs/EditRegister'));




const ControlsHome=React.lazy(()=>import('./pages/admin/ControlsHome'));

const Kayasers=React.lazy(()=>import('./pages/admin/Kayasers'));
const Requests=React.lazy(()=>import('./pages/admin/Requests'));
const ArticlesMonitor=React.lazy(()=>import('./pages/admin/ArticlesMonitor'));
const TradersCare=React.lazy(()=>import('./pages/admin/TradersCare'));
const KayaserCare=React.lazy(()=>import('./pages/admin/KayaserCare'));
//const RegisterCare=React.lazy(()=>import('./pages/admin/Controls'));
//const AttendeeRegisters=React.lazy(()=>import('./pages/admin/Controls'));
//const SmsNotificationsCare=React.lazy(()=>import('./pages/admin/Controls'));






export function Header(){
  

  

  const [kayasersNumb,setKayasersNumb]=useState('')
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
  const [articlesNumb,setArticlesNumb]=useState('')
  const [userName,setUserName]=useState('')
  const [accBal,setAccBal]=useState('')
  
let [marqueeNews,setMarqueeNews]=useState([])

  const [reqNumb,setReqNumb]=useState('')
  const [showDepositPopupAlert,setShowDepositPopupAlert]=useState(false)
  const [showLoginAlert,setShowLoginAlert] = useState(false)
  
useEffect( ()=>{


  if(cookies.user){
    
    setUserName(cookies.user.name)
  
  
    GetAccountBalance(cookies.user.contact).then(resp=>{
      
      setAccBal(`Balance: ${resp}/=`)
  
    
    })
    
    
  }



 fetch('/getMarqueeNews').then(resp=>resp.json()).then(resp=>{
  let marqueeArray=resp.reverse()
  setMarqueeNews(marqueeArray)

  
})



    fetch('/collection_requests_number').then(res=>res.json()).then(res=>{
      setReqNumb(res.length)
        })

    
    fetch('/collection_kayasers_number').then(res=>res.json()).then(res=>{
      setKayasersNumb(res.length)
        })

    
    
    fetch('/getAllArticles').then(res=>res.json()).then(res=>{
      setArticlesNumb(`(${res.length})`)
      })
      
      fetch('/increment_website_visits').then(res=>res.json()).then(res=>{
      
       
      })

   
  },[])


  

  return(
  
  <div>
    <div class="navigation"> 

    
       
       <nav  class="navbar-light bg-black" >
    <div class="container-fluid">
 


<div style={{justifyContent:"flex-end"}} class="">

<div class="row">
<div class="col-5 col-md-9">
  

<div class="row">
<div class="col-12  col-md-1"><div style={{paddingBottom:"0px",paddingTop:"8px"}} class='col-2 col-md-1'>
  <a href="/pages/homepage"><img  src={logo} class="websiteLogo d-block w-100" alt="..."  /> </a>
  </div></div>

<div class="col-12  col-md-11">
  
<nav class="navbar navbar-expand-xl navbar-dark bg-dark">
<button class="menuButton navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span> Menu
</button> 
<div  class="navbar-collapse justify-content-md-right collapse navB" id="navbarsExample08" >

 <ul  class="navbar-nav" style={{display:"flex",flexWrap:"wrap",justifyContent:"left",paddingTop:"1px"}}>
  
  
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="/pages/hostels/hostelslist"><span>Makerere hostels</span></a>
   </li>
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="/pages/pubarticles/sharemyarticles/773367078"><span>Makerere information portal</span></a>
   </li>
   

   <li class="nav-item active">
   <a class="orangeHoverEffect nav-link" href="/pages/message"><span>Send message to Kayas</span></a>
   </li>


   <li class="nav-item">
   <a  class="orangeHoverEffect nav-link" href="/advertise/items/0703852178"><span>Campus shopping guide</span></a>
   </li>
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="/pages/attendanceregs/myregisters"><span>Bulk SMS</span></a>
   </li> 
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="/pages/pubarticles/allarticles"><span>Trending stories/articles {articlesNumb}</span></a>
   </li>
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="/pages/pubarticles/MyArticles"><span>My Articles</span></a>
   </li>
  

   <li class="nav-item">
   <a class="orangeHoverEffect nav-link"  href="/pages/pubarticles/createarticle"><span>Create Article</span></a>
   </li>

   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="#"><span>Audience</span></a>
   </li> 
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="/pages/payments/paymentshomepage"><span>Tickets & payments</span></a>
   </li> 
   


 
   
  
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="#"><span>Buy Now Pay Later  </span></a>
   </li>

  
  
 
   
   <li class="nav-item">
<a class="orangeHoverEffect nav-link" href="/pages/usedItems"><span>Used items</span></a> 


   </li>
  
   
   
   
 


   
   
  
   
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="/pages/brocode"><span>Who is Kayas?</span></a> 
   </li>
 
 
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="/pages/quotes"><span>Quotes</span></a>
   </li>
   <li class="nav-item">
   <a class="orangeHoverEffect nav-link" href="#"><span>Queue service</span></a>
   </li>
   <li class="nav-item">
<a class="orangeHoverEffect nav-link" href="#"><span>Links</span></a> 
</li>


   
 </ul>


</div>
</nav>
</div>



</div>

</div>

<div class="col-7 col-md-3">
<div style={{textAlign:"right",paddingTop:"2px"}}>

 <div style={{justifyContent:"right",paddingTop:"6px"}} class="flexDisplayWithGap">
 <LoginAlert
    
    showLoginAlert={showLoginAlert}

    closeLoginAlert={() => {
      
      setShowLoginAlert(false)}
    }

  code={async (arguement)=>{
    
  
 return await VerifyRegistrationAndPin(arguement.contact,arguement.pin).then(resp=>{
  if(resp.registered===false){
 return({msg:arguement.notRegisteredMessage}) 

    }else {
      
      if(resp.pin===false){
        return({msg:arguement.incorrectPasswordMessage})
       }else{
        return({user:resp.details,success:true})

         
       
   
       }
      
      }
     })
  }}
    
  />
<div>
<a href='/pages/register'>
  <div class="btn btn-sm btn-success">Register</div>
</a>
</div>


 <div class="btn btn-sm btn-warning" onClick={()=> {if(!cookies.user){


setShowLoginAlert(true)


    
    }else{
     removeCookie("user",setCookieOptionsObj)
     //window.location.href="/pages/login"
     ToastAlert('toastAlert1','Logged out',3000)
    }}
    
    }>{(()=>{



      if(!cookies.user){
    
        return('Log in')
        
        
      }else{
      
      return('Log out')
      
    }
    



    })()}
    </div>
    
    
  <div onClick={()=>{
   if(cookies.user){
    setShowDepositPopupAlert(true)
   }else{
ToastAlert('toastAlert2','Please, first log into your account',3400)
   }
  }} class="btn btn-sm btn-success">Deposit</div>

 </div>

 <DepositPopupAlert alertHeading='Deposit to your Kayas account' showDepositPopupAlert={showDepositPopupAlert} closeDepositPopupAlert={()=>{
  setShowDepositPopupAlert(false)
 }} message="Use any any contact that has mobile money"  />




</div>

<div style={{textAlign:"right",paddingTop:"5px"}}>{
  (()=>{
    if(cookies.user){
      return(
        <div style={{paddingTop:"10px"}}>

         <span style={{textAlign:"left",border:"0px solid grey", padding:"3px",paddingRight:"7px",color:"white"}}>{userName}</span><span><a href="/pages/deposit"><span class="backgroundColorHoverEffectGreen" style={{border:"0px solid grey",borderRadius:"2px", padding:"3px",color:"orange"}}>{accBal}</span></a></span>
   
        </div>
      )
    }
  })()
}</div>
</div>
</div>



</div>






       </div>
       <div style={{color:"white",textAlign:"right",fontSize:"8px",opacity:"0.6",paddingRight:"14px"}}>{reqNumb} / {kayasersNumb}</div>

 
  </nav>
  
  



{/* {(()=>{




  return(<div>
    <marquee class="marqueeTag"
  direction="left" 
  behavior="scroll" 
  scrollamount="5"
>
  {(()=>{
   
      return(<span class="track">
        {(()=>{
        
          return(marqueeNews.map(news=>{
            return(<span>
              <span  class="marqueeNewsSpan1">
              {news.msg}
            </span>
            </span>)
          }))
        })()}
      </span>)
    
  })()}
</marquee>
  </div>)
})()}  */}
       </div>
      
       
  </div> )

}


export function App() {

 

  

   return (


<div>



    <BrowserRouter >
  <Suspense fallback={<SuspenseComponent/>}> 

   
<Switch >

{/*   
<Route path="/pages/audience/audiencehome" exact component={AudienceHome}/>
      <Route path="/pages/audience/searchforaudience" exact component={SearchForAudience}/>
      <Route path="/pages/audience/createaudience" exact component={CreateAudience}/>
      <Route path="/pages/audience/audiencecomp/:audienceName" exact component={AudienceComp}/>

<Route path="/pages/payments/paymentshomepage" exact component={PaymentsHomepage}/>
<Route path="/pages/payments/makepayment" exact component={MakePayment}/>
<Route path="/pages/payments/mypayments" exact component={MyPayments}/>
<Route path="/pages/payments/approvepayment/:ticketId" exact component={ApprovePayment}/>
<Route path="/pages/payments/mytickets" exact component={MyTickets}/>
<Route path="/pages/payments/createticket" exact component={CreateTicket}/>
<Route path="/pages/deliveryservice/deliveryservicehome" exact component={DeliveryServiceHome}/>
<Route path="/pages/qtool/qtoolhome" exact component={QtoolHome}/>
<Route path="/pages/qtool/requestforclient" exact component={RequestForClient}/>
<Route path="/pages/bnpl/home" exact component={BnplHome}/>
<Route path="/pages/bnpl/submitstudentdetails" exact component={SubmitStudentDetails}/>

<Route path="/pages/bnpl/requestforcredit" exact component={RequestForCredit}/>
<Route path="/pages/homepage" exact component={Homepage}/>
<Route path="/pages/bnpl/approvecreditrequest" exact component={ApproveCreditRequest}/>
<Route path="/pages/bnpl/completepromotiontransaction" exact component={CompletePromotionTransaction}/>

<Route path="/pages/fooddelivery/fooddeliveryhome" exact component={FoodDeliveryHome}/>
<Route path="/pages/fooddelivery/requestfooddelivery" exact component={RequestFoodDelivery}/>
<Route path="/pages/fooddelivery/fooddeliveryrequests" exact component={FoodDeliveryRequests}/>


      <Route path="/advertise/items/:recommender" exact component={Itemsele}/>
     
      <Route path="/pages/votingportal/votingportalhome" component={VotingPortalHome}/>
      <Route path="/pages/votingportal/confirm" component={Confirm}/>
      <Route path="/pages/votingportal/cat1" component={Cat1}/>
      <Route path="/pages/votingportal/cat2" component={Cat2}/>
            */}
      <Route path="/pages/attendanceregs/:registrar/:id" component={AttendanceRegister}/>
      <Route path="/pages/attendanceregs/myregisters" component={ MyRegisters }/>
      <Route path="/pages/sendsmsattendanceregs/:registrarContact/:registerId" exact component={ SendSms }/>
      <Route path="/pages/attendanceregs/createattendanceregister" component={CreateAttendanceRegister}/>
      <Route path="/pages/editattendanceregs/:registrarContact/:registerId" component={ EditRegister }/>
      
      <Route path="/pages/pubarticles/article/:id" component={PubArticleComp}/>
      <Route path="/pages/pubarticles/createarticle" component={CreateArticle}/>
      <Route path="/pages/pubarticles/allarticles" component={AllArticles}/>
      <Route path="/pages/pubarticles/myarticles" component={MyArticles}/>
      <Route path="/pages/pubarticles/sharemyarticles/:articleAuthorContact" exact component={ShareMyArticles}/>
      {/* <Route path="/pages/pubarticles/assessmyarticles" component={AssessMyArticles}/>
   
      
      <Route path="/pages/voteropinionpolls/kyu" exact component={KyuOpinionPolls}/>
      <Route path="/pages/voteropinionpolls/opinionpoll1" exact component={OpinionPoll1}/>
      <Route path="/pages/voteropinionpolls/acholistudentsunion" exact component={AcholiStudentsUnionPoll}/>
      
      <Route path="/pages/brocode" component={Brocode}/>
       */}
      
      
      <Route path="/pages/admin/activitylogs" exact component={ActivityLogs}/>
      <Route path="/pages/login" exact component={LoginPage}/>
      {/* <Route path="/pages/quotes" component={Quotes}/>
      
      <Route path="/pages/links" exact component={Links}/>
      

      <Route path="/pages/maintenance" component={Maintenance}/>
       */}
      <Route path="/pages/accountdetails" exact component={TradingAccount}/>
      {/* <Route path="/pages/trading/tradinghome" component={TradingHome}/> */}
   
      
      {/* <Route path="/pages/admin/addteller" component={AddTeller}/>             */}

       

      <Route path="/pages/airbnbs/airbnbshome" component={AirBnbsHome}/>
      <Route path="/pages/hostels/hostelslist" component={HostelsList}/>

      <Route path="/pages/products/productslist" component={Productslist}/>
      <Route path="/pages/admin/controls" component={ControlsHome}/>
      {/* <Route path="/pages/admin/marqueenews" exact component={MarqueeNews}/>
      <Route path="/pages/donations/beneficiaries" exact component={Beneficiaries}/>
      <Route path="/pages/donations/donate/:reason" exact component={Donate}/>
       */}
      <Route path="/pages/admin/requests" component={Requests}/>

      {/* <Route path="/pages/admin/bnpl/bnpltransactions" component={BnplTransactions}/>
      <Route path="/pages/admin/deliveryservice/deliveryservicecontrols" component={DeliveryServiceControls}/>
      <Route path="/pages/admin/fooddeliverycontrols" component={FoodDeliveryControls}/>
      <Route path="/pages/admin/bnpl/clearbnpldebt" component={ClearBnplDebt}/>
       */}
      <Route path="/pages/admin/kayasers" component={Kayasers}/>
      <Route path="/pages/admin/attendeeregisters" component={ AttendeeRegisters }/>
      {/* <Route path="/pages/admin/smsnotificationscare" component={ SmsNotificationsCare }/>
      <Route path="/pages/sendfreesms/:sponsor" exact component={ SendFreeSms }/>
       */}
      <Route path="/pages/admin/traderscare" component={ TradersCare }/>
      <Route path="/pages/admin/kayasercare" component={ KayaserCare }/>
      <Route path="/pages/admin/attendanceregistercare" component={ RegisterCare }/>
      {/* <Route path="/pages/admin/articlesmonitor" component={ArticlesMonitor}/> */}
      
      
      <Route path="/pages/register" component={RegistrationPage}/>
      {/* <Route path="/pages/useditems" component={UsedItems}/>
      <Route path="/pages/model" component={Model}/>
       */}
      
      
      <Route path="/pages/message" exact component={SendMessage}/>
      <Route path="/pages/message/throughrecommender/:recommender" component={SendMessage}/>
      
      <Route path="/pages/messager" component={Messager}/>
      <Route path="/pages/deposit" component={Deposit}/>
      <Route path="/pages/invite" component={Invite}/>
      
      <Route path="/pages/devs" component={Devs}/>
      
    
      
      <Route path="" exact component={Homepage}/>
      </Switch>
     
      
      
      </Suspense>

   
    {/* <Basenavele /> */}
    
 
  
  
    </BrowserRouter>
    </div>
     );
  
}


export function Basenavele(){ 
  const [totalBnplDailyPromotions,setTotalBnplDailyPromotions]=useState('')  
  const [egoSmsAccBal,setEgoSmsAccBal]=useState('')
  const [tradersTotalCredit,setTradersTotalCredit]=useState('')
  const [smsService,setSmsService]=useState('loading......')
  let a=6
  useEffect(()=>{
    let tradersBal=0,egoBal=0;
    fetch('/egoSmsAccBal').then(res=>res.json()).then(async (res)=>{
      egoBal=res.Balance;
      setEgoSmsAccBal(parseInt(res.Balance))
      fetch('/tradersTotalCredit').then(res=>res.json()).then(res=>{
      tradersBal=res.tradersTotalCredit
          setTradersTotalCredit(parseInt(res.tradersTotalCredit))
    
      if(parseInt(egoBal) > parseInt(tradersBal)){
        setSmsService('Up')
        
      }else{
        
        setSmsService('<span style="color:red;">Down</span>')
      }
    
        
            })
    
        })
        fetch('/totalBnplDailyPromotions').then(res=>res.json()).then(array=>{
          setTotalBnplDailyPromotions(array.length)        })



       
  },[])
  

  
  return (
    <footer class="basenave">
     
<div class="row">
  <div><span class="fa fa-copyright"></span> Copyright 2025 KAYAS.</div>
 <div><span class="fa-brands fa-whatsapp"> </span> 0703852178 </div>
 
 <div><span class="fa fa-envelope"> </span> kayasforyou@gmail.com </div>

<div>EgoBal {egoSmsAccBal}/{tradersTotalCredit} TTC</div>
<div>Sms service <span dangerouslySetInnerHTML={{__html: smsService}}/></div>






</div>

    </footer>

     
  );
}



export default App
