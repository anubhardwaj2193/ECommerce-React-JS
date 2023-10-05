import React from "react";
import ItemList from "./ItemList";

const Store = (props)=>{

return(
<React.Fragment>


    <ItemList items={props}/>
</React.Fragment>
)
}


export default Store;