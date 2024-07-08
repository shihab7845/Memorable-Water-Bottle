import { useEffect, useState } from "react"
import Bottle from "../bottle/bottle"
import '../bottle/bottle.css';
import { addToLocalStored, getStoredCart } from "../../utility/localstorage";




export default function Bottles() {

    const [bottles, setbottles] = useState([])
    const [cart, setcart] = useState([])

    // for bottle data 
    useEffect(() => {

        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setbottles(data))
    }
        , [])
        
        useEffect(() => {
            console.log('stored total item', bottles.length);
            const storedId = getStoredCart();
            if (bottles.length) {
              console.log(storedId.length);
              console.log(storedId);
              console.log(bottles);
/**------------------------------------------------------------------------------ */
                const savedId =[];
              for (const id of storedId) {
                const bottle = bottles.find((bottle) => bottle.id === id);
                console.log(bottle);
                savedId.push(bottle)

            }
            setcart(savedId);
/**-------------------------------------------------------------------------------- */            
             }
          }, [bottles]);

    const handleAddToCart = (bottle) => {

        const newcart = [...cart, bottle]
        setcart(newcart);
        console.log(bottle);
       addToLocalStored(bottle.id)   
    }

    return (
        <div>
            <h1> Memorable Water Bottle </h1>
            <h2>total bottle :{bottles.length}</h2>

            <h2>selected bottle : {cart.length}</h2>

            <div className="selected-cart">
                {
                    cart.map((bottle, index) => (
                        <div key={index} >
                            <p>{bottle.name}</p>
                            <img src={bottle.img} alt={bottle.name} />
                        </div>
                    ))
                }

            </div>

            <div className="grid-container">
                {
                    bottles.map((bottle, index) => <Bottle
                        key={index}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}


                    ></Bottle>)
                }
            </div>

        </div>
    )
}