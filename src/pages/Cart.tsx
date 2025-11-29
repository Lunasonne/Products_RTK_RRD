import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeFromCart, decreaseQuantity, addToCart } from "../cart/cartSlice";
 

const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

   if (items.length === 0) {
    return (
      <section 
       className= "w-screen h-[600px] relative flex items-end justify-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/emptyBascet.jpg')",  backgroundPosition: "36% center"}}>
        <div className= "absolute bottom-7 text-amber-600 text-4xl font-bold px-6 py-3 rounded-md"
    style={{ left: "42%", transform: "translateX(-50%)" }}>
          The cart is empty
        </div>
        </section>
    );
  }
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className= "w-full max-w-6xl mx-auto">
      <h2 className= "text-center font-bold text-amber-800 text-5xl"> Your shopping cart</h2>

      <h3 className= "text-3xl font-bold mb-6 text-amber-800 text-center mt-5">Total price: €{totalPrice.toFixed(2)}</h3>
  <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} 
        className="flex flex-col md:flex-row gap-5 items-center rounded-lg p-4 shadow-lg"
        style={{ background: "rgba(70, 185, 80, 0.3)" }}>
          <img src={item.image} className="w-36 h-44 object-contain bg-green-700 rounded-lg p-2"
              alt={item.title}/>
          <div className= "flex-1 w-full">
            <h3 className= "text-2xl font-bold text-amber-800">{item.title}</h3>
            <p className="text-2xl font-bold text-amber-800">€{item.price}</p>
            <p className="text-2xl font-bold text-amber-800">Quantity: {item.quantity}</p>

               <div className="flex gap-3 mt-3">
              <button
                className="px-3 py-1 bg-green-600 text-amber-900 rounded hover:bg-lime-500"
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </button>

              <button
                className="px-3 py-1 bg-green-600  text-amber-900 rounded hover:bg-lime-500"
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                −
              </button>

              <button
                className="px-3 py-1 bg-red-800 text-lime-600 rounded hover:bg-red-500"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Cart;
