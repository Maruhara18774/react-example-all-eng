import React, { Component } from 'react'

/*  LIFE CYCLE OF COMPONENT
    1. componentDidMount
    2. componentDidUpdate
    3. componentWillUnmount
    *. componentDidCatch
*/
class Mounting extends Component {
    // initialize this component
    constructor(props) {
        super(props)
        
        this.state = {
             constructor: false,
             derived: false,

        }
        //alert("1 - Constructor")
    }
    // 
    static getDerivedStateFromProps(props,state){
        //alert("2 - Derived")
    }
    render() {
        //alert("3 - Render")
        return (
            <div>
                <form>
                    <label>Constructor: {}</label>
                </form>
            </div>
        )
    }
    componentDidMount(){
        //alert("4 - Did mount")
    }
}

class Updating extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             didMount: false,
             didUpdate: false
        }
    }
    
    // Runs after the component output has been rendered to the DOM.
    componentDidMount(){
        this.state.didMount = true;
        this.setState(this);
        // => Update that state will call componentDidUpdate
        this.state.didUpdate = true;
        this.setState(this);
    }

    componentDidUpdate(){
    }

    // Runs when component is removed
    componentWillUnmount(){}
    // Catch error
    componentDidCatch(){}
    convertStatus(status){
        if(status){
            return "Done";
        }
        else{
            return "Still not complete";
        }
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Mounting</label>
                        <p>Status: {this.convertStatus(this.state.didMount)}</p>
                        <div>
                        <Mounting></Mounting>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <label>Updating</label>
                        <p>Status: {this.convertStatus(this.state.didUpdate)}</p>
                        <div>
                        <Updating></Updating>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}



export default Lifecycle
