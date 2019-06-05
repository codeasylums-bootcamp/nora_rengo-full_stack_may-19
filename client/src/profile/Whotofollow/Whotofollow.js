import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from './logo.jpeg'
//import logo1 from './logo.png'
import './Whotofollow.css'
import { func } from 'prop-types';
const Whotofollow=(props)=>{
    
    const {userarr,user}= props
    var k=0
    var abc=[]
        for(k in userarr){
            if(userarr._id===user)
            break
        }
    for(var i in userarr){
        
        var def={
            userName:userarr[i].userName,
            _id:userarr[i]._id,
            email:userarr[i].email,
            follow:""
        }    
       if(i===k)
       continue
        if(userarr[k].following.indexOf(userarr[i]._id)===-1)
            {
            def.follow="Follow"
             abc.push(def)
             
        }
            else
            {def.follow="UnFollow"
            abc.push(def)
            
        }       
       
    }

    
    
    console.log(abc)
    
    console.log(userarr)
    
    
    
      
    const togglebutton=(buttonKey)=>{
        var k=0
        for(k in userarr){
            if(userarr._id===user)
            break
        }
        console.log(userarr[k].following)
        
        console.log(userarr[k].following.indexOf(buttonKey))
        if(userarr[k].following.indexOf(buttonKey)===-1)
        {
            document.getElementById(buttonKey).innerText="UnFollow"
            
            axios.put('http://localhost:7000/users/follow',{
                user1:userarr[k]._id,
                user2:buttonKey
            })
        }
        else
        {
            
        console.log(userarr[k].following.indexOf(buttonKey))   
            document.getElementById(buttonKey).innerText="Follow"
            
            axios.put('http://localhost:7000/users/unfollow',{
                user1:userarr[k]._id,
                user2:buttonKey
            })
        }    
        
        console.log(userarr)
    }
    
    console.log(abc)  
    return(
        
            <div class="card class31" style={{width: '18rem'}}>
        <h5 style={{margin:'10px', marginLeft:'30px'}}>People You Can Follow</h5>
        
        {abc.map((element)=>(
        <div style={{padding:'5px', verticalAlign:'middle'}}>
         <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
        <p class="card-text class32">{element.userName}</p>
        <button id={element._id} type="button" class="btn btn-dark class33" onClick={()=>togglebutton(element._id)}>{element.follow}</button>
        </div>
        
        
))}
</div>
        
           )
    }
    
export default Whotofollow
