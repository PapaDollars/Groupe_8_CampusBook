import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function PostNotify({detail}) {
    
  const [user , setuser] = useState([]);
  useEffect(() => {
    const getuser = async()=>{
      try {
        const res  = await axios.get(`http://localhost:5000/api/user/post/user/details/${detail.user}`)
        setuser(res.data);
      } catch (error) {
        console.log("une erreur s'est produite")
      }
    }
    getuser();
  }, [])

  return (
    <div className='PostContainer'>
      <div className='SubPostContainer'>
        <div>
          <div style={{ display: 'flex', alignItems: "center" }}>
            <img src={`${user.profile}`} className="PostImage" alt="" /> 
            <div className='mt-3'>
              <p style={{ marginBottom: '-5px', marginLeft: '10px', textAlign: "start" }}>{user.username}</p>
                <p style={{ marginBottom: '-5px', marginLeft: '10px', textAlign: "start" }}>{detail.notify}</p>
                <p  style={{ marginBottom: '2px', marginLeft: '10px', textAlign: "start" }}>Titre : " {detail.title} "</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
