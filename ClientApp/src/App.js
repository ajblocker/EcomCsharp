import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Products from './components/Products';
import AddProducts from './components/AddProducts';
import EditProducts from './components/EditProducts';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route path='/edit/:productId' exact component={EditProducts} />
        <Route exact path='/' component={Products} />
        <Route path='/add' component={AddProducts} />
      </Layout>
      
    );
  }
}
