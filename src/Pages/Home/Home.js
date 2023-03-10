import React from 'react'
import { useSelector } from 'react-redux'
import Leftbar from '../../Component/Leftsidecontainer/Leftbar'
import MainPost from "../../Component/MainPostContainer/MainPost"
import Navbar from '../../Component/Navbar/Navbar'
import Rightbar from '../../Component/RightsideContainer/Rightbar'
import "./home.css"
export default function Home() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log(user)
  return (
    <div className='container-fluid'> 
          
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' bg-success>
              <Navbar/>
            </div>
          </div>
           
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12' bg-light>
            <Leftbar/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12'>
            <MainPost/>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 bg-light'>
            <Rightbar/>
            </div>
          </div>
    </div>
  )
}
