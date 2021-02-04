import React, { Component } from 'react';

var dwarfsList = ['Blue','Green','Brown','Orange','Lime','Cyan','Red'];

class Storyteller extends Component {
    render() {
        return (
            dwarfsList.map(dwarf => <p>Hi Snowwhite, I'm {dwarf} dwarf.</p>)
        )
    }
}

export default Storyteller;
