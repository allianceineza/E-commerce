import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import image8 from '../assets/image/pic11.webp'
import image9 from '../assets/image/pic9.webp'
import image10 from '../assets/image/pic10.webp'

const shopposts=[
    {
        image: image8,
    },

    {
        image: image9,
    },
    {
        image: image10,
    }
]

const Shoppost=()=>{
    return(
        <div className="shop2">
            <div className="links">
                <h3>categories</h3>
            <a href="#">Body Location1(1)</a>
            <a href="#">Computer Gadget(3)</a>
            <a href="#">Electronics(5)</a>
            <a href="#">Fashion(3)</a>
            <a href="#">General(1)</a>
            <a href="#">Shoes(2)</a>
            <a href="#">Sorts(3)</a>
            <a href="#">Watch(1)</a>
            <a href="#">Woman clothes(3)</a>
            </div>
            <div className="showing">
                <div className="results">
                    <p>showing 1-9 of 13 results</p>
                    <button>Default sorting
                        <select>
                            <option>sort by popularity</option>
                            <option>sort by average rating</option>
                            <option>sort by latest</option>
                            <option>sort by price:low to high</option>
                            <option>sort by price:high to low</option>
                        </select>
                    </button>
                    <TfiMenuAlt />
                    <CgMenuGridR />
                </div>
               
                    {shopposts.map((post)=>(
                  <div className="shopposts">
                    <img src={post.image}/>
                    </div>
                    ))}
                
            </div>
        </div>
    )
}
export default Shoppost