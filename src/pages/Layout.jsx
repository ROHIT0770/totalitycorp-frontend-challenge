import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../store/store";
import { calculateTotal } from "../store/cartSlice";

store.dispatch(calculateTotal());

const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <header className="bg-[whitesmoke] w-full h-20 fixed top-0 z-20">
          <Header />
        </header>
        <main className="w-full min-h-screen">
          <Outlet />
        </main>
        <footer className="bg-[whitesmoke] w-full">
          <Footer />
        </footer>
      </Provider>
    </>
  );
};

export default Layout;
