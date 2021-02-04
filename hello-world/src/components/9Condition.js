import React, { Component } from 'react'

class AlienMessege extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isHuman: true
        }
        if(this.props.alien != null){
            this.state.isHuman = false;
            this.setState(this);
        }
        this.alineLogin = this.alineLogin.bind(this);
    }
    alineLogin(){
        this.state.isHuman = false;
        this.setState(this);
    }
    render() {
        let greeting;
        // greeting can store variable for rendering
        /*
        if (this.state.isHuman){
            greeting = <h3>Hey human!</h3>;
            
        }
        else{
            greeting = <h3>Bip bop bip {this.props.alien}!</h3>;
        }
        return (
            <div>
                {greeting}
                <button onClick={this.alineLogin}>Make alien's world</button>
            </div>
        )
        */
       return (
           //this.state.isHuman ? <h3>Hey human!</h3> : <h3>Bip bop bip {this.props.alien}!</h3>
           this.state.isHuman && <h3>Hey human!</h3>
           // Only render which tag 'isHuman'
       )
    }
}

export default AlienMessege;
