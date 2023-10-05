import React from "react";
import { Container,Button ,Image,} from "react-bootstrap";
import HeaderSite from "../UI/HeaderSite";

const About = ()=>{

return(
<>

 <Container>
    <h1 className="center m-5" style={{textAlign:"center"}} > The Generics</h1>
    <Button className="d-flex justify-content-center">Get Our Latest Album</Button>


 </Container>

 <Container>
    <h3 className="m-4">About</h3>
    <Image style={{height:'50'},{width:'50%'}} src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"></Image>

    <p className="card border-primary m-4">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

 </Container>
</>
)


}


export default About;