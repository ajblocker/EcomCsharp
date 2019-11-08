import react from 'react';
import React, { Component }  from 'react';

class Methods extends React.Component {
    
    state = {
        products: [],
        error: false
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
        <form>
            <div className="form-group">
                <input type="submit" value="Edit" onClick={this.putProductsById} class="btn btn-danger"/>
                <input type="submit" value="Delete" onClick={this.deleteProductsById} class="btn btn-danger"/>
            </div>
        </form>
        )
    }
}
        

export default Methods;