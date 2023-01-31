import {React }  from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Mainpage from './components/Mainpage';
import Header from './components/Header';
import Login from './components/Login';


import Home from './others/Home';
import Blog from './others/Blog';
import Customer from './others/Customer';
import Services from './others/Services';
import B1 from './others/B1';
import B2 from './others/B2';
import B3 from './others/B3';
import B4 from './others/B4';


function App() {
  return (
    <BrowserRouter>

  <Header></Header>
  
    <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/services" element={<Services />}></Route>
    <Route path="/customer" element={<Customer />}></Route>
    <Route path="/b1.html" href="b1.html"></Route>
    <Route path="/b2.html" href="b2.html"></Route>
    <Route path="/b3.html" href="b3.html"></Route>
    <Route path="/b4.html" href="b4.html"></Route>
    
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
