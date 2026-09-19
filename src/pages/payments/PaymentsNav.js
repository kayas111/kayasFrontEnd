import {Link} from 'react-router-dom';
export function PaymentsNav(){
    let style={padding:"2px"}


    return(<div class="flexDisplayWithGap" style={{paddingTop:"10px"}}>

    <Link to="/pages/payments/makepayment"><div class="button1"><span class="fa fa-money"></span> Buy ticket</div></Link>
    <Link to="/pages/payments/mypayments"><div class="button1"><span class="fa fa-list"></span> Tickets bought</div></Link>
    <Link to="/pages/payments/createticket"><div class="button1"><span class="fa fa-plus"></span>  Create tickets</div></Link>
 <Link to="/pages/payments/mytickets"><div class="button1"><span class="fa fa-user"></span>  My tickets</div></Link>
    </div>)
}