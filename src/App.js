import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {

  return (
    <BrowserRouter>
      <Header/>
    
      <div className="App">
        
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/cart'>
            <Cart/>
        </Route>

      </div>

    </BrowserRouter>
  );
}

export default App;
