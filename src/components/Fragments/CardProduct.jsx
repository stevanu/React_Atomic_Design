import Button from "../Elements/Button/Index";

// Komponen utama CardProduct
const CardProduct = (props) => {
  // children berisi komponen yang dimasukkan di dalam CardProduct
  const { children } = props;

  return (
    // Container utama card
    <div className="w-70 max-w-xs bg-gray-800 border-gray-700 rounded-lg shadow mx-2.5 flex flex-col my-2 justify-between">
      {children}
      {/* children akan berisi Header, Body, dan Footer */}
    </div>
  );
};

// Komponen Header Card
const Header = (props) => {
  // mengambil properti image yang dikirim dari parent
  const { image } = props;

  return (
    <a href="#">
      {/* menampilkan gambar produk */}
      <img
        src={image}
        alt="products"
        className="p-4 rounded-t-lg h-70 w-full object-cover"
      />
    </a>
  );
};

// Komponen Body Card
const Body = (props) => {
  // children = deskripsi produk
  // name = nama produk
  const { children, name } = props;

  return (
    <div className="px-3 pb-3 h-full">
      <a href="#">
        {/* menampilkan nama produk */}
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>

        {/* menampilkan deskripsi produk */}
        <p className="text-sm text-white mt-5">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

// Komponen Footer Card
const Footer = (props) => {
  // mengambil props dari parent
  const { price, handleAddToCart, id } = props;

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      {/* menampilkan harga produk */}
      <span className="text-xl font-bold text-white mt-3">
        {/* format harga ke Rupiah */}
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>

      {/* tombol untuk menambahkan produk ke cart */}
      <Button
        classname="bg-blue-600 shadow px-5 py-2 hover:bg-blue-700 "
        onClick={() => handleAddToCart(id)}
      >
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

// export komponen agar bisa digunakan di file lain
export default CardProduct;
