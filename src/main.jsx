import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";

// Membuat konfigurasi router
const router = createBrowserRouter([
  {
    path: "/", // root path default aplikasi

    // jika route tidak ditemukan atau terjadi error maka halaman ini yang ditampilkan
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/login", // route halaman login
        element: <LoginPage />,
      },
      {
        path: "/register", // route halaman register
        element: <RegisterPage />,
      },
      {
        path: "/products", // route halaman produk
        element: <ProductsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
