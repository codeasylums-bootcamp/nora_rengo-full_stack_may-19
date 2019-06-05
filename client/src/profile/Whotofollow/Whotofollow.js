import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.jpeg'
//import logo1 from './logo.png'
import './Whotofollow.css'
class Whotofollow extends React.Component{
    constructor(){
        super();
        this.state={
            follow:[]
        };
    }
    render(){
    return(
        
            <div class="card class31" style={{width: '18rem'}}>
            <h6 style={{margin:'7px'}}>People You Can Follow</h6>
            <div style={{padding:'5px'}}>
             <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
            <p class="card-text class33">My Name</p>
            <button type="button" class="btn btn-dark class33">Follow</button>
            </div>
            <div style={{padding:'5px'}}>
             <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
            <p class="card-text class33">My Name</p>
            <button type="button" class="btn btn-dark class33">Follow</button>
            </div>
            </div>
    
    )
    }
}
export default Whotofollow
