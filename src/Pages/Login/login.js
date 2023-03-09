import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./login.css"
import { useState } from 'react';
import { login } from '../../Component/ReduxContainer/apiCall';
export default function Login() {
  const dispatch = useDispatch();
  const {isFetching  , error} = useSelector((state)=>state.user);
  const [email , setemail]= useState('');
  const [password , setPassword] = useState('');
const handleClick = (e)=>{
  e.preventDefault();
  login(dispatch ,{email , password});
}
  return (
    <div className='container'>
      <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12 align-self-center'>
            <p className='logoText'>Campus<span className='text-success'>Book</span></p><br/>
            <p className='introtext'>Connectez-vous à votre <span className='text-success'> compte</span></p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12 bg-light align-self-center'>
            <p className='fs-3'>Connexion</p>
            <div className='row'>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 "><br/>
                </div>  
                <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12 p-3 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Adresse mail : </label><br/>
                  <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e)=>setemail(e.target.value)} placeholder="name@example.com" /><br/>
                  <label for="inputPassword" class="form-label">Mot de passe : </label>
                  <input type="password" class="form-control" id="inputPassword" onChange={(e)=>setPassword(e.target.value)} placeholder="******" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12"></div>  
            </div>
            <button type="button" class="btn btn-success p-2 m-4" onClick={handleClick}>Connexion</button>
            <Link to={"/forgot/password"}>
              <p style={{textAlign:'center' }}>Mot de passe oublié ?</p>
            </Link>
            <Link to={"/signup"}>
            <p className='link-success' style={{textAlign:'center'}}>Créer un nouveau compte ici.</p>
            </Link>
          </div>
      </div>
    </div>
  )
}
