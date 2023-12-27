import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta } = useLoaderData();

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        label="Search Products"
        name="search"
        type="search"
        size="input-sm"
      />
      {/* CATEGORY */}
      <FormSelect
        label="Select Category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* COMPANY */}
      <FormSelect
        label="Select Company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* SORT */}
      <FormSelect
        label="Sort By"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />
      {/* RANGE */}
      <FormRange label="Select Price Range" name="price" size="range-sm" />
      {/* CHECKBOX */}
      <FormCheckbox label="free shipping" name="shipping" size="checkbox-sm" />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
