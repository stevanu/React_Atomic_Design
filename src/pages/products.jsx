import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";

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

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLougout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const HandleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-red-600 ml-5 w-20 mb-3.5" onClick={handleLougout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-3/4">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
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
        <div className="w-2/6">
          <h1 className="text-2xl font-bold text-blue-600 ml-5 mb-3">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-6">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
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
