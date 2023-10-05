import React from "react";
import { Card,Button, Container } from "react-bootstrap";

const CardItem = (props)=>{
let item =props.item.items.item
return(


    <div>

      <Container>
<Card style={{ width: '18rem' }} className="m-5 shadow-lg mt-" style={{padding:'5rem'}}>
      <Card.Img variant="top" src={item.imageUrl} style={{height:'50%'},{width:'50%'}}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>

    </Container>

    

    </div>
)

}


export default CardItem;