import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import "./signup.css";
import { signup } from '../../Component/ReduxContainer/apiCall';
import app from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function Signup() {
  const dispatch = useDispatch();
  const {isFetching  , error} = useSelector((state)=>state.user);
  const user = useSelector((state)=>state.user);
  const [email , setEmail] = useState('');
  const [phonenumber , setphonenumber] = useState('');
  const [username , setusername] = useState('');
  const [password , setpassword] = useState('');
  const [file , setfile] = useState(null);
  const userDetails = user.user;
  const navigator = useNavigate();  
  const handleClick = (e)=>{
    e.preventDefault();
    const fileName = new Date().getTime() + file?.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage , fileName);
    
    const uploadTask = uploadBytesResumable(StorageRef, file);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
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
      signup(dispatch ,{email , password , username , phonenumber , profile:downloadURL});
      })
    });

  }
console.log(userDetails?.Status)
  if(userDetails?.Status==='Pending'){
    navigator("/verify/email");
  }
  return (
    <div className='container'>
      <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12 align-self-center'>
            <p className='logoText'>Campus<span className='text-success'>Book</span></p><br/>
            <p className='introtext'>Créer un nouveau <span className='text-success'> compte</span></p>
          </div>
        <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12 align-self-center bg-light'>
        <p className='fs-3'>Créer un nouveau compte</p>
          <div className='row'>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                </div>  
                <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12 p-4 mb-3">
                  <label for="photo" class="form-label">Photo de profil : </label>
                  <input type="file" class="form-control" name="file" id="file" onChange={(e)=>setfile(e.target.files[0])} /><br/>
                  <label for="nom" class="form-label">Nom d'utilisateur : </label>
                  <input type="text" class="form-control" id="username" onChange={(e)=>setusername(e.target.value)} placeholder="exemple:dollar" /><br/>
                  <label for="telephone" class="form-label">Numéro de téléphone : </label>
                  <input type="text" class="form-control" id="telephone" onChange={(e)=>setphonenumber(e.target.value)} placeholder="1234567890" /><br/>
                  <label for="exampleFormControlInput1" class="form-label">Adresse mail : </label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" /><br/>
                  <label for="inputPassword" class="form-label">Mot de passe : </label>
                  <input type="password" class="form-control" id="inputPassword" onChange={(e)=>setpassword(e.target.value)} placeholder="******" />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12"></div>  
            </div>
          <button type="button" class="btn btn-success p-2 mb-4" onClick={handleClick}>S'inscrire</button>
            <Link to={"/"}>
              <p style={{textAlign:'center' }}>Vous avez déjà un compte ?</p>
            </Link>
        </div>
      </div>
    </div>
  )
}
