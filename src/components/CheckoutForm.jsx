import { Form, redirect } from 'react-router-dom';
import SubmitBtn from './SubmitBtn';
import authFetch, { formatPrice } from '../utils';
import { toast } from 'react-toastify';
import FormInput from './FormInput';
import { clearCart } from '../features/cart/cartSlice';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;

    const info = {
      address,
      cartItems,
      chargeTotal: orderTotal,
      name,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    };

    try {
      const response = await authFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success('Order placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.error?.message || 'Error in placing your order'
      );
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="Name" name="name" type="text" />
      <FormInput label="Address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="PLACE YOUR ORDER" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
