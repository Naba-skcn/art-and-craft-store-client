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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
       path: "/add",
       element: <PrivateRoute><AddItem></AddItem></PrivateRoute>,
      },
      {
        path: "/all",
        element: <AllItems></AllItems>,
        loader: () => fetch('http://localhost:5000/item'),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/item'),
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
