import React, { Component } from 'react'
import ReactDOM from 'react-dom';
var listPartners = [
    {
        id: 0,
        name: 'Bruce',
        age: 25,
        phone: '012445632',
        hobby: 'gym'
    },
    {
        id: 1,
        name: 'Bobby',
        age: 21,
        phone: '01516623',
        hobby: 'eating'
    },
    {
        id:2,
        name: 'John',
        age: 29,
        phone: '0124545',
        hobby: 'movie'
    }
]

class Partner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            choosenPartner: null
        }
        //this.chooseOne = this.chooseOne.bind(this);
        this.waitForAnother = this.waitForAnother.bind(this);
    }

    chooseOne(partner) {
        this.state.choosenPartner = partner;
        this.setState(this);
    }
    waitForAnother(){
        this.state.choosenPartner = null;
        this.setState(this);
    }
    render() {
        if (this.state.choosenPartner == null) {
            return listPartners.map(partner => <div key={partner.id} className="profieFrame" onClick={() => this.chooseOne(partner)}>
                <h3>Name: {partner.name}</h3>
                <p>Age: {partner.age}</p>
                <p>Phone: {partner.phone}</p>
                <p>Hobby: {partner.hobby}</p>
            </div>)
        }
        else{
            return (
                <div className="popUp">
                    <h3>Hi, I'm {this.state.choosenPartner.name}</h3>
                    <p>I'm {this.state.choosenPartner.age}</p>
                    <p>My phone number is {this.state.choosenPartner.phone}</p>
                    <p>I'm exciting with {this.state.choosenPartner.hobby}</p>
                    <p>Nice to meet you</p>
                    <button onClick={this.waitForAnother}>Give me more time ...</button>
                </div>
            )
        }
    }
}

export default Partner;
