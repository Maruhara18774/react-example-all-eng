import React, {Component}from 'react';

var allStatus = [["Welcome new visitors!","Subcribe"],["Welcome subcribers!","Unsubcribe"]];

class Subcribe extends Component{
    constructor(props){
        super(props);
        this.mySubcribeState = {
            title: allStatus[0][0],
            button: allStatus[0][1]
        }
        this.subcribeMe = this.subcribeMe.bind(this);
    }
    subcribeMe(){
        if(this.mySubcribeState.button == allStatus[0][1]){
            this.mySubcribeState.title = allStatus[1][0];
            this.mySubcribeState.button = allStatus[1][1];
        }
        else{
            this.mySubcribeState.title = allStatus[0][0];
            this.mySubcribeState.button = allStatus[0][1];
        }
        this.setState(this);
    }
    render(){
        return <div>
            <h3>{this.mySubcribeState.title}</h3>
            <button onClick={this.subcribeMe}>{this.mySubcribeState.button}</button>
        </div>
    }
}

export default Subcribe;