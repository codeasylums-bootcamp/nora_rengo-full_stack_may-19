import React from 'react'
import {Link} from 'react-router-dom'
import Header from './common/Header'
import axios from'axios';
import img from './common/img.jpeg'
import img1 from './common/img1.jpg'
import img2 from './common/img2.jpg'

var token ="";
export default function Signin() {
    return (
       <div>
         <Header/>
       
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="..." style={{height:'800px'}}/>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."style={{height:'800px'}}/>
    </div>
    <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="..."style={{height:'800px'}}/>
    </div>
  </div>
  
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <div class="carousel-content">
         <h1 style={{margin:'5px'}}>iDesign</h1>
         <p class="jumbotron-lg-only">Log-in</p>
      
  
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="Password" placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={()=>login()}>Submit</button>
      </div>
        
  

        </div>
        </div> 
    )
}
function login(){

  var email=document.getElementById("Email")
  var password=document.getElementById("Password")
  if(email.value!=="" && password.value!==""){
  axios.post('http://localhost:7000/login', {
    email: email.value,
    password: password.value
})
    .then(function (response) {
      token = response.data.token;
      localStorage.setItem("user",email.value);
      localStorage.setItem("token",token);
      if(token!==undefined){
        window.location.href=`http://localhost:3000/user/${email.value}/${token}`
      }
      else{
        alert("Wrong Email/Password")
      }
    })  
    .catch(function (error) {
        console.log(error);
    });
}
else{
alert("Enter value")
}
}
