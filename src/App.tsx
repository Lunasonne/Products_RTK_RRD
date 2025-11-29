import { Route, Routes } from "react-router-dom"
import LayOut from "./components/LayOut"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import { type JSX } from "react"
import './App.css'
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import ProductPage from "./pages/ProductPage"

function App(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  )
}
export default App



