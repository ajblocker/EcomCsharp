import React from 'react'
import Methods from './Methods';

class Product extends React.Component {
    
    state = {
        products: [],
        error: false
    }

    ///////GET///////////
        //invoked immediately as component mounted
    componentDidMount() {
        //fetch resources to make GET request to endpoint
      fetch('/api/Products')
      //parses the output to JSON, returns promise
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ products: data })
      })
      //logs any error
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
    }

    getProducts() {
        //fetch resources to make GET request to endpoint
      fetch('/api/Products')
      //parses the output to JSON, returns promise
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ products: data })
      })
      //logs any error
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
    }

    getProductsById() {
        //fetch resources to make GET request to endpoint
      fetch('/api/Products/id')
      //parses the output to JSON, returns promise
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ products: data })
      })
      //logs any error
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
    }

    ///////PUT////////
    putProductsById() {
        //fetch resources to make PUT request to endpoint
      fetch('/api/Products/id')
      //parses the output to JSON, returns promise
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ products: data })
      })
      //logs any error
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
    }

    ////////POST/////////
    postProducts() {
        //fetch resources to make POST request to endpoint
      fetch('/api/Products')
      //parses the output to JSON, returns promise
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ products: data })
      })
      //logs any error
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
    }
      
    ////////DELETE/////////
    deleteProductsById() {
        //fetch resources to make DELETE request to endpoint
      fetch('/api/Products/id')
      //parses the output to JSON, returns promise
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ products: data })
      })
      //logs any error
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
    }
    
render() {
    // const { products } = this.state;
    // let filteredProducts = products;
        return (
            <div className="row products">
                {this.state.products.map(product => (
                    <div className="col-4">
                        <div className="card">
                            <div className="work-img" style={{height: 445}}>
                                <a href="ShopMens"><img className="card-img-top img-fluid" src={product.img} alt="pacsun huf shirt" height="150"/></a>
                                <div className="img-overlay"></div>
                            </div>
                            <div className="card-body">
                                <p>{product.productName}</p>
                                <p>{product.price}</p>
                                <p>{product.prodDescription}</p>
                                <Methods/>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
            )
        }
    }
                
      
      export default Product;