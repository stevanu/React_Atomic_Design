import { Fragment, useState } from "react";
// Fragment digunakan supaya bisa return beberapa element tanpa div tambahan
// useState digunakan untuk membuat state (data yang bisa berubah)

import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";

// Data produk (simulasi database produk)
const products = [
  {
    id: 1, // id unik produk
    name: "Laptop MSI", // nama produk
    price: 14000000, // harga produk
    image: "/images/laptop-2.jpg", // gambar produk
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum dolor!`, // deskripsi produk
  },
  {
    id: 2,
    name: "Laptop ROG",
    price: 9000000,
    image: "/images/laptop-2.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum dolor sit `,
  },
  {
    id: 3,
    name: "Laptop MAC",
    price: 12000000,
    image: "/images/laptop-2.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum!`,
  },
];

// mengambil email user dari localStorage
const email = localStorage.getItem("email");

const ProductsPage = () => {
  // state cart untuk menyimpan item yang dimasukkan ke keranjang
  const [cart, setCart] = useState([
    {
      id: 1, // id produk
      qty: 1, // jumlah produk
    },
  ]);

  // fungsi logout
  const handleLougout = () => {
    localStorage.removeItem("email"); // hapus email dari localStorage
    localStorage.removeItem("password"); // hapus password dari localStorage
    window.location.href = "/login"; // redirect ke halaman login
  };

  // fungsi untuk menambahkan produk ke cart
  const HandleAddToCart = (id) => {
    // cek apakah produk sudah ada di cart
    if (cart.find((item) => item.id === id)) {
      // jika sudah ada maka tambah quantity
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      // jika belum ada maka tambahkan item baru ke cart
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      {/* Header navbar */}
      <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
        {email} {/* menampilkan email user yang login */}
        <Button classname="bg-red-600 ml-5 w-20 mb-3.5" onClick={handleLougout}>
          Logout
        </Button>
      </div>

      {/* Container utama */}
      <div className="flex justify-center py-5">
        {/* Section daftar produk */}
        <div className="flex flex-wrap w-3/4">
          {/* looping data produk */}
          {products.map((product) => (
            <CardProduct key={product.id}>
              {/* header card berisi gambar */}
              <CardProduct.Header image={product.image} />

              {/* body card berisi nama dan deskripsi */}
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>

              {/* footer card berisi harga dan tombol add to cart */}
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={HandleAddToCart}
              />
            </CardProduct>
          ))}
        </div>

        {/* Section Cart */}
        <div className="w-2/6">
          <h1 className="text-2xl font-bold text-blue-600 ml-5 mb-3">Cart</h1>

          {/* tabel keranjang belanja */}
          <table className="text-left table-auto border-separate border-spacing-x-6">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            {/* menampilkan isi cart */}
            {cart.map((item) => {
              // mencari data produk berdasarkan id yang ada di cart
              const product = products.find(
                (product) => product.id === item.id,
              );

              return (
                <tr key={item.id}>
                  {/* nama produk */}
                  <td>{product.name}</td>

                  {/* harga produk */}
                  <td>
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>

                  {/* jumlah produk */}
                  <td>{item.qty}</td>

                  {/* total harga (price * qty) */}
                  <td>
                    Rp{" "}
                    {(product.price * item.qty).toLocaleString(
                      ("id-ID",
                      {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }),
                    )}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
