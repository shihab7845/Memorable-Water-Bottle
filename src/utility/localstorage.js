// check wheather iteam exist or not (creat array to storage)
export const getStoredCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}
//   add to local store 
/**
 * 
 * 1) array 
 * 2) push perameter to the array
 * 3)convert into stringify
 * 4)set the stringyfy to the local storage
 */
export const addToLocalStored = (id) => {
    const storedCart = getStoredCart();
    storedCart.push(id);
    const stringCart = JSON.stringify(storedCart);
    localStorage.setItem('cart', stringCart);
}
