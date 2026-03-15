import Button from "../Elements/Button/Index";
// Mengimpor komponen Button yang akan digunakan untuk tombol login

import InputForm from "../Elements/Input/Index";
// Mengimpor komponen InputForm yang digunakan untuk membuat input email dan password

// Komponen FormLogin
const FormLogin = () => {
  // Fungsi yang dijalankan saat form disubmit
  const handleLogin = (event) => {
    event.preventDefault();
    // Mencegah browser melakukan reload halaman ketika form disubmit

    // Menyimpan email yang diinput user ke localStorage
    localStorage.setItem("email", event.target.email.value);

    // Menyimpan password yang diinput user ke localStorage
    localStorage.setItem("password", event.target.password.value);

    // Mengarahkan user ke halaman products setelah login
    window.location.href = "/products";
  };

  return (
    // Form login dengan event onSubmit
    <form onSubmit={handleLogin}>
      {/* Input untuk email */}
      <InputForm
        label="Email" // label yang ditampilkan
        type="email" // tipe input email
        placeholder="Example@gmail.com" // teks placeholder
        name="email" // name digunakan untuk mengambil value dari form
        required // input wajib diisi
      />

      {/* Input untuk password */}
      <InputForm
        label="password" // label password
        type="password" // tipe input password agar teks disembunyikan
        placeholder="Password" // placeholder
        name="password" // name digunakan untuk mengambil value dari form
        required // wajib diisi
      />

      {/* Tombol login */}
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
// Mengekspor komponen agar bisa digunakan di halaman lain
