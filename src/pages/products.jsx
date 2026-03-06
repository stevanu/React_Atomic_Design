import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5 gap-5">
      <div>
        <CardProduct>
          <CardProduct.Header image="/images/laptop-1.jpg" />
          <CardProduct.Body title="Laptop">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            unde deleniti exercitationem!
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 14.000.000" />
        </CardProduct>
      </div>
      <div>
        <CardProduct>
          <CardProduct.Header image="/images/laptop-1.jpg" />
          <CardProduct.Body title="Laptop">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            unde deleniti exercitationem!
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 14.000.000" />
        </CardProduct>
      </div>
    </div>
  );
};

export default ProductsPage;
