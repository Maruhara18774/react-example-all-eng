import React from 'react';

// Stateless Functional Component (JS func + props)

function HelloWorld(props) {
  return <h3>Hello world</h3>
}

/*  Pure Javascript 
const HelloWorld = () => {
  return React.createElement('div', {id: 'Hello'},
  React.createElement('h3',{className: 'App-header'},'Hello world'))
}
*/

export default HelloWorld;