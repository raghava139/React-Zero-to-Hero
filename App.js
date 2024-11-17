import React, { createElement, lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import RestroMenu from "./src/components/RestroMenu";
import UserTestContext from "./src/components/Utils/UserTestContext";
import appStore from "./src/components/Utils/Redux RTK/AppStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";
// import Grocery from "./src/components/Grocery";
// React CreateElement => Object => Html ELement(render)
// Jsx => React createElement => object => html Element(render)
//the Babel Transpiler Converts the code Jsx to React.createElement 
// the babel is coming from Parcel

const AppLayout = () => {

  const [contextState, setContextState] = useState('Developer-Test')
  return (
    <Provider store={appStore}>
      <UserTestContext.Provider value={{ DefaultUserInfo: contextState, setContextState }}>
        <div className="App">
          <Header />
          {/* <Body /> */}
          <Outlet />
        </div>
      </UserTestContext.Provider>
    </Provider>
  )
}

const Grocery = lazy(() => import('./src/components/Grocery'))

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
    }, {
      path: '/grocery',
      element: <Suspense fallback={<h1>loading.........</h1>}><Grocery /></Suspense>
    },{
      path:"/cart",
      element:<Cart/>
    }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={APPRoutes} />);