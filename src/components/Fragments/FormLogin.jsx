import { login } from "../../services/auth.service";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";
import { useEffect, useRef, useState } from "react";

// Komponen FormLogin
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const userNameRef = useRef(null);
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  return (
    // Form login dengan event onSubmit
    <form onSubmit={handleLogin}>
      <InputForm
        label="username"
        type="text"
        placeholder="John Doe"
        name="username"
        required
        ref={userNameRef}
      />

      {/* Input untuk password */}
      <InputForm
        label="password"
        type="password"
        placeholder="Password"
        name="password"
        required
      />
      {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}

      {/* Tombol login */}
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
