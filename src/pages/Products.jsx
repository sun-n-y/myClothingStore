import Filters from '../components/Filters';
import { PaginationContainer, ProductsContainer } from '../components';
import authFetch from '../utils';

const productsQuery = (params) => {
  const { category, company, order, price, search, shipping } = params;

  return {
    queryKey: [
      'allProducts',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      order ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
    ],
    queryFn: () => authFetch(`/products`, { params }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(productsQuery(params));

    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
