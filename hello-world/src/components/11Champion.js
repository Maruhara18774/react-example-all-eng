import React, { Component } from 'react'

var result = [
    {
        id: 1,
        name: 'Bruce'
    },
    {
        id: 2,
        name: 'Joanna'
    },
    {
        id: 3,
        name: 'Kanna'
    },
    {
        id: 4,
        name: 'Vanga'
    },
    {
        id: 5,
        name: 'We had all champions.'
    }
]

class RankBoard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listChamp: [],
             index: 0
        }
        this.addChamp = this.addChamp.bind(this);
    }
    addChamp(){
        if(this.state.index<4){
            this.state.listChamp.push(result[this.state.index]);
            this.state.index++;
            this.setState(this);
        }
        else{
            
            this.state.listChamp.push(result[this.state.index]);
            this.setState(this);
        }
        
    }
    render() {
        var champList = this.state.listChamp.map((champ,index) => <h3 key = {index}>ID: {index} / RANK: {champ.id} / NAME: {champ.name}</h3>);
        return (
            <div>
                <div>{champList}</div>
                <button onClick={this.addChamp}>Add new champion</button>
            </div>
        )
    }
}

export default RankBoard;
