import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../Component/Navbar/Navbar'
import ProfileLeftbar from '../../Component/ProfileLeftsidecontainer/ProfileLeftbar'
import ProfileMainPost from '../../Component/ProfileMainPostContainer/ProfileMainPost'
import ProfileRightbar from '../../Component/ProfileRightsideContainer/ProfileRightbar'
import "./profile.css"
export default function Profile() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log('user:'+user.username)
  return (
    <div className='container-fluid'> 
          
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' bg-success>
        <Navbar/>
      </div>
    </div>
     
    <div className='row'>
      <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12' bg-light>
      <ProfileLeftbar/>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12'>
      <ProfileMainPost/>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 bg-light'>
      <ProfileRightbar/>
      </div>
    </div>
</div>
  )
}
