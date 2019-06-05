import React, {Component} from 'react';
import Myprofile from './profile/Myprofile'
import Myfeed from './profile/Myfeed/Myfeed'
import Whotofollow from './profile/Whotofollow/Whotofollow'
import axios from 'axios'
import Header2 from './common/Header2'
var token=localStorage.getItem("token")  
export default class UserFeed extends Component {
    constructor(){
        super()
        this.state={
            userarr:[],
            usersarr:[],
            post:[]
          }
        this.fetchUser=this.fetchUser.bind(this)
    }
    componentDidMount(){
        this.fetchUser();
        this.fetchPost();
    }
    fetchPost=()=>{
      
      axios.get('http://localhost:7000/posts',{ 
        headers:{'Authorization':`bearer ${token}`}})
        .then((response) => {
          
          var i=0;
          var arr=response.data
          
        
         this.setState({
              post:response.data,
              
          }, () => console.log(this.state.post))
          
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    
    }
    fetchUser=()=>{
      axios.get('http://localhost:7000/',{
        headers:{'Authorization':`bearer ${token}`}})
        .then((response) => {
          var em=localStorage.getItem("user")
          var i=0;
          var arr=response.data
          
          while(i<arr.length){
              if(arr[i].email===em)
              break;
              i++;
          }
        var userarr =arr[i]
         this.setState({
              userarr,
              usersarr:arr
          }, () => console.log(this.state.userarr))
          
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    
    
    render() {
      console.log(token)
        return (
            <div>
            <div class="backgroundupdate">
    <div className="Userfeed">
      <Header2/>
      <Myprofile userarr={this.state.userarr}/>
      <Myfeed post={this.state.post} user={this.state.userarr._id} userarr={this.state.usersarr}/>
      <Whotofollow userarr={this.state.usersarr} user={this.state.userarr._id}/>
    </div>
    <div style={{marginBottom:'20px'}}>
    </div>
    </div>                
            </div>
        )
    }
}

