import { login } from "../../services/auth.service";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";
import { useEffect, useRef, useState } from "react";

// Komponen FormLogin
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        // Simpan token dan username langsung
        localStorage.setItem("token", res);
        localStorage.setItem("username", data.username);
        window.location.href = "/products";
      } else {
        setLoginFailed("Login gagal! Periksa username & password.");
        console.log(res);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="username"
        type="text"
        placeholder="John Doe"
        name="username"
        required
        ref={userNameRef}
      />

      <InputForm
        label="password"
        type="password"
        placeholder="Password"
        name="password"
        required
      />

      {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
