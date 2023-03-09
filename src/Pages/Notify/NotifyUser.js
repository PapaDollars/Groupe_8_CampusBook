import React from 'react'
import Notify from './../../Component/NotifyUser/Notify';
import Navbar from './../../Component/Navbar/Navbar';
import NotifyContent from './../../Component/NotifyUser/NotifyContent';
import { useSelector } from 'react-redux'

export default function NotifyUser() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log('user:'+user)
  return (
    <div className='container-fluid'> 
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' bg-success>
                <Navbar/>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12' bg-light>
                <p className='fs-3'>Notifications</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12'>
              
                <Notify/>

                <NotifyContent/>

            </div>
            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 bg-light'>
                <p></p>
            </div>
        </div>
    </div>
  )

}
