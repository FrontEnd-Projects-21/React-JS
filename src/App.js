import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import ResturentMenu from "./Components/ResturentMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./Components/Cart.js";
const Grocery = lazy(() => import("./Components/Grocery.js"));

// import Grocery from "./Components/Grocery.js";

// const styleCard = {
//   backgroundColor: "#feddc1",
// };

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = { name: "Chouda Reddy" };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturent/:resId",
        element: <ResturentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
