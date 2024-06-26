import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import CategoryProducts from "./pages/CategoryProducts";
import AllCategories from "./pages/AllCategories";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/shipping-policy" element={<ShippingPolicy />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
          <Route path="/refund-policy" element={<RefundPolicy />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/categories" element={<AllCategories />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
          <Route
            path="/category-product/:id"
            element={<CategoryProducts />}
          ></Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <div className="font-bodyFont bg-gray-100">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=+923014093819&text=Hi, I came from TaraRani shopping website."
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-floatIcon"></i>
      </a>
    </>
  );
}

export default App;
