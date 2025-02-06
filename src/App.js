import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from "./components/Header";
import Body from './components/Body';
import Error from './components/Error';
import { Provider } from 'react-redux';

import About from './components/About';
import Cart from "./components/Cart"
import Contact from './components/Contact';
import RestrauntsMenu from './components/RestrauntsMenu';
import appStore from './utils/appStore';

 
const AppLayout = () => {
    return(
        <Provider store = {appStore}>
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    )
}

const routerApp = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restraunts/:resId",
                element: <RestrauntsMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp} />);
