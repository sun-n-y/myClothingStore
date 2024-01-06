import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import authFetch from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await authFetch.post('/auth/local/', data);
      store.dispatch(loginUser(response.data));
      toast.success('Login Successful ');
      return redirect('/');
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.error?.message ||
          'please double check your credentials'
      );
      return null;
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="LOGIN" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          GUEST USER
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
