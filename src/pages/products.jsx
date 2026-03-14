import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";

const products = [
  {
    id: 1,
    name: "Laptop baru",
    price: 1400000,
    image: "/images/laptop-2.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente unde deleniti exercitationem!`,
  },
  {
    id: 2,
    name: "Laptop baru",
    price: 900000,
    image: "/images/laptop-2.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente unde deleniti exercitationem!`,
  },
  {
    id: 3,
    name: "Laptop baru",
    price: 1200000,
    image: "/images/laptop-2.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente unde deleniti exercitationem!`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    // cek apakah sudah ada di cart
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      {/* Header */}
      <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-red-600 ml-5 w-20 mb-3.5" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Main content */}
      <div className="flex justify-center py-5 gap-5">
        {/* Product Grid */}
        <div className="flex flex-wrap w-3/4 gap-4 justify-center">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>

        {/* Cart Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-md shadow">
          <h1 className="text-2xl font-bold text-blue-600 mb-3">Cart</h1>
          <ul>
            {cart.length === 0 && (
              <li className="text-gray-500">Cart kosong</li>
            )}
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.id);
              return (
                <li key={item.id} className="flex justify-between mb-2">
                  <span>{product.name}</span>
                  <span>x{item.qty}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
