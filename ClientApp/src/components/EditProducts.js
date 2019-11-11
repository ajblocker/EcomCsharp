import React, {Component} from 'react';
import {Container} from 'reactstrap';
import axios from 'axios';

class EditProduct extends Component {
    state = {
        id: 0,
        ProductName: "",
        ProdDescription: "",
        Category: "",
        Img: ""
    }

    ///////GET///////////
    //invoked immediately as component mounted
    //component did mount to get the product
    componentDidMount(){
        axios.get('/api/Products/'+ this.props.match.params.productId)
        .then(response => {
            this.setState({
                id: response.data.id,
                ProductName: response.data.productName,
                ProdDescription: response.data.prodDescription,
                Category: response.data.category,
                Img: response.data.img
            })
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        })
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
     
        const {id, ProductName, ProdDescription, Category, Img} = this.state;
        
        axios.put('/api/Products/'+this.props.match.params.productId, {id, ProductName, ProdDescription, Category, Img} )

        window.location = '/';
    }

    render(){
        return(
            <Container>
                <h1>Edit Products</h1>
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
          <input type="submit" value="Edit Product" className="btn btn-primary" />
        </div>
                </form>
                 
            </Container>
        )
    }
}

export default EditProduct;