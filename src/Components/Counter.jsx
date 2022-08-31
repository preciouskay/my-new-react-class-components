import React, { Component } from 'react'

export  class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 7
      }
    }

    componentDidMount(){
        setInterval( () => this.incrementCount(),500);
    }
    componentDidUpdate(){
    document.title =`count is ${this.state.count}`
    }
    
    incrementCount(){
        // this.setState(prevCount =>({count: prevCount + 1}))
        this.setState({
            count :this.state.count +1
        })
    }
  render() {
    return (
      <div>
        <h2>count = {this.state.count}</h2>
      </div>
    )
  }
}
