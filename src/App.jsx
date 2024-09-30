/*
 Limitations:
 1. The dummyjson API has a limit on how many results it can return in each request.
 2. Products are loaded in batches (pagination) but are displayed in a single page.
 3. Infinite scroll could cause performance issues if the number of products is very large.
*/

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import Search from './components/Serach';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header>
          <h1>Product Store</h1>
          <Search />
        </header>
        <CategoryList />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
