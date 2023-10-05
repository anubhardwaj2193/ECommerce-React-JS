import { useParams } from "react-router-dom";
import { productsArr } from "./Data";

const ProductDetail= ()=>{

    const params = useParams();
    const productId = params.id;

    const product = productsArr.find(item => item.id === productId);


    return (
        <>
          <h1>{product.title}</h1>
          <p>Price: {product.price}</p>
          <img src={product.imageUrl} alt={product.title} />
        </>
      );

    }
export default ProductDetail;