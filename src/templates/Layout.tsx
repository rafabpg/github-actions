import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
