import { Container, Table } from "react-bootstrap";
import { Button } from "bootstrap";
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
console.log(props)
  return (
    <Container>
    <li>
      <div>
        
        <div>
          <h2>{props.name}</h2>
          <span >${props.price}</span>
          <span >x {props.amount}</span>
        </div>
      </div>
      <div >
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
    </Container>
  );
  }
export default CartItem;



