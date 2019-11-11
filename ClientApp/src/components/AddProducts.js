import React, {Component} from 'react';
import {Container} from 'reactstrap';
import axios from 'axios';

class AddProduct extends Component {
    state = {
        ProductName: "",
        ProdDescription: "",
        Category: "",
        Img: ""
    }


    //on changes for name, description, category, img
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    //onsubmit
    onSubmit = (e) => {
        e.preventDefault();

        const {ProductName, ProdDescription, Category, Img} = this.state;

        ////////POST/////////
        axios.post('/api/Products/', {ProductName, ProdDescription, Category, Img} )
        
        window.location = '/';
    }

    render(){
        return(
            <Container>
                <h1>Add Product</h1>
                <form onSubmit={this.onSubmit}>
                <label>Product Name</label>
                <input  
                    type="text"
                    required
                    name="ProductName"
                    className="form-control"
                    value={this.state.ProductName}
                    onChange={this.onChange}
                />
                <label>Product Description</label>
                <input  
                    type="text"
                    required
                    name="ProdDescription"
                    className="form-control"
                    value={this.state.ProdDescription}
                    onChange={this.onChange}
                />
                <label>Category</label>
                <input  
                    type="text"
                    required
                    name="Category"
                    className="form-control"
                    value={this.state.Category}
                    onChange={this.onChange}
                />
                <label>Image</label>
                <input  
                    type="text"
                    required
                    name="Img"
                    className="form-control"
                    value={this.state.Img}
                    onChange={this.onChange}
                />

                
                <div className="form-group">
          <input type="submit" value="Add Product" className="btn btn-primary" />
        </div>
                </form>
                 
            </Container>
        )
    }
}

export default AddProduct;