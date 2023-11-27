import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Register from './routes/Register';
import Product from './routes/Product';
import Cart from './routes/Cart';
import Categories from './routes/Categories';

import AuthRoute from './routes/AuthRoute';

import './styles/App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/about",
      element: <About />
    },

    {
      path: "/contact",
      element: <Contact />
    },

    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/register",
      element: <Register />
    },

    {
      path: "/product/:productId",
      element: <Product />
    },
    
    // RUTA AUTENTICADA
    {
      path: '/cart',
      element: (
        <AuthRoute>
          <Route path="/cart" element={<Cart />} />
        </AuthRoute>
      )
    },

    {
      path: '/categories',
      element: (
        <AuthRoute>
          <Categories />
        </AuthRoute>
        ),
    }

  ])

  return (
    <>
      <div className="navbar-in">
        <Navbar />
      </div>
      <RouterProvider router={router} />
      <div className="footer-in">
        <Footer />
      </div>
    </>
  );
}

export default App;
