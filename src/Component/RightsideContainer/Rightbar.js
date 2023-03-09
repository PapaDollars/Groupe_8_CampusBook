import React, { useEffect } from 'react'
import "./rightbar.css"
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg"

import axios from 'axios';
import { useState } from 'react';
import Follow from './Follow';
import { useSelector } from 'react-redux';
export default function Rightbar() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user;
  const id = user?.other?._id;
 const [users , setUsers] = useState([]);
  useEffect(() => {
    const getuser = async()=>{
      try {
        const res  = await axios.get(`http://localhost:5000/api/user/all/user/${id}`)
        setUsers(res.data);
      } catch (error) {
        console.log("Some error occured")
      }
    }
    getuser();
  }, [])
  console.log(users)
  return (
    <div className='container'>

        <div className='row'>
                                  <div className='col-lg col-md col-sm col-xs-12 NotificationsContainer'>
                                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                  <p style={{marginLeft:"-14px"}}>Notifications</p>
                                                  <p style={{ color: "#aaa" , marginLeft:"40px" }}>Voir tous</p>
                                        </div>
                                        <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
                                                  <img src={`${image}`} className="notificationimg" alt="" />
                                                  <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , width:"120px" , textAlign:"start"}}>Madan like your post</p>
                                                  <img src={`${image1}`} className="likeimage" alt="" />
                                        </div>
                                        <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
                                                  <img src={`${image}`} className="notificationimg" alt="" />
                                                  <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , textAlign:"start" , width:"120px"}}>Suman started to following you</p>
                                                  <img src={`${image2}`} className="followinguserimage" alt="" />
                                        </div>
                                        <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
                                                  <img src={`${image2}`} className="notificationimg" alt="" />
                                                  <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , width:"120px" , textAlign:"start"}}>Madan like your post</p>
                                                  <img src={`${image3}`} className="likeimage" alt="" />
                                        </div>
                                        <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
                                                  <img src={`${image}`} className="notificationimg" alt="" />
                                                  <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 ,  width:"120px" , textAlign:"start"}}>Suman started to following you</p>
                                                  <img src={`${image4}`} className="followinguserimage" alt="" />
                                        </div>
                                        <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
                                                  <img src={`${image6}`} className="notificationimg" alt="" />
                                                  <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 ,  width:"120px" , textAlign:"start"}}>Suman started to following you</p>
                                                  <img src={`${image5}`} className="followinguserimage" alt="" />
                                        </div>
                                        <div style={{display:'flex' , alignItems:"center" , marginTop:-10}}>
                                                  <img src={`${image3}`} className="notificationimg" alt="" />
                                                  <p style={{marginLeft:"5px" , color:"#aaa" , fontSize:13 , width:"120px" , textAlign:"start"}}>Madan like your post</p>
                                                  <img src={`${image6}`} className="likeimage" alt="" />
                                        </div>
                                        
                                  </div>
        </div>

      <div className='row'>
        <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Connaissez-vous...</h3>
        {users.map((item)=>(
          <Follow userdetails={item}/>
          ))}
      </div>


    </div>
  )
}
