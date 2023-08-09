import React, { Component, useState } from 'react'

export default class Pratice extends Component {
    constructor(props){
        super(props)
            this.state = {
                count : 0,
                name : ""
            }
        }
        componentDidMount(){
            console.log("component mounted");
        }
        componentDidUpdate(prevprops,prevstate){
            console.log("component updated");
        }
        componentWillUnmount(){
            console.log("component unmount");
        }
        increment = () =>{
            this.setState({count:this.state.count+1})
            this.setState({name:"manikandan"})
        }
  render() {
    return (
      <div>
      <p>count:{this.state.count}</p>
      <p>name:{this.state.name}</p>
      <button onClick={this.increment}>Increament</button>
      </div>
    )
  }
}
