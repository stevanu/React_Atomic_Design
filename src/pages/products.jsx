import { Fragment, useState, useEffect, useRef } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";
import Counter from "../components/Fragments/counter";
import { getProducts } from "../services/products.service";

// mengambil email user dari localStorage
const email = localStorage.getItem("email");

const ProductsPage = () => {
  // state cart untuk menyimpan item yang dimasukkan ke keranjang
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
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

  // UseReff

  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const HandleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id: id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

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
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id,
                  );

                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 15)}...</td>

                      <td>
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>

                      <td className="text-center">{item.qty}</td>

                      <td>
                        {(product.price * item.qty).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("ed-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
