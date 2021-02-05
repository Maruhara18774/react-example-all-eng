import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: ''
        }
    }
    // Make the input can type values
    handlerUsernameChange = (event) =>{
        this.state.username = event.target.value;
        this.setState(this);
    }
    handerPasswordChange = (event) =>{
        this.state.password = event.target.value;
        this.setState(this);
    }
    render() {
        return (
            <form>
                <div>
                    <label>Username: </label>
                    <input value={this.state.username} onChange={this.handlerUsernameChange}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <textarea value ={this.state.password} onChange={this.handerPasswordChange}></textarea>
                </div>
            </form>
        )
    }
}

export default Form;
