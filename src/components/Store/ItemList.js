import { Card, Col, Container,Row } from "react-bootstrap";

import CardItem from "./CardItem";

const ItemList = (props)=>{


    return (

<>
<Container >
    <Row>
        <Col><CardItem item ={props} ></CardItem></Col>
    </Row>
</Container>
</>
    )

}


export default ItemList;