import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <nav className="font-bold">navbar</nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
