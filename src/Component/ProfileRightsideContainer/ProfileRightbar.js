import React, { useEffect, useState } from 'react'
import "./profilerightbar.css"
import axios from 'axios';
import Follow from '../RightsideContainer/Follow';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
export default function ProfileRightbar() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  let location = useLocation();
  let id = location.pathname.split("/")[2];
  let idforSuggest = user?.other?._id
  const [Followinguser , setFollowinguser] = useState([]);
  useEffect(() => {
    const getFollowing = async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/post/followers/${id}`);
        setFollowinguser(res.data);
      } catch (error) {
        console.log("Error")
      }
    }
    getFollowing();
  }, [])

  console.log(Followinguser)

  const [users , setUsers] = useState([]);
  useEffect(() => {
    const getuser = async()=>{
      try {
        const res  = await axios.get(`http://localhost:5000/api/user/all/user/${idforSuggest}`)
        setUsers(res.data);
      } catch (error) {
        console.log("Some error occured")
      }
    }
    getuser();
  }, [])
  console.log(users)
  
  return (
    <>  
      <div className='conaiter-fluid'>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' bg-light>
            <div className='profilerightcontainer'>
              <h3>Followers</h3>
              <div>
                {Followinguser.map((item)=>(
                  <div style={{marginTop:"10px"}}>
                  <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
                    <img src={`${item.profile}`} className="Friendsimage" alt="" />
                    <p style={{textAlign:"start"  , marginLeft:"10px"}}>{item.username} </p>
                  </div>
                </div>
                  ))}
              </div>

            </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' bg-light>
            <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Connaissez-vous...</h3>
              {users.map((item)=>(
                <Follow userdetails={item}/>
                ))}
        </div>
      </div>
      </div>
    </>
  )
}
