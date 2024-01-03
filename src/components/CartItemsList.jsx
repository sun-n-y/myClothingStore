import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  );
};

export default CartItemsList;
