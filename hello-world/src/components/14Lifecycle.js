import React, { Component } from 'react'

/*  LIFE CYCLE OF COMPONENT
    1. componentDidMount
    2. componentDidUpdate
    3. componentWillUnmount
    *. componentDidCatch
*/
class Lifecycle extends Component {
    componentDidMount(){
        alert("Component did mount.");
    }
    componentDidUpdate(){
        alert("Component did update.");
    }
    componentWillUnmount(){
        alert("Component will unmount.")
    }
    componentDidCatch(){
        alert("Component had error.")
    }
    render() {
        return (
            <div>
                <h2>Hey you!</h2>
                <button>Next</button>
            </div>
        )
    }
}

export default Lifecycle
