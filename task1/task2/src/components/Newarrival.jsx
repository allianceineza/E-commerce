import React from "react";
import image8 from '../assets/image/pic11.webp'
import image9 from '../assets/image/pic9.webp'
import image10 from '../assets/image/pic10.webp'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


const Arrival =[
    {
        image:image8,
        description: "all in one bottle",
        price: "$22.0-$55.0",

    },
    {
        image:image9,
        description: "Amazon Alexa",
        price: "$22.0-$55.0",
    },
    {
        image:image10,
        description: "Head set gamer region",
        price: "$22.0-$55.0",
        star: 4,

    },
    
]
const Newarrival=()=>{

return(
    <>

<h1 className="popularhead">new arrival product</h1>
<div className="new-arrival"> 
<div className="gallery-arrival">
{Arrival.map((post)=>(
    <div className="allin-one">
   <div className="new-item">
     <img src={post.image}/>
     <button className="quick-view">Quick View</button>
    <button className="select-option">Select Option</button>
    <div className="heart">❤</div>
     </div>
    <p>{post.description}</p>
    <p>{post.price}</p>
    <p><FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/></p>
    
    < div className="star">
    </div>
    <br />
   
    {/* <div className="new-arrival">
            <h2>New Arrival Product</h2>
<div className="gallery-arrival">
    <div className="new-container">
    <div className="new-item">
        <img src={product1} />
        
        <button className="quick-view">Quick View</button>
    <button className="select-option">Select Option</button>
    <div className="heart">❤</div></div>
    <br />
    <p>All In One Bottle<br/>
        
        $22.0-$55.00<br/>
        
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
    </p>
        </div>
        
     
        </div>
    </div>*/}
    </div>

 
))
}
</div> 
 </div> 
    </>
)}
export default Newarrival