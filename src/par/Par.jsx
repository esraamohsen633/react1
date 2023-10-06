import React, { Component } from 'react';
import Child from '../Child/Child';


class Par extends Component {

    state = {
        userName:"Esraa",
        userAge:28,
        products:[{name:"toshiba",
        price:"233",
        model:"laptop",
        id:1
    },
    {name:"acer",
    price:"500",
    model:"laptop",
    id:2
},
{name:"hp",
        price:"700",
        model:"laptop",
        id:3
    },
    {name:"vivo",
    price:"900",
    model:"laptop",
    id:4
},
{name:"apple",
        price:"1000",
        model:"laptop",
        id:5
    },
    {name:"samsung",
    price:"2000",
    model:"laptop",
    id:6
},{name:"apple",
price:"1000",
model:"laptop",
id:7
},{name:"apple",
price:"1000",
model:"laptop",
id:8
},{name:"apple",
price:"1000",
model:"laptop",
id:9
},{name:"apple",
price:"1000",
model:"laptop",
id:10
},]
    }
    

    render() {
        return (
            <div className= "bg-danger p-4" >

              <div class="row justify-content-center align-items-center g-2 container" >
              {this.state.products.map(product=>{return <Child productDetail={product} />})}

              </div>  
           
       
         </div>
       
      
             
        
        );
    }
}

export default Par;