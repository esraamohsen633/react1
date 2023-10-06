import React, { Component } from 'react';

class Child extends Component {
    render() {
        let{name,price,model}=this.props.productDetail
        return (
            <div className="col ">
                 <div className='bg-info  p-3 container'>
               
            <h3>product Name:{name}</h3>
            <h3>product Nprice{price}</h3>
            <h3>product Model:{model}</h3>
            <button className='bg-secondary'>increase   </button>

        </div>
        </div>
           
        );
    }
}

export default Child;