import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.jpeg'
import logo1 from './logo.png'
import './Myprofile.css'
class Myprofile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr1:[]
        };
    }
    render(){
    return(
            <div>
            <div class="card class1" style={{width: '18rem'}}>
            {/* <img src={logo1} class="card-img-top bgrnd" alt="..."/> */}
            <img src={logo} class="card-img-top class2" alt="..." style={{borderRadius:'50px !important',width:'7rem',height:'7rem'}} />
            <div class="card-body">
            <p class="card-text"><h5>My Name</h5></p>
            </div>
            </div>
            </div>
    
    )
    }
}
export default Myprofile
