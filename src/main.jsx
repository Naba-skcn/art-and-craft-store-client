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
import CraftItemSection from './components/CraftItemSection.jsx';
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
       path: "/sub",
       element: <SubCategoryItems></SubCategoryItems>
      },
      {
        path: "/all",
        element: <AllItems></AllItems>,
        loader: () => fetch('http://localhost:5000/item'),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "/updateDetails/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "/update",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/item'),
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
