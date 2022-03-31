import React, {useState} from 'react';
import './Apply.css'
import { useNavigate } from 'react-router-dom'
import ChoseCourse from '../appFormfiles/ChoseCourse';
import Lecturetime from '../appFormfiles/Lecturetime';


// import { db } from "../firebasefile/firebase_config";
// import {collection, getDoc, addDoc } from "firebase/firestore";




// export const StudyContext = React.createContext()

const Apply = () => {

  const [usersData, setUsersData]=useState({fName:"", lName:"", email:"", address:"", tell:"", amount:""})

  const [focus, setFocus] = useState(false)

	const navigate = useNavigate()

  const redirect=()=>{
   navigate("/success", {replace: true});
   alert('Application succsess; Press "OK" to proceed to payment page')

  }

   const handleSubmit=(e)=>{
	 e.preventDefault();

   
   localStorage.setItem('userData',JSON.stringify(usersData))
    setUsersData(usersData);
    redirect()
    }

    const handleFocus =(e)=>{
      setFocus(true);
    };

  return ( <div >
   
    <div className="application-container pt-4">
  <form onSubmit={handleSubmit} className="application-form">
    <input type="text" name="fName" onChange={e=> setUsersData({...usersData,fName:e.target.value})}  value={usersData.fName} placeholder="FirstName" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
    <span>Input a valid firstname</span>


    <input type="text" name="lName" onChange={e=> setUsersData({...usersData,lName:e.target.value})}  value={usersData.lName} placeholder="LastName" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
        <span>this field is required</span>

    <input type="email" name="email" onChange={e=> setUsersData({...usersData,email:e.target.value})}  value={usersData.email} placeholder="Email" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid email account</span>

    <input type="address" name="address" onChange={e=> setUsersData({...usersData,address:e.target.value})}  value={usersData.address} placeholder="address" onBlur={handleFocus} focus={focus.toString()}/>
    <span> this field is required</span>

    <input type="tel" name="tell" onChange={e=> setUsersData({...usersData,tell:e.target.value})}  value={usersData.tell} placeholder="Phone-number" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid phone number</span>

    <input type="tel" name="amount" placeholder='Enter amount' value={usersData.amount} onChange={e=> setUsersData({...usersData,amount:e.target.value})} />

    <ChoseCourse/>
    <br/>
    <Lecturetime/>
    <br/>
    	<button className="application-button" type='submit'>Submit</button>
  </form>
  </div>
  </div>
  )
}

export default Apply;




