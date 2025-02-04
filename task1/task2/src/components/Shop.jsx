import React from "react";
import Shoppost from "./shoppost";
import image30 from'../assets/image/shop.webp'



const shopwith=[
{
    image: image30,
}

]

const Shop=()=>{
    
    return(
        <div className="shop1">
        {shopwith.map((post)=>(
          <img src={post.image}/>  
        ))}
        </div>
    )
}
<Shoppost/>
export default Shop
