import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

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
   
    ////////DELETE/////////
    deleteProductsById = (id) => {
        axios.delete('/api/Products/'+id)
         .then(response => { console.log(response.data)});
         this.setState({
             products : this.state.products.filter(p => p.id !== id)
         })
    }

    
render() {
    // const { products } = this.state;
    // let filteredProducts = products;
        return (
            <div className="row products" >
                {this.state.products.map(product => {
                    return <div className="col-4" >
                        <div className="card">
                            <div className="work-img" style={{height: 445}}>
                                <a href="ShopMens"><img className="card-img-top img-fluid" src={product.img} alt="pacsun huf shirt" height="150"/></a>
                                <div className="img-overlay"></div>
                            </div>
                            <div className="card-body">
                                <p>{product.productName}</p>
                                <p>{product.price}</p>
                                <p>{product.prodDescription}</p>
                                <button class="btn btn-danger"><Link to={"/edit/" + product.id}>Edit</Link></button>
                                <a href="#" onClick={() => {this.deleteProductsById(product.id)}}>
                                <button class="btn btn-danger">Delete</button>

                                </a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            )
        }
    }
                
      
      export default Product;