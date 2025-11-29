import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addToCart } from "../cart/cartSlice";
import style from "./ProductPage.module.css"


export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const product = useAppSelector(state =>
    state.products.items.find((item) => item.id === Number(id))
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div className={style.page} >
      <img src={product.image} alt={product.title} />

       <div className={style.productInfo}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>€ {product.price}</h3>
  
      <button className={style.moreBtn} onClick={() => dispatch(addToCart(product))}
       >
        Into a cart
      </button>
     </div>
    </div>
  );
}