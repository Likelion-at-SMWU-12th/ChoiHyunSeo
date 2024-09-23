import useCartStore from "./store/store";

function CartItem({ item }) {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <li>
      <span>물품명: {item.name}</span>
      <span>가격: {item.price}원</span>
      <button onClick={() => decreaseQuantity(item.id)}>-</button>
      <span>수량: {item.quantity}</span>
      <button onClick={() => increaseQuantity(item.id)}>+</button>
      <button onClick={() => removeProduct(item.id)}>삭제</button>
    </li>
  );
}

export default CartItem;
