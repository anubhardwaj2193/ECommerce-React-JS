import { Button, Container } from "react-bootstrap";
import HeaderSite from "../UI/HeaderSite";
import TableContent from "./TableContent";
import Table from "./TableContent";

const Home = ()=>{

return (

    <>

 <Container>
    <h1 className="center m-5" style={{textAlign:"center"}} > The Generics</h1>
    <Button>Get Our Latest Album</Button>


 </Container>

 <Container>

    <h2>Tours</h2>
    <TableContent/>
 </Container>

    </>
)

}


export default Home;