import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AddItem from './components/AddItem.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
import AllItems from './components/AllItems.jsx';
import ViewDetails from './components/ViewDetails.jsx';
import MyList from './components/MyList.jsx';
import Error from './components/Error.jsx';
import Update from './components/Update.jsx';
import AboutUs from './components/AboutUs.jsx';
import SubCategoryItems from './components/SubCategoryItems.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
       path: "/add",
       element: <PrivateRoute><AddItem></AddItem></PrivateRoute>,
      },
      {
       path: "/subcategory/:sub",
       element: <SubCategoryItems></SubCategoryItems>,
       loader: () => fetch(' https://art-and-craft-store-server-a10.vercel.app/item'),
      },
      {
        path: "/all",
        element: <AllItems></AllItems>,
        loader: () => fetch(' https://art-and-craft-store-server-a10.vercel.app/item'),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(` https://art-and-craft-store-server-a10.vercel.app/item/${params.id}`),
      },
      {
        path: "/updateDetails/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(` https://art-and-craft-store-server-a10.vercel.app/item/${params.id}`),
      },
      {
        path: "/update",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch(' https://art-and-craft-store-server-a10.vercel.app/item'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
