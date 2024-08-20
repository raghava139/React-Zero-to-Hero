import React, { createElement } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import RestroMenu from "./src/components/RestroMenu";
// React CreateElement => Object => Html ELement(render)
// Jsx => React createElement => object => html Element(render)
//the Babel Transpiler Converts the code Jsx to React.createElement 
// the babel is coming from Parcel

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  )
}

const APPRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/',
      element: <Body />
    }, {
      path: '/about',
      element: <About />
    }, {
      path: '/contact',
      element: <Contact />
    }
     , {
      path: '/restro/:ResId',
      element: <RestroMenu />
    }]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={APPRoutes} />);