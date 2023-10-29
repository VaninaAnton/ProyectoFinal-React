import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import CartWidget from './CartWidget'; 
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Checkout from './Checkout';
import { CartProvider } from './CartContext';
import Categories from './Categories';
import { db } from './firebase';

const App = () => {
  return (
    <CartProvider> {}
      <Router>
        <div className="App">
          <NavBar />
          <CartWidget /> {}
          <Categories /> {}
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Checkout} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

