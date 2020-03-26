import React, { Component } from 'react'
import Cycle from '../App'

export default class Lifecycle extends Component {
    constructor(){
        super()
        this.state={
            display:'true'
        }
        console.warn("constructor")
    }
    componentDidMount(){
        console.warn("componentsDidMount")
    }
    render() {
console.warn("render");
        return (
            <div>
                <h1>Lifecycle</h1>
                
            </div>
        )
    }
}
