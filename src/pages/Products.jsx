import Filters from '../components/Filters';
import PaginationContainer from '../components/PaginationContainer';
import ProductsContainer from '../components/ProductsContainer';
import authFetch from '../utils';

export const loader = async () => {
  const response = await authFetch(`/products`);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
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
