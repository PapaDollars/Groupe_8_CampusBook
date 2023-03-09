import React, { useEffect } from 'react'
import "./profilemainPost.css";
import Coverimage from "../Images/Profile.png"
import ContentPost from "../ContentPostContainer/ContentPost"
import Post from '../ProfilePostContainer/Post';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// import NotifyContent from './../NotifyUser/NotifyContent';

export default function ProfileMainPost() {
  const [post , setPost] = useState([]);
  let location = useLocation();
  let id = location.pathname.split("/")[2];
  
  // console.log("id postMain: "+id);
  // NotifyContent({id});

  useEffect(() => {
    const getPost = async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/post/get/post/${id}`)
        setPost(res.data);
      } catch (error) {
        console.log("une erreur s'est produite")
      }
    }
    getPost();
  }, [])
  
  return (
    <>
      <div className='conaiter-fluid'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' bg-light>
                  <img src={`${Coverimage}`} className="profileCoverimage" alt="" />
                  <h2 style={{marginTop:-43 , color:"white" , textAlign:"start" , marginLeft:"34px"}}>Votre Profile</h2>
                <ContentPost/>
                {post.map((item)=>(
                  <Post detail={item}/>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}
