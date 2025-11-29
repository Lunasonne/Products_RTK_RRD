
import { useAppSelector } from "../app/hooks";
import "./CartIcon.css";

 
export default function CartIcon() {
  const items = useAppSelector((state) => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cartIcon">
       <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6H22L20 14H8L6 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="19" r="2" fill="currentColor" />
        <circle cx="18" cy="19" r="2" fill="currentColor" />
      </svg>

      {totalCount > 0 && <span className="badge">{totalCount}</span>}
    </div>
  );
}

