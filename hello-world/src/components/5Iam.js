import React, { Component } from 'react';

/* TEST
<MyName name = "Emma">
        <p>Smart boy</p>
      </MyName>
*/

class MyName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h3> I am {this.props.name}</h3>
            <p>My children: {this.props.children}</p>
        </div>

    }
}

export default MyName;