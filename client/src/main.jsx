import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from './context/AuthContext.jsx';
import CartProvider from './context/CartContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);
