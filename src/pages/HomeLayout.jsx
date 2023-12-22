import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <nav className="font-bold">navbar</nav>
      <section className="align-elements py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
