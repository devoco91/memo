import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import './Flutterwave.css'



const data=localStorage.getItem('userData')
const userData=JSON.parse(data)
export default function App() {
  const config = {
    public_key: 'FLWPUBK_TEST-7f251b060e30a4e6328d606d77c37581-X',
    tx_ref: 'FRM_'+Math.floor((Math.random() * 1000000000) +1),
    amount: userData.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: userData.email,
      phonenumber:userData.tell,
      name: userData.fName,
    },
    customizations: {
      title: 'Training fee',
      description: 'Payment for Sofware Development training',
      logo: 'https://lasop.net/assets/img/logo.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">

      <div className='alls'>

      
      <div className='container'>
        <div className='row justify-content-center align-item-center pt-5'>
        <div className='col-sm-12 col-md-6 col-lg-6 mx-auto text-center '>
          <h3 >{userData.fName} {userData.oName} {userData.lName}</h3>
          <p>{`You are paying ${userData.amount} NGN  to Lagos School of Programming Limited.`}</p>
          <p>Press the button to proceed</p>
       
     

      <button className='btn btn-outline-primary'
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay Now
      </button>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}
