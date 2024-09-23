import useCartStore from "./store/store";

function CartItem({ item }) {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <li>
      <p>
        <span style={{ fontWeight: "bold" }}>물품명:&nbsp;</span>
        <span>{item.name}&emsp;</span>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>가격:</span>
        <span> {item.price}원&emsp;</span>
      </p>
      <button onClick={() => decreaseQuantity(item.id)}>-</button>
      <span>&nbsp;{item.quantity}&nbsp;</span>
      <button onClick={() => increaseQuantity(item.id)}>+</button>&nbsp;
      <button onClick={() => removeProduct(item.id)}>삭제</button>
    </li>
  );
}

export default CartItem;
