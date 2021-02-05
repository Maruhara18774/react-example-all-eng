import React, { Component } from 'react';
import styles from './10Dating.css';

var myTheme = {
    background: 'linear-gradient(to right, #659de6 15%, #ffa3c3 72%)',
    color: '#7E4C95',
    width:'fit-content',
    height: 'fit-content',
    padding: '10px 10px 10px 10px',
}

class HeyYou extends Component {
    render() {
        return (
            <div>
                <p style={myTheme}>Hey you !</p>
                <div className='popUp'>
                    <p>I borrowed it.</p>
                </div>

            </div>
        )
    }
}

export default HeyYou;
