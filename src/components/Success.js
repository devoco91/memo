import React from 'react'
import './Flutterwave.css'
import { NavLink} from 'react-router-dom'

function Success() {
  return (
    <div>
        <div className='alls'>

      
<div className='container'>
  <div className='row justify-content-center align-item-center pt-5'>
  <div className='col-sm-12 col-md-6 col-lg-6 mx-auto text-center '>
    <h3 >Congratulation!</h3>
    <p>You have just completed the first phase of your application into Lagos School of Programming Limited</p>
    <p>Press the button to proceed to the payment page</p>
 

<NavLink to='/flutterwave'>
<button className='btn btn-outline-primary'>Proceed to payment</button>
</NavLink>
</div>
</div>
</div>
</div>
    </div>
  )
}

export default Success