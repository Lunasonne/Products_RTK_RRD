import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../products/productsSlice";
import cartReducer from "../cart/cartSlice";

//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
    reducer: {
        products: productsReducer,
       cart: cartReducer
    }
})

// Типы для useSelector и useDispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


