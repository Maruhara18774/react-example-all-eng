import React, { Component } from 'react'

var listStatus = ["Happy","Worry","Scare","Tired","Busy","Depressed"];

class ChangeStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: "Happy"
        }
        this.changeStatus = this.changeStatus.bind(this);
    }
    changeStatus(){
        var nowStatus = listStatus[Math.floor(Math.random()*listStatus.length)];
        //alert(nowStatus);
        this.state.text = nowStatus;
        this.setState(this);
    }
    render() {
        return (
            <div>
                <h3>{this.state.text}</h3>
                {/*<button onClick={() => this.changeStatus()}>Change Status Now</button> */}
                <button onClick={this.changeStatus}>Change Status Now</button>
            </div>
        )
    }
}

export default ChangeStatus;
