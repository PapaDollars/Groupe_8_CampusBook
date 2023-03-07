import React, { useEffect, useState } from 'react'
import "./leftbar.css";
import addFriends from "../Images/add-user.png"
import image1 from "../Images/image3.jpg";
import axios from 'axios';
import { useSelector } from 'react-redux';
export default function Leftbar() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log(user);
  let id = user?.other?._id;
  const accesstoken = user.accessToken;
  console.log(accesstoken)
  const [post , setPost] = useState([]);
  useEffect(() => {
   const getPost = async()=>{
    try {
      const res = await axios.get(`http://localhost:5000/api/user/flw/${id}` , {
        headers:{
          token:accesstoken
        }
      })
      setPost(res.data);
    } catch (error) {
      
    }
   }
   getPost();
  }, [])

  console.log(post);
          return (
                   <div className='container'>

                        <div className='row'>
                            <div className='col-lg col-md col-sm col-xs-12'>
                          
                              <img src={`${image1}`} className="adsimg" alt="" />
                              <div>
                                <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
                                <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
                              </div>
                            </div>

                          </div>

                      <div className='row'>
                          <div className='col-lg col-md col-sm col-xs-12 NotificationsContainer'>
                                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                              <p style={{marginLeft:"-20px"}}>Explore</p>
                                              <p style={{ color: "#aaa" , marginLeft:"40px" }}>See all</p>
                                    </div>
                                    <div>
                                              {post.map((item)=>(
                                                [item.image === '' ? '' :
                                                <img src={`${item.image}`} className="exploreimage" alt="" />
                                              ]

                                              ))}
                                              
                                              
                                    </div>
                                    
                          </div>
                      </div>

                   </div>
          )
}
