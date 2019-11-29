import React from 'react';
import { plus, minus } from './Helpers'

class CalculatorComponents extends React.Component {
    constructor(props){
        super(props);
        this.yourClickFunction=this.yourClickFunction.bind(this);
    }

    yourClickFunction(x, y){
      console.log(plus(x, y)); //Output will be (10, 20) => 30
      console.log(minus(x, y)); //Output will be (10, 20) => -10
    }

    render() {
        return (
            <div>
                <h4>React Helper functions</h4>
                <button onClick={this.yourClickFunction(10, 20)}>Click..</button>
            </div>
        );
    }
}
export default CalculatorComponents;