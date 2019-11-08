import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Products from './components/Products';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route path='/products' component={Products} />
      </Layout>
      
    );
  }
}
