import React from 'react'
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profile.png"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../ReduxContainer/userReducer';
export default function Navbar() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(user);
  let id = user?.other?._id;
  const dispatch = useDispatch();
  const handleLogout = ()=>{
    dispatch(logout())
  }

  return (
    <div className='container-fluid bg-success p-2'>
          <div className='row'>
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-12'>
                <Link to={"/"}>
                       <h4 className='text-white'>CampusBook</h4>
                </Link>
                      
            </div>
            <div className='col-lg-5 col-md-5 col-sm-4 col-xs-12'>
                      
                      <input type="text" className='searchInput' placeholder='Rechercher vos amis ' name="" id="" />
            </div>
            <div className='col-lg-5 col-md-5 col-sm-4 col-xs-12'>
                <div className='row' style={{display:'flex' , alignItems:'center'}}>
                        <div className='col-lg-7 col-md-7 col-sm-6 col-xs-12' style={{display:'flex' , alignItems:'center'}}>
                        <Link to="/NotifyUser"> 
                            <img src={`${Notifications}`} className="Icons" alt="" />
                        </Link>

                        <img src={`${Message}`} className="Icons" alt="" />

                        <Link to={`/Profile/${id}`}>
                        <div style={{display:'flex' , alignItems:'center'}}>
                                  <img src={`${user?.other?.profile}`} className="ProfileImage" alt="" />
                                  <p style={{marginLeft:'10px',marginTop:'5px', color:'white'}}>{user?.other?.username}</p>
                        </div>
                        </Link>
                        </div>

                      <div className='col-lg-4 col-md-4 col-sm-3 col-xs-12' style={{ display:'flex' ,marginLeft:'10px',marginTop:'5px', cursor:"pointer"}} onClick={handleLogout}>
                        <p>Déconnexion</p>
                      </div>
                </div>
             </div>
          </div>
    </div>
  )
}
