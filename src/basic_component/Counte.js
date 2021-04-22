import React, { Component } from 'react';

class Counte extends Component {

        constructor() {
            super();
            this.state={count:0}
        }
       increaseCount(){
           this.setState({
            count:this.state.count+1
           },()=>{console.log(this.state.count)})
       }

    render() {
        return (
            <div>
                <h1>Count :{this.state.count}</h1>
                <button onClick={()=>this.increaseCount()}>Increment</button>
            </div>
        );
    }
}

export default Counte;