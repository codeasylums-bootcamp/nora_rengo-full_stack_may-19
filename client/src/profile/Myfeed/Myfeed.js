import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpeg'
import logo1 from './uploads/54c9a3fe7d817ccf36b5bef4f104950d.png'
import './Myfeed.css'
import { blockParams } from 'handlebars';
import { element } from 'prop-types';
import img1 from './uploads/img1.jpg';

import img2 from './uploads/img2.jpg';

import img3 from './uploads/img3.jpg';
var token=localStorage.getItem("token")
var jot=0;
var images=[img1,img2,img3]
const axios = require("axios");
class Myfeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            imageurl: undefined,
            post:this.props.post,
            user:""
        };
        this.onPost=this.onPost.bind(this)
        this.Like=this.Like.bind(this)
    }
    Like(id){
        var i=0
        for(i in this.props.post){
            if(this.props.post[i]._id===id){
                break
            }
        }
        console.log(i)
        var arr=[]
        for (var k in this.props.post[i].likes){
            arr.push(this.props.post[i].likes[k].user_id)
        }
        console.log(this.props.post[i].likes)
         if(arr.indexOf(this.props.user)===-1)
        {axios.post('http://localhost:7000/posts/like',{
            pId:id,
            likes:{
                user_id:this.props.user
            }})
        }
        
    }
    onPost() {
        // e.preventDefault();
        // const formData = new FormData();
        // formData.append('myImage', this.state.file);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };
        // axios.post("/upload", formData, config)
        //     .then((response) => {
        //         alert("The file is successfully uploaded");
        //     }).catch((error) => {
        //     });
        if(document.getElementById('Categ').value!==""){
            axios.post('http://localhost:7000/posts',
            { category:document.getElementById('Categ').value,
                img:logo,
                user_id:this.props.user,
                 
        }   
        
        )
        alert("post created succesfully")
    
    }

        else{
            alert("Write something")
        }
           
//     getFilePath(){
//         $('input[type=file]').change(function () {
//             var filePath=$('#fileUpload').val(); 
//         });
//    }
   
               
        }
        
    render() {
        console.log(this.state)
        if (this.state.imageurl === undefined) {
            const {post}=this.props
            
            return (
                <div>
                    <div class="card class3">
                            <h4>Heyy you can post here</h4>
                                    <h5><label for="inputState">Category</label></h5>
                                    {/* <select id="inputState" class="form-control" placeholder="select one">
                                        <option> Dining</option>
                                        <option>Kitchen</option>
                                        <option>x</option>
                                    </select> */}
                                    <input class="form-control form-control-lg" type="text" id="Categ"/>
                                    <input type="file" id="fileUpload"/>                                           
                                {/* <h5>Image Upload</h5>
                                <input type="file" name="myImage" onChange={this.onChange} /> */}
                            <button class="btn btn-primary btt" onClick={this.onPost}>POST IT!!</button>
                            {console.log(this.state)}
                    </div>
                    {post.slice(0).reverse().map((element)=>(
                   <div>
                   <div class="card class3">
                        <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
                        
                        <p class="class7"></p>
                        <p class="card-text class6"><h5>{element.category}</h5></p>
                        
                        <img src={images[jot]} class="card-img-top class5"  alt="..." />
                         {jot=(jot+1)%3}
                         <i id={element._id} class="far fa-thumbs-up"  onClick={()=>this.Like(element._id)} style={{ margin: '40px' }}> Like {element.likes.length}</i>
                        <i class="fas fa-comments"></i>
                    </div>
                 
                 {/* <div class="comments">
                    <div class="card class3">
                        <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
                        <p class="class7">{element.comment[1].user_id}</p>
                        <input class="comment"></input>
                        <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
                        <p class="class7">{element.comment[1].content}</p>
                        <p class="commentshow"></p>
                    </div>
                    </div> */}


                    </div>
                   ))}
                </div>
            )
        }

        else {
            return (

                <div class="card class3" style={{ width: '18rem' }}>
                    <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '7rem', height: '7rem' }} />
                    <div class="card-body">
                        <p class="card-text"><h5>My Name</h5></p>
                        <i class="far fa-thumbs-up"></i>
                    </div>
                </div>

            )
        }
    }
}
    export default Myfeed
