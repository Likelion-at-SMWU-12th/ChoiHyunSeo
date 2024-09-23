import "./App.css";
import { useState } from "react";
import CartItem from "./CartItem";
import useCartStore from "./store/store";

function App() {
  const [newProduct, setNewProduct] = useState("");
  const [price, setPrice] = useState("");
  const cartItems = useCartStore((state) => state.cartItems);
  const addProduct = useCartStore((state) => state.addProduct);

  const handleAddProduct = () => {
    if (newProduct.trim() && price.trim()) {
      addProduct(newProduct, parseFloat(price));
      setNewProduct("");
      setPrice("");
    }
  };

  return (
    <div>
      <h1>현서는 뭘 사고 싶을까요?</h1>
      <div>
        <input
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="상품 이름을 입력하세요."
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="가격을 입력하세요."
        />
        <button onClick={handleAddProduct}>상품 추가</button>
      </div>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
