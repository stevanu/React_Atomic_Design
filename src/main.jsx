import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";

// Membuat konfigurasi router
const router = createBrowserRouter([
  {
    path: "/", // root path default aplikasi

    errorElement: <ErrorPage />,
    // jika route tidak ditemukan atau terjadi error maka halaman ini yang ditampilkan

    children: [
      {
        path: "/login", // route halaman login
        element: <LoginPage />, // komponen yang ditampilkan saat mengakses /login
      },
      {
        path: "/register", // route halaman register
        element: <RegisterPage />, // komponen halaman register
      },
      {
        path: "/products", // route halaman produk
        element: <ProductsPage />, // komponen halaman produk
      },
    ],
  },
]);

// Merender aplikasi React ke dalam element HTML dengan id="root"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* RouterProvider menjalankan sistem routing yang sudah dibuat */}
    <RouterProvider router={router} />
  </StrictMode>,
);
