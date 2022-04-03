import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './Components/App';
import Home from './Components/Home';
import Favorites from './Components/Favorites';
import Notfound from './Components/Notfound';

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
  <Routes>

      <Route path='/' element={<App/>}>

        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/:cityKey&:cityName' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='*' element={<Notfound/>}/>

      </Route>
      
    </Routes>
  </Provider>
</BrowserRouter>
, 
document.getElementById('root'));
