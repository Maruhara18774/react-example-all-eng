import React, { Component } from 'react'

class ObjChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={()=> this.props.greet('Child')}>Greet parent</button>
            </div>
        )
    }
}

export default ObjChild;
