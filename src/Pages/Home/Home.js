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
            <div className='col-lg col-md col-sm col-xs-12'>
              <Navbar/>
            </div>
          </div>
           
          <div className='row'>
            <div className='col-lg col-md col-sm col-xs-12'>
            <Leftbar/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12'>
            <MainPost/>
            </div>
            <div className='col-lg col-md col-sm col-xs-12'>
            <Rightbar/>
            </div>
          </div>
    </div>
  )
}
