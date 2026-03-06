import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Laptop baru",
    price: "Rp 14.000.000",
    image: "/images/laptop-1.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. Sapiente unde deleniti exercitationem!`,
  },
  {
    id: 1,
    name: "Laptop baru",
    price: "Rp 14.000.000",
    image: "/images/laptop-1.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. Sapiente unde deleniti exercitationem!`,
  },
  {
    id: 1,
    name: "Laptop baru",
    price: "Rp 14.000.000",
    image: "/images/laptop-1.jpg",
    description: `lorem200 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sapiente unde deleniti exercitationem! Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. Sapiente unde deleniti exercitationem!`,
  },
];

const ProductsPage = () => {
  return (
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
  );
};

export default ProductsPage;
