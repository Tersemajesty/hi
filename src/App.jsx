import "./App.css"
import HomeRoute from "./Route/HomeRoute";
import Home from "./Pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProductDetails from "./Pages/ProductDetails"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"
import User from "./Pages/User"
import Page from "./Pages/Page"
import Categories from "./Pages/Categories"
import { useState, useEffect } from "react"
import Loader from "./component/Loader/Loader"
import ProductCheckout from "./Pages/ProductCheckout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,

    children: [
      { path: "/", element: <Home /> },
      { path: "productCheckout", element: <ProductCheckout /> },
      // { path: "blog", element: <Blog /> },
      { path: "page", element: <Page /> },
      { path: "user", element: <User /> },
      { path: "categories", element: <Categories /> },
      // { path: "contact", element: <Contact /> },
      // { path: "men", element: <men /> },
      // { path: "women", element: <women /> },
      // { path: "babycollection", element: <babycollection /> },
      { path: "ProductDetails", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },

    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return isLoading ? <Loader /> : <RouterProvider router={router}/>};

export default App;