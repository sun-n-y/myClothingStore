import { FeatureProducts } from '../components';
import Hero from '../components/Hero';
import authFetch from '../utils/index';

const url = '/products?featured=true';

const landingPageQuery = {
  queryKey: ['landing'],
  queryFn: () => authFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(landingPageQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeatureProducts />
    </>
  );
};
export default Landing;
