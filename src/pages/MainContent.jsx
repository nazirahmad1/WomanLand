import { Cart, Footer, Navbar } from "../components";

const MainContent = ({ children }) => {
  return (
    <>
      <Navbar />
      <Cart />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainContent;
