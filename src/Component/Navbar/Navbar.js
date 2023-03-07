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
    <div className='container'>
          <div className='row'>
            <div className='col-lg col-md col-sm col-xs-12'>
                      <h4>CampusBook</h4>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12'>
                      
                      <input type="text" className='searchInput' placeholder='search your friends' name="" id="" />
            </div>
            <div className='col-lg col-md col-sm col-xs-12'>
                <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                        <img src={`${Notifications}`} className="Icons" alt="" />
                        <img src={`${Message}`} className="Icons" alt="" />
                      </div>
                      <div className='col-lg col-md col-sm col-xs-12'>
                        <Link to={`/Profile/${id}`}>
                        <div style={{display:'flex' , alignItems:'center'}}>
                                  <img src={`${user?.other?.profile}`} className="ProfileImage" alt="" />
                                  <p style={{marginLeft:'5px'}}>{user?.other?.username}</p>
                        </div>
                        </Link>
                      </div>
                      <div className='col-lg col-md col-sm col-xs-12' style={{ cursor:"pointer"}} onClick={handleLogout}>
                        <p>Logout</p>
                      </div>
                </div>
            </div>
          </div>
    </div>
  )
}
