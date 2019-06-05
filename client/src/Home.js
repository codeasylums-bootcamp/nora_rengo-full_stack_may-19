import React from 'react'
import img from './common/img.jpeg'
import img1 from './common/img1.jpg'
import img2 from './common/img2.jpg'
import axios from'axios';

import Header from './common/Header'
export default function Home() {
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
        <img src={img} class="d-block w-100" alt="..." style={{height:'800px'}}/>
      </div>
      <div class="carousel-item">
        <img src={img1} class="d-block w-100" alt="..."style={{height:'800px'}}/>
      </div>
      <div class="carousel-item">
        <img src={img2} class="d-block w-100" alt="..."style={{height:'800px'}}/>
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
           <p class="jumbotron-lg-only">Join our community</p>
         
           <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="Password" placeholder="Password"/>
    </div>
    
    <button type="submit" class="btn btn-primary" onClick={()=>signup()}>Submit</button>
        </div>
    
  </div>
  </div>
  )
  
    }
  
    function signup(){
      var name=document.getElementById("Name")
      var email=document.getElementById("Email")
      var password=document.getElementById("Password")
      if(name.value!=="" && email.value!=="" && password.value!==""){
      axios.post('http://localhost:7000/register', {
        userName: name.value,
        email: email.value,
        password: password.value
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        window.location.href="http://localhost:3000/signin"
  }
  else{
    alert("Enter value")
  }
    }