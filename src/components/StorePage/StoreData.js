import Store from "./Store";
import HeaderSite from "../UI/HeaderSite";
import CartProvider from "../store/CartProvider";
import { productsArr } from "./Data";

const StoreData = ()=>{
    

    return (

<CartProvider>
    

    
    
        <div>
            {productsArr.map((item) => (
        <Store key={item.id} item={item} />
      ))}
        </div>
        </CartProvider> 
    )


}



export default StoreData;