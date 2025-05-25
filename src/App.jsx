import "./App.css"
import HomeRoute from "./Route/HomeRoute";
import Home from "./Pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProductDetails from "./Pages/ProductDetails"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"
import { useState, useEffect } from "react"
import Loader from "./component/Loader/Loader"
import ProductCheckout from "./Pages/ProductCheckout";
import  Men from "./Pages/Men";
import Women from "./Pages/Women";
import BabyCollection from "./Pages/BabyCollection";
import PrivateRoute from "./Route/PrivateRoute";
import ProfilePage from "./Pages/ProfilePage";
import Senator from "./clothLog/senator";
import Summer from "./clothLog/summer";
import Casual from "./clothLog/casual";
import Formal from "./clothLog/formal";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,

    children: [
      { path: "/", element: <Home /> },
      {element: <PrivateRoute />,
        children: [
          {path: "/productCheckout",
          element: <ProductCheckout/>},
          {
            path: "/profilepage",
            element: <ProfilePage />,
          }
        ]
      },
      { path: "productCheckout", element: <ProductCheckout /> },
      { path: "men", element: <Men /> },
      { path: "women", element: <Women /> },
      { path: "babycollection", element: <BabyCollection /> },
      { path: "ProductDetails", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "summer", element: <Summer/>},
      { path: "senator", element: <Senator/>},
      { path: "casual", element: <Casual/>},
      { path: "formal", element: <Formal/>}


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