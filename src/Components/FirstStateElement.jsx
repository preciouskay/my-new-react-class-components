 import React, { Component } from 'react'

export  class FirstStateElement extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          week:"friday" }
//     }
    
    
//   render() {
//     return (
//       <div>
//         somebody son go find me one {this.state.week}
//       </div>
//     )
//   }


constructor(props) {
  super(props)

  this.state = {
     Date:new Date
  }
}
componentDidMount(){
console.log('component has mounted');
setInterval(() => {
    this.updateTime()
}, 1000);
}
componentDidUpdate(){
console.log(`component has updated and the clock is ${this .state.Date.toLocaleTimeString()}`);
}
componentWillUnmount(){
console.log('component has unmounted');
}


  render() {
    return (
      <div>
        <h2>TODAYS DATE: {this.state.Date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}







