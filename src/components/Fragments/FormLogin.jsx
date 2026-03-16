import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";
import { useEffect, useRef } from "react";

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

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    // Form login dengan event onSubmit
    <form onSubmit={handleLogin}>
      {/* Input untuk email */}
      <InputForm
        label="Email"
        type="email"
        placeholder="Example@gmail.com"
        name="email"
        required
        ref={emailRef}
      />

      {/* Input untuk password */}
      <InputForm
        label="password"
        type="password"
        placeholder="Password"
        name="password"
        required
      />

      {/* Tombol login */}
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
