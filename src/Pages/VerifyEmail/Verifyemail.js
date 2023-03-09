  import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { VerifyEmail } from '../../Component/ReduxContainer/apiCall';

export default function Verifyemail() {
  const fleche = "->";
  const dispatch = useDispatch();
  const [OTP , setOTP] = useState('');
  const user = useSelector((state)=>state.user);
  console.log(user)
  const userDetails = user.user;
  const id = userDetails?.user;
  console.log(id);
  console.log(userDetails)

  const handleOTP = (e)=>{
    e.preventDefault();
    VerifyEmail(dispatch ,{OTP:OTP ,user:id});
  }
  
  return (
    <div className='container'>
            <div className='row'>
                <div className='col-lg col-md col-sm col-xs-12'>
                  
                </div>
                <div className='col-lg col-md col-sm col-xs-12 bg-dark pt-2'>
                <p className='fs-3 text-white'> Vérification de votre e-mail</p>
                <form style={{display:"flex" , flexDirection:"column"}}>
                    <input type={"number"} placeholder="Entrer votre OPT" style={{flex:1 , minWidth:"40px" , margin:"10px 0px" , padding:"10px", borderRadius:"10px"}} onChange={(e)=> setOTP(e.target.value)}/> <br/>
                    <button type="button" class="btn btn-light" style={{ borderRadius:"10px" , cursor:"pointer"}} onClick={handleOTP}>Confirmer OTP</button> <br/>
                   
                       <p style={{ color:"white" }}>  Vérifiez votre e-mail pour obtenir un OTP. <a style={{ textDecoration:"none" , color:"pink" }} href='https://mailtrap.io/inboxes/2121605/messages/3321126377' title="Obtenir un OPT" target="_blank"> ici </a></p>
                  
                    <Link to={"/login"}>
                       <p style={{ color:"white" , cursor:"pointer" , marginLeft:"190px" , fontSize:"14px"}}>Se connecter {fleche}</p>
                    </Link>
         
                </form>
                </div>
                <div className='col-lg col-md col-sm col-xs-12'>
                  
                </div>
            </div>
        </div>
  )
}
