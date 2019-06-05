
import React, { Component } from 'react'

export class Toggle extends Component {
    constructor(){
        super();
        this.state= {
            like: false
        }
    }    
    togglebutton(buttonKey){
        if(this.state.like){
            this.setState({like:false})
            document.getElementById(buttonKey).innerText="Like"
        }
        else{
            this.setState({like:true})
            document.getElementById(buttonKey).innerText="Unlike"
            
        }
    }
    render() {
        return (
            <div>
                <button id="1" onClick={()=>this.togglebutton("1")}>Like</button> 
            </div>
        )
    }
}

export default Toggle
