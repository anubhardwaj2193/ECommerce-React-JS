import Store from "./Store";
import HeaderSite from "../UI/HeaderSite";
import CartProvider from "../store/CartProvider";

const StoreData = ()=>{
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

    return (

<CartProvider>
    
    <HeaderSite />
    
    
        <div>
            {productsArr.map((item) => (
        <Store key={item.title} item={item} />
      ))}
        </div>
        </CartProvider> 
    )


}


export default StoreData;