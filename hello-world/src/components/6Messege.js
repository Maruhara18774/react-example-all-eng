import React, {Component}from 'react';

class Messeges extends Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.messegesState = {
            textMesss: "..."
        }
        this.changeText = this.changeText.bind(this);
    }
    changeText(){
        this.messegesState.textMesss = this.inputRef.current.value;
        this.setState(this);
    }
    render(){
        return <div>
            <h3>{this.messegesState.textMesss}</h3>
            <input placeholder="Type messeges ..." ref={this.inputRef} onChange={this.changeText}></input>
        </div>
    }
}

export default Messeges;