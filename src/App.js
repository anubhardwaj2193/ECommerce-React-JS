import Button from "react-bootstrap/Button";
import "./App.css";
import HeaderSite from "./components/UI/HeaderSite";

import Store from "./components/StorePage/Store";
import CartProvider from "./components/store/CartProvider";
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import StoreData from "./components/StorePage/StoreData";
import Contact from './components/Contact/Contact'



const routeDefinitions = createRoutesFromElements(

  <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/store' element={<StoreData/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>

  </Route>
)

const router = createBrowserRouter(routeDefinitions)

function App() {


  
  return (
    <CartProvider>
  
<RouterProvider router={router}/>
      
    </CartProvider>
  );
      }
export default App;