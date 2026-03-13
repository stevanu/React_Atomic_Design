import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Laptop baru",
    price: "Rp 14.000.000",
    image: "/images/laptop-1.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum dolor!`,
  },
  {
    id: 2,
    name: "Laptop baru",
    price: "Rp 9.000.000",
    image: "/images/laptop-1.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum dolor sit `,
  },
  {
    id: 3,
    name: "Laptop baru",
    price: "Rp 12.000.000",
    image: "/images/laptop-1.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum!`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLougout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      <div className="flex justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
