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
import Summer from "./clothLog/Summer";
import Casual from "./clothLog/Casual";
import Formal from "./clothLog/Formal";
import SearchResultPage from "./component/Header/SearchResultPage";
import Senator from "./clothLog/Senator";
import Mesh from "./clothBlog/mesh";
import Bubu  from "./clothBlog/Bubu";
import Dinner from "./clothBlog/Dinner";
import  Ball from "./clothBabies/Ball";
import SummerBabies from "./clothBabies/SummerBabies";


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
      { path: "ProductDetails/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "summer", element: <Summer/>},
      { path: "casual", element: <Casual/>},
      { path: "formal", element: <Formal/>},
      { path: "senator", element: <Senator/>},
      { path: "search", element: <SearchResultPage/>},
      { path: "mesh", element: <Mesh/>},
      {  path: "bubu", element: <Bubu/>},
      {  path: "dinner", element: <Dinner/>},
      {  path: "ball", element: <Ball/>},
      {  path: "summerBabies", element: <SummerBabies/>}, // Assuming this is the correct path for the Ball component



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