
import { Component } from "react";
class  CounterClass extends Component{
    decrement=()=>{
        this.setState({
            counter:this.state.counter-1,
            
        })
     }
    increment =()=>{
        this.setState({
            counter:this.state.counter+1,
        })
        
    }
    
    constructor(props){
        super(props);
        this.state={
            counter:0,
           
            

         }
         //this.increment= this.increment.bind(this);

    }
    render(){
        return(
            <>
            <h2>counter  is: {this.state.counter}</h2>
            <button type="button" onClick={this.increment}>increment</button>
            <button type="button" onClick={this.decrement}>decrement</button>
            </>

        );
    }

}
export default CounterClass;