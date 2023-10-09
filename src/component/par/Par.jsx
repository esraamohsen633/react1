import React, { Component } from 'react';
import Child from '../Child/Child';


class Par extends Component {

    state = {
        userName:"Esraa",
        userAge:28,
        products:[{name:"toshiba",
        price:233,
        model:"laptop",
        id:1
    },
    {name:"acer",
    price:500,
    model:"laptop",
    id:2
},
{name:"hp",
        price:700,
        model:"laptop",
        id:3
    },
    {name:"vivo",
    price:900,
    model:"laptop",
    id:4
},
{name:"apple",
        price:1000,
        model:"laptop",
        id:5
    },
    {name:"samsung",
    price:2000,
    model:"laptop",
    id:6
},{name:"apple",
price:1000,
model:"laptop",
id:7
},{name:"apple",
price:1000,
model:"laptop",
id:8
},{name:"apple",
price:1000,
model:"laptop",
id:9
},{name:"apple",
price:1000,
model:"laptop",
id:10
},]
    }


    updatePrice=(itemIndex)=>{
       
        let products =[...this.state.products]
        products[itemIndex].price+=20;
        this.setState({"products":products})
    };


    deleteProduct=(itemIndex)=>{
       
        let products =[...this.state.products]
        products.splice(itemIndex,1);
        this.setState({"products":products})
    };

addProduct = () => {
        const newProduct = {
            name: "acer",
            price: 500,
            model: "laptop",
        };
        const products = [...this.state.products];
        products.push(newProduct);
        this.setState({ products });
        localStorage.setItem("products", JSON.stringify(products));
    };

    componentDidMount() {
        let storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            this.setState({ products: JSON.parse(storedProducts) });
        }
    };
    

    render() {
        return (
            <div className="bg-danger p-4">
                <button className="btn btn-info mb-2" onClick={this.addProduct}>
                    Add Product
                </button>

                <div className="row justify-content-center align-items-center g-2 container">
                    {this.state.products.map((product, index) => (
                        <Child productDetail={product} key={index} index={index} updatePriceHandle={this.updatePrice} deleteProductHandle={this.deleteProduct}
                        />
                    ))}
                </div>
            </div>
        );
    }

}
export default Par;
