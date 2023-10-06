import { Component,Fragment } from "react";

class Signup extends Component{
    state;
        sayHi(){
            console.log("hiii")
        }
    
    render()
{
    return (<Fragment>
        <h2>hiiiiii</h2>
        <h5>welcome back</h5>
        <button onClick={this.sayHi}>clickme</button>
    
        
    </Fragment>);
}
}
export default Signup;