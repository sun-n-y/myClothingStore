import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import authFetch from '../utils';
import { SectionTitle } from '../components';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warning('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await authFetch.get('/orders', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      return { data: response.data.data, meta: response.data.meta, params };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error accessing your orders';
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const Orders = () => {
  return (
    <>
      <SectionTitle text="Orders" />
    </>
  );
};

export default Orders;
