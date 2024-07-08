import "./bottle.css"

export default function Bottle({bottle,handleAddToCart}){
    const {name,seller,img} = bottle
    // console.log(bottle);
    return(
        <div className="bottle-card">

            <h2>name : {name}</h2>
            <h2>seller : {seller}</h2>
            <img src={img} alt="" />
            <button className="button"onClick={()=>{handleAddToCart(bottle)}}>Purchase</button>

        </div>
    )
}