import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav className="font-bold">navbar</nav>
      <section className="align-elements py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
