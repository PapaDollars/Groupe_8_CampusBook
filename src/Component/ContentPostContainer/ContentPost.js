import React from 'react'
import "./contentpost.css";
import imageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
import VideoIcon from "../Images/video.png"
import profileimage from "../Images/Profile.png"
import { useSelector } from 'react-redux';
import { useState } from 'react';
import app from '../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function ContentPost() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user;
  console.log(user);
  let id = user?.other?._id;
  const [file , setFile] = useState(null);
  const [file2 , setFile2] = useState(null);
  const [title , setTile] = useState('');
  const notify1 = 'viens de poster une photo dans son compte';
  const notify2 = 'viens de poster une vidéo dans son compte';
  const notify3 = 'viens de poster un message dans son compte';
  const [imagePre , setImagePre] = useState(null);
  const [VideoPre , setVideoPre] = useState(null);
  const accessToken = user.accessToken;
  console.log(file?.name)

  const handlePost = (e)=>{
    e.preventDefault();
    if(file !== null){
    const fileName = new Date().getTime() + file?.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage , fileName);
    
    const uploadTask = uploadBytesResumable(StorageRef, file);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Le téléchargement est à ' + progress + '% fait');
    switch (snapshot.state) {
      case 'paused':
        console.log('Le téléchargement est en pause');
        break;
      case 'running':
        console.log('Le téléchargement est en cours');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      fetch(`http://localhost:5000/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON", token : accessToken} , body:JSON.stringify({title:title , image:downloadURL , video:'', notify:notify1})}).then((data)=>{
        alert("Votre photo a été partager avec succès");
        window.location.reload(true)
      })
    });
  }
);}else if(file2 !== null){
    const fileName = new Date().getTime() + file2?.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage , fileName);
    
    const uploadTask = uploadBytesResumable(StorageRef, file2);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Le téléchargement est à ' + progress + '% fait');
    switch (snapshot.state) {
      case 'paused':
        console.log('Le téléchargement est en pause');
        break;
      case 'running':
        console.log('Le téléchargement est en cours');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      fetch(`http://localhost:5000/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON", token : accessToken} , body:JSON.stringify({title:title , video:downloadURL , image:'', notify:notify2})}).then((data)=>{
        alert("Votre vidéo a été partager avec succès");
        window.location.reload(true)
      })
    });
  }
);
}else{
  fetch(`http://localhost:5000/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON", token : accessToken} , body:JSON.stringify({title:title , video:'' , image:'', notify:notify3})}).then((data)=>{
    alert("Votre message a été partager avec succès");
    window.location.reload(true)
  })
}


  }
  return (
    <div>
      <div className='ContentUploadContainer'>
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${user?.other?.profile}`} className="profileimage" alt="" />
          <input type="text" className='contentWritingpart' placeholder='Quoi de neuf ?' onChange={(e)=>setTile(e.target.value)} />
        </div>
        <div style={{marginLeft: '10px' }}>
          {imagePre !== null ? <img src={imagePre} style={{width:"410px" , height:'250px' , objectFit:"cover" , borderRadius:'10px'}} alt="" /> : VideoPre !== null ? <video className="PostImages" width="500" height="500" controls >
           <source src={VideoPre} type="video/mp4"/>
          </video> : ''
          }
          <div style={{display:'flex' , justifyContent:'space-between'}}>
          <div>
            <label htmlFor='file'>
              <img src={`${imageIcon}`} className="icons" alt="" />
              <input type="file" name="file" id="file" style={{display:"none"}} onChange={(e)=>[setFile(e.target.files[0]) , setImagePre(URL.createObjectURL(e.target.files[0]))]} />
            </label>
            <img src={`${emojiIcon}`} className="icons" alt="" />
            <label htmlFor='file2'>
              <img src={`${VideoIcon}`} className="icons" alt="" />
              <input type="file" name="file2" id="file2" style={{display:"none"}} onChange={(e)=>[setFile2(e.target.files[0]) , setVideoPre(URL.createObjectURL(e.target.files[0]))]} />
            </label>
          </div>         
            <button type="button" class="btn btn-success" style={{height:"40px",marginTop:"40px"}} onClick={handlePost}> Poster </button>
          </div>
        </div>
      </div>

      
    </div>
  )
}
