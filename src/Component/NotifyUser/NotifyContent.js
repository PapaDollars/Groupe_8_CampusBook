import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import PostNotify from './PostNotify';
import { useLocation } from 'react-router-dom';

export default function NotifyContent() {
    const [post , setPost] = useState([]);
    let location = useLocation();
    let id = location.pathname.split("/")[2];

    useEffect(() => {
    //   console.log("id idConst useEffect : "+idConst);
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
    <div className='container-fluid'> 
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            {post.map((item)=>(
                <PostNotify detail={item}/>
            ))}
        </div>
        </div>
    </div>
  )

}
