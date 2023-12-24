import { useEffect } from 'react';
import Hero from '../components/Hero';
import authFetch from '../utils';

const Landing = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch('/products');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};
export default Landing;
