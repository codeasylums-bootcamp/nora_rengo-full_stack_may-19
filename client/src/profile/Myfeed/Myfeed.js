import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpeg'
import logo1 from './logo.png'
import './Myfeed.css'
import { blockParams } from 'handlebars';
const axios = require("axios");
class Myfeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: null,
            post: []

        };
    }
    componentDidMount(){

    }
    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }
     rendersearch(){
        if(this.state.imageurl === undefined) {
            return(
            <div class="card class3">
                <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
                <p class="class7">Peeyush</p>
                <p class="card-text class6"><h5>This is Kaneki ken with white hair. If you fuck with him you die.</h5></p>
                <i class="far fa-thumbs-up" style={{ margin: '40px' }}></i>
                <i class="fas fa-comments"></i>
            </div>
            )
            }
            else{
                return(
                 <div class="card class3">
                 <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
                 <p class="class7">Peeyush</p>
                 <p class="card-text class6"><h5>This is Kaneki ken with white hair. If you fuck with him you die.</h5></p>
                 <img src={logo} class="card-img-top class5" alt="..." />
                 <i class="far fa-thumbs-up" style={{ margin: '40px' }}></i>
                 <i class="fas fa-comments"></i>
                </div>
                )
            }
    }
    render() { 
            return (
                <div>
                    <div class="card class3">
                        <form class="formh" onSubmit={this.onFormSubmit}>
                            <h5>Heyy you can post here</h5>
                                    <label for="inputState">Category</label>
                                    <select id="inputState" class="form-control" placeholder="select one">
                                        <option> Dining</option>
                                        <option>Kitchen</option>
                                        <option>x</option>
                                    </select>
                                <label for="Description">Description</label>
                                <textarea type="text" class="form-control" id="Description" placeholder="Please Give Description" />
                                <h5>Image Upload</h5>
                                <input type="file" name="myImage" onChange={this.onChange} />
                            <button type="submit" class="btn btn-primary btt">POST IT!!</button>
                        </form>
                    </div>
                    {this.rendersearch()}
                    <div class="comments">
                    <div class="card class3">
                        <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
                        <p class="class7">Peeyush</p>
                        <input class="comment"></input>
                        <img src={logo} class="card-img-top class4" alt="..." style={{ borderRadius: '50px !important', width: '30px', height: '30px' }} />
                        <p class="class7">Peeyush</p>
                        <p class="commentshow">Hello world</p>
                    </div>
                    </div>
                </div>
            )
        }

      
    }
    export default Myfeed
