import Button from "react-bootstrap/Button";
import "./App.css";
import HeaderSite from "./components/UI/HeaderSite";

import Store from "./components/StorePage/Store";
import CartProvider from "./components/store/CartProvider";


function App() {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
  const arr = productsArr.map((item)=>{
return(
    <div>
      {item}
    </div>
)
  })
  
  return (
    <CartProvider>
    
      <HeaderSite />
      {productsArr.map((item) => (
        <Store key={item.title} item={item} />
      ))}
    </CartProvider>
  );
}

export default App;
