import React, { useContext } from "react";
import { Card,Button, Container } from "react-bootstrap";
import CartContext from "../store/CartContext";

const CardItem = (props)=>{
let item =props.item.items.item;


const cartCntx=useContext(CartContext);
console.log(item)

const addToCart = ()=>{

cartCntx.addItem({
  id:item.title,
  name:item.title,
  amount:item.amount ||1,
  price:item.price
})
}
console.log(cartCntx.items)
return(


    <div>

      <Container className="d-flex justify-content-center align-items-center">
<Card style={{ width: '18rem' }} className="m-5 shadow">
      <Card.Img className="mx-auto m-4" src={item.imageUrl} style={{height:'50%', width:'60%', textAlign: 'center'}}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button onClick={addToCart} variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>

    </Container>

    

    </div>
)

}


export default CardItem;