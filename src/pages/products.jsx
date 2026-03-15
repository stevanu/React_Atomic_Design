import { Fragment, useState, useEffect } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";
import Counter from "../components/Fragments/counter";

// Data produk (simulasi database produk)
const products = [
  {
    id: 1,
    name: "Laptop MSI",
    price: 14000000,
    image: "/images/laptop-2.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum dolor!`,
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
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
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

            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id,
                );

                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>

                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </td>

                    <td>{item.qty}</td>

                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
