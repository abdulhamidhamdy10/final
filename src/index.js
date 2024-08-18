
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from "./App";
import Products from "./Api/Products";
import Cart from "./Api/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
  },
  {
    path: "product",
    element:  <Products/>,
  },
  {
    path: "cart",
    element:  <Cart/>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
