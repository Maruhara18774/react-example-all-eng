import React, { Component } from 'react'
import ObjChild from './8ChildComponent';

class ObjParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent',
        }
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent(childName){
        alert(`Hello parent ${this.state.parentName} from ${childName}`);
    }
    
    render() {
        return (
            <div>
                <ObjChild greet = {this.greetParent}></ObjChild>
            </div>
        )
    }
}
export default ObjParent;
